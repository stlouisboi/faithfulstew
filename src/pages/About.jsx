import { motion } from 'motion/react'
import Seo from '../components/Seo'
import { EASE } from '../lib/site'

export default function About() {
  return (
    <>
      <Seo
        title="About Vince Lawrence"
        path="/about"
        description="Vince Lawrence. Navy veteran, entrepreneur, and author of Kingdom Before Company."
        image="/vince-lawrence.png"
      />

      <section className="bg-cream px-6 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative bg-cream-dark border border-border-light overflow-hidden">
              <img src="/vince-lawrence.png" alt="Vince Lawrence" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="w-12 h-px bg-gold" />
              <p className="text-xs uppercase tracking-[0.15em] text-ink-tertiary">
                Author &middot; Navy Veteran &middot; Entrepreneur
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">About the Author</p>
            <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl text-ink leading-[1.1]">
              Vince Lawrence
            </h1>

            <div className="mt-8 space-y-6 text-ink-secondary leading-[1.8]">
              <p>
                <strong className="text-ink font-semibold">Vince Lawrence</strong> is a U.S. Navy veteran,
                entrepreneur, safety and compliance professional, and business
                builder whose experience spans manufacturing, operations,
                workplace safety, logistics, compliance, and organizational
                leadership.
              </p>
              <p>
                For more than two decades, he has worked in environments where
                leadership has real consequences, where decisions affect
                people, families, livelihoods, operational readiness, and the
                health of an organization. His work has included frontline
                operations, supervision, safety leadership, compliance
                consulting, business development, and the creation of practical
                systems that help organizations operate with greater clarity,
                responsibility, and integrity.
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
                <em className="font-display text-ink">Kingdom Before Company</em>.
              </p>
              <p className="font-display font-bold text-ink text-xl md:text-2xl leading-[1.4] py-2">
                Can I build something meaningful without allowing what I build to
                become more important than the God I claim to serve?
              </p>
              <p>
                Through <em className="font-display text-ink">The Faithful Steward</em>, Vince writes and
                teaches about building businesses under God&rsquo;s authority,
                pursuing excellence without worshiping success, and becoming the
                kind of steward who can be trusted with whatever God places in
                his hands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
