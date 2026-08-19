import { useState } from 'react'
import { STAGES } from '../data/decisionTest'

// Reusable MailerLite capture form. Posts to the Vercel serverless function
// /api/subscribe. Optionally carries a `resultTag` and a `presetStage`.
export default function EmailCapture({
  showStage = true,
  buttonLabel = 'Join the List',
  source = 'website',
  resultTag = '',
  presetStage = '',
  variant = 'light',
  note = 'We respect your inbox. Unsubscribe anytime. No spam, ever.',
  onSuccess,
}) {
  const dark = variant === 'dark'
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [stage, setStage] = useState('')
  const [status, setStatus] = useState('idle') // idle | busy | ok | error
  const [message, setMessage] = useState('')

  const labelClass = dark
    ? 'block text-xs uppercase tracking-widest text-cream/60 mb-2'
    : 'block text-xs uppercase tracking-widest text-ink-tertiary mb-2'
  const fieldClass = dark
    ? 'w-full bg-navy border border-cream/25 px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors'
    : 'w-full bg-cream border border-border-light px-4 py-3 text-ink focus:outline-none focus:border-gold transition-colors'
  const helperClass = dark
    ? 'text-xs text-cream/50 text-center'
    : 'text-xs text-ink-tertiary text-center'

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
          stage: stage || presetStage || undefined,
          source,
          resultTag: resultTag || undefined,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('ok')
      setMessage('Thank you\u2014please check your inbox to confirm and receive your guide.')
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      setMessage(err.message || 'Unable to subscribe right now.')
    }
  }

  if (status === 'ok') {
    return (
      <div
        className={
          dark
            ? 'rounded-lg border border-gold/40 bg-navy px-6 py-8 text-center'
            : 'rounded-lg border border-gold/40 bg-cream-dark px-6 py-8 text-center'
        }
        data-testid="email-capture-success"
      >
        <p className={dark ? 'font-display text-xl text-cream' : 'font-display text-xl text-ink'}>
          You&rsquo;re on the list.
        </p>
        <p className={dark ? 'mt-2 text-cream/80' : 'mt-2 text-ink-secondary'}>{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4" data-testid="email-capture-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ec-name" className={labelClass}>
            First name
          </label>
          <input
            id="ec-name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={fieldClass}
            data-testid="email-capture-name"
          />
        </div>
        <div>
          <label htmlFor="ec-email" className={labelClass}>
            Email
          </label>
          <input
            id="ec-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            data-testid="email-capture-email"
          />
        </div>
      </div>

      {showStage && (
        <div>
          <label htmlFor="ec-stage" className={labelClass}>
            Business stage (optional)
          </label>
          <select
            id="ec-stage"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className={fieldClass}
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
        className={
          dark
            ? 'w-full inline-flex items-center justify-center bg-cream text-navy px-8 py-4 text-sm md:text-base tracking-wide hover:bg-cream/90 transition-colors duration-300 disabled:opacity-60'
            : 'w-full inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-sm md:text-base tracking-wide hover:bg-ink/90 transition-colors duration-300 disabled:opacity-60'
        }
        data-testid="email-capture-submit"
      >
        {status === 'busy' ? 'Submitting\u2026' : buttonLabel}
      </button>

      {status === 'error' && (
        <p
          className={dark ? 'text-sm text-red-300' : 'text-sm text-red-700'}
          role="alert"
          data-testid="email-capture-error"
        >
          {message}
        </p>
      )}
      <p className={helperClass}>{note}</p>
    </form>
  )
}
