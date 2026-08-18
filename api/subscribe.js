// Vercel serverless function: subscribe a lead to MailerLite.
// Reads server-side env vars (never exposed to the browser).
//   MAILERLITE_API_KEY            required
//   MAILERLITE_GROUP_DEFAULT      optional — group all subscribers land in
//   MAILERLITE_GROUP_DECISIONTEST optional — group for Decision Test leads

const isValidEmail = (v) =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim().slice(0, 100) : ''
  const stage = typeof body.stage === 'string' ? body.stage.slice(0, 40) : ''
  const source = typeof body.source === 'string' ? body.source.slice(0, 40) : 'website'
  const resultTag = typeof body.resultTag === 'string' ? body.resultTag.slice(0, 40) : ''

  if (!isValidEmail(email)) return res.status(400).json({ error: 'A valid email is required.' })
  if (!firstName) return res.status(400).json({ error: 'First name is required.' })

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    console.error('MAILERLITE_API_KEY is not configured')
    return res.status(500).json({ error: 'Subscription is temporarily unavailable.' })
  }

  const groups = []
  if (process.env.MAILERLITE_GROUP_DEFAULT) groups.push(process.env.MAILERLITE_GROUP_DEFAULT)
  if (source === 'decision-test' && process.env.MAILERLITE_GROUP_DECISIONTEST) {
    groups.push(process.env.MAILERLITE_GROUP_DECISIONTEST)
  }

  const payload = {
    email,
    fields: {
      name: firstName,
      business_stage: stage || '',
      source,
      biggest_tension: resultTag || '',
    },
  }
  if (groups.length) payload.groups = groups

  try {
    const ml = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const data = await ml.json().catch(() => null)
    if (!ml.ok) {
      console.error('MailerLite error', { status: ml.status, details: data })
      const clientStatus = ml.status === 422 ? 400 : 502
      return res.status(clientStatus).json({
        error:
          clientStatus === 400
            ? 'Please check your details and try again.'
            : 'Subscription service is unavailable right now.',
      })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('MailerLite request failed', err)
    return res.status(502).json({ error: 'Subscription service is unavailable right now.' })
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
