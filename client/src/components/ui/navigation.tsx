import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, Info, Layers, Image, Phone } from "lucide-react";
import { Button } from "./button";
import ThemeToggle from "../theme-toggle";

const Navigation = () => {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={22} strokeWidth={1.8} /> },
    { href: "/about", label: "About", icon: <Info size={22} strokeWidth={1.8} /> },
    { href: "/services", label: "Services", icon: <Layers size={22} strokeWidth={1.8} /> },
    { href: "/portfolio", label: "Portfolio", icon: <Image size={22} strokeWidth={1.8} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={22} strokeWidth={1.8} /> },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
        <div className="bg-white/60 dark:bg-[#0B0B0F]/70 backdrop-blur-md border border-white/20 dark:border-[#6C63FF]/20 rounded-full shadow-lg px-8 py-3 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="favicon.ico" alt="Logo" className="w-9 h-9 object-contain" />
              <span className="hidden lg:block text-lg font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6EC7] bg-clip-text text-transparent font-space">
                A.S.T.R.A.L Corp
              </span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-inter text-base font-medium relative group transition-all ${
                    isActive(item.href)
                      ? "text-[#6C63FF] dark:text-[#FF6EC7]"
                      : "text-gray-800 dark:text-white hover:text-[#6C63FF] dark:hover:text-[#FF6EC7]"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] dark:bg-[#FF6EC7] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Theme Toggle + CTA */}
            <div className="flex items-center space-x-5">
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white px-6 py-2 rounded-full font-semibold transition hover:shadow-[0_0_20px_#D9BBF9] dark:bg-transparent dark:border dark:border-[#FF6EC7] dark:text-[#FF6EC7] dark:hover:bg-[#FF6EC7] dark:hover:text-black">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

{/* Mobile Bottom Nav */}
<nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
  <div className="flex items-center justify-between px-3 py-2 bg-white/90 dark:bg-[#0B0B0F]/90 backdrop-blur-xl border border-white/30 dark:border-[#6C63FF]/30 rounded-full shadow-md transition-all duration-300">
    
    {/* Navigation Icons (Home - Portfolio) */}
    <div className="flex flex-1 justify-evenly items-center gap-1">
      {navItems.slice(0, 4).map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`p-3 rounded-full transition-all duration-300 ${
            isActive(item.href)
              ? "bg-gradient-to-tr from-[#6C63FF] to-[#D9BBF9] text-white shadow-md scale-105"
              : "text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] dark:hover:text-[#FF6EC7] hover:scale-105"
          }`}
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>

    {/* Contact Icon */}
    <Link
      href="/contact"
      className={`ml-2 p-3 rounded-full transition-all duration-300 ${
        isActive("/contact")
          ? "bg-gradient-to-tr from-[#6C63FF] to-[#D9BBF9] text-white shadow-md scale-105"
          : "text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] dark:hover:text-[#FF6EC7] hover:scale-105"
      }`}
      aria-label="Contact"
    >
      <Phone size={22} strokeWidth={1.8} />
    </Link>

    {/* Theme Toggle */}
    <div className="ml-2">
      <ThemeToggle />
    </div>
  </div>
</nav>


    </>
  );
};

export default Navigation;
