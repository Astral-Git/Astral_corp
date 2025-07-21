const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Figma", category: "Design" },
    { name: "Blender", category: "3D" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies for modern solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glass-card p-4 text-center hover:scale-105 transition-all duration-300 group hover:glow-purple"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <h4 className="font-space font-semibold text-sm text-foreground mb-1">
                {tech.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;