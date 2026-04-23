import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";

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
    console.error("Error fetching home story:", error);
    return (
      <main className="p-20 text-center">
        <h1 className="text-2xl font-bold">Welcome to LaunchPress</h1>
        <p className="mt-4 text-gray-600">Please set up your Storyblok content for the "home" slug.</p>
        <LegacyNewsletterWidget />
      </main>
    );
  }
}
