"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface ResearchItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

interface SlidingResearchRowProps {
  title: string;
  items: ResearchItem[];
  itemsPerView?: number;
}

export default function SlidingResearchRow({
  title,
  items,
  itemsPerView = 3,
}: SlidingResearchRowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const maxIndex = Math.max(0, items.length - itemsPerView);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;

    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.velocity.x) > 500
    ) {
      if (info.offset.x > 0 || info.velocity.x > 0) {
        // Swipe right - go to previous
        handlePrev();
      } else {
        // Swipe left - go to next
        handleNext();
      }
    }

    // Reset dragging state after a short delay to prevent link clicks
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
        {title}
      </h3>
      <div className="relative">
        <div className="overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{
              x: `calc(-${currentIndex} * (100% / ${itemsPerView}))`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {items.map((item) => (
              <div key={item.id} className="shrink-0 w-full md:w-1/2 lg:w-1/3">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (isDragging) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="relative h-48 lg:h-56 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="text-white text-lg lg:text-xl font-bold text-center px-4 z-10">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"
            } transition-colors duration-200`}
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full ${
              currentIndex >= maxIndex
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"
            } transition-colors duration-200`}
            aria-label="Next"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
