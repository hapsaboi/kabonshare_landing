export const siteConfig = {
  name: 'KabonShare',
  tagline: 'Publish Once, Reach Everyone',
  description: 'Publish to Instagram, Facebook, Threads, TikTok, and YouTube from one platform. Mobile app, web dashboard, or developer API — schedule, manage, and grow your social presence effortlessly.',
  url: 'https://kabonshare.com',
  
  contact: {
    support: 'support@kabonshare.com',
    info: 'info@kabonshare.com',
    enterprise: 'support@kabonshare.com',
  },
  
  phone: '+234 812 435 4170',
  
  social: {
    twitter: 'https://x.com/kabonshare',
    instagram: 'https://www.instagram.com/kabonshare/',
    youtube: 'https://www.youtube.com/@kabonshare',
  },

  // Registered company name, used on About and anywhere the legal entity (rather
  // than the product) is being identified — payment-provider KYB reviews check
  // that the site names the same entity that holds the merchant account.
  legalName: 'KabonShare Limited',

  address: {
    line1: '13A Hospital Road',
    line2: 'Yola North',
    city: 'Adamawa State',
    country: 'Nigeria'
  },
  
  dashboard: 'https://dashboard.kabonshare.com',
  
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.kabonshare.com',
    docs: 'https://docs.kabonshare.com'
  }
}
