export default function Wordmark({ invert = false, variant = 'horizontal' }) {
  const color = invert ? 'text-cream' : 'text-ink'
  const stacked = variant === 'stacked'

  return (
    <span
      className={[
        'inline-flex flex-col select-none',
        stacked ? 'items-center' : 'items-start',
        'text-[1.05rem] sm:text-[1.4rem] md:text-[1.6rem] xl:text-[2rem]',
        color,
      ].join(' ')}
    >
      <span
        className={[
          'font-sans font-medium tracking-[0.3em] opacity-90',
          stacked ? 'text-[0.35em]' : 'text-[0.3em]',
        ].join(' ')}
      >
        The
      </span>
      <span className="font-display font-bold uppercase tracking-[0.06em] sm:tracking-[0.15em] leading-none whitespace-nowrap">
        <span className="italic pr-[0.05em]">F</span>aithful{' '}
        <span className="italic pr-[0.05em]">S</span>teward
      </span>
    </span>
  )
}
