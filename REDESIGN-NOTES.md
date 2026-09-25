# SANY site — "Classy" look & feel upgrade

Restyle brief: Anurag Dubey sir asked the electric-trucks site to match the
"classy" look & feel of the Volvo Trucks electric range. This pass keeps ALL
existing content and structure and only elevates the design.

## What changed
1. Palette → refined monochrome. The bright sky-blue accent (used across
   buttons, links, badges, panels) was remapped to a cool ink/graphite ramp in
   `tailwind.config.js`, so every existing `blue-*` utility now reads premium
   and restrained. SANY red is kept as the single signature accent (logo, hero
   kicker + CTA, map pins). Hardcoded accent hexes (#3b9cd9 etc.) were swept to
   ink in all components.
2. Typography → Manrope (a cleaner, more editorial grotesque) for display and
   body, heavier headings, tighter tracking, balanced wrapping (`index.css`).
3. Hero → cinematic. Added a poster still so it's never blank, a gradient scrim
   for depth + legibility, and a restrained bottom-left headline (red kicker,
   bold white headline, calm red + ghost CTAs).
4. Cards & spec tiles → flat, architectural: hairline borders, whisper shadow,
   no bounce (`.clean-card`, `.spec-row`, `.eyebrow`, `.btn-*` in `index.css`).
5. Fixed a broken modal-video reference.

## Files touched
- tailwind.config.js  (colour + type tokens)
- src/index.css       (base type, cards, helper classes)
- index.html          (Manrope font, body defaults)
- src/pages/HomePage.jsx (hero rebuild, modal video fix)
- plus a global sweep of hardcoded accent hexes across src/

## Run locally
    npm install
    npm run dev        # or: npm run build && npm run preview

## Push to a new GitHub repo
    git remote add origin https://github.com/<you>/<repo>.git
    git branch -M main
    git push -u origin main
Then import the repo in Vercel (framework: Vite) to redeploy.
