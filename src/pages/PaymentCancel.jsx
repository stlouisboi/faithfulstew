import { Link } from 'react-router-dom'
import { XCircle } from 'lucide-react'
import Seo from '../components/Seo'

export default function PaymentCancel() {
  return (
    <>
      <Seo title="Order Cancelled" path="/payment/cancel" />
      <section className="bg-cream px-6 pt-40 md:pt-52 pb-32 min-h-screen">
        <div className="max-w-xl mx-auto text-center">
          <XCircle size={48} className="text-ink-tertiary mx-auto" />
          <h1 className="mt-6 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink">
            Your order was cancelled
          </h1>
          <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">
            No charge was made. Whenever you&rsquo;re ready, the workbook will be
            here waiting for you.
          </p>
          <Link
            to="/workbook"
            className="mt-10 inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm tracking-wide hover:bg-ink/90 transition-colors"
            data-testid="payment-cancel-retry"
          >
            Back to the Workbook
          </Link>
        </div>
      </section>
    </>
  )
}
