"use client";

import Image from "next/image";

const logos = [
  {
    id: 1,
    src: "/images/client/client-logo.png",
    alt: "Client Logo 1",
  },
  {
    id: 2,
    src: "/images/client/client-logo.png",
    alt: "Client Logo 2",
  },
  {
    id: 3,
    src: "/images/client/client-logo.png",
    alt: "Client Logo 3",
  },
  {
    id: 4,
    src: "/images/client/client-logo.png",
    alt: "Client Logo 4",
  },
  {
    id: 5,
    src: "/images/client/client-logo.png",
    alt: "Client Logo 5",
  },
];

export default function ClientLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 px-3 mx-2 lg:py-12 lg:px-6 md:mx-4 bg-gray-50 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos w-fit">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="shrink-0 mx-8 lg:mx-12"
              >
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
