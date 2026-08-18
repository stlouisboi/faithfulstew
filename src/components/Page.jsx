// Small reusable presentational helpers shared across content pages.

export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium">{eyebrow}</p>
      )}
      <h1 className="mt-4 font-display font-bold tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-ink-secondary leading-[1.7]">{subtitle}</p>
      )}
    </div>
  )
}

export function Prose({ children }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6 text-ink-secondary leading-[1.8] [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-ink [&_h2]:tracking-[-0.02em] [&_h2]:mt-12 [&_h2]:mb-2 [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-gold [&_a]:underline">
      {children}
    </div>
  )
}
