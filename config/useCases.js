import {
  HiOutlineVideoCamera, HiOutlineOfficeBuilding, HiOutlineChartBar,
  HiOutlineCode, HiOutlineAcademicCap,
} from 'react-icons/hi'

// Shared source for the Use Cases nav dropdown and the /case-studies hub +
// per-audience pages, so the menu and the pages stay in sync (mirrors FEATURES).
// `slug` + `seo` drive the individual /case-studies/<slug> pages; the rich page
// content lives in components/caseStudySections.js (keyed by the same id).
export const USE_CASES = [
  {
    id: 'creators', slug: 'social-media-for-creators', label: 'Creators',
    icon: HiOutlineVideoCamera, color: '#8b5cf6',
    menuDesc: 'Post once, grow on every network',
    highlights: ['9 networks, one upload', 'AI captions', 'Best-time scheduling'],
    seo: {
      title: 'Social Media Management for Creators — Post Once, Grow Everywhere',
      description: 'Upload one video and publish it as a Reel, Short, TikTok and Thread — each AI-captioned and scheduled for the best time. Reach all 9 networks from one place.',
    },
  },
  {
    id: 'agencies', slug: 'social-media-for-agencies', label: 'Agencies',
    icon: HiOutlineOfficeBuilding, color: '#3b82f6',
    menuDesc: 'Every client from one login',
    highlights: ['Client invites', 'Client workspaces', 'Per-client reporting'],
    seo: {
      title: 'Social Media Management for Agencies & Freelancers — Every Client, One Login',
      description: 'Invite clients to connect their own accounts — no password sharing. Run unlimited client workspaces from one account, with separate calendars, roles, approval flows and per-client reporting.',
    },
  },
  {
    id: 'brands', slug: 'social-media-for-brands', label: 'Brands',
    icon: HiOutlineChartBar, color: '#f59e0b',
    menuDesc: 'Run campaigns, not spreadsheets',
    highlights: ['Shared calendar', 'Approval flows', 'Brand library'],
    seo: {
      title: 'Social Media Management for Brands — Run Campaigns, Not Spreadsheets',
      description: 'Plan, assign, approve and publish every campaign in one place, with a shared content calendar, approval flows and a brand library that keeps assets on-brand.',
    },
  },
  {
    id: 'saas', slug: 'social-media-for-saas', label: 'SaaS & Developers',
    icon: HiOutlineCode, color: '#10b981',
    menuDesc: 'Ship social publishing via API',
    highlights: ['One REST API', 'Webhooks', 'MCP server'],
    seo: {
      title: 'Social Media API for SaaS & Developers — Ship Publishing in an Afternoon',
      description: 'One REST API for all 9 networks. We own OAuth, token refresh, rate limits and every platform change — so your engineers ship product, not social plumbing.',
    },
  },
  {
    id: 'schools', slug: 'social-media-for-schools', label: 'Schools',
    icon: HiOutlineAcademicCap, color: '#0ea5e9',
    menuDesc: 'One voice across every department',
    highlights: ['Department spaces', 'Comms approval', 'Campus calendar'],
    seo: {
      title: 'Social Media Management for Schools — One Voice, Every Department',
      description: 'Athletics, admissions, alumni and the library — every department publishing on-brand and on-schedule, with the comms team approving what goes out, from one account.',
    },
  },
]

export const USE_CASE_BY_ID = Object.fromEntries(USE_CASES.map((u) => [u.id, u]))
export const USE_CASE_BY_SLUG = Object.fromEntries(USE_CASES.map((u) => [u.slug, u]))
