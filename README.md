# LaunchPress - CMS & Marketing Starter

A modern, high-performance marketing site starter built with Next.js, Storyblok, and Stripe.

## Features

- **CMS-driven content rendering** with Storyblok.
- **Legacy widget support** using jQuery inside a modern Next.js app.
- **Mailchimp marketing list integration** for newsletter subscriptions.
- **Stripe checkout flow** for campaign landing pages and products.
- **SEO-friendly** page rendering with dynamic content and Next.js App Router.
- **Tailwind CSS** for rapid, responsive styling.

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **CMS:** Storyblok
- **Legacy Layer:** jQuery (simulating legacy integration)
- **Marketing:** Mailchimp API
- **Payments:** Stripe Checkout

## Getting Started

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Copy `.env.local.example` (or use the provided placeholders) to `.env.local` and fill in your API keys.
    ```bash
    NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_storyblok_preview_token
    MAILCHIMP_API_KEY=your_mailchimp_api_key
    MAILCHIMP_AUDIENCE_ID=your_mailchimp_audience_id
    MAILCHIMP_SERVER_PREFIX=us21
    STRIPE_SECRET_KEY=your_stripe_secret_key
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    STRIPE_PRICE_ID=your_stripe_price_id
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Interview Talking Points

- **Modern & Legacy Coexistence:** Demonstrated how to safely integrate legacy jQuery-based widgets into a modern React/Next.js environment using the `Next/Script` component and isolated styling.
- **CMS Architecture:** Decoupled content from code using Storyblok, allowing non-technical users to manage landing pages.
- **Full-Stack Integration:** Implemented end-to-end flows for marketing (Mailchimp) and payments (Stripe) using Next.js API routes.
