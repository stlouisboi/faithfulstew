import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Faq from '../components/Faq'
import { FAQS } from '../data/faq'

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Seo
        title="FAQ"
        path="/faq"
        description="Answers to common questions about Kingdom Before Company, the workbook, and the Decision Test."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">FAQ</p>
          <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
            Questions &amp; answers
          </h1>
          <p className="mt-6 text-lg text-ink-secondary leading-[1.7]">
            Honest answers before you commit&mdash;no hype, no promises we can&rsquo;t keep.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 pb-20">
        <Faq eyebrow={null} title={null} />
      </section>

      <section className="bg-cream-dark border-t border-border-light px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] text-2xl md:text-3xl text-ink">
            Still have a question?
          </h2>
          <p className="mt-4 text-ink-secondary leading-[1.7]">
            We&rsquo;re glad to help. Reach out and we&rsquo;ll get back to you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm tracking-wide hover:bg-ink/90 transition-colors"
            data-testid="faq-contact-cta"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
