"use client";

import { FormEvent, useState } from "react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("You’re subscribed successfully.");
      setEmail("");
    } else {
      setMessage(data.error || "Subscription failed.");
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border p-8 shadow-sm">
        <h1 className="text-2xl font-bold">Subscribe for updates</h1>
        <p className="mt-2 text-gray-600">
          Join our newsletter for product and campaign updates.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border px-4 py-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-4 py-3 text-white"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {message ? <p className="mt-4 text-sm font-medium">{message}</p> : null}
      </div>
    </main>
  );
}
