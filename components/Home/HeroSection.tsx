"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden p-3 mx-2 lg:p-6 md:mx-4 rounded-3xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-start justify-end h-full text-left max-w-3xl">
        <p className="text-2xl font-bold lg:text-4xl text-white/90 mb-3">
          Leading strategic consulting services to help your business grow and
          succeed in today's competitive market.
        </p>
        <p className="lg:text-lg text-white/80 mb-2">
          We provide expert guidance and innovative solutions tailored to your
          unique business needs.
        </p>
        <Link href="/contact-us">
          <Button text="Contact us" />
        </Link>
      </div>
    </section>
  );
}
