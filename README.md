# India at Work

A Vite + React 19 + Tailwind CSS v4 public-interest labour-market website.

## Run locally

```bash
cd "c:\Users\HP\Desktop\gnd website"
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Data note

The numerical labour-market data in `src/data/indicators.js` is imported from the supplied `new data(1).xlsx` workbook and covers 1990–2025. Blank workbook cells are retained as unavailable values; no missing values are guessed or interpolated.

The opportunity listings are explicitly sample data and are structured for a future API integration.

## Included

- Responsive single-page layout
- Sticky responsive navigation
- Smooth scrolling + active-section highlighting
- Accessible glossary tooltips
- Native CSS/SVG-style bar visuals
- Scroll-reveal IntersectionObserver
- Reduced-motion support
- 1990–2025 labour-market dataset with dynamic indicator calculations
- Sample opportunity filters
