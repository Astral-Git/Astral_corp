import { Link } from "wouter";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#f9fbff] dark:bg-[#0b0b0f] border-t border-gray-100 dark:border-[#6C63FF]/30">
      {/* Light mode floating particles */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            <div className="w-2 h-2 bg-[#D9BBF9] rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/favicon.ico" className="w-9 h-9" />
              <span className="font-space text-xl font-bold text-gray-800 dark:text-white">
                A.S.T.R.A.L Corp
              </span>
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We create extraordinary digital experiences that push the boundaries of technology and design.
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Saveetha Engineering College, Chennai, India
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                info.astralcorp@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 9043405357
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] dark:hover:text-[#FF6EC7] transition-colors relative group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>3D CAD Modeling</li>
              <li>IoT Engineering</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Get tips, trends & updates monthly
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full px-5 py-3 bg-white/60 dark:bg-transparent dark:border dark:border-[#6C63FF]/30 dark:focus:border-[#FF6EC7] backdrop-blur-md text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/30 transition-all duration-300"
              />
              <Button
                type="submit"
                disabled={isSubscribed}
                className="w-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white dark:bg-transparent dark:border-2 dark:border-[#FF6EC7] dark:text-[#FF6EC7] dark:hover:bg-[#FF6EC7] dark:hover:text-black transition-all duration-300"
              >
                {isSubscribed ? "✨ Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F1F1F] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#292929] hover:text-[#6C63FF] dark:hover:text-[#FF6EC7] transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © 2025 A.S.T.R.A.L Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
