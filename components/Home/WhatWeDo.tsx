import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              What We Do
            </h2>
            <div className="space-y-3 text-sm lg:text-base text-foreground/80">
              <p>
                At Stratagem Advisory, we provide comprehensive strategic
                consulting services designed to help businesses navigate complex
                challenges and achieve sustainable growth. Our team of
                experienced consultants brings deep industry expertise and
                innovative thinking to every project.
              </p>
              <p>
                We specialize in developing tailored solutions that align with
                your business objectives, whether you're looking to optimize
                operations, expand into new markets, or transform your
                organizational structure. Our approach combines rigorous
                analysis with practical implementation strategies.
              </p>
              <p>
                From strategic planning and market analysis to process
                optimization and change management, we work closely with our
                clients to deliver measurable results that drive long-term
                success.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src="/images/what-we-do.jpg"
                alt="What We Do"
                width={1200}
                height={800}
                className="w-full rounded-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
