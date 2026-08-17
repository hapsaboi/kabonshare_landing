/**
 * Analytics facade.
 *
 * Call sites use this and nothing else. It fans one canonical event out to
 * every enabled provider, so adding or removing a destination is a one-line
 * change here rather than an edit to every call site.
 *
 * Re-exports the old `initAnalytics / capturePageview / identify / track /
 * resetAnalytics` names so the existing imports keep working untouched.
 */
import posthogProvider from './providers/posthog'
import metaProvider from './providers/meta'
import { EVENTS } from './events'

export { EVENTS } from './events'

const providers = [posthogProvider, metaProvider]

const DEV = process.env.NODE_ENV !== 'production'

function log(...args) {
  if (DEV && typeof console !== 'undefined') console.log('[Analytics]', ...args)
}

export function initAnalytics() {
  providers.forEach((p) => {
    try { p.init() } catch (e) { log(`${p.name} init failed:`, e.message) }
  })
}

export function capturePageview() {
  providers.forEach((p) => {
    try { p.pageview() } catch (e) { log(`${p.name} pageview failed:`, e.message) }
  })
}

export function identify(distinctId, props) {
  providers.forEach((p) => {
    try { p.identify(distinctId, props) } catch (e) { log(`${p.name} identify failed:`, e.message) }
  })
}

/**
 * Fire a canonical event everywhere.
 *
 * @param {string} event   one of EVENTS
 * @param {object} props   full payload — PostHog gets all of it, Meta gets the
 *                         subset it understands (see events.js)
 * @param {object} options { eventId } for browser/server deduplication,
 *                         { once } for a key that must only ever fire once
 */
export function track(event, props = {}, options = {}) {
  if (options.once && !claimOnce(options.once)) {
    log(`skipped duplicate: ${event} (${options.once})`)
    return
  }
  log(event, props)
  providers.forEach((p) => {
    try { p.track(event, props, options) } catch (e) { log(`${p.name} track failed:`, e.message) }
  })
}

export function setAttribution(attr) {
  providers.forEach((p) => {
    try { p.setAttribution?.(attr) } catch (e) { log(`${p.name} setAttribution failed:`, e.message) }
  })
}

export function resetAnalytics() {
  providers.forEach((p) => {
    try { p.reset() } catch (e) { log(`${p.name} reset failed:`, e.message) }
  })
  // Clear the once-guards too: a different person on this browser must be able
  // to fire signup_completed again.
  try {
    Object.keys(window.sessionStorage)
      .filter((k) => k.startsWith(ONCE_PREFIX))
      .forEach((k) => window.sessionStorage.removeItem(k))
  } catch { /* storage unavailable — nothing to clear */ }
}

const ONCE_PREFIX = 'ks_evt_'

/**
 * Claim a one-time event key. Returns false if it was already claimed.
 *
 * sessionStorage rather than a module variable because the guard has to survive
 * a remount, a route change and a refresh — a module flag is reset by all three,
 * and React StrictMode double-invokes effects in dev, which is exactly the case
 * a naive guard misses.
 *
 * Session-scoped, not local: a genuinely new visit should be allowed to record
 * a new funnel.
 */
function claimOnce(key) {
  if (typeof window === 'undefined') return false
  try {
    const k = ONCE_PREFIX + key
    if (window.sessionStorage.getItem(k)) return false
    window.sessionStorage.setItem(k, '1')
    return true
  } catch {
    // Private mode / storage disabled: better to send a possible duplicate than
    // to lose the conversion entirely.
    return true
  }
}

const analytics = { initAnalytics, capturePageview, identify, track, setAttribution, resetAnalytics, EVENTS }

export default analytics
