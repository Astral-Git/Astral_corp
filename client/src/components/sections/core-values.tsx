"use client";

import SpotlightCard from "../ui/SpotlightCard";
import {
  Target,
  Handshake,
  Clock,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Innovation",
      description:
        "We leverage cutting-edge technologies and methodologies to create solutions that drive competitive advantage and measurable business growth.",
    },
    {
      icon: Handshake,
      title: "Transparent Partnership",
      description:
        "We maintain complete transparency in our processes, timelines, and costs, ensuring you have full visibility into project progress and decision-making.",
    },
    {
      icon: Clock,
      title: "Results-Driven Excellence",
      description:
        "Our commitment to quality and deadline adherence ensures project success while maintaining the highest standards of technical and creative excellence.",
    },
    {
      icon: BookOpenCheck,
      title: "Future-Ready Solutions",
      description:
        "We continuously invest in emerging technologies and industry best practices to ensure your solutions remain scalable and competitive in evolving markets.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The strategic principles that drive our approach and ensure consistent delivery of transformative business outcomes for our partners.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <SpotlightCard
                key={index}
                className="bg-white/5 dark:bg-white/10 border-white/10 dark:border-white/10 backdrop-blur-xl"
              >
                <div className="flex flex-col space-y-4">
                  <Icon className="w-10 h-10 text-[#B8860B] dark:text-[#FFD700]" />
                  <h3 className="text-xl font-space font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Background Blurs */}
        <div className="absolute -z-10 top-1/4 left-10 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-1/4 right-10 w-48 h-48 bg-[#B8860B]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CoreValuesSection;
