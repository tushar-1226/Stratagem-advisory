"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AAKLogo from "@/media/AAK.png";
import AgilentLogo from "@/media/Agilent.png";
import AmcoLogo from "@/media/Amco.png";
import AMSLogo from "@/media/AMS.png";
import BayerLogo from "@/media/BAYER.png";
import DaikinLogo from "@/media/DAIKIN.png";
import EvonikLogo from "@/media/EVONIK.png";
import MiyoshiLogo from "@/media/Miyoshi.png";
import SymbioLogo from "@/media/Symbio.png";
import ThermoFisherLogo from "@/media/ThermoFisher.png";

const logos = [
  {
    id: 1,
    src: AAKLogo,
    alt: "AAK",
    scale: "scale-[1.3] md:scale-[1.45]",
  },
  {
    id: 2,
    src: AgilentLogo,
    alt: "Agilent",
    scale: "scale-[1.25] md:scale-[1.4]",
  },
  {
    id: 3,
    src: AmcoLogo,
    alt: "Amco",
    scale: "scale-[1.45] md:scale-[1.65]",
  },
  {
    id: 4,
    src: AMSLogo,
    alt: "AMS",
    scale: "scale-[1.35] md:scale-[1.55]",
  },
  {
    id: 5,
    src: BayerLogo,
    alt: "Bayer",
    scale: "scale-[1.3] md:scale-[1.45]",
  },
  {
    id: 6,
    src: DaikinLogo,
    alt: "Daikin",
    scale: "scale-[1.35] md:scale-[1.55]",
  },
  {
    id: 7,
    src: EvonikLogo,
    alt: "Evonik",
    scale: "scale-[1.25] md:scale-[1.4]",
  },
  {
    id: 8,
    src: MiyoshiLogo,
    alt: "Miyoshi",
    scale: "scale-[1.3] md:scale-[1.45]",
  },
  {
    id: 9,
    src: SymbioLogo,
    alt: "Symbio",
    scale: "scale-[1.25] md:scale-[1.4]",
  },
  {
    id: 10,
    src: ThermoFisherLogo,
    alt: "Thermo Fisher",
    scale: "scale-[1.3] md:scale-[1.5]",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-8 px-3 mx-2 lg:py-12 lg:px-6 md:mx-4 bg-gray-50 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex w-max items-center will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 items-center gap-10 px-2 md:gap-14 lg:gap-16"
                aria-hidden={copyIndex === 1}
              >
                {logos.map((logo) => (
                  <div
                    key={`${logo.id}-${copyIndex}`}
                    className="flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-52 lg:h-28 lg:w-60"
                  >
                    <div className="relative h-14 w-full overflow-visible md:h-16 lg:h-20">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className={`object-contain ${logo.scale}`}
                        sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 240px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
