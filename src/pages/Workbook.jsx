import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import EmailCapture from '../components/EmailCapture'
import Faq from '../components/Faq'
import { faqsByTag } from '../data/faq'
import { WORKBOOK, EASE } from '../lib/site'

const INCLUDES = [
  'Thirty chapter-aligned tools for real decisions',
  'Discernment, cost-counting, and calling worksheets',
  'Sales, pricing, and money frameworks without manipulation',
  'Leadership, family, rest, and growth practices',
  'Succession and release exercises for holding loosely',
  'Personal-use license \u2014 print and reuse for yourself',
]

export default function Workbook() {
  const live = Boolean(WORKBOOK.paymentLink)

  return (
    <>
      <Seo
        title="The Workbook"
        path="/workbook"
        description={`${WORKBOOK.title} \u2014 ${WORKBOOK.subtitle}. ${WORKBOOK.price}.`}
        image={WORKBOOK.cover}
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[2/3] max-w-sm mx-auto border border-border-light shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <img src={WORKBOOK.cover} alt={`${WORKBOOK.title} cover`} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">The Workbook</p>
            <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink leading-[1.1]">
              {WORKBOOK.title}
            </h1>
            <p className="mt-4 italic text-lg md:text-xl text-ink-secondary leading-[1.6]">
              {WORKBOOK.subtitle}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display font-bold text-4xl text-ink">{WORKBOOK.price}</span>
              <span className="text-sm text-ink-tertiary">one-time &middot; printable PDF</span>
            </div>

            <p className="mt-6 text-ink-secondary leading-[1.75]">
              An 82-page implementation companion to {`\u201C`}Kingdom Before
              Company.{`\u201D`} Practical tools for discernment, cost, sales,
              money, leadership, family, rest, growth, succession, and release.
              This is implementation&mdash;<strong className="text-ink">not a promise of business success.</strong>
            </p>

            <div className="mt-8">
              {live ? (
                <a
                  href={WORKBOOK.paymentLink}
                  className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
                  data-testid="workbook-buy"
                >
                  Buy the Workbook &middot; {WORKBOOK.price}
                </a>
              ) : (
                <div
                  className="inline-flex flex-col gap-1 border border-gold/50 bg-gold/10 px-6 py-4"
                  data-testid="workbook-coming-soon"
                >
                  <span className="font-semibold text-ink">Coming Soon</span>
                  <span className="text-sm text-ink-secondary">
                    The fillable buyer version is in beta. Join the launch list below to be first in line.
                  </span>
                </div>
              )}
            </div>

            <ul className="mt-10 space-y-4">
              {INCLUDES.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-secondary leading-[1.7]">
                  <Check size={18} className="mt-1 text-gold shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <Faq items={faqsByTag('workbook')} title="Before you buy" />
      </section>

      {/* First Faithful Offer / launch list */}
      <section className="bg-cream-dark border-t border-border-light px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">First Faithful Offer</p>
            <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
              Join the workbook launch list
            </h2>
            <p className="mt-4 text-ink-secondary leading-[1.7]">
              Be first to get the fillable workbook plus a launch bonus for
              early readers.
            </p>
          </div>
          <div className="mt-10">
            <EmailCapture buttonLabel="Join the Launch List" source="workbook" />
          </div>
          <p className="mt-8 text-center text-xs text-ink-tertiary max-w-lg mx-auto">
            Personal-use license only. Digital products are non-refundable once
            delivered. See our <Link to="/terms" className="underline text-gold">Terms &amp; License</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
