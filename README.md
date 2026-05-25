# LaunchPress - CMS & Marketing Starter

A high-performance marketing site starter built with Next.js, Storyblok, Mailchimp, and Stripe.

## Overview

LaunchPress demonstrates a production-ready marketing site architecture with a headless CMS, newsletter integration, checkout flow, and a legacy jQuery widget embedded safely in a modern Next.js app.

## Key Features

- Headless CMS content rendering through Storyblok, with fallback pages when credentials or content are missing.
- Legacy newsletter popup powered by local jQuery assets and loaded through `next/script`.
- Mailchimp subscription API route with validation, duplicate-member handling, and clear missing-config errors.
- Stripe Checkout API route with plan-specific Price IDs and a server-side fallback `STRIPE_PRICE_ID`.
- Next.js 16 App Router, TypeScript, Tailwind CSS 4, and ESLint 9.

## Getting Started

Install dependencies:

```bash
npm install
```

Create `.env.local` from `.env.example` and fill in the service credentials you want to enable:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

The app can build and render fallback pages without these values. Add them when you want live integrations.

```bash
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token

MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_list_id
MAILCHIMP_SERVER_PREFIX=us21

STRIPE_SECRET_KEY=your_secret_key
STRIPE_PRICE_ID=default_fallback_price_id

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Useful Commands

```bash
npm run lint
npm run build
npm run dev
```

## Notes

Real Storyblok content, Mailchimp credentials, and Stripe credentials are required for full CMS, newsletter, and checkout functionality. Without them, the project remains locally runnable and shows graceful fallback states.
