import { ResearchItem } from "@/components/ui/SlidingResearchRow";
import MR1 from "@/media/MR_1.jpeg";
import MR2 from "@/media/MR_2.jpeg";
import MR3 from "@/media/MR_3.jpeg";
import MR4 from "@/media/MR_4.jpeg";
import MR5 from "@/media/MR_5.jpeg";
import MR6 from "@/media/MR_6.jpeg";
import CI1 from "@/media/CI_1.jpeg";
import CI2 from "@/media/CI_2.jpeg";
import CI3 from "@/media/CI_3.jpeg";

export const marketResearchItems: ResearchItem[] = [
  {
    id: "mr1",
    title: "Chemicals",
    image: MR1,
    href: "/service/market-research/research1",
  },
  {
    id: "mr2",
    title: "Semiconductors",
    image: MR2,
    href: "/service/market-research/research2",
  },
  {
    id: "mr3",
    title: "Fast Moving Consumer Goods (FMCG)",
    image: MR3,
    href: "/service/market-research/research3",
  },
  {
    id: "mr4",
    title: "Automotive",
    image: MR4,
    href: "/service/market-research/research4",
  },
  {
    id: "mr5",
    title: "Healthcare",
    image: MR5,
    href: "/service/market-research/research5",
  },
  {
    id: "mr6",
    title: "Information Technology Industry",
    image: MR6,
    href: "/service/market-research/research6",
  },
];

export const competitiveIntelligenceItems: ResearchItem[] = [
  {
    id: "ci1",
    title: "Oncology",
    image: CI1,
    href: "/service/competitive-intelligence/intelligence1",
  },
  {
    id: "ci2",
    title: "Rare diseases",
    image: CI2,
    href: "/service/competitive-intelligence/intelligence2",
  },
  {
    id: "ci3",
    title: "Chronic disease",
    image: CI3,
    href: "/service/competitive-intelligence/intelligence3",
  },
];
