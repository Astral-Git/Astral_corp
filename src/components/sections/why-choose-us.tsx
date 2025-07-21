const WhyChooseUs = () => {
  const stats = [
    { number: "200+", label: "Projects Delivered", icon: "🚀" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "24/7", label: "Support Available", icon: "💬" },
    { number: "99%", label: "Client Satisfaction", icon: "❤️" },
    { number: "48h", label: "Average Response", icon: "⚡" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide for exceptional digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group hover:glow-blue"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-space font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;