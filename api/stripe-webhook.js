// Vercel serverless function: Stripe webhook -> deliver the workbook via Resend.
// Fires when a Payment Link checkout completes. Verifies the Stripe signature,
// then emails the buyer a download link for the workbook PDF.
//
// Required Vercel env vars:
//   STRIPE_SECRET_KEY          your Stripe secret key
//   STRIPE_WEBHOOK_SECRET      signing secret from the Stripe webhook endpoint
//   RESEND_API_KEY             your Resend API key
//   SENDER_EMAIL               verified from-address (e.g. hello@thefaithfulsteward.com)
//   WORKBOOK_DOWNLOAD_URL      link to the fillable workbook PDF (signed/expiring ideally)

import Stripe from 'stripe'
import { Resend } from 'resend'

// Stripe requires the raw request body to verify the signature.
export const config = { api: { bodyParser: false } }

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const sig = req.headers['stripe-signature']

  let event
  try {
    const raw = await readRawBody(req)
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret)
  } catch (err) {
    console.error('Stripe signature verification failed', err.message)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const email = session.customer_details?.email || session.customer_email
    const name = session.customer_details?.name || 'friend'
    const downloadUrl = process.env.WORKBOOK_DOWNLOAD_URL

    if (email && process.env.RESEND_API_KEY && downloadUrl) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
          to: [email],
          subject: 'Your Faithful Steward Workbook is ready',
          html: `
            <div style="font-family: Georgia, serif; color: #1B222C; max-width: 560px; margin: 0 auto;">
              <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#D4AF37;">The Faithful Steward</p>
              <h1 style="font-size:24px;margin:8px 0 16px;">Thank you, ${escapeHtml(name)}.</h1>
              <p style="line-height:1.7;">Your purchase of <strong>The Faithful Steward Workbook</strong> is complete. You can download it using the button below.</p>
              <p style="margin:28px 0;">
                <a href="${downloadUrl}" style="background:#1B222C;color:#FDFCFB;text-decoration:none;padding:14px 28px;display:inline-block;">Download the Workbook</a>
              </p>
              <p style="line-height:1.7;font-size:14px;color:#4A5568;">This download is licensed for your personal use. Build diligently, steward faithfully, and hold the results loosely.</p>
            </div>
          `,
        })
      } catch (err) {
        console.error('Resend delivery failed', err)
        // Do not fail the webhook — Stripe will retry only on non-2xx.
      }
    } else {
      console.warn('Delivery skipped: missing email, RESEND_API_KEY, or WORKBOOK_DOWNLOAD_URL')
    }
  }

  return res.status(200).json({ received: true })
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]))
}
