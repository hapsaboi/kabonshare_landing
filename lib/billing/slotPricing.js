/**
 * Extra-account slot pricing — the client half of the backend's
 * `computeExtraAccountsMonthly`.
 *
 * Kept byte-identical in behaviour to the server on purpose: the quote a
 * customer reads and the amount we charge must be the same number, and the one
 * way to guarantee that is for both to price through the same algorithm rather
 * than multiplying a single rate.
 *
 * GRADUATED brackets: each prices only the slots inside it.
 *   tiers = [{upTo:10, price:5}, {upTo:25, price:3}, {upTo:null, price:2}]
 *   15 slots -> 10x5 + 5x3 = 65
 *
 * With no tiers this is exactly `slots * unitPrice`, so plans on flat pricing
 * are unaffected.
 */

/** Flat rate, from either field name. */
const flatOf = (info) => info?.unitPrice ?? info?.pricePerExtraAccount ?? 0
/** Bracket table, from either field name, always sorted. */
const tiersOf = (info) => (info?.tiers || info?.extraAccountTiers || [])
  .filter((t) => t && t.price !== null && t.price !== undefined && t.price !== '')
  .map((t) => ({ upTo: t.upTo === '' || t.upTo == null ? null : Number(t.upTo), price: Number(t.price) }))
  .sort((a, b) => (a.upTo ?? Infinity) - (b.upTo ?? Infinity))

export function computeSlotsMonthly(info, slots) {
  const n = Math.max(0, Math.floor(slots || 0))
  if (n === 0) return 0

  const flat = flatOf(info)
  const tiers = tiersOf(info)

  if (tiers.length === 0) return n * flat

  let total = 0
  let priced = 0
  for (const tier of tiers) {
    if (priced >= n) break
    const ceiling = tier.upTo ?? Infinity
    const take = Math.min(n, ceiling) - priced
    if (take <= 0) continue
    total += take * tier.price
    priced += take
  }
  // Anything past the last finite bracket falls back to the flat rate, or it
  // would be priced at zero.
  if (priced < n) total += (n - priced) * flat

  return total
}

/**
 * Monthly cost of ADDING `qty` slots on top of `current`.
 *
 * The delta, not `qty` priced from zero — buying 5 when you already hold 10
 * must charge the 11th-15th, which is also what the server does.
 */
export function computeAddedSlotsMonthly(info, current, qty) {
  return computeSlotsMonthly(info, (current || 0) + (qty || 0))
       - computeSlotsMonthly(info, current || 0)
}

/** True when this plan prices slots in volume brackets rather than flat. */
export const hasVolumePricing = (info) => tiersOf(info).length > 0

/**
 * "$5/mo each" is a lie under brackets. Describe the ladder instead.
 */
export function describeSlotPricing(info, money) {
  if (!hasVolumePricing(info)) return `${money(flatOf(info))}/mo each`
  const tiers = tiersOf(info)
  let from = 1
  return tiers
    .map((t) => {
      const label = t.upTo == null ? `${from}+` : from === t.upTo ? `${from}` : `${from}–${t.upTo}`
      from = (t.upTo ?? from) + 1
      return `${label}: ${money(t.price)}`
    })
    .join(' · ')
}
