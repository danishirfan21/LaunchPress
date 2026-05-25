import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react";

import Hero from "@/components/storyblok/Hero";
import FeatureGrid from "@/components/storyblok/FeatureGrid";
import PricingSection from "@/components/storyblok/PricingSection";
import RichTextBlock from "@/components/storyblok/RichTextBlock";

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;

storyblokInit({
  accessToken,
  use: accessToken ? [apiPlugin] : [],
  components: {
    hero: Hero,
    feature_grid: FeatureGrid,
    pricing_section: PricingSection,
    rich_text_block: RichTextBlock,
  },
});

export async function fetchStoryblokStory(slug: string) {
  if (!accessToken) {
    throw new Error("Missing NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN");
  }

  const storyblokApi = getStoryblokApi();

  if (!storyblokApi) {
    throw new Error("Storyblok API not initialized");
  }

  const response = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.story;
}
