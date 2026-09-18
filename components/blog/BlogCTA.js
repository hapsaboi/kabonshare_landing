import Link from 'next/link'

/**
 * Conversion banner at the end of every article — the reason the blog exists.
 *
 * Colours are fixed white, not theme tokens. The card is always a saturated
 * indigo-violet gradient, so text-body — which resolves to near-black in light
 * mode — left the heading and the secondary button almost unreadable on it.
 * A surface that does not follow the theme cannot use tokens that do.
 */
export default function BlogCTA() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 p-8 sm:p-10 text-center">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Publish once, reach everyone
      </h2>
      <p className="mt-3 text-white/85 max-w-xl mx-auto leading-relaxed">
        Schedule posts to Instagram, TikTok, YouTube, Facebook, X and more — from one dashboard, one mobile app, or one API.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
        <a
          href="https://dashboard.kabonshare.com/register"
          className="px-6 py-3 rounded-xl bg-white text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition-colors"
        >
          Start free
        </a>
        <Link
          href="/pricing/"
          className="px-6 py-3 rounded-xl border border-white/45 text-white text-sm font-semibold hover:bg-white/15 transition-colors"
        >
          See pricing
        </Link>
      </div>
    </div>
  )
}
