# Silas Campaign Website

Responsive React + Vite frontend with multiple pages:
- `/` — Home
- `/about` — About Silas
- `/vision` — Vision & Mission
- `/techverse` — Technology disciplines
- `/why-silas` — Why Silas
- `/vote` — Campaign call to action

## Project structure
- `src/pages/` — Route-level page components
- `src/components/` — Shared layout and reusable sections
- `src/data/campaign.js` — Campaign links and Techverse content
- `src/App.jsx` — Router and shared site layout
- `src/main.jsx` — React entry point and stylesheet import

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repository at https://vercel.com/.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. No backend or environment variables are needed.

## Important
The floating contact/share button is currently labelled **Amedu David** and opens WhatsApp's share flow with a prefilled campaign message. If it should message Amedu David directly, update `shareUrl` in `src/data/campaign.js` to `https://wa.me/COUNTRYCODENUMBER` using his actual WhatsApp number (digits only, including country code).

The faint **VOTE SILAS** watermark is shown across every route. Campaign images are in `src/assets/`.
