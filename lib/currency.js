/**
 * Pick the currency to show a first-time visitor.
 *
 * The site is a static export served from nginx, so there is no request-time
 * server to read an IP. Detection has to happen in the browser.
 *
 * We use the browser's IANA time zone rather than an IP-geolocation service:
 * it's already available synchronously, costs no network round-trip, can't be
 * blocked by an ad blocker or a strict CSP, and sends nothing about the visitor
 * anywhere. On an ad landing page the alternative would mean showing a price
 * placeholder while a third-party lookup resolves, which is worse than being
 * occasionally wrong.
 *
 * `navigator.language` is deliberately not used — it reports keyboard/UI
 * preference, and a large share of Nigerian users run en-US.
 *
 * A VPN or a traveller will occasionally get the wrong guess. That's what the
 * currency toggle is for, and an explicit choice is remembered from then on.
 */

const STORAGE_KEY = 'ks_currency'

// Time zones are per-city, so this maps the ones that actually matter to us and
// falls through to USD for everywhere else. Deliberately not exhaustive: a
// wrong-but-plausible guess is worse than the neutral default.
const ZONE_CURRENCY = {
  'Africa/Lagos': 'NGN',
  'Europe/London': 'GBP',
}

const EURO_ZONES = [
  'Europe/Dublin', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid',
  'Europe/Rome', 'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna',
  'Europe/Lisbon', 'Europe/Helsinki', 'Europe/Athens',
]

function zoneCurrency() {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (!zone) return null
    if (ZONE_CURRENCY[zone]) return ZONE_CURRENCY[zone]
    if (EURO_ZONES.includes(zone)) return 'EUR'
    return null
  } catch {
    return null
  }
}

/**
 * @param {string[]} available currencies the plans are actually priced in
 * @returns {string|null} the currency to select, or null to leave as-is
 */
export function detectCurrency(available = []) {
  if (typeof window === 'undefined') return null

  // An explicit choice always wins, and keeps winning on later visits.
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && available.includes(saved)) return saved
  } catch { /* private mode — fall through to detection */ }

  const guess = zoneCurrency()
  // Only offer a guess we can actually price in: showing EUR when no plan has a
  // EUR price would fall back to USD amounts under a euro symbol.
  return guess && available.includes(guess) ? guess : null
}

/** Remember a currency the visitor picked themselves. */
export function rememberCurrency(currency) {
  try {
    window.localStorage.setItem(STORAGE_KEY, currency)
  } catch { /* private mode — the session still works, it just won't persist */ }
}
