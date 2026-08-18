import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import Seo from '../components/Seo'
import { SITE } from '../lib/site'

export default function PaymentSuccess() {
  return (
    <>
      <Seo title="Thank You" path="/payment/success" />
      <section className="bg-cream px-6 pt-40 md:pt-52 pb-32 min-h-screen">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle size={48} className="text-gold mx-auto" />
          <h1 className="mt-6 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink">
            Thank you for your order
          </h1>
          <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">
            Your payment was successful. A confirmation and your workbook download
            link are on the way to your email inbox. If it doesn&rsquo;t arrive
            within a few minutes, check your spam folder or email us at{' '}
            <a href={`mailto:${SITE.contactEmail}`} className="text-gold underline">
              {SITE.contactEmail}
            </a>.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm tracking-wide hover:bg-ink/90 transition-colors"
            data-testid="payment-success-home"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
