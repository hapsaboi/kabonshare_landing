/**
 * Campaign attribution capture and hand-off.
 *
 * The funnel crosses a domain boundary — the landing is kabonshare.com and
 * signup is dashboard.kabonshare.com. Query strings do NOT survive that hop on
 * their own, and Meta's `_fbc` cookie is set per-domain, so without this a
 * signup cannot be traced back to the ad that produced it.
 *
 * Two jobs:
 *   1. Record what the visitor arrived with (first touch wins).
 *   2. Re-attach it to every outbound dashboard link.
 */

const STORAGE_KEY = 'ks_attribution'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
// fbclid is what Meta puts on the ad click; it becomes the _fbc match key.
const CLICK_KEYS = ['fbclid', 'gclid', 'ttclid']

/**
 * Read attribution from the current URL, falling back to what was stored on a
 * previous visit.
 *
 * FIRST touch wins: a visitor who arrives from an ad, leaves, and returns
 * directly should still be credited to the ad. Overwriting on the second visit
 * would quietly hand the conversion to "direct".
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return {}

  const stored = readStored()
  const params = new URLSearchParams(window.location.search)

  const incoming = {}
  for (const k of [...UTM_KEYS, ...CLICK_KEYS]) {
    const v = params.get(k)
    if (v) incoming[k] = v.slice(0, 200) // bound it — this ends up in storage and a DB
  }

  if (Object.keys(incoming).length === 0) return stored

  // Only the referrer and landing path are added — no full URL, no PII.
  const attribution = {
    ...incoming,
    landing_path: window.location.pathname,
    referrer: document.referrer ? new URL(document.referrer).hostname : undefined,
    captured_at: new Date().toISOString(),
  }

  if (Object.keys(stored).length === 0) {
    write(attribution)
    return attribution
  }
  return stored
}

export function getAttribution() {
  return readStored()
}

function readStored() {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function write(attr) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attr))
  } catch { /* private mode — the URL hand-off below still works */ }
}

/**
 * Append attribution to a dashboard URL.
 *
 * This is the actual hand-off: localStorage is per-origin, so the dashboard
 * cannot read what the landing site stored. The query string is the only thing
 * that crosses, which is why every CTA has to go through here.
 *
 * Existing query params on the target are preserved.
 */
export function withAttribution(url) {
  if (typeof window === 'undefined') return url
  const attr = readStored()
  const keys = [...UTM_KEYS, ...CLICK_KEYS].filter((k) => attr[k])
  if (keys.length === 0) return url

  try {
    const u = new URL(url, window.location.origin)
    for (const k of keys) u.searchParams.set(k, attr[k])
    return u.toString()
  } catch {
    return url
  }
}

/**
 * Read the cookies Meta's Pixel sets.
 *
 * `_fbc` is derived from the ad click, `_fbp` identifies the browser. They are
 * the two strongest match signals for the Conversions API, and the server has
 * no way to produce them — only the Pixel, in the browser, can. Sending them at
 * signup is what lets a purchase days later still be attributed to the ad.
 *
 * Returns {} when the Pixel isn't installed or hasn't set them yet, which is
 * the normal case for organic traffic.
 */
export function readMetaCookies() {
  if (typeof document === 'undefined') return {}
  const out = {}
  for (const part of document.cookie.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === '_fbc' || k === '_fbp') out[k.slice(1)] = decodeURIComponent(rest.join('='))
  }
  return out
}

export { UTM_KEYS, CLICK_KEYS, STORAGE_KEY }
