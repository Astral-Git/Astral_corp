import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github, Filter, Search } from "lucide-react";
import ImageOptimized from "@/components/ImageOptimized";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  techStack: string[];
  goals: string;
  process: string;
  outcome: string;
  clientQuote?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
    category: "Web Development",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482504/screencapture-sreemeditec-in-2025-07-02-23_59_42_zwjzhe.png",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    goals: "Create a scaliable e-commerce platform with modern UX and seamless payment integration.",
    process: "Built with React frontend, Node.js backend, and implemented real-time inventory management.",
    outcome: "Increased conversion rates by 40% and reduced cart abandonment by 30%.",
    clientQuote: "The platform exceeded our expectations and significantly boosted our online sales.",
    liveUrl: "https://sreemeditec.com",
    
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and achievements with a clean, responsive design.",
    category: "Web Development",
    tags: ["React", "Responsive Design", "Portfolio"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751485390/screencapture-sreekumar-career-github-io-react-2025-07-03-01_12_33_ezfdiq.png",
    techStack: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
    goals: "Present a modern and professional online presence that highlights personal and project details effectively.",
    process: "Designed with React and TailwindCSS, added motion animations and integrated contact form using EmailJS.",
    outcome: "Received positive feedback from recruiters and increased networking opportunities through the contact section.",
    clientQuote: "This portfolio represents my journey, creativity, and development expertise all in one place.",
    
  },
  
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand redesign including logo, color palette, and marketing materials.",
    category: "Design",
    tags: ["Branding", "Logo", "Print"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751484637/transparent-logo__1_-removebg-preview_adocgy.png",
    techStack: ["Adobe Illustrator", "Figma", "Photoshop"],
    goals: "Modernize brand identity and create cohesive visual language across all touchpoints.",
    process: "Conducted brand research, created multiple concepts, and refined based on client feedback.",
    outcome: "Brand recognition increased by 60% and customer engagement improved significantly.",
    clientQuote: "The new brand identity perfectly captures our company's vision and values."
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Multi-platform marketing campaign that increased engagement by 200%.",
    category: "Marketing",
    tags: ["Social Media", "Content", "Analytics"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482534/00172_wxpj9m.png",
    techStack: ["Hootsuite", "Canva", "Google Analytics", "Facebook Ads"],
    goals: "Increase brand awareness and drive conversions through strategic social media marketing.",
    process: "Developed content strategy, created engaging visuals, and optimized ad targeting.",
    outcome: "200% increase in engagement and 150% increase in lead generation.",
    clientQuote: "The campaign delivered exceptional results beyond our initial expectations."
  },
  {
    id: 4,
    title: "Bicycle Poster Design",
    description: "Creative poster artwork promoting eco-friendly bicycle transportation and lifestyle.",
    category: "Marketing",
    tags: ["Poster Design", "Bicycle", "Environment"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482519/00472_gjlpxg.png",
    techStack: ["Adobe Illustrator", "Photoshop", "Figma"],
    goals: "Inspire people to adopt cycling through impactful visual storytelling.",
    process: "Conceptualized poster themes, illustrated custom graphics, and designed layout with bold typography.",
    outcome: "Received positive community response and featured in local sustainability campaigns.",
    clientQuote: "The poster captured our message perfectly — bold, clear, and inspiring!"
  },
  
  {
    id: 5,
    title: "Berry Drink Product Design",
    description: "Vibrant and refreshing product packaging design for a berry-flavored beverage line.",
    category: "Marketing",
    tags: ["Packaging", "Product Design", "Beverage"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482519/00372_nhkn70.png",
    techStack: ["Adobe Illustrator", "Photoshop", "Cinema 4D"],
    goals: "Develop eye-catching packaging that communicates flavor, freshness, and brand identity.",
    process: "Researched market trends, sketched label concepts, created 3D mockups, and refined color palettes.",
    outcome: "Product gained standout visibility in stores and saw a 40% increase in initial sales.",
    clientQuote: "The packaging perfectly captured the essence of our brand — fresh, bold, and irresistible!"
  },
  
  {
    id: 6,
    title: "Movie 1999 Poster Design",
    description: "Retro-themed poster artwork capturing the cinematic essence of 1999's cult classics.",
    category: "Design",
    tags: ["Poster Design", "Retro", "Cinema"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482520/01172_jjo0nu.png",
    techStack: ["Adobe Photoshop", "Illustrator", "Figma"],
    goals: "Create a visually striking poster that pays homage to iconic films from the year 1999.",
    process: "Researched 90s film aesthetics, sketched layouts, designed high-contrast visuals with vintage textures.",
    outcome: "Poster went viral in online film communities and was featured in an indie art exhibit.",
    clientQuote: "A nostalgic masterpiece that perfectly blends design with storytelling. Truly iconic!"
  },
  {
    id: 7,
    title: "Coca-Cola Ads Design",
    description: "Bold and refreshing ad campaign concept celebrating the timeless appeal of Coca-Cola.",
    category: "Design",
    tags: ["Ad Design", "Branding", "Beverage"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482520/01272_pgu5lw.png",
    techStack: ["Adobe Photoshop", "Illustrator", "After Effects"],
    goals: "Design a high-impact visual ad that reflects Coca-Cola’s vibrant identity and emotional connection with its audience.",
    process: "Explored brand history, crafted modern yet nostalgic visuals, and developed animated ad concepts for digital platforms.",
    outcome: "The design was praised for its creative energy and was used in a regional marketing campaign with strong engagement.",
    clientQuote: "The visuals brought our brand to life — energetic, emotional, and unmistakably Coca-Cola!"
  },
  {
    id: 9,
    title: "Ice Cream Marketing Design - BOGO Offer",
    description: "Eye-catching promotional design for a 'Buy One Get One Free' ice cream campaign aimed at summer crowds.",
    category: "Marketing",
    tags: ["Ad Design", "Food & Beverage", "Promotion"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482535/00772_iwpbnb.png",
    techStack: ["Adobe Illustrator", "Photoshop", "Canva"],
    goals: "Design a playful and appetizing marketing poster to boost footfall and sales during peak summer.",
    process: "Studied customer preferences, crafted colorful and tempting visuals, and added bold BOGO messaging.",
    outcome: "Campaign drove a 50% increase in foot traffic and a 2x rise in same-day sales.",
    clientQuote: "The design was vibrant, fun, and absolutely irresistible — it made people stop and buy!"
  },
  
  
  {
    id: 12,
    title: "So Juice Ads Design",
    description: "Fresh and vibrant advertising design for So Juice’s healthy fruit beverage line.",
    category: "Marketing",
    tags: ["Ad Design", "Juice Brand", "Healthy Lifestyle"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482535/00672_jk5m1l.png",
    techStack: ["Adobe Photoshop", "Illustrator", "Figma"],
    goals: "Create an energetic and health-focused ad campaign that highlights So Juice's natural ingredients and refreshing taste.",
    process: "Developed mood boards, designed colorful layouts, and used high-resolution fruit imagery to appeal to wellness-focused consumers.",
    outcome: "Campaign led to a 45% increase in social media engagement and boosted in-store sales during the launch phase.",
    clientQuote: "The visuals perfectly embodied our brand — fresh, fruity, and full of life!"
  },
  {
    id: 10,
    title: "Nissan Skyline Poster Design",
    description: "High-impact poster design celebrating the legendary Nissan Skyline with a bold, motorsport-inspired aesthetic.",
    category: "Design",
    tags: ["Poster Design", "Automotive", "Street Racing"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482536/01372_rco7mx.png",
    techStack: ["Adobe Photoshop", "Illustrator", "Lightroom"],
    goals: "Create a visually striking automotive poster that showcases the power and legacy of the Nissan Skyline.",
    process: "Researched Skyline generations, illustrated dynamic scenes, and enhanced with motion blur and lighting effects for visual intensity.",
    outcome: "Poster became a favorite among car enthusiasts and was featured in an automotive design showcase.",
    clientQuote: "An adrenaline-fueled tribute — the design captures the true spirit of the Skyline legacy."
  },
  {
    id: 11,
    title: "Porsche Cayman Poster Design",
    description: "Sleek and sophisticated poster design showcasing the performance and elegance of the Porsche Cayman.",
    category: "Design",
    tags: ["Poster Design", "Automotive", "Luxury Cars"],
    image: "https://res.cloudinary.com/dulqlngkh/image/upload/v1751482536/01572_bqbsrz.png",
    techStack: ["Adobe Photoshop", "Illustrator", "Lightroom"],
    goals: "Design a premium automotive poster that highlights the aerodynamic beauty and engineering of the Porsche Cayman.",
    process: "Studied Porsche design language, created clean compositions, and applied dynamic lighting to emphasize curves and motion.",
    outcome: "Poster was well-received in luxury car circles and featured in an automotive design gallery.",
    clientQuote: "A stunning visual that does justice to the car’s legacy — elegant, powerful, and precise."
  },
  
  

  

  

  
];

const categories = ["All", "Web Development", "Design", "Marketing", "3D/CAD", "IoT Projects"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageData, setImageData] = useState<{[key: number]: {width: number, height: number, aspectRatio: number}}>({});
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Load image dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: {[key: number]: {width: number, height: number, aspectRatio: number}} = {};
      
      const promises = projects.map((project) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            dimensions[project.id] = {
              width: img.naturalWidth,
              height: img.naturalHeight,
              aspectRatio: img.naturalWidth / img.naturalHeight
            };
            resolve();
          };
          img.onerror = () => {
            // Fallback dimensions if image fails to load
            dimensions[project.id] = {
              width: 600,
              height: 400,
              aspectRatio: 1.5
            };
            resolve();
          };
          img.src = project.image;
        });
      });

      await Promise.all(promises);
      setImageData(dimensions);
      setImagesLoaded(true);
    };

    loadImageDimensions();
  }, []);

  // Calculate dynamic column widths based on image sizes
  const getItemStyle = (project: Project) => {
    const data = imageData[project.id];
    if (!data) return {};

    const maxWidth = 400;
    const minWidth = 280;
    
    // Calculate width based on aspect ratio
    let width = data.aspectRatio > 1.2 ? maxWidth : minWidth;
    
    // Adjust for very wide or very tall images
    if (data.aspectRatio > 2) width = Math.min(maxWidth * 1.3, 520);
    if (data.aspectRatio < 0.7) width = Math.max(minWidth * 0.85, 240);

    return {
      width: `${width}px`,
      flexShrink: 0
    };
  };

  const getImageStyle = (project: Project) => {
    const data = imageData[project.id];
    if (!data) return { height: '240px' };

    const maxHeight = 320;
    const minHeight = 180;
    
    let height = Math.min(Math.max(minHeight, 300 / data.aspectRatio), maxHeight);
    
    // For very wide images, use less height
    if (data.aspectRatio > 2) height = Math.max(minHeight * 0.8, 150);
    
    return {
      height: `${height}px`,
      objectFit: 'cover' as const,
      width: '100%'
    };
  };

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-600/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-200/80 dark:bg-gray-700/80 flex items-center justify-center hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-96 object-contain rounded-xl shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-space font-bold mb-4 text-gray-800 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#6C63FF]/10 dark:bg-[#FF6EC7]/10 text-[#6C63FF] dark:text-[#FF6EC7] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              {project.liveUrl && (
                <Button className="flex items-center gap-2 bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 transition-transform rounded-full">
                  <ExternalLink size={16} />
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="flex items-center gap-2">
                  <Github size={16} />
                  View Code
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Goals</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.goals}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Process</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.process}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Outcome</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.outcome}</p>
            </div>
          </div>

          {project.clientQuote && (
            <div className="glass-card p-6 border-l-4 border-[#6C63FF] dark:border-[#FF6EC7]">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                "{project.clientQuote}"
              </p>
              <p className="text-gray-500 dark:text-gray-400">— Client Testimonial</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 transition-transform rounded-full px-8">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className="w-2 h-2 bg-[#D9BBF9] rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our featured projects across web development, design, marketing, 3D modeling, and IoT engineering.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-all"
                aria-label="Search projects"
              />
            </div>
            
            {/* Results Count */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#FF6EC7] text-white shadow-lg"
                  : "bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/50 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery */}
        {imagesLoaded ? (
          <div className="flex flex-wrap justify-center gap-6 mb-16" style={{ alignItems: 'flex-start' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass-card overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6C63FF]/20 dark:hover:shadow-[#FF6EC7]/20"
                style={getItemStyle(project)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <ImageOptimized
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30 rounded-full">
                      View Case Study
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-space font-semibold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#6C63FF]/10 dark:bg-[#FF6EC7]/10 text-[#6C63FF] dark:text-[#FF6EC7] rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C63FF] dark:border-[#FF6EC7]"></div>
          </div>
        )}

        {/* Client Logos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space font-bold mb-6 text-gray-800 dark:text-white">
              Trusted by <span className="gradient-text">Amazing Clients</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 dark:opacity-40">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold"
              >
                Client {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Inspired by what you see?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build something great together. Every project starts with a conversation.
          </p>
          <Button className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] dark:border-2 dark:border-[#FF6EC7] dark:hover:shadow-[0_0_30px_#FF6EC7]/50 transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold">
            Start Your Project
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 left-10 w-64 h-64 bg-[#D9BBF9]/10 rounded-full blur-3xl dark:bg-[#6C63FF]/20"></div>
      <div className="absolute -z-10 bottom-1/4 right-10 w-48 h-48 bg-[#FF6EC7]/10 rounded-full blur-3xl dark:bg-[#FF6EC7]/20"></div>
    </div>
  );
};

export default Portfolio;