const Snowflakes = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 20,
    duration: 10 + Math.random() * 20,
    size: 4 + Math.random() * 6,
    left: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 dark:hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow opacity-30"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        >
          <div className="w-full h-full bg-white/60 rounded-full blur-[0.5px]" />
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;