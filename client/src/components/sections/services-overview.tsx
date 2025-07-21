import { Button } from "@/components/ui/button";
import {
  GlobeAltIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const ServicesOverview = () => {
  const services = [
    {
      icon: <GlobeAltIcon className="w-10 h-10 text-[#B8860B] dark:text-[#FFD700]" />,
      title: "Web Development",
      description: "Full-stack development with modern frameworks and scalable architecture",
      features: ["React & Next.js", "Custom APIs", "E-commerce Solutions", "Performance Optimization"],
    },
    {
      icon: <PaintBrushIcon className="w-10 h-10 text-[#B8860B] dark:text-[#FFD700]" />,
      title: "UI/UX Design",
      description: "Human-centered design that drives engagement and conversions",
      features: ["User Research", "Interface Design", "Brand Strategy", "Design Systems"],
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-[#B8860B] dark:text-[#FFD700]" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver measurable ROI",
      features: ["Search Marketing", "Content Strategy", "Social Media", "Analytics & Reporting"],
    },
    {
      icon: <CubeIcon className="w-10 h-10 text-[#B8860B] dark:text-[#FFD700]" />,
      title: "3D & IoT Engineering",
      description: "Advanced engineering solutions for physical and connected products",
      features: ["CAD Modeling", "IoT Development", "Product Engineering", "Rapid Prototyping"],
    },
  ];

  return (
    <section className="py-24 bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and market presence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-foreground font-space mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <ul className="text-sm space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-br from-[#B8860B] to-[#FFD700]"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full font-medium border-muted text-foreground bg-background hover:bg-background hover:border-[#B8860B] hover:text-[#B8860B] hover:shadow-[0_0_15px_rgba(184,134,11,0.3)] dark:hover:border-[#FFD700] dark:hover:text-[#FFD700] dark:hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
                onClick={() => window.location.href = '/services'}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
