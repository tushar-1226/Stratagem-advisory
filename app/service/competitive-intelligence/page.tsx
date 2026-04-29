import Link from "next/link";

const focusAreas = [
  "Competitor profiling and strategic positioning",
  "Product, pricing, channel, and go-to-market comparison",
  "Market share signals and competitor movement tracking",
  "Strength, weakness, threat, and opportunity assessment",
  "Strategic recommendations for differentiation and response",
];

const deliverables = [
  {
    title: "Competitive landscape",
    description:
      "A clear view of who competes in the space, how they are positioned, and where they are investing.",
  },
  {
    title: "Strategic implications",
    description:
      "A practical assessment of what competitor moves mean for your growth, pricing, messaging, and market entry decisions.",
  },
  {
    title: "Response options",
    description:
      "Focused recommendations that help your team decide where to defend, where to differentiate, and where to move faster.",
  },
];

export default function CompetitiveIntelligencePage() {
  return (
    <main>
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
            Service
          </p>
          <h1 className="max-w-4xl text-4xl font-bold lg:text-6xl">
            Competitive Intelligence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Strategem Advisory helps teams understand competitors, anticipate
            market moves, and make sharper decisions on positioning, growth,
            and strategic response.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Better decisions in contested markets
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/75">
              Competitive intelligence gives leadership teams the context they
              need to act with confidence. We examine competitor strategy,
              market messaging, product direction, channel behavior, and
              commercial signals to identify what matters most.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground/75">
              Our work is designed to be usable: clear findings, direct
              comparisons, and decision-ready recommendations instead of long
              reports with unclear next steps.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">
              What we analyze
            </h3>
            <ul className="mt-5 space-y-4">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/80">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground">
            Typical outputs
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="mt-10 inline-flex rounded-lg bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Discuss competitive intelligence
          </Link>
        </div>
      </section>
    </main>
  );
}
