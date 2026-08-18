import { motion } from 'motion/react'
import { PILLARS } from '../data/framework'
import { EASE } from '../lib/site'

export default function Framework() {
  return (
    <section id="framework" className="bg-cream px-6 py-24 md:py-32" data-testid="framework-section">
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
                transition: { duration: 0.6, delay: idx * 0.08, ease: EASE },
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } }}
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
