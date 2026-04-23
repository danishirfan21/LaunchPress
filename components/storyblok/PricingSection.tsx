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

  const handleCheckout = async (plan: PricingPlan) => {
    const priceId = plan.price_id || process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;

    if (!priceId) {
      alert("No Price ID found for this plan.");
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
        alert(data.error || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold">{blok.heading}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blok.plans?.map((plan) => (
            <div key={plan._uid} className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="mt-3 text-gray-600">{plan.description}</p>
              <button
                onClick={() => handleCheckout(plan)}
                disabled={loading === plan._uid}
                className="mt-6 w-full rounded-xl bg-black px-5 py-2 text-white disabled:bg-gray-400"
              >
                {loading === plan._uid ? "Processing..." : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
