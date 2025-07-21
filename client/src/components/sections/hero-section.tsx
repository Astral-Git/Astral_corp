import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/floating-shapes";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f7faff] to-white dark:from-gray-900 dark:via-black dark:to-gray-900">
      <FloatingShapes />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 pt-25 sm:pt-28 md:pt-32 pb-16">
        {/* Hero Heading */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space font-extrabold mb-6 leading-tight tracking-tight animate-fadeInUp">
          <span className="block">We build</span>
          <span className="gradient-text block">websites & brands</span>
          <span className="block text-gray-800 dark:text-white">that make an impact.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-inter leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          Transforming visions into exceptional digital experiences through innovative web development, strategic brand design, and cutting-edge technology solutions.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <Button 
            variant="hero"
            size="lg" 
            className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-md"
            onClick={() => window.location.href = '/portfolio'}
          >
            View Portfolio
          </Button>
          <Button 
            variant="glass"
            size="lg" 
            className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold"
            onClick={() => {
              const appointmentSection = document.getElementById('appointment-booking');
              if (appointmentSection) {
                appointmentSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
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
