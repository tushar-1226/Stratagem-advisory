"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  linkedin?: string;
  color: string;
}

const team: TeamMember[] = [
  {
    name: "Rahul Sharma",
    title: "Founder & Managing Director",
    bio: "15+ years of experience in strategic consulting across chemicals, FMCG, and life sciences. Previously held senior roles at McKinsey and Deloitte before founding Strategem Advisory.",
    initials: "RS",
    color: "bg-primary",
  },
  {
    name: "Priya Nair",
    title: "Head of Market Research",
    bio: "Expert in primary and secondary market research methodologies. Leads our team of analysts in delivering data-driven market intelligence for Fortune 500 clients.",
    initials: "PN",
    color: "bg-secondary",
  },
  {
    name: "Arjun Mehta",
    title: "Head of Competitive Intelligence",
    bio: "Specializes in competitive landscape analysis and strategic positioning. Brings deep expertise in semiconductor, automotive, and IT sector intelligence.",
    initials: "AM",
    color: "bg-primary",
  },
  {
    name: "Kavita Bose",
    title: "Director of Client Success",
    bio: "Oversees client relationships and ensures every engagement delivers measurable impact. Has managed 100+ research projects across 20 countries.",
    initials: "KB",
    color: "bg-secondary",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 px-3 mx-2 md:mx-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Meet Our Leadership
          </h2>
          <p className="text-foreground/60 text-base lg:text-lg max-w-2xl mx-auto">
            Our team brings together decades of consulting, research, and industry expertise to deliver insights that matter.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariant}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Avatar */}
              <div className={`${member.color} flex items-center justify-center h-36`}>
                <span className="text-4xl font-extrabold text-white tracking-wider">
                  {member.initials}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mt-0.5 mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-primary transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
