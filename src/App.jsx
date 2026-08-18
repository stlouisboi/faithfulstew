import React, { useState } from 'react'
import { motion } from 'motion/react'
import {
  Menu,
  X,
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Link as LinkIcon,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

/* ------------------------------------------------------------------ */
/* Wordmark                                                           */
/* ------------------------------------------------------------------ */

function Wordmark({ invert = false, variant = 'horizontal' }) {
  const color = invert ? 'text-cream' : 'text-ink'
  const stacked = variant === 'stacked'

  return (
    <span
      className={[
        'inline-flex flex-col select-none',
        stacked ? 'items-center' : 'items-start',
        'text-[1.05rem] sm:text-[1.75rem] md:text-[2.25rem]',
        color,
      ].join(' ')}
    >
      <span
        className={[
          'font-sans font-medium tracking-[0.3em] opacity-90',
          stacked ? 'text-[0.35em]' : 'text-[0.3em]',
        ].join(' ')}
      >
        The
      </span>
      <span className="font-display font-bold uppercase tracking-[0.06em] sm:tracking-[0.15em] leading-none whitespace-nowrap">
        <span className="italic pr-[0.05em]">F</span>aithful{' '}
        <span className="italic pr-[0.05em]">S</span>teward
      </span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Share Widget                                                       */
/* ------------------------------------------------------------------ */

function ShareWidget() {
  const [copied, setCopied] = useState(false)

  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://thefaithfulsteward.com'
  const shareText =
    'Kingdom Before Company — a biblical framework for faithful business stewardship.'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const socials = [
    {
      Icon: Twitter,
      label: 'Share on Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl,
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      Icon: Linkedin,
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl,
      )}`,
    },
    {
      Icon: Facebook,
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl,
      )}`,
    },
    {
      Icon: Mail,
      label: 'Share via Email',
      href: `mailto:?subject=${encodeURIComponent(
        'Kingdom Before Company',
      )}&body=${encodeURIComponent(shareUrl)}`,
    },
  ]

  const iconClass =
    'text-ink-tertiary hover:text-gold transition-colors p-2'

  return (
    <>
      {/* Desktop: fixed vertical rail on the right edge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-1.5 py-3"
      >
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={iconClass}
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="relative flex items-center">
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className={iconClass}
          >
            <LinkIcon size={18} />
          </button>
          {copied && (
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-ink text-cream text-[10px] uppercase tracking-widest px-2.5 py-1.5 rounded">
              Copied!
            </span>
          )}
        </div>
      </motion.div>

      {/* Mobile: fixed horizontal pill at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="md:hidden flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex-row items-center gap-1 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 py-1.5"
      >
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={iconClass}
          >
            <Icon size={18} />
          </a>
        ))}
        <div className="relative flex items-center">
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className={iconClass}
          >
            <LinkIcon size={18} />
          </button>
          {copied && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap bg-ink text-cream text-[10px] uppercase tracking-widest px-2.5 py-1.5 rounded">
              Copied!
            </span>
          )}
        </div>
      </motion.div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Header                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Manifesto', 'Framework', 'The Book', 'About']

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-20 md:h-24 flex items-center justify-between gap-4">
        <a href="#top" className="shrink-0 min-w-0">
          <Wordmark />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm tracking-wide text-ink-secondary hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#assessment"
            className="inline-flex items-center border border-ink px-6 py-3 text-sm tracking-wide text-ink hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Take Assessment
          </a>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-light bg-cream px-6 py-8 flex flex-col gap-6">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="text-base tracking-wide text-ink-secondary hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#assessment"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center border border-ink px-6 py-3 text-sm tracking-wide text-ink hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Take Assessment
          </a>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="bg-cream pt-40 md:pt-56 pb-24 md:pb-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="font-display font-bold tracking-[-0.02em] uppercase leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink">
          Put the Kingdom Before the Company.
        </h1>

        <p className="mt-8 text-base md:text-lg leading-[1.75] text-ink-secondary max-w-2xl mx-auto">
          A biblical and practical framework for Christians who want to build,
          lead, and steward a business without sacrificing faith, family, or
          integrity.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            id="assessment"
            href="#assessment-form"
            className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
          >
            Take the Free Stewardship Assessment
          </a>
          <p className="text-sm text-ink-tertiary max-w-md">
            Discover the business tension most likely to pull you away from
            faithful stewardship.
          </p>
        </div>

        <div className="mt-16">
          <a
            href="#the-book"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-ink-secondary hover:text-ink transition-colors group"
          >
            Explore Kingdom Before Company
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Tension                                                             */
/* ------------------------------------------------------------------ */

function Tension() {
  return (
    <section
      id="manifesto"
      className="bg-cream-dark border-t border-b border-border-light px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15]">
          A business can grow while its owner drifts.
        </h2>

        <div className="mt-10 space-y-6 text-lg md:text-xl leading-[1.75]">
          <p className="italic text-[#4A5568]">
            Revenue can become identity. Opportunity can become temptation.
          </p>
          <p className="not-italic font-semibold text-[#1B222C]">
            Growth can quietly demand more time, compromise, money,
            attention, and control than you ever intended to give.
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

/* ------------------------------------------------------------------ */
/* Framework                                                          */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    number: '01',
    title: 'Authority',
    desc: 'Recognize that God owns the business; you are merely the steward managing His resources.',
  },
  {
    number: '02',
    title: 'Motives',
    desc: 'Audit your drive. Ensure your ambition is fueled by a desire to serve, not a need to prove your worth.',
  },
  {
    number: '03',
    title: 'Method',
    desc: 'Refuse to sacrifice biblical ethics, truth-telling, or integrity for the sake of acquiring a customer or closing a deal.',
  },
  {
    number: '04',
    title: 'Stewardship',
    desc: 'Manage time, capital, and influence with open hands, recognizing they are tools for the Kingdom, not trophies.',
  },
  {
    number: '05',
    title: 'People',
    desc: 'Treat employees, partners, and customers as image-bearers of God, never as mere utilities for profit.',
  },
  {
    number: '06',
    title: 'Faithfulness',
    desc: 'Redefine success. The primary metric is daily obedience and faithfulness to God’s calling, regardless of commercial outcomes.',
  },
  {
    number: '07',
    title: 'Eternity',
    desc: 'Keep a loose grip on earthly empires. Build diligently, but remember that the Kingdom of God is the only enduring reality.',
  },
]

function Framework() {
  return (
    <section id="framework" className="bg-cream px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
            The Framework
          </p>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
            Seven commitments of a faithful steward
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: idx * 0.1, ease: EASE },
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
              className="border-t border-[#E2E8F0] pt-6 origin-left cursor-default"
            >
              <span className="text-sm md:text-xs tracking-[0.2em] uppercase text-gold font-medium">
                {p.number}
              </span>
              <h3 className="mt-3 font-display font-bold tracking-[-0.02em] text-xl md:text-2xl text-ink">
                {p.title}
              </h3>
              <p className="mt-4 text-lg md:text-base text-ink-secondary leading-[1.75]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Book Feature                                                       */
/* ------------------------------------------------------------------ */

const BULLETS = [
  'Discern calling from ambition, fear, comparison, and pressure',
  'Count the cost before you build—and act faithfully without being reckless',
  'Price, sell, market, and pursue growth without manipulation or compromise',
  'Treat profit as a tool without allowing money to become your master',
  'Protect faith, family, integrity, and rest while carrying business responsibility',
]

function BookFeature() {
  return (
    <section id="the-book" className="bg-navy text-cream px-6 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[2/3] max-w-sm mx-auto border border-border-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src="/book-cover.png"
              alt="Kingdom Before Company book cover"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div
              className="absolute inset-0 hidden flex-col items-center justify-center gap-6 bg-navy border border-gold/40 p-8 text-center"
              style={{ display: 'none' }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                A Book By Vince Lawrence
              </span>
              <span className="font-display font-bold text-2xl leading-tight">
                Kingdom
                <br />
                Before
                <br />
                Company
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">
            The Flagship Message
          </p>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl leading-[1.1]">
            Kingdom Before Company
          </h2>
          <p className="mt-4 italic text-lg md:text-xl text-[#E2E8F0] leading-[1.6]">
            How to Build a Business Without Sacrificing Faith, Family, or
            Integrity
          </p>

          <div className="mt-8 space-y-5 text-[#E2E8F0]/90 leading-[1.75]">
            <p>
              Kingdom Before Company is a biblical and practical guide for
              Christians who want to build, lead, and steward a business
              without allowing it to become their master.
            </p>
            <p>
              This is not a promise that prayer, generosity, or obedience
              will guarantee wealth, contracts, or growth. God is not a
              business strategy, and success is not a reliable measure of
              His approval.
            </p>
            <p>
              Instead, this book helps you put business under God&rsquo;s
              authority—making decisions about motives, money, risk,
              selling, integrity, family, time, leadership, and opportunity
              with humility, wisdom, and open hands.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-[#E2E8F0]/90 leading-[1.75]">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#launch-list"
              className="inline-flex items-center gap-2 bg-cream text-navy px-8 py-4 text-sm md:text-base tracking-wide hover:bg-cream/90 transition-colors duration-300"
            >
              Join the Launch List
            </a>
            <a
              href="#workbook"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-cream hover:text-gold transition-colors group"
            >
              Explore the Workbook
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* About the Author                                                   */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-px bg-gold" />
          <h2 className="font-display font-bold tracking-[-0.02em] text-2xl md:text-3xl text-ink">
            About the Author
          </h2>
        </div>

        <div className="space-y-6 text-ink-secondary leading-[1.75]">
          <p>
            <strong className="text-[#1B222C] font-semibold">
              VINCE LAWRENCE
            </strong>{' '}
            is a U.S. Navy veteran, entrepreneur, safety and compliance
            professional, and business builder whose experience spans
            manufacturing, operations, workplace safety, logistics,
            compliance, and organizational leadership.
          </p>
          <p>
            For more than two decades, he has worked in environments where
            leadership has real consequences, where decisions affect people,
            families, livelihoods, operational readiness, and the health of
            an organization. His work has included frontline operations,
            supervision, safety leadership, compliance consulting, business
            development, and the creation of practical systems that help
            organizations operate with greater clarity, responsibility, and
            integrity.
          </p>
          <p>
            His work has also involved helping organizations navigate safety
            obligations, operational risk, regulatory expectations, workforce
            responsibility, and the systems needed to protect people,
            maintain standards, and operate responsibly.
          </p>
          <p>
            Today, Vince has founded and leads businesses focused on safety,
            compliance, education, and operational readiness. His
            perspective on business, however, reaches beyond revenue,
            growth, or ownership. He believes business is a stewardship
            assignment, and that how a person builds matters just as much as
            what they build.
          </p>
          <p>
            His faith in Jesus Christ shapes how he approaches leadership,
            ambition, money, responsibility, family, and success. That
            conviction became the foundation for{' '}
            <em className="font-display text-[#1B222C]">
              Kingdom Before Company
            </em>
            .
          </p>
          <p>
            The book grew from a question Vince believes every Christian
            entrepreneur and business leader must eventually answer:
          </p>

          <p className="font-display font-bold text-[#1B222C] text-xl md:text-2xl leading-[1.4] py-2">
            Can I build something meaningful without allowing what I build
            to become more important than the God I claim to serve?
          </p>

          <p>
            Through{' '}
            <em className="font-display text-[#1B222C]">
              The Faithful Steward
            </em>
            , Vince writes and teaches about building businesses under
            God&rsquo;s authority, pursuing excellence without worshiping
            success, and becoming the kind of steward who can be trusted
            with whatever God places in his hands.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                          */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="bg-cream px-6 py-28 md:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.15] text-3xl md:text-5xl lg:text-6xl text-ink">
          Build diligently. Steward faithfully. Hold the results loosely.
        </h2>
        <div className="mt-12">
          <a
            id="assessment-form"
            href="#assessment"
            className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
          >
            Take the Stewardship Assessment
          </a>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy px-6 pt-16 pb-32 md:pb-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <Wordmark invert variant="stacked" />
        <div className="flex items-center gap-8 text-sm text-cream/60">
          <a href="#framework" className="hover:text-cream transition-colors">
            Framework
          </a>
          <a href="#the-book" className="hover:text-cream transition-colors">
            The Book
          </a>
          <a href="#about" className="hover:text-cream transition-colors">
            About
          </a>
        </div>
        <p className="text-sm text-cream/50">
          &copy; {year} The Faithful Steward
        </p>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/* App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <ShareWidget />
      <main>
        <Hero />
        <Tension />
        <Framework />
        <BookFeature />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
