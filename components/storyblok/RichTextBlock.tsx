type RichTextBlockProps = {
  blok: {
    content?: string;
  };
};

export default function RichTextBlock({ blok }: RichTextBlockProps) {
  return (
    <section className="px-6 py-12">
      <div className="prose mx-auto max-w-3xl">
        <div>{blok.content}</div>
      </div>
    </section>
  );
}
