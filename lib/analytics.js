// PostHog analytics — safe no-op when NEXT_PUBLIC_POSTHOG_KEY isn't set
// (e.g. local dev without a key), so nothing breaks.
import posthog from 'posthog-js'

// Accept either name: PostHog's docs use *_PROJECT_TOKEN; *_KEY kept as a fallback.
const KEY = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || process.env.NEXT_PUBLIC_POSTHOG_KEY
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

let started = false

export function initAnalytics() {
  if (started || typeof window === 'undefined' || !KEY) return
  posthog.init(KEY, {
    api_host: HOST,
    // We fire pageviews manually on route change (SPA), so disable the auto one.
    capture_pageview: false,
    // Set a cookie on the root domain so a visitor is the SAME person across
    // kabonshare.com (landing) and dashboard.kabonshare.com (app) — needed for
    // the visit → signup → subscribe funnel to connect.
    cross_subdomain_cookie: true,
    persistence: 'localStorage+cookie',
    autocapture: true, // captures clicks (incl. the Sign Up links) automatically
  })
  started = true
}

export function capturePageview() {
  if (!KEY || typeof window === 'undefined') return
  posthog.capture('$pageview')
}

// Named event, e.g. track('signup_cta_clicked', { location: 'navbar' })
export function track(event, props) {
  if (!KEY || typeof window === 'undefined') return
  posthog.capture(event, props)
}

export default posthog
