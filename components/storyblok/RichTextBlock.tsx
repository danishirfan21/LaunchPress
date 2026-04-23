import { renderRichText, type StoryblokRichTextNode } from "@storyblok/react";

type RichTextBlockProps = {
  blok: {
    // We use the exported type from @storyblok/react for better credibility.
    content?: StoryblokRichTextNode<string>;
  };
};

export default function RichTextBlock({ blok }: RichTextBlockProps) {
  if (!blok.content) return null;

  // renderRichText converts the Storyblok JSON to an HTML string.
  const renderedContent = renderRichText(blok.content);

  return (
    <section className="px-6 py-12">
      <div
        className="prose prose-slate mx-auto max-w-3xl"
        dangerouslySetInnerHTML={{ __html: renderedContent || "" }}
      />
    </section>
  );
}
