/** @type {import('tailwindcss').Config} */
module.exports = {
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
