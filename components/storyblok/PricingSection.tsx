"use client";

import { useState } from "react";

type PricingPlan = {
  _uid: string;
  name: string;
  price: string;
  description: string;
  price_id?: string;
};

type PricingSectionProps = {
  blok: {
    heading: string;
    plans: PricingPlan[];
  };
};

export default function PricingSection({ blok }: PricingSectionProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<{ id: string; message: string } | null>(null);

  const handleCheckout = async (plan: PricingPlan) => {
    setError(null);
    const priceId = plan.price_id || process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;

    if (!priceId) {
      setError({ id: plan._uid, message: "Checkout unavailable: Missing Price ID." });
      return;
    }

    setLoading(plan._uid);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError({ id: plan._uid, message: data.error || "Unable to start checkout." });
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError({ id: plan._uid, message: "Network error. Please try again." });
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight">{blok.heading}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blok.plans?.map((plan) => (
            <div key={plan._uid} className="flex flex-col rounded-2xl border p-6 bg-white shadow-sm transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="mt-3 text-gray-600 flex-grow">{plan.description}</p>

              <div className="mt-6">
                <button
                  onClick={() => handleCheckout(plan)}
                  disabled={!!loading}
                  className="w-full rounded-xl bg-black px-5 py-3 text-white font-medium transition-all hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {loading === plan._uid ? "Processing..." : "Choose plan"}
                </button>

                {error?.id === plan._uid && (
                  <p className="mt-3 text-sm text-red-600 font-medium animate-in fade-in slide-in-from-top-1">
                    {error.message}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
