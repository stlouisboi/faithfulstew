import { motion } from 'motion/react'
import { Quote, ShieldCheck, Zap, HeartHandshake } from 'lucide-react'
import { ENDORSEMENTS, TRUST } from '../data/endorsements'
import { EASE } from '../lib/site'

const ICONS = { ShieldCheck, Zap, HeartHandshake }

export default function Endorsements() {
  return (
    <section className="bg-cream-dark border-t border-border-light px-6 py-24 md:py-32" data-testid="home-endorsements">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">Early Readers</p>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-ink">
            What readers are saying
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ENDORSEMENTS.map((e, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="bg-cream border border-border-light p-8 flex flex-col"
              data-testid={`endorsement-${i}`}
            >
              <Quote size={28} className="text-gold/70 mb-5" />
              <blockquote className="text-ink-secondary leading-[1.75] flex-1">
                &ldquo;{e.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border-light">
                <span className="block font-display font-bold text-ink">{e.name}</span>
                <span className="block text-sm text-ink-tertiary">{e.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
          {TRUST.map(({ icon, label }) => {
            const Icon = ICONS[icon]
            return (
              <div key={label} className="flex items-center gap-2.5 text-ink-secondary" data-testid={`trust-${label}`}>
                <Icon size={20} className="text-gold" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-sm text-ink-tertiary max-w-3xl leading-[1.7]">
          Every workbook purchase includes a personal-use license and is delivered digitally. This
          is education, not a promise of business success. If a download ever fails to reach you,
          email us and we will make it right.
        </p>
      </div>
    </section>
  )
}
