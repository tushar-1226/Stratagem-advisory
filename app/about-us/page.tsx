import dynamic from "next/dynamic";
import Image from "next/image";
import WhatWeDo from "@/components/Home/WhatWeDo";
import ServiceInfo from "@/components/Home/ServiceInfo";

const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), {
  loading: () => <div className="h-96" />,
});

export default function AboutUs() {
  return (
    <>
      {/* What Matters to Us Section */}
      <section className="py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Secondary Color with Text */}
          <div className="w-full lg:w-1/2 bg-secondary flex items-center justify-center p-12 lg:p-20">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                What matters to us.
              </h2>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                We strive to always be a company you can be proud to partner
                with.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Who We Are
          </h2>
          <div className="space-y-4 text-base lg:text-lg text-foreground/80 leading-relaxed">
            <p>
              Strategem Advisor is a leading strategic consulting firm dedicated
              to helping businesses navigate complex challenges and achieve
              sustainable growth. With years of industry experience and a team
              of expert consultants, we provide innovative solutions tailored to
              your unique business needs.
            </p>
            <p>
              Our mission is to empower organizations with strategic insights,
              data-driven analysis, and actionable recommendations that drive
              long-term success. We combine rigorous research methodologies with
              practical business acumen to deliver results that matter.
            </p>
            <p>
              At Strategem Advisor, we believe in building lasting partnerships
              with our clients. We work closely with you to understand your
              challenges, identify opportunities, and implement strategies that
              transform your business and position you for success in today's
              competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Services Section */}
      <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-foreground">
            Services We Offer
          </h2>
          <ServiceInfo />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
