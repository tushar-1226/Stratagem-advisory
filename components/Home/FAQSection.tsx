"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with a wide range of clients — from growth-stage startups to Fortune 500 enterprises. Our expertise spans chemicals, FMCG, semiconductors, healthcare, automotive, and information technology sectors. If your business needs clarity on markets or competitors, we can help.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A focused market sizing study typically takes 2–4 weeks, while a comprehensive competitive intelligence report may take 4–8 weeks. We always align on timeline expectations before starting and provide regular progress updates.",
  },
  {
    question: "What deliverables will I receive?",
    answer:
      "All projects include a detailed final report with executive summary, data visualizations, and strategic recommendations. Depending on your engagement, you may also receive a presentation deck, data models, interview transcripts, and an interactive Q&A session with our analysts.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we serve clients globally. Our research methodology covers both domestic and international markets, and we have experience working across North America, Europe, Asia-Pacific, and the Middle East. We can conduct cross-border research and provide region-specific insights.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We offer both project-based and retainer pricing models. Project-based pricing is scoped based on the research objective, depth of analysis, and timeline. Retainer models are ideal for clients who need ongoing market monitoring and competitive intelligence. Contact us for a customized quote.",
  },
  {
    question: "Is my business information kept confidential?",
    answer:
      "Absolutely. We treat all client information with the strictest confidentiality. We sign NDAs before project kickoff and ensure that all data, findings, and strategic discussions remain strictly between our team and your organization.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 px-3 mx-2 md:mx-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 text-base lg:text-lg max-w-2xl mx-auto">
            Everything you need to know before getting started. Can&apos;t find your answer?{" "}
            <a
              href="/contact-us"
              className="text-primary font-semibold hover:underline"
            >
              Ask us directly.
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-primary/30 bg-primary/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base lg:text-lg pr-4 ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-colors ${
                        isOpen ? "text-primary" : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm lg:text-base text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
