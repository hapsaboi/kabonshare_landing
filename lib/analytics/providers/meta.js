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

export const metaProvider = {
  name: 'meta',

  get enabled() {
    return Boolean(PIXEL_ID) && typeof window !== 'undefined'
  },

  // fbq is created by the snippet in the document/layout; init() there covers
  // the PageView. Nothing to do at provider level.
  init() {},

  pageview() {
    if (!this.enabled || !window.fbq) return
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
