# Gabriele Strata - Classical Pianist Website

A modern, elegant website for classical pianist Gabriele Strata, built with Next.js 14, TypeScript, and Tailwind CSS.

## Design Philosophy

This website follows "The Nocturne Editorial" design system, featuring:

- **Minimal & Elegant**: Clean, sophisticated design inspired by concert programs
- **Fluid Curved Separations**: Organic transitions between sections
- **Pastel Color Palette**: Calm teal tones derived from the hero image
- **Intentional Asymmetry**: Editorial-style layouts with breathing room
- **Glassmorphism**: Subtle transparency effects for navigation and cards

## Features

- **Home Page**: Hero section with dynamic animations and featured content
- **About Page**: Tri-lingual biography (English, French, Italian) with alternating image layouts
- **Concerts Page**: Upcoming and past performance schedules
- **Media Page**: Recordings and video performances gallery
- **Contact Page**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Epilogue (Display), Manrope (Body)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Color Palette

- **Primary**: `#aeccd2` - Dusty pastel teal
- **Surface**: `#0c0e10` - Deep charcoal
- **Tertiary**: `#f4faff` - Soft paper-white
- **Primary Container**: `#3b575c` - Darker teal accent

## Project Structure

```
├── app/
│   ├── about/          # About page with tri-lingual bio
│   ├── concerts/       # Concert schedule
│   ├── contact/        # Contact form
│   ├── media/          # Recordings and videos
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── CurvedDivider.tsx    # Fluid section separators
│   ├── Navigation.tsx       # Main navigation
│   └── SectionWrapper.tsx   # Section container
└── public/
    └── imgs/           # Images and assets
```

## Design Guidelines

- No 1px borders - use background color shifts instead
- Extreme whitespace for breathing room
- Glassmorphism for floating elements
- Ambient shadows tinted with primary color
- Large-scale typography for impact
- Asymmetric layouts for editorial feel

## Build for Production

```bash
npm run build
npm start
```

## License

All rights reserved - Gabriele Strata
