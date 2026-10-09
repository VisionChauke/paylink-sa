# PayLink SA Open Payments Hackathon 2026

A responsive front-end prototype for a simple payment experience aimed at spaza shops, street vendors, and local communities across South Africa.

> **Prototype notice:** This project is a demonstration only. Payments are simulated in the browser. It does not connect to a bank, payment processor, or the Open Payments API, and no real money is transferred.

## Features

- Responsive homepage with PayLink SA branding.
- Supplied PayLink SA emblem used as the site logo and browser/app icon.
- Merchant dashboard with sample daily payment totals and transaction history.
- Copyable demo PayLink: `paylink.sa/thandi-spaza`.
- Customer checkout form for an amount and optional description.
- Simulated processing and success/receipt screens.
- Automatically updates the demo transaction list, total, and transaction count after a simulated payment.
- Client-side validation for payment amounts.
- Responsive layouts for desktop and mobile screens.

## Project structure

```text
paylink_sa_prototype/
├── index.html
├── style.css
├── app.js
├── README.md
└── assets/
    ├── paylink-logo.jpg
    └── paylink-icon.png
```

- **`index.html`** — Page structure, sections, forms, and logo references.
- **`style.css`** — Colors, typography, layout, responsive styles, and component appearance.
- **`app.js`** — Navigation, copy-link behavior, demo payment simulation, and transaction updates.
- **`assets/paylink-logo.jpg`** — Original supplied emblem.
- **`assets/paylink-icon.png`** — Square icon generated from the supplied emblem.

## Run locally

No build tools or package installation are required.

1. Download or clone the project.
2. Keep the `assets` directory beside `index.html`.
3. Open `index.html` in a modern browser.

For a local development server, you can use VS Code's Live Server extension or run Python from the project directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

Google Fonts are loaded from an external service when internet access is available. System font fallbacks are included.

## Try the demo

1. Open the homepage.
2. Select **Explore merchant demo** to view the dashboard.
3. Select **Open customer payment**.
4. Enter a positive amount in South African rand (ZAR).
5. Optionally add a payment description.
6. Submit the form to see the simulated receipt.
7. Return to the merchant dashboard to see the demo transaction added to the list and totals updated.

## Customization

### Change the merchant

Search `index.html` for `Thandi's Spaza Shop` and update the merchant name and related demo text.

### Change the PayLink

Update the demo URL in the homepage and merchant dashboard. If you change the link input's value, keep the displayed link text consistent.

### Change the logo/icon

Replace `assets/paylink-icon.png` with a square image of your preferred icon. Keep the same filename or update all references in `index.html`. The logo image is used in the header and merchant avatar.

### Change the design

Edit the CSS custom properties at the top of `style.css`, including `--navy`, `--teal`, `--blue`, `--ink`, and `--bg`.

## Important limitations

- All transactions are simulated locally in JavaScript.
- The QR graphic is illustrative and is **not a scannable payment QR code**.
- The demo transaction history is not saved to a database and may reset when the page is reloaded.
- There is no authentication, merchant onboarding, backend, payment settlement, or live API integration.
- Do not enter real banking credentials or sensitive payment information.

## Suggested next steps

1. Build a backend API and persistent database for merchants and transactions.
2. Integrate a legitimate payment provider or Open Payments-compatible service.
3. Generate real payment links and QR codes from provider-issued payment data.
4. Add authentication, authorization, input validation, audit logging, and secure secret management.
5. Add automated tests and deployment configuration.

## License

License and copyright notice
MIT License

Copyright (c) 2026 Vision Chauke, Jim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
