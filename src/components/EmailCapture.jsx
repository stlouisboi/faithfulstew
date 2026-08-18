import { useState } from 'react'
import { STAGES } from '../data/decisionTest'

// Reusable MailerLite capture form. Posts to the Vercel serverless function
// /api/subscribe. Optionally carries a `resultTag` (e.g. the Decision Test lens).
export default function EmailCapture({
  showStage = true,
  buttonLabel = 'Join the List',
  source = 'website',
  resultTag = '',
  onSuccess,
}) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState('')
  const [status, setStatus] = useState('idle') // idle | busy | ok | error
  const [message, setMessage] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('busy')
    setMessage('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email,
          stage: stage || undefined,
          source,
          resultTag: resultTag || undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('ok')
      setMessage('Thank you\u2014please check your inbox to confirm and receive your download.')
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Unable to subscribe right now.')
    }
  }

  if (status === 'ok') {
    return (
      <div
        className="rounded-lg border border-gold/40 bg-cream-dark px-6 py-8 text-center"
        data-testid="email-capture-success"
      >
        <p className="font-display text-xl text-ink">You&rsquo;re on the list.</p>
        <p className="mt-2 text-ink-secondary">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4" data-testid="email-capture-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ec-name" className="block text-xs uppercase tracking-widest text-ink-tertiary mb-2">
            First name
          </label>
          <input
            id="ec-name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-cream border border-border-light px-4 py-3 text-ink focus:outline-none focus:border-gold transition-colors"
            data-testid="email-capture-name"
          />
        </div>
        <div>
          <label htmlFor="ec-email" className="block text-xs uppercase tracking-widest text-ink-tertiary mb-2">
            Email
          </label>
          <input
            id="ec-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-cream border border-border-light px-4 py-3 text-ink focus:outline-none focus:border-gold transition-colors"
            data-testid="email-capture-email"
          />
        </div>
      </div>

      {showStage && (
        <div>
          <label htmlFor="ec-stage" className="block text-xs uppercase tracking-widest text-ink-tertiary mb-2">
            Business stage (optional)
          </label>
          <select
            id="ec-stage"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full bg-cream border border-border-light px-4 py-3 text-ink focus:outline-none focus:border-gold transition-colors"
            data-testid="email-capture-stage"
          >
            <option value="">Choose a stage</option>
            {STAGES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'busy'}
        className="w-full inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300 disabled:opacity-60"
        data-testid="email-capture-submit"
      >
        {status === 'busy' ? 'Submitting\u2026' : buttonLabel}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-700" role="alert" data-testid="email-capture-error">
          {message}
        </p>
      )}
      <p className="text-xs text-ink-tertiary text-center">
        We respect your inbox. Unsubscribe anytime. No spam, ever.
      </p>
    </form>
  )
}
