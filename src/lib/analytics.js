// Thin wrapper around Plausible custom events. Safe no-op if the script
// is not loaded (e.g. in dev/preview or if a visitor blocks it).
export function track(event, props) {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, props ? { props } : undefined)
  }
}
