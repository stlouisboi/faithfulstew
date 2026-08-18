import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'
import { NAV_LINKS } from '../lib/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'text-sm tracking-wide transition-colors',
      isActive ? 'text-ink font-medium' : 'text-ink-secondary hover:text-ink',
    ].join(' ')

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-20 md:h-24 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Link to="/" className="shrink-0" data-testid="nav-logo-link">
            <Wordmark />
          </Link>
          <div className="hidden 2xl:flex items-center gap-4">
            <span className="w-px h-10 bg-gold/70" />
            <p className="text-[10px] leading-[1.45] tracking-[0.12em] uppercase text-ink-tertiary max-w-[76px]">
              Business Under God&rsquo;s Authority
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
              data-testid={`nav-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/decision-test"
            className="inline-flex items-center bg-ink text-cream px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-ink/90 transition-colors duration-300"
            data-testid="nav-cta-decision-test"
          >
            Take the Test
          </Link>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-light bg-cream px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={linkClass}
              data-testid={`nav-mobile-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/decision-test"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-ink text-cream px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-ink/90 transition-colors duration-300"
            data-testid="nav-mobile-cta"
          >
            Take the Test
          </Link>
        </div>
      )}
    </header>
  )
}
