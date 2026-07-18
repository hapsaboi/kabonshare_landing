// Theme helpers. The source of truth is the `data-theme` attribute on <html>
// (set pre-paint by the no-flash script in _document.js). We persist the user's
// explicit choice in localStorage; with no stored choice, the OS preference
// (prefers-color-scheme) drives it via CSS.

export function getStoredTheme() {
  if (typeof window === 'undefined') return null
  try {
    const t = localStorage.getItem('theme')
    return t === 'dark' || t === 'light' ? t : null
  } catch {
    return null
  }
}

// The theme actually showing right now (stored choice, else OS preference).
export function getResolvedTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = getStoredTheme()
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function setTheme(theme) {
  if (typeof window === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem('theme', theme)
  } catch {}
}
