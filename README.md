# VermilionTech

Modern web development studio portfolio — business websites, landing pages, and custom digital products.

**GitHub:** https://github.com/KIONT12/vermiliontech

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Performance

The home page is optimized for all devices:

- Hero video pauses when scrolled off-screen
- Static gradient fallback for reduced-motion and data-saver modes
- Live iframe previews swap to images on mobile and slow connections
- AVIF/WebP image formats via Next.js Image

## Project Structure

- `app/` — pages and routes
- `components/home/` — home page sections
- `components/portfolio/` — project cards
- `lib/data/` — brand, projects, services content
- `public/` — static assets and project previews
