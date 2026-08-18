import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <section className="bg-cream px-6 pt-40 md:pt-52 pb-32 min-h-screen">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-display font-bold text-6xl text-gold">404</p>
          <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
            This page wandered off
          </h1>
          <p className="mt-6 text-lg text-ink-secondary">
            The page you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm tracking-wide hover:bg-ink/90 transition-colors"
            data-testid="notfound-home"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
