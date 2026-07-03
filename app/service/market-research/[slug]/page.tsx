import { marketResearchItems } from "@/lib/researchData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Cpu,
  ShoppingBag,
  Car,
  HeartPulse,
  Laptop,
} from "lucide-react";

export async function generateStaticParams() {
  return marketResearchItems.map((item) => {
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
  research1: {
    subtitle: "Navigating the Future of the Chemical Industry",
    overviewHeading: "Intelligence That Drives Industry Leadership",
    description:
      "The chemical industry is undergoing a massive transformation driven by sustainability mandates, tightening regulatory frameworks, and supply chain realignments post-pandemic. Rising feedstock volatility, carbon-border adjustments, and shifts in end-use demand from automotive and construction are reshaping competitive dynamics across specialty, commodity, and performance chemicals.",
    marketContext:
      "Our research helps you understand where demand is growing, which players are expanding capacity, and how regulatory pressures like REACH and EPA mandates are creating both risk and opportunity. We cover the full value chain — from raw materials and intermediates to formulated products and end-market applications — so your strategy is grounded in evidence, not assumption.",
    icon: <FlaskConical className="w-8 h-8 text-cyan-400" />,
    features: [
      "Sustainability & Green Chemistry trends",
      "Raw material pricing and supply chain resilience",
      "Regulatory impact analysis (REACH, EPA, TSCA)",
      "Competitor capacity and expansion mapping",
      "Specialty vs. commodity segment demand splits",
      "Customer industry demand forecasting",
      "M&A activity and strategic partnership tracking",
      "Carbon footprint and ESG benchmarking",
    ],
    deliverables: [
      { title: "Market Sizing Report", desc: "Quantified demand across segments, geographies, and end-use industries with 5-year forecasts." },
      { title: "Competitive Landscape", desc: "Profiles of top 10–15 players including capacity, pricing strategy, and growth moves." },
      { title: "Regulatory Tracker", desc: "Ongoing monitoring of chemical regulations across key jurisdictions affecting your portfolio." },
      { title: "Strategic Recommendations", desc: "Prioritised actions for market entry, product positioning, or capacity investment decisions." },
    ],
    whoFor: ["Chemical manufacturers & distributors", "Private equity evaluating chemical assets", "Raw material suppliers and traders", "Sustainability and ESG teams"],
    color: "from-cyan-600/20 to-cyan-900/40",
  },
  research2: {
    subtitle: "Powering the Next Generation of Technology",
    overviewHeading: "Clarity in the World's Most Complex Supply Chain",
    description:
      "Semiconductors sit at the intersection of geopolitics, advanced manufacturing, and exponential demand growth. The race to advanced nodes, reshoring of fab capacity driven by CHIPS Act incentives, and the AI-driven surge in GPU and HBM memory demand have fundamentally altered the competitive landscape for foundries, IDMs, fabless designers, and equipment makers alike.",
    marketContext:
      "We provide granular intelligence on fabrication advancements, node transition timelines, end-use demand by vertical (data centres, automotive, consumer, industrial), and the strategic positioning of key players. Whether you're evaluating a partnership, an acquisition, or market entry, our research gives you the clarity to act with confidence in one of the world's most capital-intensive industries.",
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    features: [
      "Supply chain bottleneck and lead-time analysis",
      "Technology node transitions (3nm, 2nm, Angstrom era)",
      "End-use market demand forecasting by vertical",
      "Geopolitical and export control impact assessment",
      "Foundry capacity and capex tracking",
      "Fabless competitive profiling (NVIDIA, AMD, Qualcomm etc.)",
      "Advanced packaging (CoWoS, HBM) market dynamics",
      "EDA and IP licensing landscape",
    ],
    deliverables: [
      { title: "Demand Forecast by Vertical", desc: "Semiconductor content per unit analysis across automotive, AI/data centre, mobile, and industrial segments." },
      { title: "Supply Chain Risk Map", desc: "Concentration risks by geography, node, and material with mitigation options." },
      { title: "Player Positioning Report", desc: "Detailed benchmarking of foundries, IDMs, and key fabless players on technology and market share." },
      { title: "Policy & Incentive Tracker", desc: "Real-time monitoring of CHIPS Act, EU Chips Act, and export restriction impacts." },
    ],
    whoFor: ["Semiconductor equipment and materials companies", "System OEMs and tier-1 electronics manufacturers", "Investors and PE/VC evaluating chip sector assets", "Government and policy advisory teams"],
    color: "from-indigo-600/20 to-indigo-900/40",
  },
  research3: {
    subtitle: "Staying Ahead in Fast-Moving Consumer Markets",
    overviewHeading: "Consumer Intelligence That Translates to Market Share",
    description:
      "FMCG companies face a perfect storm of rapidly shifting consumer preferences, D2C disruption, private-label encroachment, and inflationary pressure on household budgets. Premiumisation is accelerating in some categories while value-seeking behaviour dominates others — and the divide between winners and laggards is increasingly determined by speed of insight and precision of execution.",
    marketContext:
      "Our FMCG research delivers category-level granularity: brand perception mapping, shelf-space and distribution channel dynamics, pricing and promotional elasticity, and the innovation pipeline benchmarking that tells you where competitors are placing their bets. We cover both modern trade and traditional trade dynamics across urban and rural markets.",
    icon: <ShoppingBag className="w-8 h-8 text-orange-400" />,
    features: [
      "Consumer behaviour shifts and purchase driver analysis",
      "Omnichannel strategy and D2C growth assessment",
      "Competitor pricing, promotion, and trade spend benchmarking",
      "Private label threat and retailer power dynamics",
      "Product innovation pipeline and NPD trend tracking",
      "Sustainability claims and eco-labelling impact",
      "Rural vs. urban demand segmentation",
      "Brand equity and switching behaviour studies",
    ],
    deliverables: [
      { title: "Category Demand Assessment", desc: "Volume and value sizing by sub-category, channel, and region with growth projections." },
      { title: "Brand & Competitor Benchmarking", desc: "Share of voice, shelf presence, pricing ladder, and distribution reach comparison." },
      { title: "Consumer Insight Synthesis", desc: "Qualitative and quantitative synthesis of consumer attitudes, needs, and unmet desires." },
      { title: "Innovation Opportunity Map", desc: "White-space identification across formats, ingredients, and consumer occasions." },
    ],
    whoFor: ["FMCG brand managers and marketing teams", "Category managers and trade marketing leads", "Retail buyers and private label strategists", "PE firms evaluating FMCG brand acquisitions"],
    color: "from-orange-600/20 to-orange-900/40",
  },
  research4: {
    subtitle: "Driving the Evolution of Mobility",
    overviewHeading: "Strategic Intelligence Across the Full Vehicle Value Chain",
    description:
      "The automotive sector is being rewritten at every layer — from powertrain and architecture to retail and ownership models. The EV transition is accelerating unevenly across geographies, battery technology is evolving rapidly, and legacy OEMs face margin pressure as software-defined vehicles require new capabilities they are building, buying, or partnering to acquire.",
    marketContext:
      "We deliver deep strategic insights into OEM roadmaps, battery chemistry and supply chain economics, Tier-1 supplier strategic positioning, and the emerging software and connectivity stack that will define the next generation of vehicles. Our research spans passenger vehicles, commercial vehicles, and two-wheelers across mature and high-growth markets.",
    icon: <Car className="w-8 h-8 text-red-400" />,
    features: [
      "EV transition timelines and BEV/PHEV/HEV demand mix",
      "Battery supply chain: chemistry, cell, pack, and recycling",
      "Autonomous driving technology and regulation readiness",
      "OEM competitive benchmarking on EV platforms and margins",
      "Tier-1 supplier strategic positioning and M&A activity",
      "Aftermarket and vehicle service economics",
      "New mobility: fleet, ride-hailing, and subscription models",
      "Charging infrastructure and energy ecosystem mapping",
    ],
    deliverables: [
      { title: "EV Market Forecast", desc: "Volume and penetration projections by vehicle type, geography, and powertrain technology." },
      { title: "Battery Value Chain Report", desc: "End-to-end economics from raw materials to cell manufacturing and pack integration." },
      { title: "OEM Strategy Assessment", desc: "How leading OEMs are positioning on electrification, software, and platform consolidation." },
      { title: "Supplier Opportunity Map", desc: "Priority opportunities for Tier-1/2 suppliers as content-per-vehicle shifts with EVs." },
    ],
    whoFor: ["OEMs and their strategy teams", "Automotive Tier-1 and Tier-2 suppliers", "Battery material and cell manufacturers", "Mobility investors and automotive PE funds"],
    color: "from-red-600/20 to-red-900/40",
  },
  research5: {
    subtitle: "Advancing Global Health Through Evidence-Based Strategy",
    overviewHeading: "Precision Research for a Complex Healthcare Landscape",
    description:
      "Healthcare markets reward those who understand the full ecosystem — from clinical unmet needs and physician treatment decisions to payer reimbursement logic and health system procurement priorities. With rising pressure on drug pricing, the acceleration of biosimilars, and digital health redefining care delivery, strategy errors are costly and hard to reverse.",
    marketContext:
      "We specialise in mapping therapeutic landscapes, quantifying market opportunity by indication and geography, assessing med-tech innovation trajectories, and decoding payer and HTA dynamics across markets. Our research supports product launch strategy, BD&L evaluation, portfolio prioritisation, and competitive response planning for pharma, biotech, and medical device companies.",
    icon: <HeartPulse className="w-8 h-8 text-pink-400" />,
    features: [
      "Therapeutic area landscape and unmet need quantification",
      "Payer landscape, reimbursement, and HTA strategy",
      "Treatment algorithm and standard-of-care mapping",
      "Physician prescribing behaviour and KOL sentiment",
      "Medical device and digital health innovation tracking",
      "Biosimilar and generic entry threat assessment",
      "Health system procurement and tendering dynamics",
      "Patient journey, adherence, and outcomes research",
    ],
    deliverables: [
      { title: "Indication Opportunity Assessment", desc: "Patient population sizing, diagnosis rates, and current treatment gap analysis by geography." },
      { title: "Competitive Pipeline Tracker", desc: "Full pipeline mapping across approved, Phase III, and Phase II assets in your target indication." },
      { title: "Payer & Access Strategy Brief", desc: "Country-level reimbursement criteria, HTA requirements, and access pathway recommendations." },
      { title: "Launch Readiness Assessment", desc: "Market conditions, key stakeholder mapping, and go-to-market strategy inputs for new product launches." },
    ],
    whoFor: ["Pharma and biotech commercial and strategy teams", "Medical device and diagnostics companies", "Healthcare investors and life sciences PE funds", "Hospital and health system procurement teams"],
    color: "from-pink-600/20 to-pink-900/40",
  },
  research6: {
    subtitle: "Mastering the Digital and IT Landscape",
    overviewHeading: "Intelligence for an Industry Evolving at Breakneck Speed",
    description:
      "Information Technology is experiencing a structural shift driven by generative AI adoption, cloud infrastructure consolidation, and the rapid maturation of cybersecurity as a boardroom-level priority. Enterprise IT spend is being reoriented toward AI-enabled productivity, while hyperscalers continue to disrupt traditional software and services vendors.",
    marketContext:
      "Our IT research helps vendors, MSPs, and enterprise IT teams benchmark offerings, evaluate M&A targets, track technology adoption cycles, and understand where CIO budget is shifting. We cover infrastructure, platform, application software, and IT services markets with granularity at the buyer-segment and geographic level.",
    icon: <Laptop className="w-8 h-8 text-blue-400" />,
    features: [
      "Generative AI adoption curves and enterprise use-case prioritisation",
      "Cloud infrastructure and hyperscaler competitive dynamics",
      "SaaS market sizing and vendor consolidation trends",
      "Cybersecurity threat landscape and vendor spend analysis",
      "IT services and managed services market sizing",
      "Digital transformation spend by industry vertical",
      "CIO and IT buyer decision-making and budget allocation",
      "Emerging tech: quantum, edge computing, and IoT",
    ],
    deliverables: [
      { title: "Market Sizing & Forecast", desc: "IT spend by segment (infrastructure, software, services), buyer vertical, and geography through 2028." },
      { title: "Competitive Positioning Report", desc: "How leading vendors are positioned on product, pricing, partner ecosystem, and go-to-market." },
      { title: "Technology Adoption Study", desc: "Maturity and adoption curves for key technologies with enterprise buyer readiness assessment." },
      { title: "M&A Target Landscape", desc: "Strategic rationale and target screening for IT acquisitions aligned to your capability gaps." },
    ],
    whoFor: ["IT vendors and SaaS companies", "Managed service providers (MSPs)", "Enterprise CIOs and technology leadership", "Technology-focused PE and growth equity investors"],
    color: "from-blue-600/20 to-blue-900/40",
  },
};

export default async function MarketResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const item = marketResearchItems.find((i) => i.href.endsWith(`/${slug}`));

  if (!item) notFound();

  const content = contentMap[slug] ?? {
    subtitle: "Comprehensive Market Research",
    overviewHeading: "Intelligence That Drives Industry Leadership",
    description: "Strategic market insights to drive your business forward.",
    marketContext: "We deliver evidence-based analysis tailored to your market.",
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
    features: ["Industry trend analysis", "Competitor benchmarking", "Market sizing", "Strategic opportunity assessment"],
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
                Sector Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">{content.overviewHeading}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">{content.description}</p>
              <p className="text-base text-slate-500 leading-relaxed">{content.marketContext}</p>
            </div>

            {/* Focus Areas */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Research Focus Areas</h3>
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
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Who This Research Is For</h3>
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
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Need targeted insights?</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Connect with our sector specialists to discuss how our {item!.title} research can accelerate your strategic goals.
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
