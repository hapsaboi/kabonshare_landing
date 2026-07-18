import {
  HiOutlineVideoCamera, HiOutlineOfficeBuilding, HiOutlineChartBar,
  HiOutlineCode, HiOutlineAcademicCap,
} from 'react-icons/hi'

// Shared source for the Use Cases nav dropdown and the /case-studies tabs,
// so the menu and the page stay in sync (mirrors how FEATURES works).
export const USE_CASES = [
  { id: 'creators', label: 'Creators',          icon: HiOutlineVideoCamera,    color: '#8b5cf6', menuDesc: 'Post once, grow on every network', highlights: ['9 networks, one upload', 'AI captions', 'Best-time scheduling'] },
  { id: 'agencies', label: 'Agencies',          icon: HiOutlineOfficeBuilding, color: '#3b82f6', menuDesc: 'Every client from one login',       highlights: ['Client workspaces', 'Approvals', 'Per-client reporting'] },
  { id: 'brands',   label: 'Brands',            icon: HiOutlineChartBar,       color: '#f59e0b', menuDesc: 'Run campaigns, not spreadsheets',   highlights: ['Shared calendar', 'Approval flows', 'Brand library'] },
  { id: 'saas',     label: 'SaaS & Developers', icon: HiOutlineCode,           color: '#10b981', menuDesc: 'Ship social publishing via API',    highlights: ['One REST API', 'Webhooks', 'MCP server'] },
  { id: 'schools',  label: 'Schools',           icon: HiOutlineAcademicCap,    color: '#0ea5e9', menuDesc: 'One voice across every department', highlights: ['Department spaces', 'Comms approval', 'Campus calendar'] },
]
