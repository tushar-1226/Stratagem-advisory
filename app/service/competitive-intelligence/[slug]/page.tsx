import { competitiveIntelligenceItems } from "@/lib/researchData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Activity, Beaker, Heart, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return competitiveIntelligenceItems.map((item) => {
    // Extract the slug from the href (e.g., /service/competitive-intelligence/intelligence1 -> intelligence1)
    const slug = item.href.split("/").pop();
    return {
      slug,
    };
  });
}

export default async function IntelligenceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const item = competitiveIntelligenceItems.find(
    (i) => i.href.endsWith(`/${slug}`)
  );

  if (!item) {
    notFound();
  }

  // Content mapping based on slug to make it look premium and informative
  const contentMap: Record<string, any> = {
    intelligence1: {
      subtitle: "Navigating the Complexities of Cancer Care",
      description:
        "Our Oncology intelligence provides comprehensive insights into the rapidly evolving landscape of cancer treatments, clinical trials, and competitor pipelines. We help you stay ahead in one of the most competitive and innovative therapeutic areas in the industry.",
      icon: <Beaker className="w-8 h-8 text-blue-400" />,
      features: [
        "Pipeline analysis and competitor profiling",
        "Clinical trial tracking and endpoint evaluation",
        "Market access and pricing strategies",
        "Key Opinion Leader (KOL) mapping and sentiment analysis",
      ],
      color: "from-blue-600/20 to-blue-900/40",
    },
    intelligence2: {
      subtitle: "Uncovering Opportunities in Niche Markets",
      description:
        "Rare diseases present unique challenges and opportunities. Our intelligence services offer deep dives into patient populations, regulatory pathways, and competitive dynamics in orphan indications to guide your strategic decisions.",
      icon: <Activity className="w-8 h-8 text-emerald-400" />,
      features: [
        "Orphan drug designation tracking",
        "Patient journey and prevalence analysis",
        "Regulatory landscape and expedited pathways",
        "Competitor commercialization strategies",
      ],
      color: "from-emerald-600/20 to-emerald-900/40",
    },
    intelligence3: {
      subtitle: "Managing Long-Term Care and Competition",
      description:
        "Chronic disease markets require a deep understanding of patient adherence, long-term outcomes, and established competitors. We provide the intelligence needed to differentiate your offerings and maximize lifecycle management.",
      icon: <Heart className="w-8 h-8 text-rose-400" />,
      features: [
        "Treatment algorithm mapping",
        "Real-world evidence (RWE) utilization",
        "Biosimilar and generic threat assessment",
        "Value-based contracting insights",
      ],
      color: "from-rose-600/20 to-rose-900/40",
    },
  };

  const content = contentMap[slug] || {
    subtitle: "Advanced Competitive Intelligence",
    description:
      "Strategic insights to drive your business forward and maintain a competitive edge in your market.",
    icon: <Activity className="w-8 h-8 text-primary" />,
    features: [
      "Market analysis",
      "Competitor tracking",
      "Strategic planning",
      "Opportunity assessment",
    ],
    color: "from-primary/20 to-primary/40",
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm mix-blend-multiply" />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${content.color} z-10`}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl ring-1 ring-white/30">
            {content.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6">
            {item.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
        
        {/* Decorative Wave/Curve at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,197.6,110.7,243.64,104.74,284.15,82.6,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Description & Insights */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                <span className="w-8 h-[2px] bg-primary"></span>
                Strategic Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Deep Insights for Confident Decisions
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                What We Deliver
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CTA & Quick Links */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Abstract shapes for premium feel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to gain an edge?</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Connect with our team to discuss how our {item.title} intelligence can support your strategic objectives.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Schedule a Consultation
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
