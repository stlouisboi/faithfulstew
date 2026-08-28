import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// A Shopify-style sticky purchase bar that slides up once the user scrolls
// past the hero. `ctaHref` may be an in-page anchor (e.g. #founding) or a URL.
export default function StickyBuyBar({ title, price, note, ctaLabel, ctaHref, comingSoon = false }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 680)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 bg-navy/95 backdrop-blur-md border-t border-border-dark"
          data-testid="sticky-buy-bar"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-display font-bold text-cream text-base md:text-lg truncate">{title}</p>
              <p className="text-xs md:text-sm text-cream/60 truncate">
                <span className="text-gold font-semibold">{price}</span>
                {note ? <span className="hidden sm:inline"> &middot; {note}</span> : null}
              </p>
            </div>
            {comingSoon ? (
              <span
                className="shrink-0 inline-flex items-center gap-2 border border-cream/25 text-cream/70 px-5 py-3 text-sm tracking-wide cursor-default"
                data-testid="sticky-buy-comingsoon"
              >
                Coming Soon
              </span>
            ) : (
              <a
                href={ctaHref}
                className="shrink-0 inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 md:px-8 py-3 text-sm tracking-wide hover:bg-gold/90 transition-colors"
                data-testid="sticky-buy-cta"
              >
                {ctaLabel}
              </a>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
