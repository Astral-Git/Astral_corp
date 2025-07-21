import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/floating-shapes";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f7faff] to-white dark:from-black dark:via-[#1a1a1a] dark:to-black">
      <FloatingShapes />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 pt-25 sm:pt-28 md:pt-32 pb-16">
        {/* Hero Heading */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block">We build</span>
          <span className="gradient-text block">websites & brands</span>
          <span className="block text-gray-800 dark:text-white">that make an impact.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
          A creative studio specializing in web development and visual identity design.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-[0_0_30px_#FFD700] transition-all duration-300"
          >
            View Portfolio
          </Button>
          <Button 
            size="lg" 
            className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-white/40 dark:hover:bg-gray-700/50 hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
