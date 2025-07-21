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
      icon: <GlobeAltIcon className="w-10 h-10 text-[#6C63FF] dark:text-[#D9BBF9]" />,
      title: "Web Development",
      description: "E-Commerce, APIs, CMS, Hosting, SEO",
      features: ["React & Next.js", "Custom APIs", "E-commerce Solutions", "SEO Optimization"],
    },
    {
      icon: <PaintBrushIcon className="w-10 h-10 text-[#6C63FF] dark:text-[#D9BBF9]" />,
      title: "UI/UX Design",
      description: "Branding, UI/UX, Social Creatives",
      features: ["User Experience", "Brand Identity", "Social Media Graphics", "Prototyping"],
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-[#6C63FF] dark:text-[#D9BBF9]" />,
      title: "Digital Marketing",
      description: "Ads, Email Marketing, SEO",
      features: ["Google Ads", "Email Campaigns", "Social Media", "Analytics"],
    },
    {
      icon: <CubeIcon className="w-10 h-10 text-[#6C63FF] dark:text-[#D9BBF9]" />,
      title: "3D & IoT Engineering",
      description: "CAD Modeling & Product Engineering",
      features: ["3D Modeling", "IoT Solutions", "Product Design", "Prototyping"],
    },
  ];

  return (
    <section className="py-24 bg-background dark:bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions crafted for your digital success.
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
                    <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#D9BBF9]"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full font-medium border-muted text-foreground hover:border-[#6C63FF] hover:text-[#6C63FF] dark:hover:border-[#FF6EC7] dark:hover:text-[#FF6EC7] transition-all"
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
