import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your order has been processed successfully.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
