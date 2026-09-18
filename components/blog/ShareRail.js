import { useEffect, useState } from 'react'
import { FiLink, FiCheck } from 'react-icons/fi'
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'

/**
 * Sharing, pinned beside the article.
 *
 * A rail rather than a row under the title: the moment someone wants to share
 * is usually partway through reading, not before they have started, and a
 * button they have already scrolled past cannot catch that.
 *
 * Rendered twice — a fixed rail on desktop, an inline row on mobile where
 * there is no margin to float in.
 */
const NETWORKS = [
  { key: 'x',        Icon: FaXTwitter,   label: 'Share on X',
    href: (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
  { key: 'linkedin', Icon: FaLinkedinIn, label: 'Share on LinkedIn',
    href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { key: 'facebook', Icon: FaFacebookF,  label: 'Share on Facebook',
    href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { key: 'whatsapp', Icon: FaWhatsapp,   label: 'Share on WhatsApp',
    href: (u, t) => `https://wa.me/?text=${t}%20${u}` },
]

function useShareLinks(title) {
  // Read on the client: the page is pre-rendered, so a URL captured at build
  // time would be wrong for anyone arriving with a query string or on a
  // different host.
  const [url, setUrl] = useState('')
  useEffect(() => { setUrl(window.location.href.split('?')[0]) }, [])
  return { u: encodeURIComponent(url), t: encodeURIComponent(title), raw: url }
}

function CopyButton({ url, className = '' }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked — the other buttons still work */ }
  }
  return (
    <button
      onClick={copy}
      aria-label={copied ? 'Link copied' : 'Copy link'}
      title={copied ? 'Copied' : 'Copy link'}
      className={className}
    >
      {copied ? <FiCheck className="w-4 h-4 text-emerald-500" /> : <FiLink className="w-4 h-4" />}
    </button>
  )
}

const btn = 'w-10 h-10 rounded-full border border-line bg-surface text-muted ' +
            'hover:text-body hover:border-muted hover:-translate-y-0.5 ' +
            'transition-all flex items-center justify-center'

export default function ShareRail({ title }) {
  const { u, t, raw } = useShareLinks(title)

  return (
    <>
      {/* Desktop: pinned in the left margin, out of the reading column.
          Hidden below xl because narrower viewports have no margin to spare —
          the inline row below covers those. */}
      <div className="hidden xl:flex fixed left-[max(1.5rem,calc((100vw-72rem)/2-4.5rem))] top-1/2 -translate-y-1/2 z-30 flex-col gap-2.5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-subtle text-center mb-1">Share</span>
        {NETWORKS.map(({ key, Icon, label, href }) => (
          <a key={key} href={href(u, t)} target="_blank" rel="noopener noreferrer"
             aria-label={label} title={label} className={btn}>
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <CopyButton url={raw} className={btn} />
      </div>

      {/* Mobile and tablet: an inline row, shown once at the end of the article. */}
      <div className="xl:hidden flex items-center gap-2.5 pt-8 mt-8 border-t border-line">
        <span className="text-xs font-semibold uppercase tracking-wider text-subtle mr-1">Share</span>
        {NETWORKS.map(({ key, Icon, label, href }) => (
          <a key={key} href={href(u, t)} target="_blank" rel="noopener noreferrer"
             aria-label={label} title={label} className={btn}>
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <CopyButton url={raw} className={btn} />
      </div>
    </>
  )
}
