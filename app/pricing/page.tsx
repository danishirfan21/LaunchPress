import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";

export default async function PricingPage() {
  try {
    const story = await fetchStoryblokStory("pricing");

    return (
      <main>
        {story.content.body?.map((blok: { _uid: string; component: string }) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        <LegacyNewsletterWidget />
      </main>
    );
  } catch (error) {
    console.error("Error fetching pricing story:", error);
    return (
      <main className="p-20 text-center">
        <h1 className="text-2xl font-bold">Pricing Plans</h1>
        <p className="mt-4 text-gray-600">Please set up your Storyblok content for the "pricing" slug.</p>
        <LegacyNewsletterWidget />
      </main>
    );
  }
}
