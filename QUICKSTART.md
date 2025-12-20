# Quick Start Guide - Media Share API Landing Page

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd media-share-landing
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
media-share-landing/
├── components/           # React components
│   ├── Hero.js          # Hero section
│   ├── Features.js      # Features section
│   ├── UseCases.js      # Use cases section
│   ├── Platforms.js     # Platforms table
│   ├── Pricing.js       # Pricing cards
│   ├── DeveloperExperience.js  # Code examples
│   ├── StatsTestimonials.js    # Stats & testimonials
│   ├── ContactSupport.js       # Contact section
│   └── Footer.js        # Footer
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # HTML document
│   └── index.js         # Home page
├── styles/
│   └── globals.css      # Global styles
├── public/              # Static files
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind config
├── postcss.config.js    # PostCSS config
└── next.config.js       # Next.js config
```

---

## 🎨 Customization Guide

### 1. Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#667eea',    // Your primary color
  secondary: '#764ba2',  // Your secondary color
  // ... more colors
}
```

### 2. Update Content
Each section has its own component file. Example for pricing:

Open `components/Pricing.js` and modify the `pricingPlans` array:
```javascript
const pricingPlans = [
  {
    name: 'Free Tier',
    price: '$0',
    features: ['100 posts/month', ...],
    // ...
  }
]
```

### 3. Update Links
- **API URLs**: Search for `https://api.media-share.io` and replace
- **Email**: Search for `support@media-share.io` and replace
- **Social Links**: Edit `Footer.js` socialLinks array

### 4. Add Your Logo
Replace the text logo in `Hero.js`:
```javascript
// Replace this:
<h1>Media Share API</h1>

// With:
<Image src="/logo.png" alt="Logo" />
```

---

## 🎯 Key Features to Customize

### Hero Section (`components/Hero.js`)
- Main headline
- Subheadline
- CTA button links
- Background animations

### Features Section (`components/Features.js`)
- 7 feature cards
- Icons and colors
- Code examples
- Benefits

### Pricing Section (`components/Pricing.js`)
- 4 pricing tiers
- Features per tier
- CTA buttons
- Popular badge

### Developer Experience (`components/DeveloperExperience.js`)
- Code examples (Node.js, Python, cURL)
- API documentation link
- Developer benefits

---

## 📱 Mobile Responsive

The landing page is fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Test on different devices using browser dev tools.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder to Netlify

---

## ✅ Pre-Launch Checklist

- [ ] Update all placeholder text
- [ ] Replace email addresses
- [ ] Add your logo and favicon
- [ ] Update API base URL
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Add Google Analytics
- [ ] Test contact forms
- [ ] Check SEO meta tags
- [ ] Optimize images
- [ ] Test loading speed
- [ ] Enable dark mode (already included)

---

## 🔧 Troubleshooting

### Issue: Page not loading
**Solution**: Make sure you ran `npm install` first

### Issue: Styles not working
**Solution**: Check that Tailwind is properly configured in `postcss.config.js`

### Issue: Animations not working
**Solution**: Verify Framer Motion is installed: `npm install framer-motion`

### Issue: Build errors
**Solution**: Run `npm run build` to see detailed errors

---

## 📝 Additional Notes

### Adding New Sections
1. Create component in `components/NewSection.js`
2. Import in `pages/index.js`
3. Add to the page layout

### Modifying Animations
All animations use Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Dark Mode
Dark mode is already configured using Tailwind's `dark:` prefix:
```javascript
className="bg-white dark:bg-gray-900"
```

---

## 🆘 Need Help?

- Check the main README.md
- Review component code comments
- Test in browser dev tools
- Check Next.js documentation
- Review Tailwind CSS docs

---

**Ready to launch? Let's go! 🚀**
