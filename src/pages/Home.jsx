import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Framework from '../components/Framework'
import { EASE, BOOK } from '../lib/site'

function Tension() {
  return (
    <section className="bg-cream-dark border-t border-b border-border-light px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15]">
          A business can grow while its owner drifts.
        </h2>
        <div className="mt-10 space-y-6 text-lg md:text-xl leading-[1.75]">
          <p className="italic text-ink-secondary">
            Revenue can become identity. Opportunity can become temptation.
          </p>
          <p className="not-italic font-semibold text-ink">
            Growth can quietly demand more time, compromise, money, attention,
            and control than you ever intended to give.
          </p>
        </div>
        <div className="mt-16 pt-10 border-t-2 border-gold max-w-xl mx-auto">
          <p className="font-display italic text-xl md:text-2xl text-ink leading-[1.5]">
            &ldquo;The question is not only, &lsquo;Will this business
            work?&rsquo; It is also, &lsquo;What is this business forming in
            me?&rsquo;&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

function BookTeaser() {
  return (
    <section className="bg-navy text-cream px-6 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[2/3] max-w-sm mx-auto border border-border-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <img src={BOOK.cover} alt={`${BOOK.title} book cover`} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">The Flagship Message</p>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl leading-[1.1]">
            {BOOK.title}
          </h2>
          <p className="mt-4 italic text-lg md:text-xl text-[#E2E8F0] leading-[1.6]">{BOOK.subtitle}</p>
          <p className="mt-6 text-[#E2E8F0]/90 leading-[1.75]">
            A biblical and practical guide for Christians who want to build,
            lead, and steward a business without allowing it to become their
            master. Not a promise of wealth&mdash;a call to put business under
            God&rsquo;s authority.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-cream text-navy px-8 py-4 text-sm md:text-base tracking-wide hover:bg-cream/90 transition-colors duration-300"
              data-testid="home-explore-book"
            >
              Explore the Book
            </Link>
            <Link
              to="/workbook"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-cream hover:text-gold transition-colors group"
              data-testid="home-explore-workbook"
            >
              See the Workbook
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-cream px-6 py-28 md:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.15] text-3xl md:text-5xl lg:text-6xl text-ink">
          Build diligently. Steward faithfully. Hold the results loosely.
        </h2>
        <div className="mt-12">
          <Link
            to="/decision-test"
            className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
            data-testid="home-final-cta"
          >
            Take the Free Decision Test
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <Tension />
      <Framework />
      <BookTeaser />
      <FinalCta />
    </>
  )
}
