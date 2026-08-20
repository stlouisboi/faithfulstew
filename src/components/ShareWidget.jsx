import { useState } from 'react'
import { motion } from 'motion/react'
import { Link as LinkIcon } from 'lucide-react'
import { EASE, SITE } from '../lib/site'

// Inline brand SVG icons (lucide no longer ships most brand marks).
function Brand({ path, label }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      role="img"
      aria-label={label}
    >
      <path d={path} />
    </svg>
  )
}

const ICONS = {
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  pinterest:
    'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.378-.293 1.194-.333 1.361-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  reddit:
    'M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015a.379.379 0 00-.44.249l-1.654 5.207c-2.759.076-5.25.834-7.087 2.033-.478-.482-1.138-.78-1.869-.78C1.192 9.135 0 10.32 0 11.779c0 .984.542 1.844 1.342 2.3-.037.223-.057.449-.057.68 0 3.442 4.005 6.243 8.927 6.243s8.927-2.801 8.927-6.243c0-.23-.02-.457-.056-.681.796-.457 1.336-1.316 1.336-2.299zM6.925 13.598a1.414 1.414 0 112.821.001 1.414 1.414 0 01-2.821-.001zm7.972 4.286c-.947.947-2.79 1.021-3.339 1.021-.549 0-2.393-.074-3.34-1.021a.365.365 0 01.516-.517c.597.597 1.874.81 2.824.81s2.226-.213 2.823-.81a.366.366 0 01.517 0 .367.367 0 01-.001.517zm-.257-2.87a1.414 1.414 0 111.41-1.416 1.414 1.414 0 01-1.41 1.416z',
}

export default function ShareWidget() {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : SITE.url
  const shareText =
    'Kingdom Before Company: a biblical framework for faithful business stewardship.'
  const mediaUrl = `${SITE.url}${SITE.ogImage}`
  const enc = encodeURIComponent

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
    { key: 'x', label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${enc(shareUrl)}&text=${enc(shareText)}` },
    { key: 'facebook', label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(shareUrl)}` },
    { key: 'pinterest', label: 'Share on Pinterest', href: `https://pinterest.com/pin/create/button/?url=${enc(shareUrl)}&media=${enc(mediaUrl)}&description=${enc(shareText)}` },
    { key: 'reddit', label: 'Share on Reddit', href: `https://www.reddit.com/submit?url=${enc(shareUrl)}&title=${enc(shareText)}` },
    { key: 'linkedin', label: 'Share on LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(shareUrl)}` },
  ]

  const iconClass = 'text-ink-tertiary hover:text-gold transition-colors p-2'

  const Rail = ({ orientation }) => {
    const copyTip =
      orientation === 'vertical'
        ? 'absolute right-full top-1/2 -translate-y-1/2 mr-3'
        : 'absolute bottom-full left-1/2 -translate-x-1/2 mb-3'
    return (
      <>
        {socials.map(({ key, label, href }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={iconClass}
            data-testid={`share-${key}-${orientation}`}
          >
            <Brand path={ICONS[key]} label={label} />
          </a>
        ))}
        <div className="relative flex items-center">
          <button
            onClick={handleCopy}
            aria-label="Copy link"
            className={iconClass}
            data-testid={`share-copy-${orientation}`}
          >
            <LinkIcon size={18} />
          </button>
          {copied && (
            <span className={`${copyTip} whitespace-nowrap bg-ink text-cream text-[10px] uppercase tracking-widest px-2.5 py-1.5 rounded`}>
              Copied!
            </span>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20, y: '-50%' }}
        animate={{ opacity: 1, x: 0, y: '-50%' }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 z-40 flex-col items-center gap-1 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-1.5 py-3"
      >
        <Rail orientation="vertical" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="md:hidden flex fixed bottom-6 left-1/2 z-40 flex-row items-center gap-0.5 bg-cream border border-border-light rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-2 py-1.5"
      >
        <Rail orientation="horizontal" />
      </motion.div>
    </>
  )
}
