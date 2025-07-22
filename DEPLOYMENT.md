# 🚀 Vercel Deployment Guide

## Quick Deploy

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/astral-corp-portfolio)

### Manual Deployment Steps

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```
   Framework Preset: Other
   Build Command: cd client && npm run build
   Output Directory: client/dist
   Install Command: npm install
   ```

3. **Environment Variables** (Optional)
   ```
   VITE_APP_TITLE=ASTRAL Corp - Premium Digital Services
   VITE_CONTACT_EMAIL=info.astralcorp@gmail.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build completion
   - Your site will be live at `https://your-project.vercel.app`

## Build Configuration

### Vercel.json Configuration
The `vercel.json` file is configured with:
- **Build Command**: `cd client && npm run build`
- **Output Directory**: `client/dist`
- **Security Headers**: XSS protection, clickjacking prevention
- **Cache Control**: Optimized for static assets
- **SPA Routing**: All routes redirect to index.html

### Vite Configuration
The `client/vite.config.ts` includes:
- **PWA Support**: Service worker and manifest
- **Code Splitting**: Vendor, UI, motion, icons chunks
- **Image Optimization**: Cache strategies for external images
- **Bundle Analysis**: Visualizer for build analysis

## Performance Optimizations

### Automatic Optimizations
- **Code Splitting**: Reduces initial bundle size
- **Tree Shaking**: Eliminates unused code
- **Minification**: Terser optimization
- **Asset Optimization**: Images, fonts, and static files
- **Cache Headers**: Long-term caching for static assets

### Service Worker Caching
- **External Images**: Unsplash, Cloudinary caching
- **Google Fonts**: Aggressive caching strategy
- **Static Assets**: Long-term browser caching
- **Runtime Caching**: Network-first for dynamic content

## Domain Configuration

### Custom Domain Setup
1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Records**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### SSL Certificate
- Automatically provisioned by Vercel
- Includes www and apex domain
- Auto-renewal handled by Vercel

## Monitoring & Analytics

### Built-in Vercel Analytics
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Performance Insights**: Real user monitoring
- **Error Tracking**: Runtime error monitoring

### Additional Analytics (Optional)
```javascript
// Add to environment variables
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX
```

## SEO & Social Media

### Meta Tags Included
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for rich snippets
- **Robots.txt**: Search engine instructions
- **Sitemap.xml**: Complete site structure

### Social Media Optimization
- **Preview Images**: Auto-generated og:image
- **Rich Snippets**: Enhanced search results
- **Social Sharing**: Optimized for all platforms

## Security Features

### HTTP Security Headers
```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY", 
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
}
```

### Content Security Policy
- **XSS Protection**: Prevents cross-site scripting
- **Click-jacking Prevention**: Frame-options protection
- **HTTPS Enforcement**: Secure transport only

## Troubleshooting

### Common Build Issues

1. **Node Version**
   ```bash
   # Ensure Node.js 18+ is used
   node --version
   ```

2. **Dependencies**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build Locally**
   ```bash
   # Test build locally first
   cd client && npm run build
   npm run preview
   ```

### Performance Issues
- **Bundle Size**: Check with `npm run build` and analyze bundle
- **Images**: Optimize large images before deployment
- **External Resources**: Verify CDN response times

### Debugging
- **Vercel Logs**: Check function logs in Vercel dashboard
- **Browser DevTools**: Network and Performance tabs
- **Lighthouse**: Run audits for optimization opportunities

## Environment-Specific Configuration

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Preview
```bash
npm run build
npm run preview
# Preview production build locally
```

### Vercel Edge Functions (Future)
Ready for serverless functions if needed:
```javascript
// api/contact.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel' })
}
```

## Backup & Recovery

### GitHub Integration
- **Automatic Deployments**: Every push to main branch
- **Preview Deployments**: All pull requests
- **Rollback**: Easy rollback to previous deployments

### Data Backup
- **Repository**: GitHub as source of truth
- **Deployment History**: Vercel maintains deployment history
- **Configuration**: vercel.json version controlled

## Cost Optimization

### Vercel Free Tier Limits
- **Bandwidth**: 100GB/month
- **Build Time**: 6,000 minutes/month
- **Serverless Functions**: 100GB-Hrs/month
- **Edge Functions**: 500,000 invocations/month

### Pro Tips
- **Image Optimization**: Use external CDN for large images
- **Static Assets**: Leverage aggressive caching
- **Bundle Size**: Keep JavaScript bundles under 200KB
- **Edge Caching**: Utilize Vercel's global CDN

---

**Your ASTRAL Corp website is now fully optimized and ready for Vercel deployment!**