import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#B8860B]/10 via-[#FFD700]/10 to-[#FFA500]/10">
      <div className="container mx-auto px-4 text-center">
        <div className="glass-card p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
            Got a project idea? <br />
            <span className="gradient-text">Let's bring it to life.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From concept to launch, we'll help you create something extraordinary that stands out in the digital landscape.
          </p>
          <Button 
            size="lg" 
            variant="hero" 
            className="text-xl px-12 py-6 rounded-full hover:scale-105 transition-all duration-300"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;