import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help answer questions about A.S.T.R.A.L Corp's services. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive digital solutions including:\n• Web Development (React, TypeScript)\n• UI/UX Design\n• Brand Identity & Logo Design\n• 3D CAD Modeling\n• IoT Engineering\n• Digital Marketing\n\nWould you like details about any specific service?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Our pricing varies based on project scope and requirements. We offer:\n• Custom quotes for each project\n• Flexible payment plans\n• Free initial consultations\n\nWould you like to book a free consultation to discuss your project and get a detailed quote?";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples')) {
      return "You can view our portfolio showcasing 12+ completed projects including:\n• Modern websites and web applications\n• Brand identity designs\n• Marketing campaigns\n• 3D visualizations\n• IoT solutions\n\nCheck out our Portfolio page to see detailed case studies!";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('appointment')) {
      return "You can reach us through:\n• Email: info.astralcorp@gmail.com\n• Phone: +91 9043405357\n• Location: Saveetha Engineering College, Chennai\n• Contact form on our website\n• Book a free consultation below\n\nWe typically respond within 24 hours!";
    }
    
    if (message.includes('time') || message.includes('duration') || message.includes('how long')) {
      return "Project timelines depend on complexity:\n• Simple websites: 2-4 weeks\n• Complex web applications: 6-12 weeks\n• Brand identity projects: 1-3 weeks\n• 3D modeling: 1-2 weeks\n\nWe provide detailed timelines during our free consultation.";
    }
    
    if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      return "We use cutting-edge technologies:\n• Frontend: React, TypeScript, TailwindCSS\n• Backend: Node.js, Express, PostgreSQL\n• Design: Figma, Adobe Creative Suite\n• 3D: CAD software, Blender\n• IoT: Arduino, Raspberry Pi\n\nWe choose the best tech stack for each project!";
    }
    
    if (message.includes('team') || message.includes('about') || message.includes('company')) {
      return "A.S.T.R.A.L Corp is a creative studio based in Chennai, India. We specialize in transforming ideas into stunning digital experiences. Our team combines artistic vision with technical expertise to deliver solutions that look incredible and perform flawlessly.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to A.S.T.R.A.L Corp. I'm here to help you learn about our services and answer any questions you might have. How can I assist you today?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! If you have any other questions about our services or would like to discuss your project, feel free to ask. We're here to help bring your vision to life!";
    }

    // Default response
    return "That's a great question! I'd be happy to help you with information about our services, pricing, portfolio, or team. You can also:\n• Browse our services page for detailed information\n• View our portfolio for examples of our work\n• Contact us directly for personalized assistance\n• Book a free consultation\n\nWhat specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white p-4 flex items-center space-x-3">
            <Bot size={24} />
            <div>
              <h3 className="font-semibold">A.S.T.R.A.L Assistant</h3>
              <p className="text-sm text-white/80">Ask me anything!</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#FFD700]' 
                      : 'bg-gray-600 dark:bg-gray-700'
                  }`}>
                    {message.isUser ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-600 dark:bg-gray-700 flex items-center justify-center text-white">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;