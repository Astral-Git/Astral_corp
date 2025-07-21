import Snowflakes from "@/components/snowflakes";
import FloatingButtons from "@/components/floating-buttons";
import HeroSection from "@/components/sections/hero-section";
import TestimonialsSection from "@/components/sections/testimonials";
import AboutSection from "@/components/sections/about-section";
import StatsSection from "@/components/sections/stats-section";
import CoreValuesSection from "@/components/sections/core-values";
import ContactFormSection from "@/components/sections/contact-form";
import ServicesOverview from "@/components/sections/services-overview";
import Newsletter from "@/components/sections/newsletter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Snowflakes />
      <FloatingButtons />
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <StatsSection />
      <CoreValuesSection />
      <ContactFormSection />
      <Newsletter />
    </div>
  );
};

export default Home;