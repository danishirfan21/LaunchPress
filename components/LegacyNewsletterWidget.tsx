"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function LegacyNewsletterWidget() {
  return (
    <>
      <Script
        src="/legacy/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/legacy/newsletter-widget.js"
        strategy="afterInteractive"
      />
      <div id="legacy-newsletter-popup">
        <h3>Stay in the loop</h3>
        <p>Get product launches and campaign updates straight to your inbox.</p>
        <Link
          href="/subscribe"
          className="inline-block rounded-lg bg-black px-4 py-2 text-white text-sm"
        >
          Subscribe
        </Link>
        <div>
          <button id="legacy-close-popup">Close</button>
        </div>
      </div>
    </>
  );
}
