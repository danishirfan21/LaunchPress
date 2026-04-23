import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";

type StoryblokFallbackProps = {
  slug: string;
  title: string;
};

export default function StoryblokFallback({ slug, title }: StoryblokFallbackProps) {
  return (
    <main className="p-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          This section is currently being updated. Please check back soon or ensure your Storyblok content for <code className="bg-gray-100 px-1 rounded">"{slug}"</code> is correctly published.
        </p>
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 text-sm text-left">
          <p className="font-semibold mb-1 text-blue-900">System Status:</p>
          <p>The application is connected, but the requested CMS entry is either in draft or missing an authorization token. This fallback ensures the site remains accessible and professional during content updates.</p>
        </div>
      </div>
      <LegacyNewsletterWidget />
    </main>
  );
}
