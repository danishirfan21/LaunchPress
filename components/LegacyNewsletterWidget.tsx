"use client";

import Script from "next/script";
import Link from "next/link";

export default function LegacyNewsletterWidget() {
  return (
    <>
      {/* Loading jQuery 3.7.1 from the local public folder to simulate a legacy dependency */}
      <Script
        src="/legacy/jquery.min.js"
        strategy="afterInteractive"
      />
      {/* The actual widget behavior script that relies on jQuery */}
      <Script
        src="/legacy/newsletter-widget.js"
        strategy="afterInteractive"
      />

      <div id="legacy-newsletter-popup" className="hidden border shadow-2xl transition-all duration-500">
        <h3>Stay in the loop</h3>
        <p>Get product launches and campaign updates straight to your inbox.</p>
        <div className="flex flex-col gap-2">
          <Link
            href="/subscribe"
            className="inline-block rounded-lg bg-black px-4 py-2 text-white text-sm text-center font-medium hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </Link>
          <button
            id="legacy-close-popup"
            className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
          >
            Not now, thanks
          </button>
        </div>
      </div>
    </>
  );
}
