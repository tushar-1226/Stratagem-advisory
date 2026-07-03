import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import ClientLogos from "@/components/Home/ClientLogos";
import WhatWeDo from "@/components/Home/WhatWeDo";
import StatsSection from "@/components/Home/StatsSection";
import ServiceInfo from "@/components/Home/ServiceInfo";
import Research from "@/components/Home/Research";
import PlatformSlideshow from "@/components/Home/PlatformSlideshow";
import FAQSection from "@/components/Home/FAQSection";
import Testimonials from "@/components/Home/Testimonials";

export const metadata: Metadata = {
  title: "Strategem Advisory | Strategic Consulting & Market Intelligence",
  description:
    "Strategem Advisory delivers expert market research and competitive intelligence to help businesses make confident strategic decisions. Trusted by global industry leaders.",
  openGraph: {
    title: "Strategem Advisory | Strategic Consulting & Market Intelligence",
    description:
      "Expert market research and competitive intelligence for strategic business decisions.",
    type: "website",
    url: "https://www.stratagemadvisory.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <WhatWeDo />
      <StatsSection />
      <ServiceInfo />
      <Research />
      <PlatformSlideshow />
      <FAQSection />
      <Testimonials />
    </>
  );
}