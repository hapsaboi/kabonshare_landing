/**
 * The canonical event catalogue.
 *
 * Call sites emit ONE of these names. Each provider translates it into whatever
 * that destination calls the same thing — PostHog keeps our snake_case names,
 * Meta gets its standard events. Without this middle layer every call site would
 * have to know both vocabularies, and adding a third destination would mean
 * editing every one of them.
 *
 * `subscribed` deliberately keeps the name the four existing call sites already
 * use, so they gain Meta tracking without being touched.
 */
export const EVENTS = {
  PAGE_VIEWED: 'page_viewed',
  CONTENT_VIEWED: 'content_viewed',
  SIGNUP_STARTED: 'signup_started',
  SIGNUP_COMPLETED: 'signup_completed',
  CHECKOUT_STARTED: 'checkout_started',
  SUBSCRIBED: 'subscribed',
}

/**
 * canonical → Meta standard event.
 *
 * Anything absent is PostHog-only: Meta charges no penalty for custom events,
 * but a custom event can't be optimised for, so only the ones that matter to
 * the ad algorithm are mapped.
 */
export const META_EVENT_MAP = {
  [EVENTS.CONTENT_VIEWED]: 'ViewContent',
  [EVENTS.SIGNUP_STARTED]: 'Lead',
  [EVENTS.SIGNUP_COMPLETED]: 'CompleteRegistration',
  [EVENTS.CHECKOUT_STARTED]: 'InitiateCheckout',
  [EVENTS.SUBSCRIBED]: 'Purchase',
}

/**
 * Meta only reads a few well-known property names, and `value` + `currency` are
 * the two that make revenue optimisation work at all. Everything else on our
 * payload is ours and would just be noise, so each event declares what it sends.
 */
export function toMetaPayload(event, props = {}) {
  switch (event) {
    case EVENTS.SUBSCRIBED:
      return {
        value: Number(props.amount) || 0,
        currency: props.currency || 'USD',
        content_name: props.plan,
        content_type: 'subscription',
      }
    case EVENTS.CHECKOUT_STARTED:
      return {
        value: Number(props.amount) || 0,
        currency: props.currency || 'USD',
        content_name: props.plan,
      }
    case EVENTS.CONTENT_VIEWED:
      return { content_name: props.name, content_category: props.category }
    default:
      return {}
  }
}
