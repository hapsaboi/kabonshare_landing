import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads, SiLinkedin, SiPinterest, SiBluesky } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'

const ICONS = [FiInstagram, SiTiktok, FiYoutube, BsTwitterX, FiFacebook, SiThreads, SiLinkedin, SiBluesky, SiPinterest]

/**
 * Faint row of platform logos — the same washed-icon montage used on the
 * Followers dashboard hero. Purely decorative; parent controls placement,
 * this controls the row itself.
 */
export default function PlatformBackdrop({ size = 96, gap = 40, count = ICONS.length, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none flex items-center text-white ${className}`}
      style={{ gap }}
    >
      {ICONS.slice(0, count).map((Icon, i) => (
        <Icon key={i} className="flex-shrink-0" style={{ fontSize: size }} />
      ))}
    </div>
  )
}

// Deterministic scatter layout — fixed positions (percent-based) so the
// server-rendered static HTML and the client hydrate identically.
const SCATTER = [
  { i: 0, top: '3%', left: '4%', size: 96, rot: -12 },
  { i: 1, top: '7%', left: '88%', size: 120, rot: 10 },
  { i: 2, top: '15%', left: '55%', size: 72, rot: -6 },
  { i: 3, top: '22%', left: '12%', size: 110, rot: 14 },
  { i: 4, top: '30%', left: '78%', size: 84, rot: -10 },
  { i: 5, top: '38%', left: '38%', size: 66, rot: 6 },
  { i: 6, top: '46%', left: '90%', size: 104, rot: -14 },
  { i: 7, top: '54%', left: '6%', size: 88, rot: 8 },
  { i: 8, top: '62%', left: '60%', size: 76, rot: -8 },
  { i: 0, top: '70%', left: '25%', size: 100, rot: 12 },
  { i: 1, top: '78%', left: '82%', size: 90, rot: -6 },
  { i: 2, top: '86%', left: '45%', size: 70, rot: 10 },
  { i: 3, top: '93%', left: '10%', size: 96, rot: -12 },
]

/**
 * Full-page faint icon scatter. Drop inside a `relative` page container —
 * it fills the whole container behind the content.
 */
export function PlatformScatter({ opacity = 0.035 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      {SCATTER.map((s, k) => {
        const Icon = ICONS[s.i % ICONS.length]
        return (
          <Icon
            key={k}
            className="absolute text-white"
            style={{ top: s.top, left: s.left, fontSize: s.size, transform: `rotate(${s.rot}deg)` }}
          />
        )
      })}
    </div>
  )
}
