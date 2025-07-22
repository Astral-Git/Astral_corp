import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const newsletterData = {
      email,
      timestamp: new Date().toISOString(),
    };
    const existingSubscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
    existingSubscribers.push(newsletterData);
    localStorage.setItem('newsletter_subscribers', JSON.stringify(existingSubscribers));

    // Create mailto link for subscription notification
    const mailtoLink = `mailto:info.astralcorp@gmail.com?subject=Newsletter Subscription&body=New newsletter subscription:%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ADate: ${new Date().toLocaleDateString()}`;
    window.open(mailtoLink);

    toast({
      title: "Newsletter Subscription",
      description: "Your email client has opened to complete the subscription.",
    });

    setEmail("");
  };

  return (
    <section className="py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="glass-card p-8 max-w-2xl mx-auto text-center border rounded-xl border-white/400 backdrop-blur-md shadow-lg">
          <h3 className="text-3xl font-space font-bold mb-4">
            Stay <span className="gradient-text">Updated</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Get tips, trends & updates monthly. Join our newsletter for exclusive insights.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 glass bg-white/5 border rounded-xl border-white/400 focus:border-primary"
              required
            />
            <Button 
              type="submit" 
              variant="hero" 
              className="hover:scale-105 transition-transform"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;