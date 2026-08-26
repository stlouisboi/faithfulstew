import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check, FileText, Printer, PenLine, Gift } from 'lucide-react'
import Seo from '../components/Seo'
import EmailCapture from '../components/EmailCapture'
import Faq from '../components/Faq'
import { faqsByTag } from '../data/faq'
import { WORKBOOK, EASE } from '../lib/site'

const VALUE_STACK = [
  { Icon: FileText, label: '30 chapter-aligned tools' },
  { Icon: Printer, label: 'Printable 8.5 x 11 workbook (PDF)' },
  { Icon: PenLine, label: 'Fillable version for founding readers' },
  { Icon: Gift, label: 'First Faithful Offer bonus' },
]

// Each tool produces something usable: a decision, a number, a boundary,
// a plan, an audit, a conversation, or an operating standard.
const OUTPUTS = [
  'Venture Discernment Brief',
  'Personal Motive Risk Map',
  'True Cost Sheet',
  'High-Stakes Decision Record',
  'Business Foundation Covenant',
  'Financial Stewardship Map',
  'Family Cost and Care Review',
  'Calendar Truth Audit',
  'Truth Around Me Map',
  'Faithful Scoreboard',
  'Succession Readiness Map',
  'Season Discernment Map',
]

const RECEIVE = [
  'The printable 8.5 x 11 workbook (PDF)',
  'The fillable version when it is released',
  'The First Faithful Offer bonus',
  'Early access before public launch',
]

export default function Workbook() {
  const live = Boolean(WORKBOOK.paymentLink)

  return (
    <>
      <Seo
        title="The Workbook"
        path="/workbook"
        description={`${WORKBOOK.title}: the implementation companion to Kingdom Before Company. ${WORKBOOK.price}.`}
        image="/og-workbook.jpg"
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[17/22] max-w-sm mx-auto overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
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
            <p className="mt-5 font-display italic text-2xl md:text-3xl text-ink leading-[1.3]">
              Turn conviction into the way you actually build and lead.
            </p>

            <p className="mt-6 text-ink font-semibold leading-[1.7]">
              The book teaches and starts the work. The workbook finishes and
              operationalizes it.
            </p>

            <p className="mt-4 text-ink-secondary leading-[1.8]">
              It turns each chapter into practical tools for the decisions a solo
              owner actually faces: whether to take a client, what to charge,
              whether an opportunity is worth it, how to test demand, how to count
              the true cost, how to protect family and health, whether to
              subcontract or hire, and whether to grow, maintain, pivot, sell, or
              release. Later tools cover employees, leadership, and succession, so
              it keeps working as your business grows.
            </p>

            <p className="mt-6 text-sm tracking-wide text-ink font-medium">
              {WORKBOOK.price} one-time <span className="text-ink-tertiary">&middot;</span> 8.5 x 11 printable PDF{' '}
              <span className="text-ink-tertiary">&middot;</span> Fillable version for founding readers
            </p>

            <div className="mt-8">
              {live ? (
                <a
                  href={WORKBOOK.paymentLink}
                  className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base font-semibold tracking-wide hover:bg-ink/90 transition-colors duration-300"
                  data-testid="workbook-buy"
                >
                  Buy the Workbook &middot; {WORKBOOK.price}
                </a>
              ) : (
                <a
                  href="#founding"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base font-semibold tracking-wide hover:bg-ink/90 transition-colors duration-300"
                  data-testid="workbook-cta-founding"
                >
                  Join the Founding Reader List
                </a>
              )}
            </div>

            {/* Value stack */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUE_STACK.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-border-light bg-cream-dark px-5 py-4"
                  data-testid={`workbook-value-${label.toLowerCase().replace(/\s+/g, '-').slice(0, 20)}`}
                >
                  <Icon size={20} className="text-gold shrink-0" />
                  <span className="text-sm text-ink font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tangible outputs */}
      <section className="bg-cream-dark border-t border-b border-border-light px-6 py-24 md:py-32" data-testid="workbook-outputs">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">What you will create</p>
            <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink leading-[1.15]">
              You finish with tools you can actually use
            </h2>
            <p className="mt-5 text-ink-secondary leading-[1.75]">
              These are not journal prompts. Every tool produces something real:
              a decision, a number, a boundary, a plan, an audit, a conversation,
              or an operating standard you can return to.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {OUTPUTS.map((name) => (
              <div key={name} className="flex items-start gap-3 border-t border-border-light pt-4">
                <Check size={18} className="mt-1 text-gold shrink-0" />
                <span className="text-ink font-medium leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <Faq items={faqsByTag('workbook')} title="Before you buy" />
      </section>

      {/* Founding Reader Edition */}
      <section
        id="founding"
        className="bg-cream-dark border-t border-border-light px-6 py-24 md:py-32 scroll-mt-24"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">Founding Reader Edition</p>
            <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
              Get the Founding Reader Edition
            </h2>
            <p className="mt-4 text-ink-secondary leading-[1.7]">
              Join the launch list for early access to the printable workbook, the
              fillable version when released, and the First Faithful Offer bonus.
            </p>
          </div>

          <ul className="mt-10 space-y-4 max-w-md mx-auto">
            {RECEIVE.map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink-secondary leading-[1.6]">
                <Check size={18} className="mt-1 text-gold shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <EmailCapture
              buttonLabel="Reserve My Founding Reader Edition"
              source="workbook-founding"
              note="No spam. Just launch details and practical resources for faithful business stewardship."
            />
          </div>

          <p className="mt-8 text-center text-ink font-medium leading-[1.6]">
            No prosperity formula. No generic journal prompts.
            <br className="hidden sm:block" /> Just practical tools for real business decisions.
          </p>

          <p className="mt-6 text-center text-xs text-ink-tertiary max-w-lg mx-auto">
            Personal-use license only. Digital products are non-refundable once delivered.
            See our <Link to="/terms" className="underline text-gold">Terms &amp; License</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
