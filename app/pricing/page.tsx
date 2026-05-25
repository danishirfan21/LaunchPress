import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";
import StoryblokFallback from "@/components/storyblok/StoryblokFallback";

export default async function PricingPage() {
  const story = await fetchStoryblokStory("pricing").catch(() => null);

  if (!story) {
    return <StoryblokFallback slug="pricing" title="Pricing Plans" />;
  }

  return (
    <main>
      {story.content.body?.map((blok: { _uid: string; component: string }) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
      <LegacyNewsletterWidget />
    </main>
  );
}
