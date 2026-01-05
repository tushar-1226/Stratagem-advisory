"use client";

import SlidingResearchRow from "@/components/ui/SlidingResearchRow";
import {
  marketResearchItems,
  competitiveIntelligenceItems,
} from "@/lib/researchData";

export default function Research() {
  return (
    <section className="py-12 px-3 mx-2 lg:py-20 lg:px-6 md:mx-4">
      <div className="max-w-7xl mx-auto">
        {/* Market Research Row */}
        <div className="mb-16">
          <SlidingResearchRow
            title="Market Research"
            items={marketResearchItems}
            itemsPerView={3}
          />
        </div>

        {/* Competitive Intelligence Row */}
        <SlidingResearchRow
          title="Competitive Intelligence"
          items={competitiveIntelligenceItems}
          itemsPerView={3}
        />
      </div>
    </section>
  );
}
