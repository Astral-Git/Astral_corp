import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity Design',
    '3D CAD Modeling',
    'IoT Engineering',
    'Digital Marketing',
    'General Consultation'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Frontend-only submission - save to localStorage and create email link
      const appointmentData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };

      // Save to localStorage
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      existingAppointments.push(appointmentData);
      localStorage.setItem('appointments', JSON.stringify(existingAppointments));

      // Create email mailto link
      const emailSubject = `Appointment Request - ${formData.service}`;
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        Preferred Date: ${formData.preferredDate}
        Preferred Time: ${formData.preferredTime}
        Message: ${formData.message}
      `;
      const mailtoLink = `mailto:info.astralcorp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.open(mailtoLink);

      toast({
        title: "Appointment Request Created!",
        description: "Your email client has opened. Please send the email to complete your appointment request.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment-booking" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -z-10 top-1/4 left-10 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -z-10 bottom-1/4 right-10 w-48 h-48 bg-[#B8860B]/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Book Your Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Transform your business vision into a strategic digital roadmap. Book a comprehensive consultation with our senior consultants.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No obligations—just expert insights, strategic recommendations, and a clear path forward.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <User size={16} />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <Mail size={16} />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <Phone size={16} />
                    <span>Phone Number</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <MessageSquare size={16} />
                    <span>Service of Interest *</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                    <SelectTrigger className="h-12 glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="cursor-pointer">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Appointment Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Preferred Date</span>
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <Clock size={16} />
                    <span>Preferred Time</span>
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                    <SelectTrigger className="h-12 glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="cursor-pointer">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                  Tell us about your project (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="glass bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 focus:border-[#B8860B] dark:focus:border-[#FFD700] transition-all duration-300 resize-none"
                  placeholder="Share your project details, goals, or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.service}
                  className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white hover:shadow-[0_0_30px_#FFD700/30] transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Booking...</span>
                    </span>
                  ) : (
                    "Book Free Consultation"
                  )}
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We'll contact you within 24 hours to confirm your appointment.
                  <br />
                  <span className="font-medium text-[#B8860B] dark:text-[#FFD700]">
                    No hidden fees. No commitments. Just great advice.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;