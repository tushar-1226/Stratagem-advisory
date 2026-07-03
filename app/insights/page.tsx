import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon, TagIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Insights & Case Studies | Strategem Advisory",
  description:
    "Explore our latest market research insights, competitive intelligence reports, and industry case studies from Strategem Advisory.",
  openGraph: {
    title: "Insights & Case Studies | Strategem Advisory",
    description:
      "Explore our latest market research insights, competitive intelligence reports, and industry case studies.",
    type: "website",
  },
};

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    slug: "chemical-market-outlook-2025",
    category: "Market Research",
    title: "Global Chemicals Market Outlook 2025: Trends Reshaping the Industry",
    excerpt:
      "Rising feedstock costs, tightening environmental regulations, and shifting demand from Asia-Pacific are creating both headwinds and opportunities for chemical manufacturers worldwide.",
    readTime: "8 min read",
    date: "June 2025",
    tags: ["Chemicals", "Market Trends", "Global"],
    featured: true,
  },
  {
    slug: "oncology-competitive-landscape",
    category: "Competitive Intelligence",
    title: "Competitive Landscape in Oncology: Key Players and Pipeline Analysis",
    excerpt:
      "With over 1,500 oncology drugs in clinical trials, the competitive pressure is unprecedented. We map the strategic positioning of top players and identify emerging challengers.",
    readTime: "12 min read",
    date: "May 2025",
    tags: ["Oncology", "Pharma", "Pipeline"],
    featured: true,
  },
  {
    slug: "fmcg-india-growth-strategies",
    category: "Market Research",
    title: "FMCG in India: Where Growth is Coming From and How to Capture It",
    excerpt:
      "India's FMCG sector is on track to reach $220 billion by 2025. We break down the rural-urban divide, premiumisation trend, and distribution dynamics driving this growth.",
    readTime: "6 min read",
    date: "April 2025",
    tags: ["FMCG", "India", "Consumer Goods"],
  },
  {
    slug: "semiconductor-supply-chain-resilience",
    category: "Competitive Intelligence",
    title: "Building Semiconductor Supply Chain Resilience Post-2024",
    excerpt:
      "Geopolitical tensions and demand surges exposed critical vulnerabilities in global semiconductor supply chains. This report examines best practices from leading manufacturers.",
    readTime: "10 min read",
    date: "March 2025",
    tags: ["Semiconductors", "Supply Chain", "Manufacturing"],
  },
  {
    slug: "ev-automotive-market-forecast",
    category: "Market Research",
    title: "Electric Vehicles: Market Forecast and Competitive Dynamics Through 2030",
    excerpt:
      "The EV transition is accelerating faster than expected in key markets. We analyze demand forecasts, battery technology trends, and the competitive positions of legacy OEMs vs. new entrants.",
    readTime: "9 min read",
    date: "February 2025",
    tags: ["Automotive", "EV", "Forecast"],
  },
  {
    slug: "rare-disease-market-entry",
    category: "Competitive Intelligence",
    title: "Rare Disease Markets: Entry Strategies and Competitive Positioning",
    excerpt:
      "Rare diseases represent a high-value, high-complexity opportunity. We explore regulatory pathways, pricing strategies, and competitive moats that define success in this space.",
    readTime: "7 min read",
    date: "January 2025",
    tags: ["Rare Diseases", "Biotech", "Strategy"],
  },
];

const categoryColors: Record<string, string> = {
  "Market Research": "bg-blue-50 text-blue-700 border-blue-200",
  "Competitive Intelligence": "bg-purple-50 text-purple-700 border-purple-200",
};

export default function InsightsPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <h1 className="max-w-3xl text-4xl font-bold lg:text-6xl">
            Insights & Case Studies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            In-depth research, market perspectives, and strategic analysis from the Strategem Advisory team.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Category banner */}
                <div className="bg-secondary px-6 py-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${
                      categoryColors[article.category] ??
                      "bg-gray-50 text-gray-600 border-gray-200"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-100 text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href="/contact-us"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Request full report
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="bg-gray-50 px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Reports</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border w-fit mb-4 ${
                    categoryColors[article.category] ??
                    "bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {article.category}
                </span>

                <h3 className="text-base font-bold text-foreground mb-2 leading-snug flex-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs text-foreground/50 bg-gray-100 px-2.5 py-1 rounded-full"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-xs text-foreground/50">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>

                <Link
                  href="/contact-us"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Request full report
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-secondary p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need a custom research report?
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              We tailor every project to your specific market, geography, and business question. Let&apos;s discuss what you need.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-secondary font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Talk to an analyst
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
