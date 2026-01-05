"use client";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

interface Testimonial {
  id: number;
  review: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    review:
      "Stratagem Advisory provided exceptional strategic guidance that transformed our business approach. Their insights were invaluable in helping us navigate complex market challenges.",
    clientName: "John Smith",
    clientPosition: "CEO",
    clientCompany: "Tech Innovations Inc.",
  },
  {
    id: 2,
    review:
      "The market research and competitive intelligence services exceeded our expectations. We gained a clear understanding of our position in the market and identified key growth opportunities.",
    clientName: "Sarah Johnson",
    clientPosition: "Marketing Director",
    clientCompany: "Global Solutions Ltd.",
  },
  {
    id: 3,
    review:
      "Working with Stratagem Advisory was a game-changer for our organization. Their strategic recommendations helped us achieve significant growth and improve our competitive edge.",
    clientName: "Michael Chen",
    clientPosition: "VP of Strategy",
    clientCompany: "Enterprise Dynamics",
  },
  {
    id: 4,
    review:
      "The team's expertise in market analysis and strategic planning is outstanding. They delivered actionable insights that directly contributed to our success.",
    clientName: "Emily Rodriguez",
    clientPosition: "Chief Operating Officer",
    clientCompany: "Innovation Partners",
  },
  {
    id: 5,
    review:
      "Stratagem Advisory's comprehensive approach to competitive intelligence gave us the clarity we needed to make informed strategic decisions. Highly recommended!",
    clientName: "David Thompson",
    clientPosition: "Business Development Manager",
    clientCompany: "Strategic Ventures",
  },
];

export default function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-foreground">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-testimonials w-fit gap-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="shrink-0 w-80 lg:w-96"
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 lg:p-8 h-full">
                  <div className="mb-4">
                    <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground/80 text-sm lg:text-base leading-relaxed">
                      {testimonial.review}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-foreground text-base lg:text-lg">
                      {testimonial.clientName}
                    </p>
                    <p className="text-foreground/60 text-sm lg:text-base">
                      {testimonial.clientPosition}, {testimonial.clientCompany}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
