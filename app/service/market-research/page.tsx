import Link from "next/link";

const capabilities = [
  "Market sizing and opportunity assessment",
  "Customer needs, behavior, and decision-driver analysis",
  "Category, channel, and regional demand mapping",
  "Trend tracking across products, buyers, and competitors",
  "Actionable recommendations for growth and positioning",
];

const process = [
  {
    title: "Frame the question",
    description:
      "We clarify the business decision, define the market boundaries, and align the research around the outcome you need.",
  },
  {
    title: "Collect evidence",
    description:
      "We combine desk research, market signals, company data, interviews, and secondary sources to build a practical view of the market.",
  },
  {
    title: "Translate into action",
    description:
      "We turn the findings into clear implications, priority opportunities, and recommendations your team can act on.",
  },
];

export default function MarketResearchPage() {
  return (
    <main>
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
            Service
          </p>
          <h1 className="max-w-4xl text-4xl font-bold lg:text-6xl">
            Market Research
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Strategem Advisory helps businesses understand market structure,
            customer demand, buying behavior, and growth opportunities with
            research built for real strategic decisions.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Clear insight before major moves
            </h2>
            <p className="mt-5 text-base leading-7 text-foreground/75">
              Good market research reduces uncertainty. We focus on the
              questions that shape decisions: where demand is growing, how
              customers choose, what barriers exist, and where your offering can
              compete with confidence.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground/75">
              The output is concise, evidence-led, and commercially useful,
              designed for leadership teams, product teams, sales teams, and
              investors who need clarity instead of generic reporting.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">
              What we cover
            </h3>
            <ul className="mt-5 space-y-4">
              {capabilities.map((item) => (
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
          <h2 className="text-3xl font-bold text-foreground">How we work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="mt-10 inline-flex rounded-lg bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Discuss market research
          </Link>
        </div>
      </section>
    </main>
  );
}
