/**
 * PostHog provider.
 *
 * Behaviour is unchanged from the previous lib/analytics.js — same token names,
 * same cross_subdomain_cookie so a visitor on kabonshare.com stays the same
 * person on dashboard.kabonshare.com. Only the shape moved.
 */
import posthog from 'posthog-js'

const KEY = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || process.env.NEXT_PUBLIC_POSTHOG_KEY
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

let started = false

export const posthogProvider = {
  name: 'posthog',

  get enabled() {
    return Boolean(KEY) && typeof window !== 'undefined'
  },

  init() {
    if (started || !this.enabled) return
    posthog.init(KEY, {
      api_host: HOST,
      // Pageviews are fired manually by the router effect.
      capture_pageview: false,
      cross_subdomain_cookie: true,
      persistence: 'localStorage+cookie',
      autocapture: true,
    })
    started = true
  },

  pageview() {
    if (!this.enabled) return
    posthog.capture('$pageview')
  },

  identify(id, props) {
    if (!this.enabled || !id) return
    posthog.identify(String(id), props)
  },

  // PostHog keeps our canonical names verbatim, and gets the FULL payload —
  // it's our own warehouse, so extra context costs nothing and is useful later.
  track(event, props) {
    if (!this.enabled) return
    posthog.capture(event, props)
  },

  /**
   * Attribution is set as super-properties so it rides along on every
   * subsequent event automatically, rather than each call site remembering to
   * attach it.
   */
  setAttribution(attr) {
    if (!this.enabled || !attr || Object.keys(attr).length === 0) return
    posthog.register(attr)
  },

  reset() {
    if (!this.enabled) return
    posthog.reset()
  },
}

export default posthogProvider
