import Link from 'next/link'

/**
 * Conversion banner at the end of every article — the reason the blog exists.
 */
export default function BlogCTA() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 p-8 sm:p-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Publish once, reach everyone
      </h2>
      <p className="mt-3 text-indigo-100 max-w-xl mx-auto leading-relaxed">
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
          className="px-6 py-3 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
        >
          See pricing
        </Link>
      </div>
    </div>
  )
}
