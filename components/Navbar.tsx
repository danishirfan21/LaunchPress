import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        LaunchPress
      </Link>
      <div className="space-x-6">
        <Link href="/pricing" className="text-gray-600 hover:text-black">
          Pricing
        </Link>
        <Link href="/subscribe" className="text-gray-600 hover:text-black">
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
