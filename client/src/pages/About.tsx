import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/floating-shapes";
import { motion } from "framer-motion";
import ChromaGrid from "@/components/ui/chroma-grid";

const About = () => {
  const milestones = [



    { year: "Dec, 2024", title: "Founded", description: "Started with a vision to revolutionize digital experiences." },
    { year: "Jan, 2025", title: "First Breakthrough", description: "Developed our signature glassmorphic design system." },
    { year: "April, 2025", title: "Growth", description: "Expanded team and served 10+ clients globally." },
    { year: "June, 2025", title: "Innovation", description: "Pioneered neon-aesthetic web applications." },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 tracking-tight">
            About <span className="gradient-text">Astral Corp</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            We're a passionate team of designers and developers crafting the future of digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/20 dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-space font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To push the boundaries of what's possible in digital design, creating immersive experiences 
              that blend cutting-edge technology with stunning visual aesthetics.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in the power of glassmorphism and neon aesthetics to create interfaces 
              that feel both futuristic and approachable.
            </p>
            <Button variant="hero" size="lg" className="transition-all duration-300 hover:scale-105">
              Join Our Journey
            </Button>
          </div>

          <div className="glass-card p-8 glow-purple rounded-2xl shadow-xl backdrop-blur border border-white/10">
            <h3 className="text-2xl font-space font-semibold mb-4 gradient-text">
              Our Values
            </h3>
            <ul className="space-y-4">
              {[
                "Innovation in every pixel",
                "User-centric design thinking",
                "Performance without compromise",
                "Beautiful, accessible experiences"
              ].map((value, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space font-bold text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical center line on desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple to-neon-blue z-0"></div>

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative z-10 mb-12 flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Left side card */}
                  {isLeft && (
                    <>
                      <div className="w-full md:w-1/2 px-4 md:pr-8">
                        <div className="glass-card p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-md glow-blue hover:glow-pink transition-all duration-300">
                          <span className="text-sm font-space gradient-text block mb-2">{milestone.year}</span>
                          <h3 className="text-xl font-space font-semibold mb-1 text-foreground">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2" />
                    </>
                  )}

                  {/* Right side card */}
                  {!isLeft && (
                    <>
                      <div className="hidden md:block w-1/2" />
                      <div className="w-full md:w-1/2 px-4 md:pl-8">
                        <div className="glass-card p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-md glow-blue hover:glow-pink transition-all duration-300">
                          <span className="text-sm font-space gradient-text block mb-2">{milestone.year}</span>
                          <h3 className="text-xl font-space font-semibold mb-1 text-foreground">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Mobile-only separator line */}
                  {index < milestones.length - 1 && (
                    <div className="md:hidden w-1 mx-auto my-6 h-12 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
