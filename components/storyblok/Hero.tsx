type HeroProps = {
  blok: {
    headline: string;
    subheadline: string;
    cta_text?: string;
    cta_link?: string;
  };
};

export default function Hero({ blok }: HeroProps) {
  return (
    <section className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{blok.headline}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        {blok.subheadline}
      </p>

      {blok.cta_text && blok.cta_link ? (
        <a
          href={blok.cta_link}
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
        >
          {blok.cta_text}
        </a>
      ) : null}
    </section>
  );
}
