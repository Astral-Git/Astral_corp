"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Image,
  Zap,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";

const FloatingButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const categories = [
    { id: "web", label: "Web Design", icon: Globe },
    { id: "poster", label: "Poster Design", icon: Image },
    { id: "logo", label: "Logo Design", icon: Zap },
    { id: "product", label: "Product Design", icon: Smartphone },
    { id: "uiux", label: "UI/UX Design", icon: LayoutDashboard },
  ];

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-6 z-40 space-y-3">
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <motion.div
            key={category.id}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            onMouseEnter={() => setHoveredButton(category.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 flex items-center justify-center text-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              {/* ✅ Icon visible in both themes */}
              <IconComponent className="w-6 h-6 text-gray-800 dark:text-white" />
            </motion.button>

            {/* Tooltip */}
            {hoveredButton === category.id && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
              >
                {category.label}
                <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-900 dark:border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingButtons;
