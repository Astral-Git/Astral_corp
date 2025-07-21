import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Lucide icons
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Button
      variant="glass"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-9 h-9 p-0 flex items-center justify-center rounded-full backdrop-blur-md bg-white/30 dark:bg-[#0B0B0F]/30 border-none transition-all duration-300 hover:scale-105"
    >
      <span className="transition-transform duration-300">
        {darkMode ? (
          <Moon size={18} className="text-white/90 dark:text-[#FF6EC7]" />
        ) : (
          <Sun size={18} className="text-[#0B0B0F] dark:text-white/90" />
        )}
      </span>
    </Button>
  );
};

export default ThemeToggle;
