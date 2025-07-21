import Snowflakes from "@/components/snowflakes";
import FloatingButtons from "@/components/floating-buttons";
import HeroSection from "@/components/sections/hero-section";
import TestimonialsSection from "@/components/sections/testimonials";
import AboutSection from "@/components/sections/about-section";
import StatsSection from "@/components/sections/stats-section";
import CoreValuesSection from "@/components/sections/core-values";
import BrandAnalysisQuiz from "@/components/sections/brand-analysis-quiz";
import ServicesOverview from "@/components/sections/services-overview";
import Newsletter from "@/components/sections/newsletter";
import AppointmentBooking from "@/components/sections/appointment-booking";
import Chatbot from "@/components/chatbot";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Snowflakes />
      <FloatingButtons />
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CoreValuesSection />
      <BrandAnalysisQuiz />
      <AppointmentBooking />
      <Newsletter />
      <Chatbot />
    </div>
  );
};

export default Home;