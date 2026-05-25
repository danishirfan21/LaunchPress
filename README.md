# LaunchPress — CMS & Marketing Starter

A high-performance marketing site starter built with **Next.js**, **Storyblok**, **Mailchimp**, and **Stripe**.

## 🚀 Overview

LaunchPress demonstrates a production-credible architecture for marketing landing pages. It focuses on the coexistence of modern frameworks with essential third-party integrations and legacy system support.

### Key Features
- **Headless CMS**: Dynamic content rendering via **Storyblok** with graceful fallback states.
- **Legacy Support**: A **jQuery-based** newsletter widget integrated safely using `next/script`.
- **Marketing Integration**: **Mailchimp** API support with custom validation and duplicate-member handling.
- **Stripe Checkout**: End-to-end payment flow tied to plan-specific Price IDs managed in the CMS.
- **Modern Stack**: Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

## 🛠️ Tech Stack
- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS 4
- **CMS**: Storyblok
- **Payments**: Stripe Checkout
- **Marketing**: Mailchimp Marketing API
- **Legacy**: jQuery 3.7.1 (Integrated via Script strategy)

## 🚦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file with the following keys:
   ```bash
   # Storyblok
   NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token

   # Mailchimp
   MAILCHIMP_API_KEY=your_api_key
   MAILCHIMP_AUDIENCE_ID=your_list_id
   MAILCHIMP_SERVER_PREFIX=us21

   # Stripe
   STRIPE_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_pub_key
   STRIPE_PRICE_ID=default_fallback_price_id

   # General
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Development**:
   ```bash
   npm run dev
   ```

## 🎤 Interview Talking Points

- **Modern-Legacy Coexistence**: "I integrated a legacy jQuery widget into a modern Next.js 16 environment using the `next/script` component, ensuring legacy scripts load without blocking the main thread or interfering with React's lifecycle."
- **Headless CMS Resilience**: "The Storyblok integration handles draft/published versioning and includes a fallback UI system to maintain professional appearance even if the API is unreachable or content is missing."
- **Schema-Driven Payments**: "The Stripe integration is data-driven; Price IDs are passed from the CMS to the API route, allowing non-technical teams to update products and pricing without a code deployment."
- **API Optimization**: "The Mailchimp integration includes server-side validation and specific error mapping to handle edge cases like duplicate subscriptions gracefully."

---

*Note: This project is a portfolio piece. Real API credentials and Storyblok content setup are required for full functionality.*

