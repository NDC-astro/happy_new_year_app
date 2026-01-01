# 🎉 Happy New Year 2026!

A stunning, interactive New Year celebration web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎆 **Interactive Fireworks**: Click anywhere to launch spectacular fireworks displays
- 🎊 **Confetti Celebrations**: Trigger multiple confetti bursts with a single click
- ❄️ **Snowfall Effect**: Gentle snow animation across the entire page
- ⭐ **Particle Background**: Animated particles with interactive hover effects
- 💬 **Quote Generator**: Random inspirational New Year quotes
- 📝 **Personalized Greetings**: Create custom messages with name input
- 🎴 **Greeting Cards**: Beautiful, shareable card designs
- 🎵 **Music Toggle**: Optional celebratory background music
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🚀 **Performance Optimized**: Built with Next.js 16 and Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: TSParticles
- **Confetti**: canvas-confetti
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Steps

1. **Clone or download the project files**

2. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

This will:
- Build the application with Turbopack
- Optimize all assets and code
- Generate static pages where possible
- Prepare the app for deployment

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications, offering zero-configuration deployment with optimal performance.

#### Method 1: Deploy via Vercel Dashboard

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Sign up/Log in to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your Git provider

3. **Import your project**:
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings

4. **Configure (Optional)**:
   - No environment variables needed for this project
   - Default settings are optimal

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll get a live URL instantly (e.g., `your-app.vercel.app`)

6. **Custom Domain (Optional)**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Additional Deployment Options

#### Netlify

1. Push code to Git repository
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

#### Cloudflare Pages

1. Connect your Git repository
2. Build command: `npm run build`
3. Build output directory: `.next`

#### Self-Hosting

```bash
# Build the application
npm run build

# Start the production server
npm start

# Or use a process manager like PM2
pm2 start npm --name "new-year-2026" -- start
```

For Docker deployment:

```dockerfile
FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the gold and silver color schemes:

```typescript
colors: {
  gold: {
    400: '#ffd700',
    500: '#ffcc00',
    600: '#e6b800',
  },
  // Add your custom colors
}
```

### Quotes

Add or modify quotes in `lib/quotes.ts`:

```typescript
export const newYearQuotes = [
  {
    text: "Your custom quote here",
    author: "Author Name"
  },
  // Add more quotes
];
```

### Greeting Cards

Customize cards in `components/GreetingCards.tsx` by modifying the `cards` array.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 🎊 Happy New Year 2026!

May this application bring joy and celebration to your New Year! Share it with friends and family to spread the festive cheer!

---

**Built with ❤️ using Next.js 16, React 19, and modern web technologies**