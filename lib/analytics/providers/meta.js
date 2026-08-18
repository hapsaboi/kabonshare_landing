/**
 * Meta Pixel provider.
 *
 * No-ops entirely when NEXT_PUBLIC_META_PIXEL_ID is unset, so local dev and any
 * environment without a Pixel behaves exactly as before.
 *
 * The script itself is injected by the app's Script tag (next/script,
 * afterInteractive) rather than here — this module only queues into `fbq`,
 * which Meta's snippet stubs before the library loads, so calls made early are
 * replayed once it arrives.
 */
import { META_EVENT_MAP, toMetaPayload } from '../events'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

// The path the browser landed on — captured when this module is first evaluated
// in the browser, which is the same page load the inline snippet reported a
// PageView for. Module scope rather than an init() call: child effects run
// before parent effects in React, so the facade's init() is not guaranteed to
// have run before the first pageview() arrives.
const SNIPPET_PATH = typeof window !== 'undefined' ? window.location.pathname : null

export const metaProvider = {
  name: 'meta',

  get enabled() {
    return Boolean(PIXEL_ID) && typeof window !== 'undefined'
  },

  // fbq is created by the snippet in the document/layout; init() there covers
  // the PageView. Nothing to do at provider level.
  init() {},

  // The inline snippet already fired PageView for the URL the browser landed
  // on. Skip exactly that one — not simply "the first call we get", which would
  // swallow a real pageview when the first call comes from a client-side
  // navigation to a different path.
  _snippetPageviewConsumed: false,

  pageview() {
    if (!this.enabled || !window.fbq) return

    if (!this._snippetPageviewConsumed) {
      this._snippetPageviewConsumed = true
      if (window.location.pathname === SNIPPET_PATH) return
    }

    window.fbq('track', 'PageView')
  },

  // Meta's Advanced Matching takes hashed PII, and it hashes client-side itself
  // when given plain values via fbq('init', id, {em: ...}). We deliberately do
  // NOT send email from the browser — the server-side CAPI event carries a
  // hashed email with far better match quality, and this keeps PII out of the
  // client payload entirely.
  identify() {},

  track(event, props, options = {}) {
    if (!this.enabled || !window.fbq) return
    const metaEvent = META_EVENT_MAP[event]
    if (!metaEvent) return // PostHog-only event — nothing for Meta to learn from

    const payload = toMetaPayload(event, props)
    // eventID is what deduplicates this against the same event sent by the
    // Conversions API. Both sides must send the SAME id or Meta counts twice.
    const opts = options.eventId ? { eventID: String(options.eventId) } : undefined
    window.fbq('track', metaEvent, payload, opts)
  },

  setAttribution() {},
  reset() {},
}

export default metaProvider
