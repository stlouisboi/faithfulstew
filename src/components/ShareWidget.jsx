import { useState } from 'react'
import { motion } from 'motion/react'
import { Twitter, Linkedin, Facebook, Mail, Link as LinkIcon } from 'lucide-react'
import { EASE, SITE } from '../lib/site'

export default function ShareWidget() {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : SITE.url
  const shareText =
    'Kingdom Before Company \u2014 a biblical framework for faithful business stewardship.'

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
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      Icon: Linkedin,
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      Icon: Facebook,
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      Icon: Mail,
      label: 'Share via Email',
      href: `mailto:?subject=${encodeURIComponent('Kingdom Before Company')}&body=${encodeURIComponent(shareUrl)}`,
    },
  ]

  const iconClass = 'text-ink-tertiary hover:text-gold transition-colors p-2'

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-1.5 py-3"
      >
        {socials.map(({ Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={iconClass}>
            <Icon size={18} />
          </a>
        ))}
        <div className="relative flex items-center">
          <button onClick={handleCopy} aria-label="Copy link" className={iconClass} data-testid="share-copy-desktop">
            <LinkIcon size={18} />
          </button>
          {copied && (
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-ink text-cream text-[10px] uppercase tracking-widest px-2.5 py-1.5 rounded">
              Copied!
            </span>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="md:hidden flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex-row items-center gap-1 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 py-1.5"
      >
        {socials.map(({ Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={iconClass}>
            <Icon size={18} />
          </a>
        ))}
        <div className="relative flex items-center">
          <button onClick={handleCopy} aria-label="Copy link" className={iconClass} data-testid="share-copy-mobile">
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
