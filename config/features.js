import {
  FiSend, FiCalendar, FiZap, FiTrendingUp, FiUsers, FiVideo, FiFolder, FiCode,
  FiCheck, FiClock, FiGlobe, FiEye, FiLayers, FiRepeat, FiEdit3, FiGrid,
  FiMessageSquare, FiShield, FiActivity, FiBarChart2, FiRadio, FiScissors,
  FiUpload, FiTag, FiKey, FiGitBranch,
} from 'react-icons/fi'
import { siteConfig } from './siteConfig'

// Single source of truth for the Features menu (Navbar) AND the /features page.
// Each entry is a tab and reads like a mini landing page: hero → benefits grid →
// alternating feature blocks → testimonial.
//
// `menuDesc` is the short line in the nav dropdown.
// Every `image` is a screenshot slot — set it to a path in /public/features/
// (e.g. '/features/publishing-hero.webp') once you have the real screenshot;
// until then a styled placeholder renders in its place.
export const FEATURES = [
  {
    id: 'publishing',
    slug: 'social-media-publishing',
    label: 'Publishing',
    icon: FiSend,
    color: '#6366f1',
    menuDesc: 'Compose once, publish to all 9 networks',
    seo: {
      title: 'Social Media Publishing Tool — Post to 9 Networks at Once',
      description: 'Write once and publish to Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky & Pinterest. Per-platform captions, every format, native scheduling.',
    },
    hero: {
      eyebrow: 'Cross-platform publishing',
      title: 'One composer. Every network.',
      desc: 'Write your post once and KabonShare adapts it to each platform’s rules, formats and limits — then publishes everywhere at the right time.',
      bullets: [
        'Per-platform captions, hashtags & mentions',
        'Carousels, Reels, Shorts, Stories & threads',
        'Native scheduling — posts fire even if you’re offline',
      ],
      image: {
        light: '/features/publishing-hero-light.webp',
        dark: '/features/publishing-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiGlobe, title: 'Nine networks', desc: 'Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky & Pinterest.' },
      { icon: FiLayers, title: 'Every format', desc: 'Feed, stories, reels, shorts, carousels and threads — handled per platform.' },
      { icon: FiShield, title: 'Smart validation', desc: 'We check ratios, lengths and limits so a post never fails silently.' },
      { icon: FiEye, title: 'Live preview', desc: 'See exactly how each post looks on every platform before it goes out.' },
    ],
    blocks: [
      {
        eyebrow: 'Per-platform control',
        title: 'Tailor every post, without redoing the work.',
        desc: 'Start from one draft, then fine-tune the caption, media and settings for any channel that needs something different. Everything else stays in sync.',
        bullets: [
          'Override captions & hashtags per platform',
          'Swap or crop media for each channel',
          'First comment, alt text, location & more',
        ],
        image: {
          light: '/features/publishing-platforms-light.webp',
          dark: '/features/publishing-platforms-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Set it and forget it',
        title: 'Publish now, or schedule to the perfect minute.',
        desc: 'Queue posts for later and KabonShare uses each platform’s native scheduling where possible — so your content goes live even if your laptop is closed.',
        bullets: [
          'Native scheduling on supported platforms',
          'Per-post timezones and recurring queues',
          'Automatic retries if a network hiccups',
        ],
        image: {
          light: '/features/publishing-schedule-light.webp',
          dark: '/features/publishing-schedule-dark.webp',
        },
        flip: true,
      },
    ],
  },

  {
    id: 'scheduling',
    slug: 'social-media-scheduling',
    label: 'Scheduling',
    icon: FiCalendar,
    color: '#8b5cf6',
    menuDesc: 'Visual calendar, best times & bulk scheduler',
    seo: {
      title: 'Social Media Scheduling — Visual Calendar & Bulk Scheduler',
      description: 'Plan weeks of content in one sitting with a visual calendar, best-time suggestions from your own data, and a bulk scheduler that queues a whole batch at once.',
    },
    hero: {
      eyebrow: 'Scheduling & planning',
      title: 'Plan weeks of content in one sitting.',
      desc: 'A visual calendar with month, week and day views, best-time suggestions from your own data, and a bulk scheduler — so your feed stays consistent without the daily scramble.',
      bullets: [
        'Month, week and day calendar views',
        'Best-time suggestions from your own data',
        'Bulk scheduler — paste a batch and queue it',
      ],
      image: {
        light: '/features/scheduling-hero-light.webp',
        dark: '/features/scheduling-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiGrid, title: 'Visual calendar', desc: 'Month, week and day views of everything scheduled across all platforms.' },
      { icon: FiClock, title: 'Best time to post', desc: 'Recommendations tuned to when your audience actually engages.' },
      { icon: FiUpload, title: 'Bulk scheduler', desc: 'Paste a column from Sheets or Excel and queue dozens of posts at once.' },
      { icon: FiRepeat, title: 'Schedule your way', desc: 'Even spread, fixed interval, best times or manual — one batch, your rhythm.' },
    ],
    blocks: [
      {
        eyebrow: 'See the whole month',
        title: 'A calendar that shows your whole strategy.',
        desc: 'Switch between month, week and day views, see every post colour-coded by status, and jump straight into anything waiting on approval.',
        bullets: [
          'Month, week and day views',
          'Colour-coded by status — scheduled, published, needs approval',
          'Best-time hints right on the calendar',
        ],
        image: {
          light: '/features/scheduling-calendar-light.webp',
          dark: '/features/scheduling-calendar-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Move faster',
        title: 'Bulk-schedule a month before your coffee’s cold.',
        desc: 'Paste a column of posts from Sheets or Excel, caption the whole batch with AI, then spread them across your calendar — even spread, best times or a fixed interval.',
        bullets: [
          'Paste posts straight from Sheets or Excel',
          'AI-caption the whole batch at once',
          'Even spread, best times or fixed interval',
        ],
        image: {
          light: '/features/scheduling-bulk-light.webp',
          dark: '/features/scheduling-bulk-dark.webp',
        },
        flip: true,
      },
    ],
  },

  {
    id: 'ai',
    slug: 'ai-social-media-manager',
    label: 'AI Studio',
    icon: FiZap,
    color: '#d946ef',
    badge: 'New',
    menuDesc: 'Media-aware captions, hashtags & Kabon AI',
    seo: {
      title: 'AI Social Media Manager — Captions, Hashtags & an AI Agent',
      description: 'Generate titles, captions and hashtags from your media — image, video or audio — then let Kabon AI create, schedule and manage your content just by chatting.',
    },
    hero: {
      eyebrow: 'AI content engine',
      title: 'Your AI co-pilot for content.',
      desc: 'Generate titles, captions and hashtags from the media itself — image, video or audio — then let Kabon AI, your built-in agent, create, schedule and manage your content just by chatting.',
      bullets: [
        'Captions & hashtags generated from your media',
        'Reads image, video and audio — not just a prompt',
        'Kabon AI agent — create, schedule & analyze from chat',
      ],
      image: {
        light: '/features/ai-hero-light.webp',
        dark: '/features/ai-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiEdit3, title: 'Media-aware captions', desc: 'The AI reads your image, video or audio and writes captions that fit.' },
      { icon: FiMessageSquare, title: 'Kabon AI agent', desc: 'Ask it to create, schedule, caption or analyze — it does the work, not just the talk.' },
      { icon: FiZap, title: 'Rewrites & variations', desc: 'Regenerate a caption, try new angles, or shorten and expand in a click.' },
      { icon: FiLayers, title: 'Titles & hashtags', desc: 'Get a title, caption and matching hashtags in one pass.' },
    ],
    blocks: [
      {
        eyebrow: 'From media to caption',
        title: 'Upload a clip, get a caption that gets it.',
        desc: 'KabonShare looks at the actual media — not just a prompt — and writes titles, captions and hashtags that match what’s on screen.',
        bullets: [
          'Understands images, video and audio',
          'Title, caption and hashtags in one go',
          'Regenerate until it feels right',
        ],
        image: {
          light: '/features/ai-caption-light.webp',
          dark: '/features/ai-caption-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Meet Kabon AI',
        title: 'An assistant that does the work, not just the talk.',
        desc: 'Kabon AI is your in-app agent. Ask it to draft and schedule a week of posts, caption your latest upload, tidy your media library or pull last month’s numbers — it can do anything you can do in KabonShare, right from chat. It’s the same power as our MCP server, built right in.',
        bullets: [
          'Create, schedule and publish posts just by asking',
          'Caption media, manage assets and pull analytics',
          'Everything our MCP server can do — with zero setup',
        ],
        image: {
          light: '/features/ai-assistant-light.webp',
          dark: '/features/ai-assistant-dark.webp',
        },
        flip: true,
      },
    ],
  },

  {
    id: 'analytics',
    slug: 'social-media-analytics',
    label: 'Analytics',
    icon: FiTrendingUp,
    color: '#10b981',
    menuDesc: 'Performance, audience & best-time insights',
    seo: {
      title: 'Social Media Analytics — Performance & Audience Insights',
      description: 'Performance, audience and best-time insights for every connected account, pulled straight from each platform — so you always know what to post next.',
    },
    hero: {
      eyebrow: 'Analytics & insights',
      title: 'Know what works — everywhere.',
      desc: 'Performance, audience and best-time insights for every connected account — pulled straight from each platform, so you always know what to post next.',
      bullets: [
        'Every connected account’s insights in one place',
        'Per-post breakdowns with real platform metrics',
        'Engagement-window heatmaps for the best times',
      ],
      image: {
        light: '/features/analytics-hero-light.webp',
        dark: '/features/analytics-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiBarChart2, title: 'All your accounts', desc: 'Every connected account’s insights in one place — pick one and dive in.' },
      { icon: FiActivity, title: 'Post-level detail', desc: 'Drill into any post to see exactly how it performed.' },
      { icon: FiClock, title: 'Best-time analysis', desc: 'Heatmaps of the windows when your audience is most active.' },
      { icon: FiRadio, title: 'Live Followers', desc: 'Real-time follower counters live in their own dedicated view.' },
    ],
    blocks: [
      {
        eyebrow: 'The full picture',
        title: 'Every account’s numbers, in one place.',
        desc: 'Pick any connected account and see reach, engagement and audience insights — pulled straight from the platform, not estimated.',
        bullets: [
          'Reach, impressions & engagement rate',
          'Audience demographics — country, age & gender',
          'Trends over time, per account',
        ],
        image: {
          light: '/features/analytics-audience-light.webp',
          dark: '/features/analytics-audience-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Post smarter',
        title: 'Learn what to post next — from your own data.',
        desc: 'Per-post insights and engagement-window analysis turn your history into a playbook, so every next post is a more confident one.',
        bullets: [
          'Top-performing content surfaced',
          'Engagement-window heatmaps',
          'Real platform metrics, not estimates',
        ],
        image: {
          light: '/features/analytics-heatmap-light.webp',
          dark: '/features/analytics-heatmap-dark.webp',
        },
        flip: true,
      },
    ],
  },

  {
    id: 'followers',
    slug: 'live-follower-count',
    label: 'Live Followers',
    icon: FiRadio,
    color: '#14b8a6',
    menuDesc: 'Real-time follower counters for every account',
    seo: {
      title: 'Live Follower Count — Real-Time Counter for Every Account',
      description: 'Watch follower counts tick up in real time across every connected account, with a full-screen counter built for live streams, events and office-wall displays.',
    },
    hero: {
      eyebrow: 'Real-time follower counts',
      title: 'Your follower count, live.',
      desc: 'Watch follower counts tick up in real time across every connected account — with a full-screen counter you can put on a stream, an event screen or the office wall.',
      bullets: [
        'Real-time counts, updated the moment they change',
        'Full-screen counter for streams and events',
        'Every connected platform in one place',
      ],
      image: {
        light: '/features/followers-hero-light.webp',
        dark: '/features/followers-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiActivity, title: 'Truly real-time', desc: 'Counts stream in live over a socket — no refreshing, no waiting.' },
      { icon: FiEye, title: 'Full-screen mode', desc: 'A big, animated counter built for stream overlays and event screens.' },
      { icon: FiGrid, title: 'Every account', desc: 'Switch between any connected platform in a tap.' },
      { icon: FiTrendingUp, title: 'Smooth counting', desc: 'The number animates as it climbs — every new follower feels like a moment.' },
    ],
    blocks: [
      {
        eyebrow: 'Feel every follower',
        title: 'A live counter that turns growth into a moment.',
        desc: 'Pick any connected account and KabonShare streams its follower count in real time, animating each change so a new follower actually feels like one.',
        bullets: [
          'Live count over a real-time socket',
          'Smoothly animated as it changes',
          'Profile photo and handle right on screen',
        ],
        image: '/features/followers-live.webp',
        flip: false,
      },
      {
        eyebrow: 'Put it on the big screen',
        title: 'Made for streams, launches and the office wall.',
        desc: 'Go full-screen for a clean, broadcast-ready counter — perfect for live streams, product launches or an always-on display in the studio.',
        bullets: [
          'One-tap full-screen mode',
          'Clean, broadcast-ready design',
          'Great for launches and live events',
        ],
        image: '/features/followers-launch.webp',
        flip: true,
      },
    ],
  },

  {
    id: 'collaboration',
    slug: 'team-collaboration',
    label: 'Collaboration',
    icon: FiUsers,
    color: '#3b82f6',
    menuDesc: 'Client invites, workspaces, approvals & chat',
    seo: {
      title: 'Social Media Team Collaboration — Approvals, Comments & Chat',
      description: 'Multiple workspaces, granular roles, configurable multi-stage approval flows, threaded post comments and built-in team chat — from planning to publishing.',
    },
    hero: {
      eyebrow: 'Teams & approvals',
      title: 'Collaboration without the chaos.',
      desc: 'Multiple workspaces, granular roles, configurable approval flows, post comments and built-in team chat — from planning to publishing.',
      bullets: [
        'Invite clients to connect their own accounts — no password sharing',
        'Multi-workspace with granular permissions',
        'Configurable, multi-stage approval flows',
      ],
      image: {
        light: '/features/collaboration-hero-light.webp',
        dark: '/features/collaboration-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiKey, title: 'Client invites', desc: 'Send a link — they connect their own accounts, no password sharing.' },
      { icon: FiGrid, title: 'Workspaces', desc: 'Separate clients or brands, each with the right access.' },
      { icon: FiCheck, title: 'Approvals', desc: 'Route posts through review before anything goes live.' },
      { icon: FiMessageSquare, title: 'Comments & chat', desc: 'Feedback lives on the post, not in email threads.' },
    ],
    blocks: [
      {
        eyebrow: 'Ship with confidence',
        title: 'Approvals that fit how your team actually works.',
        desc: 'Build multi-stage approval flows so the right people sign off before anything publishes — with a clear trail of who approved what.',
        bullets: [
          'Multi-stage, configurable flows',
          'Role-based sign-off',
          'Full activity history',
        ],
        image: {
          light: '/features/collaboration-workspace-light.webp',
          dark: '/features/collaboration-workspace-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Keep everyone in sync',
        title: 'Feedback and chat, right where the work is.',
        desc: 'Comment directly on a post, mention teammates, and use built-in chat — so context never gets lost between tools.',
        bullets: [
          'Threaded comments per post',
          '@mentions and notifications',
          'Built-in team chat',
        ],
        image: {
          light: '/features/collaboration-feedback-light.webp',
          dark: '/features/collaboration-feedback-dark.webp',
        },
        flip: true,
      },
      {
        eyebrow: 'Onboarding clients',
        title: 'Never ask a client for their password again.',
        desc: 'Send a link. They approve their own accounts with each platform directly, and the connections land in your workspace — no signup, no shared logins, nothing for them to learn.',
        bullets: [
          'One link, as many accounts as you need',
          'They authorise with the platform — you never see their password',
          'Links expire, and you can revoke one any time',
        ],
        // null until the screenshot exists — Shot() renders a styled placeholder
        // for null, but a path to a missing file renders a broken image.
        // Replace with { light, dark } once /public/features has the shots.
        image: null,
        flip: false,
      },
    ],
  },

  {
    id: 'live',
    slug: 'live-streaming-multistream',
    label: 'Streaming',
    icon: FiVideo,
    color: '#f43f5e',
    menuDesc: 'Multistream from the desktop studio',
    seo: {
      title: 'Multistream Live Streaming Studio — Go Live Everywhere at Once',
      description: 'A desktop studio that streams one broadcast to multiple platforms simultaneously, with scenes, overlays and a built-in video editor with AI auto-captions.',
    },
    hero: {
      eyebrow: 'Live streaming studio',
      title: 'Go live everywhere at once.',
      desc: 'A desktop studio that streams one broadcast to multiple platforms simultaneously — plus a built-in video editor for your clips.',
      bullets: [
        'Multistream to several platforms at once',
        'Desktop studio with scenes and overlays',
        'Built-in video editor with AI auto-captions',
      ],
      image: null,
    },
    benefits: [
      { icon: FiRadio, title: 'Multistream', desc: 'One broadcast, every platform — no extra encoders.' },
      { icon: FiVideo, title: 'Desktop studio', desc: 'Scenes, overlays and camera sources in a native app.' },
      { icon: FiLayers, title: 'Overlays & scenes', desc: 'Add lower-thirds and logos, and switch scenes on the fly.' },
      { icon: FiScissors, title: 'Video editor', desc: 'Trim footage into clips and reels with AI captions.' },
    ],
    blocks: [
      {
        eyebrow: 'One broadcast, everywhere',
        title: 'Stream to every platform simultaneously.',
        desc: 'Point one broadcast at all your channels at once. The desktop studio handles scenes, overlays and camera sources like a pro setup.',
        bullets: [
          'Simultaneous multistreaming',
          'Scenes, overlays and camera sources',
          'No third-party encoder needed',
        ],
        image: null,
        flip: false,
      },
      {
        eyebrow: 'Edit and repurpose',
        title: 'Turn your footage into a week of content.',
        desc: 'Bring any video into the built-in editor, trim highlights into reels and shorts, and let AI transcription add captions automatically.',
        bullets: [
          'Full video editor built in',
          'AI auto-captions from transcription',
          'Publish straight to your queue',
        ],
        image: null,
        flip: true,
      },
    ],
  },

  {
    id: 'media',
    slug: 'media-library',
    label: 'Media Library',
    icon: FiFolder,
    color: '#f59e0b',
    menuDesc: 'Assets + Drive, Dropbox & Canva imports',
    seo: {
      title: 'Social Media Asset Library — Drive, Dropbox & Canva Imports',
      description: 'A central asset library with folders, tags and search, plus one-click imports from Google Drive, Dropbox, Canva, Unsplash, Pexels and Giphy.',
    },
    hero: {
      eyebrow: 'Media library & integrations',
      title: 'All your assets, one place.',
      desc: 'A central asset library with folders and tags, plus one-click imports from Google Drive, Dropbox, Canva, Unsplash, Pexels and Giphy.',
      bullets: [
        'Central library with folders, tags & search',
        'Import from Drive, Dropbox & Canva',
        'Royalty-free media via Unsplash, Pexels & Giphy',
      ],
      image: {
        light: '/features/media-hero-light.webp',
        dark: '/features/media-hero-dark.webp',
      },
    },
    benefits: [
      { icon: FiFolder, title: 'Organized', desc: 'Folders, tags and search keep large libraries tidy.' },
      { icon: FiUpload, title: 'Integrations', desc: 'Pull files straight from the tools you already use.' },
      { icon: FiTag, title: 'Reusable', desc: 'Use any asset across posts, platforms and workspaces.' },
      { icon: FiGrid, title: 'Stock & GIFs', desc: 'Unsplash, Pexels and Giphy built right in.' },
    ],
    blocks: [
      {
        eyebrow: 'Never lose an asset',
        title: 'A library that scales with your brand.',
        desc: 'Store everything in one place with folders, tags and fast search — then reuse any asset across every post and workspace.',
        bullets: [
          'Folders, tags and instant search',
          'Reuse across posts and teams',
          'Thumbnails don’t count to your quota',
        ],
        image: {
          light: '/features/media-library-light.webp',
          dark: '/features/media-library-dark.webp',
        },
        flip: false,
      },
      {
        eyebrow: 'Bring your tools',
        title: 'Import from the apps you already live in.',
        desc: 'Pull media straight from Google Drive, Dropbox and Canva, or grab royalty-free photos and GIFs from Unsplash, Pexels and Giphy.',
        bullets: [
          'Google Drive, Dropbox & Canva',
          'Unsplash, Pexels & Giphy',
          'We only touch the files you pick',
        ],
        image: {
          light: '/features/media-import-light.webp',
          dark: '/features/media-import-dark.webp',
        },
        flip: true,
      },
    ],
  },

  {
    id: 'api',
    slug: 'social-media-api',
    label: 'Developer API',
    icon: FiCode,
    color: '#06b6d4',
    menuDesc: 'REST API, MCP server & webhooks',
    seo: {
      title: 'Social Media Publishing API — REST API, MCP Server & Webhooks',
      description: 'KabonShare is API-first. Publish and schedule across 9 networks over a clean REST API, react to webhooks, or drive it all from any AI client via our MCP server.',
    },
    hero: {
      eyebrow: 'Developer API',
      title: 'Publishing, programmable.',
      desc: 'KabonShare is API-first. Publish and schedule over a clean REST API, react to webhooks, or drive everything from any AI client through our official MCP server.',
      bullets: [
        'API-first — everything in the app is in the API',
        'Official MCP server for AI clients (Claude, Cursor…)',
        'Publish, schedule and read analytics programmatically',
      ],
      link: { label: 'Read the docs', href: siteConfig.api.docs },
      code: {
        label: 'POST /api/posts',
        text: `curl -X POST https://api.kabonshare.com/api/posts \\
  -H "X-API-Key: $KABONSHARE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workspaceId": "ws_123",
    "text": "Shipping today 🚀",
    "platforms": ["instagram", "linkedin"],
    "scheduledFor": "2026-07-20T15:00:00Z"
  }'`,
      },
    },
    benefits: [
      { icon: FiCode, title: 'API-first', desc: 'The whole platform runs on the same public REST API.' },
      { icon: FiZap, title: 'MCP server', desc: 'Drive KabonShare from Claude, Cursor or any MCP client.' },
      { icon: FiActivity, title: 'Webhooks', desc: 'Fire on publish, failure, scheduled and analytics events.' },
      { icon: FiKey, title: 'Secure API key', desc: 'Authenticate with a secret key; pick the workspace per request.' },
    ],
    blocks: [
      {
        eyebrow: 'Build on top',
        title: 'Everything the app does, your code can too.',
        desc: 'Create posts, schedule them, manage accounts and read analytics — all through a clean, documented REST API.',
        bullets: [
          'Create, schedule and publish posts',
          'Manage accounts and workspaces',
          'Read analytics programmatically',
        ],
        code: {
          label: 'API reference',
          text: `POST   /api/posts                 create & schedule a post
GET    /api/posts                 list & filter posts
POST   /api/posts/bulk            bulk-schedule a batch
GET    /api/analytics/best-times  best time to post
GET    /api/assets                browse the media library

# Auth: X-API-Key header · workspace via workspaceId`,
        },
        flip: false,
      },
      {
        eyebrow: 'Bring it into your AI stack',
        title: 'Connect your agents, tools and products.',
        desc: 'Plug our MCP server into Claude, Cursor or your own agents to create posts, manage assets and pull analytics — and use webhooks to react to events in real time.',
        bullets: [
          'Official MCP server for AI clients',
          'Webhooks for publish, failure & schedule events',
          'Full reference docs and examples',
        ],
        code: {
          label: 'claude_desktop_config.json',
          text: `{
  "mcpServers": {
    "kabonshare": {
      "command": "npx",
      "args": ["-y", "kabonshare-mcp"],
      "env": {
        "KABONSHARE_API_KEY": "your_api_key"
      }
    }
  }
}`,
        },
        flip: true,
      },
    ],
  },
]

// Convenience maps for lookups by id and by URL slug.
export const FEATURE_BY_ID = Object.fromEntries(FEATURES.map((f) => [f.id, f]))
export const FEATURE_BY_SLUG = Object.fromEntries(FEATURES.map((f) => [f.slug, f]))
