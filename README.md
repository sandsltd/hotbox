# HOTBOX Social - Sauna & Cold Plunge Website

A modern, responsive website for HOTBOX Social, a sauna and cold plunge business based in Bristol. Built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist layout with strong contrast between warmth (sauna) and freshness (plunge)
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animations**: Smooth animations using Framer Motion for enhanced user experience
- **SEO Optimized**: Proper meta tags, structured headings, and accessibility considerations
- **Contact Form**: Functional booking/contact form with validation
- **Event Calendar**: Special events and workshops listing
- **Benefits Pages**: Detailed information about sauna and cold plunge benefits

## 🎨 Design System

### Color Palette
- **Sauna Colors**: Deep earthy tones (warm browns, oranges, gold)
- **Plunge Colors**: Cool blues (deep blue, ice blue, fresh blue)
- **Neutral Colors**: Dark and light grays for balance

### Typography
- **Headings**: Larken (stylish, bold)
- **Body**: DM Sans (clean and modern)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── sauna-benefits/
│   │   └── page.tsx            # Sauna benefits page
│   ├── cold-plunge-benefits/
│   │   └── page.tsx            # Cold plunge benefits page
│   ├── events/
│   │   └── page.tsx            # Special events page
│   ├── contact/
│   │   └── page.tsx            # Contact/booking page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Navigation.tsx          # Navigation component
│   ├── HeroSection.tsx         # Hero section component
│   └── Footer.tsx              # Footer component
└── ...
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **DM Sans**: Google Font for body text
- **Larken**: Custom font for headings

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hotbox-social
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

### Home Page (`/`)
- Hero section with split visual design (sauna steam left, water splash right)
- Bold, engaging headlines using Larken font
- Clear call-to-action directing to booking form

### Sauna Benefits (`/sauna-benefits`)
- Detailed information about sauna therapy benefits
- Health and lifestyle benefits with strong visuals
- How the sauna experience works

### Cold Plunge Benefits (`/cold-plunge-benefits`)
- Comprehensive guide to cold therapy benefits
- Scientific explanation of physiological responses
- Safety guidelines and experience overview

### Special Events (`/events`)
- Calendar-style event listing
- Workshops, social sessions, and wellness events
- Booking integration for events

### Contact/Booking (`/contact`)
- Comprehensive booking form
- Contact information and FAQ
- Form validation and submission handling

## 📧 Form Integration

The contact form is currently set up with a simulated submission. To integrate with a real email service:

1. **Email Service**: Consider using services like:
   - SendGrid
   - EmailJS
   - Nodemailer (with a backend API)

2. **Form Handling**: Update the `handleSubmit` function in `/contact/page.tsx` to send data to your chosen service.

3. **Database**: For storing submissions, consider:
   - Supabase
   - Firebase
   - MongoDB Atlas

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Deploy directly from GitHub
- **DigitalOcean App Platform**: Connect your repository

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts` and `globals.css`:

```typescript
// tailwind.config.ts
colors: {
  sauna: {
    warm: '#8B4513',
    orange: '#D2691E',
    gold: '#FFD700',
  },
  plunge: {
    cool: '#1E3A8A',
    ice: '#3B82F6',
    fresh: '#60A5FA',
  }
}
```

### Content
- Update text content in each page component
- Modify event data in `/events/page.tsx`
- Update contact information in Footer and Contact components

### Fonts
- Larken font is loaded via Google Fonts in `globals.css`
- DM Sans is configured in `layout.tsx`

## 📱 Mobile Optimization

The website is built with a mobile-first approach:
- Responsive navigation with hamburger menu
- Optimized touch targets
- Fast loading on mobile networks
- Proper viewport meta tags

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured headings (H1, H2, H3)
- Alt text for images
- Sitemap ready
- Fast loading times

## 📞 Support

For questions or support, contact:
- Email: hello@hotboxsocial.com
- Phone: +44 123 456 7890

## 📄 License

This project is proprietary to HOTBOX Social.

---

Built with ❤️ for HOTBOX Social
