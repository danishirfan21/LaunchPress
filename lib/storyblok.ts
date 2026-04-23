import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react";

import Hero from "@/components/storyblok/Hero";
import FeatureGrid from "@/components/storyblok/FeatureGrid";
import PricingSection from "@/components/storyblok/PricingSection";
import RichTextBlock from "@/components/storyblok/RichTextBlock";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    feature_grid: FeatureGrid,
    pricing_section: PricingSection,
    rich_text_block: RichTextBlock,
  },
});

export async function fetchStoryblokStory(slug: string) {
  const storyblokApi = getStoryblokApi();

  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  return response.data.story;
}
