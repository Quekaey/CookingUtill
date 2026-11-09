# Verola Lux Website Concepts

A responsive, static website presentation for **Verola Lux Premium Home & Kitchen**, a Lagos-based retailer of home, kitchen and lifestyle essentials.

The project contains two distinct homepage directions that can be shown to the client before a final design is selected. Product and category links open a pre-filled WhatsApp conversation so customers can ask about price, colour, availability and delivery.

## Homepage concepts

### Concept 1 — The Signature Edit

File: `concept-one.html`

A premium editorial direction using Verola Lux's emerald-and-gold identity. It is suited to a brand that wants to feel curated, elegant and aspirational.

Included sections:

- Brand hero and primary call to action
- Brand promise
- Featured product collection
- Personal product-selection service
- Customer-value highlights
- Frequently asked questions
- Store location and contact details
- WhatsApp conversion banner

### Concept 2 — The Modern Market

File: `concept-two.html`

A brighter, product-led direction designed for quick browsing. It feels friendly, modern and highly accessible on mobile devices.

Included sections:

- Product-led hero
- Category ticker
- Popular products
- Image-led category browsing
- Customer-value highlights
- Three-step WhatsApp shopping journey
- Frequently asked questions
- Store location and final WhatsApp call to action

### Concept selector

File: `index.html`

The root page presents both concepts so the client can compare them from one link.

## Project structure

```text
CookingUtil/
├── assets/                 # Local product and lifestyle images
├── scripts/check.mjs       # Basic project validation
├── concept-one.html        # Premium editorial homepage
├── concept-two.html        # Bright product-led homepage
├── index.html              # Concept selector
├── script.js               # Navigation, year and WhatsApp behaviour
├── styles.css              # Shared responsive styling
├── package.json            # Local commands
└── vercel.json             # Vercel static-hosting configuration
```

## Run locally

The site has no framework or build step. From the project directory, use either command:

```powershell
python -m http.server 4173
```

or:

```powershell
npm run dev
```

Open `http://localhost:4173` in a browser.

Run the project validation with:

```powershell
npm run check
```

## Deploy to Vercel

### Vercel CLI

```powershell
npx vercel
```

After reviewing the preview deployment:

```powershell
npx vercel --prod
```

### Vercel dashboard

1. Create a new Vercel project.
2. Import the repository or upload this project folder.
3. Select **Other** as the framework preset.
4. Leave the build command empty.
5. Leave the output directory as the project root.
6. Deploy.

`vercel.json` enables clean URLs and basic security headers.

## WhatsApp configuration

The current WhatsApp number is:

```text
2349031609410
```

It appears in `concept-one.html`, `concept-two.html` and `script.js`. To change it, replace every occurrence of the existing number.

Product links use `data-product` attributes. `script.js` converts each product name into a pre-filled message such as:

```text
Hello Verola Lux, I'm interested in the Premium Air Fryer. Please share the price and availability.
```

Category and general-enquiry links already contain their own tailored messages.

## Business information currently used

- **Business:** Verola Lux Premium Home & Kitchen
- **Phone / WhatsApp:** 0903 160 9410
- **Email:** verolaluxlimited@gmail.com
- **Address:** Shops 30, 31 & 32, Obama Line, Ebute Ero Market, Lagos Island, Lagos
- **Categories:** kitchen appliances, cookware, utensils, storage, home organisation and lifestyle items

## Details to confirm before production launch

This is a presentation template. Before publishing it as the final business website, confirm and update:

- Final product catalogue and accurate product names
- Current product photographs supplied or approved by the client
- Prices, variants, colours and stock status
- Delivery areas, charges and estimated timelines
- Payment methods and payment instructions
- Returns, exchanges and warranty policy
- Store opening days and hours
- Instagram, TikTok and other official social-media links
- Business registration or trust information the client wants displayed
- Privacy notice and any required legal pages

Do not publish unconfirmed prices, delivery promises, reviews or policy claims.

## Editing products

Each product is an anchor with a product name:

```html
<a data-product="Premium Air Fryer" href="https://wa.me/2349031609410">
  ...
</a>
```

Update the visible product name and the `data-product` value together. Add the corresponding image to `assets/` and reference it through a CSS class in `styles.css`.

## Images

The catalogue images are local project assets so the deployed website does not rely on third-party hotlinks. They are presentation images and should be replaced with the client's approved product photography before a final commercial launch.

Recommended replacement format:

- Portrait aspect ratio around 4:5
- At least 1200 px on the shortest side
- WebP or optimized JPEG for production
- Consistent lighting and background treatment
- Descriptive alternative text for accessibility

## Accessibility and responsive behaviour

- Mobile navigation uses an accessible expanded/collapsed state.
- Main navigation links use section anchors.
- Images and visual product areas have meaningful surrounding labels.
- Layouts adapt for desktop, tablet and mobile screens.
- Buttons and WhatsApp actions use visible text instead of icon-only controls.
- Motion is limited to subtle hover and navigation effects.

## Production recommendations

For the final client website, a developer should also consider:

- Converting large PNG assets to WebP or AVIF
- Adding real product inventory through a CMS or structured data file
- Adding analytics only with the client's approval
- Connecting a custom domain
- Creating privacy, delivery and returns pages
- Adding Open Graph preview imagery for social sharing
- Testing WhatsApp links on Android, iPhone and desktop
- Running Lighthouse accessibility and performance checks

## Current status

- Two responsive homepage concepts completed
- WhatsApp product enquiry flow implemented
- Local product imagery integrated
- Vercel configuration included
- Automated structural checks included
- Final product data and client policies still require confirmation

