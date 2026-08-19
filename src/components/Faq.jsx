import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'
import { EASE } from '../lib/site'
import { FAQS } from '../data/faq'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border-light" data-testid={`faq-item-${item.id}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
        data-testid={`faq-question-${item.id}`}
      >
        <span className="font-display font-bold text-lg md:text-xl text-ink leading-snug">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 text-gold"
        >
          <Plus size={22} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 pr-10 text-ink-secondary leading-[1.8]"
              data-testid={`faq-answer-${item.id}`}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq({ items = FAQS, title = 'Common questions', eyebrow = 'FAQ' }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="max-w-3xl mx-auto" data-testid="faq-list">
      {(eyebrow || title) && (
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-3xl md:text-4xl text-ink">
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="border-t border-border-light">
        {items.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
          />
        ))}
      </div>
    </div>
  )
}
