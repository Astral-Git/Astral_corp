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
      title: "Innovation-driven design solutions",
      description:
        "We push creative boundaries to deliver unique solutions that set your brand apart.",
    },
    {
      icon: Handshake,
      title: "Transparent communication",
      description:
        "Clear, honest communication throughout every project phase keeps you informed and confident.",
    },
    {
      icon: Clock,
      title: "Deadline-focused delivery",
      description:
        "We respect your time and consistently deliver high-quality work when promised.",
    },
    {
      icon: BookOpenCheck,
      title: "Continuous learning & growth",
      description:
        "We stay ahead of trends and technologies to bring you the most current solutions.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden dark:bg-[#0B0B0F]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do and ensure exceptional results for every client.
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
                  <Icon className="w-10 h-10 text-[#6C63FF] dark:text-[#D9BBF9]" />
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
        <div className="absolute -z-10 top-1/4 left-10 w-64 h-64 bg-[#D9BBF9]/10 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-1/4 right-10 w-48 h-48 bg-[#FF6EC7]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CoreValuesSection;
