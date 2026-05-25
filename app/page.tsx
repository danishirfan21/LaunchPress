import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";
import StoryblokFallback from "@/components/storyblok/StoryblokFallback";

export default async function HomePage() {
  const story = await fetchStoryblokStory("home").catch(() => null);

  if (!story) {
    return <StoryblokFallback slug="home" title="Welcome to LaunchPress" />;
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
