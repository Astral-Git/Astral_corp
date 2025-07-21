"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    satisfaction: 0,
    support: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: "projects", label: "Projects Completed", target: 50, suffix: "+" },
    { key: "years", label: "Years Experience", target: 5, suffix: "+" },
    { key: "satisfaction", label: "Client Satisfaction", target: 100, suffix: "%" },
    { key: "support", label: "Support Available", target: 24, suffix: "/7" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts((prev) => ({
          ...prev,
          [stat.key]: Math.floor(current),
        }));
      }, interval);
    });
  }, [isVisible]);

  return (
<section
  ref={sectionRef}
  className="py-20 bg-gradient-to-r dark:bg-[#0B0B0F]"
>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              className="relative text-center rounded-2xl p-8 backdrop-blur-xl bg-white/10 dark:bg-[#1A1A1A]/30 border border-white/20 dark:border-[#6C63FF]/30 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="text-4xl md:text-5xl font-bold font-space mb-2 text-gray-900 dark:text-white">
                {counts[stat.key as keyof typeof counts]}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6C63FF]/20 via-[#D9BBF9]/20 to-[#FF6EC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
