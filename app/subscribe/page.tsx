"use client";

import { FormEvent, useState } from "react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "You’re subscribed successfully.",
        });
        setEmail("");
      } else {
        setStatus({
          type: "error",
          message: data.error || "Subscription failed.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-gray-50">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold">Subscribe for updates</h1>
        <p className="mt-2 text-gray-600">
          Join our newsletter for product and campaign updates.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/5 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-4 py-3 text-white font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-all"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {status.type ? (
          <div
            className={`mt-6 p-4 rounded-xl text-sm font-medium ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border border-green-100"
                : "bg-red-50 text-red-700 border border-red-100"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </div>
    </main>
  );
}
