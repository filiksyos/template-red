# Template Red

🎨 A beautiful, production-ready Next.js template with reddish theme and Stripe integration. No authentication or database required - just pure speed and style.

## Features

- ⚡ **Built with Next.js 15** - Latest version for optimal performance
- 🎨 **Reddish Theme** - Stunning red color palette with dark mode support
- 💳 **Stripe Ready** - Pre-configured for payment integration
- 🎬 **Video Modal** - Built-in video demonstration component
- 🎯 **TypeScript** - Fully typed for better developer experience
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚙️ **Zero Auth/DB Setup** - No authentication or database required
- 🚀 **Production Ready** - ESLint, proper folder structure, best practices
- 🌓 **Dark Mode** - Full dark mode support built-in

## Tech Stack

- **Framework**: Next.js 15.1.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 12.4.3
- **Icons**: Lucide React + React Icons
- **Payments**: Stripe
- **Language**: TypeScript 5
- **Analytics**: Vercel Analytics

## Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/template-red.git
   cd template-red
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
template-red/
├── app/
│   ├── layout.tsx          # Root layout with TopBar
│   ├── page.tsx            # Landing page with all sections
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── TopBar.tsx          # Navigation bar with mobile menu
│   ├── TypewriterEffect.tsx # Animated text component
│   ├── VideoModal.tsx      # Video player modal
│   └── LoadingSpinner.tsx  # Loading indicator
├── types/
│   └── index.ts            # TypeScript interfaces
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration with red theme
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## Color Palette

### Primary Colors (Red)
- **Primary**: `#DC2626` - Bold red
- **Primary Light**: `#EF4444` - Bright red
- **Primary Dark**: `#991B1B` - Deep red

### Accent Colors
- **Accent**: `#991B1B` - Deep accent red
- **Accent Light**: `#B91C1C` - Medium red
- **Accent Dark**: `#7F1D1D` - Very dark red

### Neutral Colors
- **Light**: `#F8FAFC` - Crisp light (Slate-50)
- **Dark**: `#1E293B` - Rich dark (Slate-800)
- **Darker**: `#0F172A` - Deep dark (Slate-900)

## Customization

### Changing the Theme Color
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#DC2626', // Change primary color here
    light: '#EF4444',
    dark: '#991B1B',
  },
  // ... more colors
}
```

### Adding New Pages
Create new files in the `app/` directory:

```tsx
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>
}
```

### Creating New Components
Create component files in `components/` and import them:

```tsx
// components/MyComponent.tsx
export function MyComponent() {
  return <div>My Component</div>
}

// Use in pages
import { MyComponent } from '@/components/MyComponent'
```

## Environment Variables

No environment variables are required to run this template. However, you can optionally configure Stripe or analytics:

Create a `.env.local` file:

```env
# Optional: Stripe Integration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=...
```

## Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure your project.

### Deploy to Other Platforms

Template Red works on any platform that supports Node.js:
- **Netlify** - Connect your GitHub repo
- **Railway** - Connect your repo and deploy
- **Render** - Select Next.js environment
- **Heroku** - Use buildpack for Node.js
- **AWS Amplify** - Connect and deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS-in-JS for minimal bundle size
- ✅ Vercel Analytics integration
- ✅ SEO optimized with meta tags

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run lint
npm run build
```

### TypeScript errors
Make sure you have the latest TypeScript version:
```bash
npm install typescript@latest --save-dev
```

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this template for personal and commercial projects.

See [LICENSE](LICENSE) file for details.

## Support

For issues and questions:
1. Check existing [GitHub Issues](https://github.com/filiksyos/template-red/issues)
2. Create a new issue with detailed description
3. Include your Node.js version and steps to reproduce

## Credits

- Built with ❤️ using modern web technologies
- Theme inspired by the latest design trends
- Original template concept by [ShenSeanChen](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase)

---

**Made with Template Red - Build faster, style better.** 🚀
