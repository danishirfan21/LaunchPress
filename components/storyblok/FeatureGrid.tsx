type Feature = {
  _uid: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  blok: {
    heading: string;
    features: Feature[];
  };
};

export default function FeatureGrid({ blok }: FeatureGridProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold">{blok.heading}</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blok.features?.map((feature) => (
            <div key={feature._uid} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
