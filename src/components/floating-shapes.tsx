import floatingShapes from "@/assets/floating-shapes.png";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating shape - top right */}
      <div className="absolute -top-20 -right-20 w-40 h-40 opacity-60 animate-float">
        <img 
          src={floatingShapes} 
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Medium floating shape - left center */}
      <div className="absolute top-1/2 -left-16 w-24 h-24 opacity-40 animate-float-delayed">
        <img 
          src={floatingShapes} 
          alt=""
          className="w-full h-full object-contain transform rotate-45"
        />
      </div>
      
      {/* Small floating shape - bottom right */}
      <div className="absolute bottom-20 right-1/4 w-16 h-16 opacity-50 animate-float">
        <img 
          src={floatingShapes} 
          alt=""
          className="w-full h-full object-contain transform rotate-12"
        />
      </div>
      
      {/* Pure CSS geometric shapes */}
      <div className="absolute top-20 left-1/4 w-12 h-12 bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 rounded-full animate-pulse-glow" />
      
      <div className="absolute bottom-1/3 right-20 w-8 h-8 bg-neon-pink/40 transform rotate-45 animate-float-delayed" />
      
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-neon-blue/50 to-neon-pink/50 rounded-full animate-bounce-gentle" />
    </div>
  );
};

export default FloatingShapes;