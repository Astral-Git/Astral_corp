import React from "react";
import { LightBulbIcon } from "@heroicons/react/24/outline"; // <-- import

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background text-foreground dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-10 animate-fadeInLeft">
            <div>
              <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We're a forward-thinking technology consultancy that specializes in transforming complex challenges into elegant digital solutions. Our multidisciplinary team combines strategic thinking, innovative design, and advanced engineering to deliver measurable results for businesses ready to scale.
              </p>
            </div>

            <div className="rounded-lg border border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-md p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <LightBulbIcon className="w-8 h-8 text-[#B8860B] dark:text-[#FFD700] shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
                    "We don't just build digital products—we architect experiences that drive growth, enhance user engagement, and deliver quantifiable business value."
                  </p>
                </div>
              </div>
            </div>


          </div>

          {/* Right: Image */}
          <div className="relative animate-fadeInRight">
            <div className="glass-card p-6 sm:p-8 rounded-xl transform hover:scale-105 transition-transform duration-300 shadow-xl glow-elegant">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Professional team working on brand strategy"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full flex items-center justify-center animate-pulse-glow shadow-lg">
                <LightBulbIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-xl animate-float" />
            <div className="absolute -z-10 bottom-10 -right-10 w-24 h-24 bg-[#B8860B]/20 rounded-full blur-xl animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
