import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { FOOTER_LINKS, LEGAL_LINKS } from '../lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy px-6 pt-16 pb-32 md:pb-16" data-testid="site-footer">
      <div className="max-w-6xl mx-auto">
        {/* Brand lockup */}
        <div className="flex items-center gap-4 sm:gap-5">
          <Link to="/" data-testid="footer-logo-link" className="shrink-0">
            <Wordmark invert />
          </Link>
          <span className="w-px h-9 sm:h-11 bg-gold/70 shrink-0" />
          <p className="text-[10px] sm:text-[11px] leading-[1.5] tracking-[0.16em] uppercase text-cream/50 max-w-[120px]">
            Business Under God&rsquo;s Authority
          </p>
        </div>

        <div className="border-t border-cream/10 mt-10 mb-8" />

        {/* Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/60">
            {FOOTER_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className="hover:text-cream transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-cream/40">
            {LEGAL_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className="hover:text-cream/80 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-sm text-cream/40">
          &copy; {year} The Faithful Steward. Education only&mdash;no promise of business success.
        </p>
      </div>
    </footer>
  )
}
