import HeroSection from "@/components/Home/HeroSection";
import ClientLogos from "@/components/Home/ClientLogos";
import WhatWeDo from "@/components/Home/WhatWeDo";
import ServiceInfo from "@/components/Home/ServiceInfo";
import Research from "@/components/Home/Research";
import PlatformSlideshow from "@/components/Home/PlatformSlideshow";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <WhatWeDo />
      <ServiceInfo />
      <Research />
      <PlatformSlideshow />
      <Testimonials />
    </>
  );
}