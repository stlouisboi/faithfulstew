import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { EASE } from '../lib/site'

export default function Hero() {
  return (
    <section id="top" className="bg-cream pt-40 md:pt-56 pb-24 md:pb-32 px-6" data-testid="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="font-display font-bold tracking-[-0.02em] uppercase leading-[1.15] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink">
          Put the Kingdom Before the Company.
        </h1>

        <p className="mt-8 text-base md:text-lg leading-[1.75] text-ink-secondary max-w-2xl mx-auto">
          A biblical and practical framework for Christian entrepreneurs and
          owner-operators who want to build a real business without sacrificing
          faith, family, integrity, health, or identity.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            to="/decision-test"
            className="inline-flex items-center gap-2 bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300"
            data-testid="hero-cta-decision-test"
          >
            Take the Free Assessment
          </Link>
          <p className="text-sm text-ink-tertiary max-w-md">
            &ldquo;Before You Say Yes&rdquo;: seven questions to help you slow
            down before pressure writes the answer.
          </p>
        </div>

        <div className="mt-16">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-ink-secondary hover:text-ink transition-colors group"
            data-testid="hero-explore-book"
          >
            Explore Kingdom Before Company
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
