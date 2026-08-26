/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * Plan accent gradients come from the database (Plan.presentation), so Tailwind
   * never sees them in source and would purge them — every plan would render
   * with no colour at all, and only in production, where purging runs.
   *
   * Safelisted by pattern rather than listing every class: the set of usable
   * stops should be knowable from here, and a colour typed into the admin panel
   * that isn't in this list simply won't apply.
   */
  /**
   * Plan accent gradients come from the database (Plan.presentation), so Tailwind
   * never sees them in source and would purge them — every plan would render
   * with no colour, and only in production, where purging runs.
   *
   * Enumerated rather than pattern-matched: the broad pattern added 384K to the
   * stylesheet for a handful of gradients. This is the palette the admin plan
   * editor offers; a colour outside it simply won't apply.
   */
  safelist: (() => {
    const HUES = ['slate', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'emerald', 'teal', 'amber']
    const WEIGHTS = [400, 500, 600, 700]
    return [
      ...HUES.flatMap((h) => WEIGHTS.flatMap((w) => [`from-${h}-${w}`, `to-${h}-${w}`])),
      ...HUES.flatMap((h) => [400, 500, 600].flatMap((w) => [40, 50, 60].map((o) => `border-${h}-${w}/${o}`))),
    ]
  })(),
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        dark: '#0f172a',
        // Theme tokens (light/dark via CSS variables in globals.css).
        // Usage: bg-page, bg-surface, text-body, text-muted, border-line, etc.
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        raised: 'var(--bg-raised)',
        inset: 'var(--bg-inset)',
        body: 'var(--text-body)',
        muted: 'var(--text-muted)',
        subtle: 'var(--text-subtle)',
        line: 'var(--border)',
        'line-strong': 'var(--border-strong)',
        instagram: '#E1306C',
        tiktok: '#000000',
        youtube: '#FF0000',
        facebook: '#1877F2',
        twitter: '#000000',
        linkedin: '#0A66C2',
        threads: '#000000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
