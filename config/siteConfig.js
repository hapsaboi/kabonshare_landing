export const siteConfig = {
  name: 'Media Share',
  description: 'Publish Once, Reach Everyone',
  url: 'https://kabonshare.com',
  
  contact: {
    support: 'info@kabonshare.com',
    sales: 'info@kabonshare.com',
    privacy: 'info@kabonshare.com',
    legal: 'info@kabonshare.com',
  },
  
  social: {
    twitter: 'https://twitter.com/kabonshare',
    linkedin: 'https://linkedin.com/company/kabonshare',
    github: 'https://github.com/kabonshare',
    discord: 'https://discord.gg/kabonshare',
  },
  
  address: {
    line1: '123 Tech Street',
    line2: 'Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    country: 'United States'
  },
  
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.kabonshare.com',
    docs: 'https://docs.kabonshare.com'
  }
}
