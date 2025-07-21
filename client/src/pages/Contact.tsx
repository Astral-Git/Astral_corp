import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FloatingShapes from "@/components/floating-shapes";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Ready to bring your digital vision to life?
            </p>
            <p className="text-md text-muted-foreground">
              We're just one message away from starting something amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 glow-elegant rounded-2xl">
            <h2 className="text-3xl font-space font-bold mb-6 gradient-text">
              Start Your Project
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 glass bg-white/5 border-white/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 glass bg-white/5 border-white/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 glass bg-white/5 border-white/20 focus:border-primary"
                />
              </div>

              <div>
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-2 glass bg-white/5 border-white/20 focus:border-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full transition-all hover:shadow-[0_0_30px_#6C63FF]"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-space font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                We're here to help bring your ideas to life. Choose the way that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  details: "info.astralcorp@gmail.com",
                  description: "Drop us a line anytime",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  details: "+91 9043405357",
                  description: "Mon-Fri 9AM–6PM EST",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  details: "Saveetha Engineering College, Chennai, India",
                  description: "By appointment only",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl hover:glow-purple transition duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg text-white">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-space font-semibold text-foreground mb-1">
                        {contact.title}
                      </h3>
                      <p className="font-medium text-primary mb-1">
                        {contact.details}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-space font-semibold mb-4 gradient-text">
                Follow Our Journey
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Twitter", "LinkedIn", "Dribbble", "Instagram"].map((platform) => (
                  <Button
                    key={platform}
                    variant="glass"
                    size="sm"
                    className="glow-blue"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
