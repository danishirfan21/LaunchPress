import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";
import StoryblokFallback from "@/components/storyblok/StoryblokFallback";

export default async function HomePage() {
  try {
    const story = await fetchStoryblokStory("home");

    return (
      <main>
        {story.content.body?.map((blok: { _uid: string; component: string }) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        <LegacyNewsletterWidget />
      </main>
    );
  } catch (error) {
    return <StoryblokFallback slug="home" title="Welcome to LaunchPress" />;
  }
}
