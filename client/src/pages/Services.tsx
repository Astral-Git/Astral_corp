"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingShapes from "@/components/floating-shapes";
import { Palette, Code, BadgePercent, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: { [key: string]: JSX.Element } = {
  design: <Palette className="icon-style" />,
  development: <Code className="icon-style" />,
  branding: <BadgePercent className="icon-style" />,
  iot: <Cpu className="icon-style" />,
};

const services = [
  {
    id: "design",
    title: "UI/UX Design",
    description: "Stunning glassmorphic interfaces with neon aesthetics",
    features: [
      "Glassmorphism Design Systems",
      "Neon Color Palettes",
      "Interactive Prototypes",
      "User Research & Testing",
    ],
  },
  {
    id: "development",
    title: "Web Development",
    description: "Modern, performant web applications",
    features: [
      "React & TypeScript",
      "Responsive Design",
      "Performance Optimization",
      "SEO & Accessibility",
    ],
  },
  {
    id: "branding",
    title: "Brand Identity",
    description: "Complete brand experiences that shine",
    features: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Materials",
      "Digital Asset Creation",
    ],
  },
  {
    id: "iot",
    title: "3D and IoT",
    description: "Innovative experiences merging 3D design and smart devices",
    features: [
      "AR/VR Interface Concepts",
      "IoT Device Dashboards",
      "3D Product Visualization",
      "Interactive 3D + IoT Demos",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discover", description: "Understanding your vision and goals" },
  { step: "02", title: "Design", description: "Creating beautiful, functional designs" },
  { step: "03", title: "Develop", description: "Building with cutting-edge technology" },
  { step: "04", title: "Deploy", description: "Launching your project to the world" },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground dark:bg-black">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <FloatingShapes />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-space font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Comprehensive digital solutions that bring your vision to life.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <Tabs defaultValue="design">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 py-2 mb-20 rounded-xl bg-white dark:bg-black backdrop-blur">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="tab-trigger flex gap-2 px-3 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#B8860B] data-[state=active]:to-[#FFD700] data-[state=active]:text-white"
              >
                {iconMap[service.id]}
                <span className="text-sm sm:text-base">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6 pt-5">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Left Content */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-space font-bold mb-6 gradient-text">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="w-3 h-3 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                </div>

                {/* Right Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl glow-elegant shadow-xl backdrop-blur border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                  <div className="mb-6">{iconMap[service.id]}</div>
                  <h3 className="text-2xl font-space font-semibold mb-4 gradient-text">
                    Premium Quality
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Every project is crafted with attention to detail and modern trends.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/20 dark:bg-black max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-space font-bold text-center mb-16">
          Our <span className="gradient-text">Process</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((phase, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur shadow-md group-hover:glow-gold hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-space font-bold gradient-text mb-2">
                  {phase.step}
                </div>
                <h3 className="text-lg sm:text-xl font-space font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-space font-bold mb-8">
          Why <span className="gradient-text">Choose Us?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          We blend creativity, innovation, and technology to deliver experiences that captivate and convert.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Tailored Solutions", "Latest Tech Stack", "Transparent Workflow"].map((point, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold gradient-text mb-2">{point}</h3>
              <p className="text-sm text-muted-foreground">
                We adapt our tools and process to meet your unique business needs and timelines.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-space font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let’s collaborate to turn your ideas into reality. We’d love to hear from you.
          </p>
          <Button variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
