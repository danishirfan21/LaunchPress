# LaunchPress — CMS & Marketing Starter

A modern, high-performance marketing site starter built with **Next.js**, **Storyblok**, **Mailchimp**, and **Stripe**.

## 🚀 Overview

This repository demonstrates a production-credible architecture for marketing landing pages. It focuses on the coexistence of modern frameworks with essential third-party integrations and legacy system support.

### Key Features
- **CMS-Driven Pages**: Fully dynamic content rendering via **Storyblok** with robust fallback states.
- **Legacy Integration**: A **jQuery-based** newsletter widget embedded safely using `next/script`, demonstrating modern-legacy coexistence.
- **Marketing Automation**: **Mailchimp** API integration with duplicate-member handling and validation.
- **Payment Flow**: **Stripe Checkout** integration tied to plan-specific Price IDs from the CMS.
- **Premium UX**: Polished UI built with **Tailwind CSS**, featuring custom loading states, inline error handling, and accessible forms.

## 🛠️ Tech Stack
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **CMS**: Storyblok (Headless)
- **Payments**: Stripe Checkout
- **Marketing**: Mailchimp Marketing API
- **Legacy**: jQuery 3.7.1 (Simulated)

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

- **Headless CMS Strategy**: "I implemented Storyblok with a version-switching logic (Draft vs. Published) and created a custom fallback system so the site remains functional even if the CMS is unreachable."
- **Handling Legacy Code**: "The project includes a jQuery newsletter widget. Instead of refactoring it into React, I demonstrated how to integrate it safely using the `Next/Script` strategy to ensure it doesn't block the main thread."
- **Functional Stripe Integration**: "The pricing section is dynamic. It pulls Price IDs directly from Storyblok, allowing the marketing team to swap products or change pricing without a code deployment."
- **API Reliability**: "I added custom error handling for the Mailchimp integration to gracefully handle users who are already on the list, improving the user experience over standard API failure messages."

---

*Note: This project is intended as a portfolio piece. Real API credentials and Storyblok content setup are required for full functionality.*
