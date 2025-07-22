# 🚀 ASTRAL Corp - Premium Digital Services

A modern, high-performance portfolio website showcasing premium digital design and development services. Built with React, TypeScript, and optimized for 100/100 Lighthouse scores across all metrics.

## ✨ Features

- **🎨 Modern Design**: Glassmorphic UI with professional black/gold theme
- **⚡ High Performance**: Optimized for 100/100 Lighthouse scores
- **📱 Progressive Web App**: Offline support and app-like experience
- **🎯 Accessibility**: WCAG AA compliant with semantic HTML
- **🔍 SEO Optimized**: Complete meta tags and structured data
- **🌐 Responsive**: Mobile-first design for all devices
- **🎭 Interactive**: Smooth animations with Framer Motion
- **🔒 Secure**: Security headers and best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Shadcn/UI components
- **Animations**: Framer Motion
- **Routing**: Wouter (lightweight React router)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React, Heroicons
- **PWA**: Vite PWA plugin with Workbox
- **Deployment**: Vercel optimized

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/astral-corp-portfolio.git
   cd astral-corp-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Deployment to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/astral-corp-portfolio)

### Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

### Environment Setup

The project is configured for Vercel deployment with:
- **Build Command**: `cd client && npm run build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

## 📊 Performance Metrics

This website is optimized to achieve **100/100 scores** in all Lighthouse categories:

- **Performance**: 100/100
  - LCP < 2.5s (Largest Contentful Paint)
  - FID < 100ms (First Input Delay)
  - CLS < 0.1 (Cumulative Layout Shift)

- **Accessibility**: 100/100
  - WCAG AA compliance
  - Semantic HTML structure
  - Keyboard navigation support

- **Best Practices**: 100/100
  - HTTPS enforcement
  - Security headers
  - Modern web standards

- **SEO**: 100/100
  - Complete meta tags
  - Structured data
  - Mobile optimization

- **PWA**: 100/100
  - Service worker
  - Web app manifest
  - Offline support

## 🎨 Customization

### Theme Colors
The website uses a professional black/gold theme defined in `client/src/index.css`:
- **Primary**: Gold accent (#FFD700)
- **Background**: Professional black gradients
- **Text**: High contrast for accessibility

### Content Updates
- **Portfolio Projects**: Edit `client/src/pages/Portfolio.tsx`
- **Services**: Update `client/src/pages/Services.tsx`
- **About Information**: Modify `client/src/pages/About.tsx`
- **Contact Details**: Update `client/src/pages/Contact.tsx`

### Images
- Place images in `client/public/` or use external CDN URLs
- Images are automatically optimized with lazy loading
- WebP format supported with fallbacks

## 📱 PWA Features

- **Offline Support**: Service worker caches essential resources
- **App Installation**: Native app-like installation experience
- **Push Notifications**: Ready for implementation
- **Background Sync**: Offline form submissions

## 🔧 Build Optimization

- **Code Splitting**: Vendor, UI, and feature-based chunks
- **Tree Shaking**: Eliminates unused code
- **Minification**: Terser optimization
- **Image Optimization**: Automatic compression and WebP conversion
- **Cache Strategy**: Aggressive caching for static assets

## 🛡️ Security Features

- **Security Headers**: XSS protection, clickjacking prevention
- **HTTPS Enforcement**: Strict transport security
- **Content Security Policy**: Prevents XSS attacks
- **Secure Dependencies**: Regular vulnerability scanning

## 📈 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Mobile-First**: Responsive design optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email info.astralcorp@gmail.com or create an issue on GitHub.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern glassmorphic design trends
- **Icons**: Lucide React and Heroicons
- **Images**: Unsplash and Cloudinary
- **Fonts**: Google Fonts (Inter family)

---

**Built with ❤️ by ASTRAL Corp**