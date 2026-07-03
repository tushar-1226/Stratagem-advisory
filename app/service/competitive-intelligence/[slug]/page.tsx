import { competitiveIntelligenceItems } from "@/lib/researchData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Activity, Beaker, Heart } from "lucide-react";

export async function generateStaticParams() {
  return competitiveIntelligenceItems.map((item) => {
    const slug = item.href.split("/").pop();
    return { slug };
  });
}

const contentMap: Record<string, {
  subtitle: string;
  overviewHeading: string;
  description: string;
  marketContext: string;
  icon: React.ReactNode;
  features: string[];
  deliverables: { title: string; desc: string }[];
  whoFor: string[];
  color: string;
}> = {
  intelligence1: {
    subtitle: "Navigating the Complexities of Cancer Care",
    overviewHeading: "Winning in the World's Most Competitive Therapeutic Area",
    description:
      "Oncology is the most dynamic and competitive segment in the pharmaceutical industry, with over 1,500 molecules in active clinical development globally. Asset values are high, windows of competitive advantage are narrow, and the pace of scientific advancement — from checkpoint inhibitors to ADCs and CAR-T — demands continuous intelligence to protect and grow market position.",
    marketContext:
      "Our oncology competitive intelligence maps the full competitive landscape across solid tumours and haematologic malignancies. We track pipeline progression, clinical trial designs and endpoints, regulatory submissions, commercial launch strategies, and the shifting role of biomarkers and companion diagnostics. We help you anticipate competitor moves before they become market realities.",
    icon: <Beaker className="w-8 h-8 text-blue-400" />,
    features: [
      "Pipeline mapping: Phase I through approved assets by tumour type",
      "Clinical trial design and primary/secondary endpoint analysis",
      "Competitor mechanism of action and differentiation profiling",
      "KOL mapping and thought leader sentiment tracking",
      "Market access, pricing, and reimbursement strategy benchmarking",
      "Combination therapy landscape and partnership activity",
      "Biomarker strategy and companion diagnostic development tracking",
      "BD&L deal flow and asset valuation benchmarks",
    ],
    deliverables: [
      { title: "Competitive Landscape Report", desc: "Full mapping of approved, late-stage, and emerging competitors across your target indication with strategic commentary." },
      { title: "Pipeline Intelligence Tracker", desc: "Ongoing monitoring of competitor clinical milestones, trial recruitments, and regulatory submissions." },
      { title: "KOL Sentiment Analysis", desc: "Qualitative synthesis of scientific advisory board feedback, congress presentations, and published opinion." },
      { title: "Launch Strategy Benchmarking", desc: "How top-5 recent oncology launches were executed: pricing, sequencing, patient support, and access strategy." },
    ],
    whoFor: [
      "Oncology commercial and medical affairs teams",
      "Clinical and regulatory strategy leaders in pharma and biotech",
      "Licensing and business development executives",
      "Oncology-focused investors and venture capital funds",
    ],
    color: "from-blue-600/20 to-blue-900/40",
  },
  intelligence2: {
    subtitle: "Uncovering Opportunity in Niche, High-Value Markets",
    overviewHeading: "Rare Disease Intelligence for Complex, Fast-Moving Markets",
    description:
      "Rare diseases represent one of the highest-value segments in biopharmaceuticals — with orphan designations, premium pricing potential, and accelerated regulatory pathways creating significant commercial opportunity. But the small patient populations, high diagnosis complexity, and evolving natural history data mean that intelligence errors are disproportionately costly.",
    marketContext:
      "We deliver in-depth intelligence on patient journey, diagnosis rates, treatment cascade, and the competitive dynamics in specific orphan indications. Our work covers the full spectrum from rare genetic diseases and ultra-rare metabolic disorders to rare cancers and rare neurological conditions, helping you understand competitor strategy, regulatory progress, and commercial model choices that define success in these specialised markets.",
    icon: <Activity className="w-8 h-8 text-emerald-400" />,
    features: [
      "Orphan drug designation tracking by indication and geography",
      "Patient population sizing, prevalence, and diagnosis rate analysis",
      "Regulatory pathway mapping: Breakthrough Therapy, PRIME, Accelerated Approval",
      "Competitor commercialisation strategy and patient access models",
      "Natural history study design and registry landscape assessment",
      "Gene therapy and advanced therapy ATMP competitive landscape",
      "Patient advocacy group landscape and their influence on market access",
      "Rare disease centre of excellence and specialist mapping",
    ],
    deliverables: [
      { title: "Indication Landscape Report", desc: "Full characterisation of disease, patient population, current treatment gaps, and unmet need by geography." },
      { title: "Competitive Positioning Assessment", desc: "Detailed profiles of all development-stage and approved competitors including commercial model analysis." },
      { title: "Regulatory Pathway Benchmark", desc: "How comparable rare disease programmes have navigated FDA/EMA pathways and what it means for your timeline." },
      { title: "Patient Journey Mapping", desc: "From symptom onset and diagnosis to treatment decision, adherence, and switching — with implications for your commercial strategy." },
    ],
    whoFor: [
      "Rare disease pharma and biotech strategy teams",
      "Gene therapy and cell therapy developers",
      "Patient advocacy and medical affairs leaders",
      "Rare disease focused investors and fund managers",
    ],
    color: "from-emerald-600/20 to-emerald-900/40",
  },
  intelligence3: {
    subtitle: "Managing Long-Term Competition in Established Markets",
    overviewHeading: "Sustainable Advantage in Chronic Disease Markets",
    description:
      "Chronic disease markets — spanning cardiometabolic conditions, respiratory diseases, CNS disorders, and autoimmune indications — are among the largest and most contested in pharma. Established treatment algorithms, entrenched prescriber habits, biosimilar and generic erosion, and the rising influence of real-world evidence on payer decisions make competitive positioning extraordinarily nuanced.",
    marketContext:
      "Our chronic disease competitive intelligence helps you understand how treatment guidelines are evolving, where biosimilar and generic penetration is accelerating, how competitors are using real-world evidence to support their value stories, and what value-based contracting arrangements are reshaping payer relationships. We give you the strategic clarity to defend your position, launch lifecycle extensions, or identify adjacencies for growth.",
    icon: <Heart className="w-8 h-8 text-rose-400" />,
    features: [
      "Treatment algorithm and standard-of-care evolution mapping",
      "Biosimilar entry timelines, penetration rates, and strategic impact",
      "Generic erosion modelling and lifecycle management intelligence",
      "Real-world evidence strategy benchmarking across competitors",
      "Value-based contracting and payer negotiation landscape",
      "Physician prescribing behaviour and switching trigger analysis",
      "Patient adherence and persistence data by therapy class",
      "Combination and adjacent indication opportunity mapping",
    ],
    deliverables: [
      { title: "Competitive Dynamics Report", desc: "Positioning of top-5 competitors across clinical, commercial, access, and medical affairs dimensions." },
      { title: "Biosimilar & Generic Threat Model", desc: "Entry timelines, expected erosion curves, and commercial response playbook options." },
      { title: "RWE Strategy Benchmark", desc: "How competitors are generating and deploying real-world data to support formulary position and prescriber preference." },
      { title: "Lifecycle Management Options", desc: "Mapped opportunities for new indications, formulations, combination approaches, and companion services." },
    ],
    whoFor: [
      "Commercial and market access teams in established pharma brands",
      "Medical affairs and HEOR functions supporting product lifecycle",
      "Portfolio and business development strategy teams",
      "Healthcare investors evaluating specialty pharma or biosimilar assets",
    ],
    color: "from-rose-600/20 to-rose-900/40",
  },
};

export default async function IntelligenceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const item = competitiveIntelligenceItems.find((i) => i.href.endsWith(`/${slug}`));

  if (!item) notFound();

  const content = contentMap[slug] ?? {
    subtitle: "Advanced Competitive Intelligence",
    overviewHeading: "Deep Insights for Confident Decisions",
    description: "Strategic intelligence to maintain a competitive edge in your market.",
    marketContext: "We deliver evidence-based analysis tailored to your competitive context.",
    icon: <Activity className="w-8 h-8 text-primary" />,
    features: ["Pipeline analysis", "Market access strategy", "Competitor profiling", "Opportunity assessment"],
    deliverables: [],
    whoFor: [],
    color: "from-primary/20 to-primary/40",
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={item!.image} alt={item!.title} fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm mix-blend-multiply" />
          <div className={`absolute inset-0 bg-gradient-to-t ${content.color} z-10`} />
        </div>
        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto mt-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            {content.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg mb-6">{item!.title}</h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">{content.subtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,197.6,110.7,243.64,104.74,284.15,82.6,321.39,56.44Z" className="fill-gray-50" />
          </svg>
        </div>
      </section>

      {/* Overview + CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                <span className="w-8 h-[2px] bg-primary" />
                Strategic Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">{content.overviewHeading}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">{content.description}</p>
              <p className="text-base text-slate-500 leading-relaxed">{content.marketContext}</p>
            </div>

            {/* Focus Areas */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">What We Analyse</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {content.deliverables.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-5">What You Will Receive</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.deliverables.map((d, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                      <p className="font-semibold text-slate-900 mb-1 text-sm">{d.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Who This Is For */}
            {content.whoFor.length > 0 && (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Who This Intelligence Is For</h3>
                <ul className="space-y-2">
                  {content.whoFor.map((w, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sticky CTA */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to gain an edge?</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Connect with our team to discuss how our {item!.title} intelligence can support your strategic objectives.
                </p>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Schedule a Consultation
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <a href="mailto:info@stratagemadvisory.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <span>✉</span> info@stratagemadvisory.com
                  </a>
                  <a href="tel:+918588994645" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <span>📞</span> +91 8588994645
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
