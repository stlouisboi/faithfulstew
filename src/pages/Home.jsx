import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Framework from '../components/Framework'
import Endorsements from '../components/Endorsements'
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
          <p className="text-ink-secondary">
            When you are the one finding the clients, doing the work, watching
            the money, making the decisions, solving the problems, and carrying
            the risk, business pressure gets personal fast. A slow month can
            feel like failure. A new opportunity can feel impossible to turn
            down. And working too much can start sounding responsible because
            everything depends on you.
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
            master. Not a promise of wealth, but a call to put business under
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
        <h2 className="font-display font-bold tracking-[-0.01em] leading-[1.2] text-4xl md:text-5xl lg:text-6xl text-ink">
          Build diligently.<br />
          Steward faithfully.<br />
          Hold the results loosely.
        </h2>
        <div className="mt-12">
          <Link
            to="/decision-test"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 text-sm md:text-base tracking-wide hover:bg-gold/90 transition-colors duration-300"
            data-testid="home-final-cta"
          >
            Take the Free Assessment
          </Link>
        </div>
      </div>
    </section>
  )
}

function AboutTeaser() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32" data-testid="home-about-author">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="group relative max-w-sm mx-auto lg:mx-0">
            {/* offset gold frame */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-full h-full border border-gold/60 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
            />
            {/* duotone portrait */}
            <div className="relative overflow-hidden bg-navy border border-navy">
              <img
                src="/vince-lawrence.png"
                alt="Vince Lawrence"
                loading="lazy"
                className="w-full h-auto object-cover grayscale contrast-[1.05] transition-[filter] duration-700 group-hover:grayscale-0"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-navy/40 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gold/15 mix-blend-screen pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-inset ring-cream/10 pointer-events-none"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">About the Author</p>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink leading-[1.1]">
            Vince Lawrence
          </h2>
          <div className="mt-6 space-y-5 text-ink-secondary leading-[1.8]">
            <p>
              Vince Lawrence is a U.S. Navy veteran, entrepreneur, and safety and
              compliance professional whose work spans operations, logistics,
              leadership, and building organizations that operate with clarity and
              integrity.
            </p>
            <p>
              He believes business is a stewardship assignment: that how you
              build matters as much as what you build. That conviction became the
              foundation for <em className="font-display text-ink">Kingdom Before Company</em>.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-ink hover:text-gold transition-colors group"
            data-testid="home-about-link"
          >
            Read Vince&rsquo;s full story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function FilmSection() {
  return (
    <section className="bg-navy text-cream px-6 py-24 md:py-32" data-testid="home-film">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-span-5 order-1"
        >
          <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] bg-black overflow-hidden border border-border-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <video
              src="/kingdom-before-company-film.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              data-testid="home-film-video"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="lg:col-span-7 order-2"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">Watch</p>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-[1.15]">
            The business can become the master.
          </h2>
          <p className="mt-6 text-[#E2E8F0]/90 leading-[1.75]">
            Revenue can become identity. Opportunity can become temptation. In
            forty seconds, this short film names the quiet drift every
            owner-operator feels, and points to a better way to build.
          </p>
          <p className="mt-8 font-display italic text-xl md:text-2xl text-gold leading-[1.4]">
            &ldquo;What is this business forming in me?&rdquo;
          </p>
          <Link
            to="/decision-test"
            className="mt-10 inline-flex items-center gap-2 bg-cream text-navy font-semibold px-8 py-4 text-sm md:text-base tracking-wide hover:bg-cream/90 transition-colors duration-300"
            data-testid="home-film-cta"
          >
            Take the Free Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo path="/" image="/og-home.jpg" />
      <Hero />
      <FilmSection />
      <Tension />
      <Framework />
      <BookTeaser />
      <AboutTeaser />
      <Endorsements />
      <FinalCta />
    </>
  )
}
