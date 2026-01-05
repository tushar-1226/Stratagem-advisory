"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Service {
  id: string;
  label: string;
  title: string;
  description: string;
  details: string[];
  href: string;
}

const services: Service[] = [
  {
    id: "mr",
    label: "Market Research",
    title: "Market Research",
    description:
      "Comprehensive market research services to help you understand your target market, customer behavior, and industry trends.",
    details: [
      "Customer behavior analysis",
      "Market trend identification",
      "Competitive landscape assessment",
      "Demand forecasting",
      "Consumer insights and preferences",
    ],
    href: "/service/market-research",
  },
  {
    id: "ci",
    label: "Competitive Intelligence",
    title: "Competitive Intelligence",
    description:
      "Strategic competitive intelligence to analyze your competitors, identify market opportunities, and gain competitive advantages.",
    details: [
      "Competitor analysis and profiling",
      "Market positioning strategies",
      "SWOT analysis",
      "Competitive benchmarking",
      "Strategic recommendations",
    ],
    href: "/service/competitive-intelligence",
  },
];

export default function ServiceInfo() {
  const [activeService, setActiveService] = useState<string>("mr");

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
  };

  const activeServiceData = services.find((s) => s.id === activeService);

  return (
    <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-foreground">
          Our Services
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side - Service Buttons */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`px-6 py-4 text-left rounded-lg font-semibold text-base lg:text-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                  activeService === service.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Right Side - Service Info Box */}
          <div className="w-full lg:w-2/3">
            {activeServiceData && (
              <motion.div
                key={activeService}
                className="bg-white rounded-lg border border-gray-200 shadow-xl p-6 lg:p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  {activeServiceData.title}
                </h3>
                <p className="text-base lg:text-lg text-foreground/70 mb-6">
                  {activeServiceData.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {activeServiceData.details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-base lg:text-lg text-foreground/80 flex items-start"
                    >
                      <span className="text-primary mr-3 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href={activeServiceData.href}
                  className="inline-flex items-center text-primary font-semibold text-base lg:text-lg hover:text-primary/80 transition-colors duration-200"
                >
                  Read more
                  <ChevronRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
