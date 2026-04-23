import "@/lib/storyblok";
import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import { notFound } from "next/navigation";
import LegacyNewsletterWidget from "@/components/LegacyNewsletterWidget";

type Props = {
  // In Next.js 15, params is a Promise that must be awaited.
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const story = await fetchStoryblokStory(`blog/${slug}`);

    return (
      <main>
        {story.content.body?.map((blok: { _uid: string; component: string }) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        <LegacyNewsletterWidget />
      </main>
    );
  } catch (error) {
    // If we can't find the blog post, we return a 404
    notFound();
  }
}
