import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Faq from '../components/Faq'
import { faqsByTag } from '../data/faq'
import { BOOK, EASE } from '../lib/site'

const FOR_YOU = [
  'You are a Christian entrepreneur, freelancer, consultant, tradesperson, or owner-operator building a real business.',
  'You are carrying much of the selling, serving, decision-making, and financial responsibility yourself.',
  'You want growth, but you do not want the business to take authority over your faith, family, integrity, health, or identity.',
  'You feel the tension between ambition and obedience.',
  'You want practical wisdom, not prosperity-gospel promises.',
]

const NOT_FOR_YOU = [
  'You want a guaranteed formula for wealth or rapid growth.',
  'You believe faith is a business strategy for success.',
  'You are looking for hustle culture with a spiritual veneer.',
]

const BULLETS = [
  'Discern calling from ambition, fear, comparison, and pressure',
  'Count the cost before you build, and act faithfully without being reckless',
  'Price, sell, market, and pursue growth without manipulation or compromise',
  'Treat profit as a tool without allowing money to become your master',
  'Protect faith, family, integrity, and rest while carrying business responsibility',
]

function BuyButton({ href, primary, children, testid }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base tracking-wide transition-colors duration-300 w-full sm:w-auto'
  if (!href) {
    return (
      <span
        className={`${base} ${primary ? 'bg-ink/40 text-cream/70' : 'border border-border-light text-ink-tertiary'} cursor-not-allowed`}
        data-testid={testid}
      >
        {children} &middot; Coming Soon
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${primary ? 'bg-ink text-cream hover:bg-ink/90' : 'border border-ink text-ink hover:bg-ink hover:text-cream'}`}
      data-testid={testid}
    >
      {children}
    </a>
  )
}

export default function Book() {
  return (
    <>
      <Seo
        title="The Book"
        path="/book"
        description={`${BOOK.title}: ${BOOK.subtitle}`}
        image={BOOK.cover}
      />

      <section className="bg-navy text-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[2/3] max-w-sm mx-auto border border-border-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={BOOK.cover} alt={`${BOOK.title} book cover`} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">The Book</p>
            <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {BOOK.title}
            </h1>
            <p className="mt-4 italic text-lg md:text-xl text-[#E2E8F0] leading-[1.6]">{BOOK.subtitle}</p>

            <p className="mt-8 font-display italic text-xl md:text-2xl text-gold leading-[1.4]">
              &ldquo;{BOOK.backCoverHeadline}&rdquo;
            </p>

            <div className="mt-6 space-y-4 text-[#E2E8F0]/90 leading-[1.75]">
              <p>
                {BOOK.title} is a biblical and practical guide for Christians who
                want to build, lead, and steward a business without allowing it
                to become their master.
              </p>
              <p>
                This is not a promise that prayer, generosity, or obedience will
                guarantee wealth, contracts, or growth. God is not a business
                strategy, and success is not a reliable measure of His approval.
              </p>
              <p>
                Instead, this book helps you put business under God&rsquo;s
                authority. It walks through the decisions that shape a solo
                owner: motives, money, clients, pricing, risk, selling, time,
                family, health, growth, opportunity, leadership, and knowing
                when enough is enough.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <BuyButton href={BOOK.paperbackUrl} primary testid="book-buy-paperback">
                Paperback &middot; {BOOK.paperbackPrice}
              </BuyButton>
              <BuyButton href={BOOK.kindleUrl} testid="book-buy-kindle">
                Kindle &middot; {BOOK.kindlePrice}
              </BuyButton>
            </div>
            <p className="mt-4 text-xs text-cream/50">Available on Amazon. Buy links go live at launch.</p>
          </motion.div>
        </div>
      </section>

      {/* Inside the book */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">What you&rsquo;ll learn</p>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
            Wisdom for the decisions that actually shape you
          </h2>
          <ul className="mt-10 space-y-5">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check size={20} className="mt-1 text-gold shrink-0" />
                <span className="text-ink-secondary leading-[1.75] text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="bg-cream-dark border-t border-b border-border-light px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-ink">Who it&rsquo;s for</h3>
            <ul className="mt-6 space-y-4">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-secondary leading-[1.7]">
                  <Check size={18} className="mt-1 text-gold shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-tertiary leading-[1.7] italic">
              If you already have a small team, the principles still apply as
              your responsibility grows.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-ink">Who it&rsquo;s not for</h3>
            <ul className="mt-6 space-y-4">
              {NOT_FOR_YOU.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-tertiary leading-[1.7]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-tertiary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <Faq items={faqsByTag('book')} title="Before you buy" />
      </section>

      {/* Companion CTA */}
      <section className="bg-cream px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
            Read the book. Then do the work.
          </h2>
          <p className="mt-6 text-lg text-ink-secondary max-w-2xl mx-auto leading-[1.7]">
            The companion workbook turns each chapter into practical tools for
            discernment, cost, sales, money, leadership, family, rest, and
            growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/workbook"
              className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
              data-testid="book-to-workbook"
            >
              Explore the Workbook
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/decision-test"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-ink-secondary hover:text-ink transition-colors"
              data-testid="book-to-test"
            >
              Take the Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
