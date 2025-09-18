import React from "react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-28 md:py-32 px-6 md:px-8 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Simple pricing that respects your attention
          </h2>
          <p className="opacity-80 max-w-xl">
            Try free. Upgrade when you want deeper personalization, early drops,
            and exclusive lists.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <PlanCard
            name="Free"
            price="$0"
            tagline="Casual swiping"
            features={["Daily recs", "Watchlist", "Sharable lists"]}
            cta="Start Free"
            popular={false}
          />
          <PlanCard
            name="Pro"
            price="$6.99"
            tagline="All-in taste engine"
            features={[
              "Real-time AI tuning",
              "Advanced filters",
              "Early releases",
              "Unlimited lists",
            ]}
            cta="Go Pro"
            popular={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

function PlanCard({
  name,
  price,
  tagline,
  features,
  cta,
  popular,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 ring-1 ring-border bg-black ${
        popular ? "shadow-[0_0_0_1px_inset]" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-400 to-red-600 text-white">
          Popular
        </div>
      )}
      <div className="flex items-baseline gap-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="opacity-70 text-sm">{tagline}</span>
      </div>
      <div className="mt-4 text-3xl font-extrabold">
        {price}
        <span className="text-base opacity-60">/mo</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-red-400 to-red-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm ring-1 ring-border hover:bg-[#E50914] transition w-full text-center"
      >
        {cta}
      </a>
    </div>
  );
}
