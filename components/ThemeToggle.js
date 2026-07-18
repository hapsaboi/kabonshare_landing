import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { getResolvedTheme, setTheme } from '../lib/theme'

export default function ThemeToggle({ className = '' }) {
  // null until mounted so SSR and first client render match (no hydration warning).
  const [theme, setThemeState] = useState(null)

  useEffect(() => {
    setThemeState(getResolvedTheme())
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setThemeState(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line text-muted hover:text-body hover:bg-surface transition-colors ${className}`}
    >
      {/* Keep layout stable pre-mount; swap icon once theme is known. */}
      {theme === null ? (
        <span className="w-4 h-4" />
      ) : isDark ? (
        <FiSun className="w-4 h-4" />
      ) : (
        <FiMoon className="w-4 h-4" />
      )}
    </button>
  )
}
