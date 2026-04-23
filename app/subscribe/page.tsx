"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

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
          message: data.error || "Subscription failed. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please check your connection.",
      });
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 bg-gray-50/50">
      <div className="w-full max-w-md rounded-3xl border bg-white p-10 shadow-xl shadow-gray-200/50">
        <h1 className="text-3xl font-bold tracking-tight">Stay updated</h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          Join our newsletter for the latest product launches and marketing insights.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
              className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all placeholder:text-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-describedby={status.type ? "status-message" : undefined}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-4 py-4 text-white font-semibold hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg shadow-black/10 active:scale-[0.98]"
          >
            {loading ? "Adding you to the list..." : "Subscribe Now"}
          </button>
        </form>

        {status.type ? (
          <div
            id="status-message"
            role="alert"
            className={`mt-6 p-4 rounded-xl text-sm font-medium animate-in fade-in zoom-in-95 duration-300 ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-100"
                : "bg-red-50 text-red-800 border border-red-100"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <p className="mt-8 text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-600 underline underline-offset-4">Back to home</Link>
        </p>
      </div>
    </main>
  );
}
