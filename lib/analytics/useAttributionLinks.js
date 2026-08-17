import { useEffect } from 'react'
import { getAttribution, UTM_KEYS, CLICK_KEYS } from './attribution'

/**
 * Rewrites outbound dashboard links so campaign parameters survive the hop from
 * kabonshare.com to dashboard.kabonshare.com.
 *
 * Rewrites the href ATTRIBUTE rather than intercepting clicks. A click handler
 * would only cover plain left-clicks — middle-click, ⌘-click, "open in new tab"
 * and "copy link address" would all silently drop the attribution, and those
 * are common on a pricing page. Changing the href means the browser does the
 * right thing for every one of them.
 *
 * Runs after each route change because Next swaps the DOM on navigation.
 */
export function useAttributionLinks(dashboardOrigin, deps = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const attr = getAttribution()
    const keys = [...UTM_KEYS, ...CLICK_KEYS].filter((k) => attr[k])
    if (keys.length === 0) return

    let host
    try { host = new URL(dashboardOrigin).host } catch { return }

    const links = document.querySelectorAll('a[href]')
    links.forEach((a) => {
      let u
      try { u = new URL(a.href, window.location.origin) } catch { return }
      if (u.host !== host) return
      // Never clobber a parameter the link already sets deliberately.
      let changed = false
      for (const k of keys) {
        if (!u.searchParams.has(k)) { u.searchParams.set(k, attr[k]); changed = true }
      }
      if (changed) a.setAttribute('href', u.toString())
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useAttributionLinks
