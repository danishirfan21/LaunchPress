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
          It looks like the content for <code className="bg-gray-100 px-1 rounded">"{slug}"</code> hasn't been published in Storyblok yet, or the API token is invalid.
        </p>
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 text-sm text-left">
          <p className="font-semibold mb-2">Portfolio Note:</p>
          <p>This fallback UI demonstrates robust error handling for headless CMS integrations. In a production environment, this might trigger a revalidation or display cached content.</p>
        </div>
      </div>
      <LegacyNewsletterWidget />
    </main>
  );
}
