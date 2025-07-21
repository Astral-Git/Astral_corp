import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    projectDescription: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      projectDescription: ""
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 relative overflow-hidden dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-16">
              <div className="text-6xl mb-6 animate-bounce">✨</div>
              <h2 className="text-4xl font-space font-bold mb-6 gradient-text">
                Thank You!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We've received your message and will get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 transition-all duration-300 rounded-full px-8"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Tell us about your idea. We'll make it real.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-6 border border-white/400 rounded-xl dark:border-gray-600/30 backdrop-blur-md shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg border border-white/400 dark:border-gray-600/30 rounded-xl px-6 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 dark:focus:ring-[#FFD700]/50 transition-all duration-300"
                  placeholder="Full Name *"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg border border-white/400 dark:border-gray-600/30 rounded-xl px-6 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 dark:focus:ring-[#FFD700]/50 transition-all duration-300"
                  placeholder="Email Address *"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg border border-white/400 dark:border-gray-600/30 rounded-xl px-6 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 dark:focus:ring-[#FFD700]/50 transition-all duration-300"
                  placeholder="Phone Number"
                />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg border border-white/400 dark:border-gray-600/30 rounded-xl px-6 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 dark:focus:ring-[#FFD700]/50 transition-all duration-300"
                  placeholder="Location"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full bg-white/50 dark:bg-gray-800/30 backdrop-blur-lg border border-white/400 dark:border-gray-600/30 rounded-xl px-6 py-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 dark:focus:ring-[#FFD700]/50 transition-all duration-300 resize-none"
                placeholder="Project Description *"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -z-10 top-1/4 left-10 w-48 h-48 bg-[#B8860B]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -z-10 bottom-1/4 right-10 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default ContactFormSection;