"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Clinical Search Dashboard",
    image: "/slideshow/Pasted image.png",
  },
  {
    id: 2,
    title: "Comprehensive Trial Analytics",
    image: "/slideshow/Pasted image (2).png",
  },
  {
    id: 3,
    title: "Market Forecasting Models",
    image: "/slideshow/Pasted image (3).png",
  },
  {
    id: 4,
    title: "Advanced Data Analyzer",
    image: "/slideshow/Pasted image (4).png",
  },
];

export default function PlatformSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Platform
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the powerful tools and dashboards we use to deliver unparalleled insights.
          </p>
        </div>

        <div className="relative w-full max-w-screen-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white group border border-gray-200">
          
          {/* Main Slideshow Area */}
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-auto block"
                // Fallback style if image doesn't exist yet
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 450" preserveAspectRatio="none"><rect width="800" height="450" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af">Please place ' + slides[currentIndex].image + ' in public/slideshow/</text></svg>';
                }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors backdrop-blur-sm shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors backdrop-blur-sm shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                {slides[currentIndex].title}
              </h3>
            </div>
          </div>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-4 right-6 flex space-x-2">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === slideIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Try It Now Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://s-advisor.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl shadow-lg hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Try it now
          </a>
        </div>
      </div>
    </section>
  );
}
