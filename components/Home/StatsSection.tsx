"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    description: "Delivering strategic insights across global markets",
  },
  {
    value: 200,
    suffix: "+",
    label: "Reports Delivered",
    description: "In-depth research across industries and geographies",
  },
  {
    value: 50,
    suffix: "+",
    label: "Clients Served",
    description: "From startups to Fortune 500 enterprises",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Measured through repeat engagement and referrals",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 px-3 mx-2 md:mx-4 bg-secondary rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Trusted by Leaders Worldwide
          </h2>
          <p className="text-white/70 text-base lg:text-lg max-w-2xl mx-auto">
            Our track record speaks for itself — delivering clarity and confidence to decision-makers across every major industry.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tabular-nums">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </p>
              <p className="text-base lg:text-lg font-semibold text-white mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-white/60 leading-snug">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
