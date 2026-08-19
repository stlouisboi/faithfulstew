import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { FOOTER_LINKS, LEGAL_LINKS } from '../lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy px-6 pt-16 pb-32 md:pb-16" data-testid="site-footer">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <Link to="/" data-testid="footer-logo-link">
          <Wordmark invert variant="stacked" />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/60">
          {FOOTER_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className="hover:text-cream transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-cream/40">
          {LEGAL_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className="hover:text-cream/80 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-cream/50">
          &copy; {year} The Faithful Steward. Education only&mdash;no promise of business success.
        </p>
      </div>
    </footer>
  )
}
