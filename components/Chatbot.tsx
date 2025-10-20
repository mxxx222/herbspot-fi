"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm HerbSpot Wellness Concierge™. I help you find the perfect curated botanical wellness devices from our trusted EU suppliers. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: ["510-compatible devices", "Botanical blends", "Shipping", "Starter packs"]
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    // Botanical blends questions
    if (input.includes("blend") || input.includes("calm") || input.includes("botanical")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "We curate premium botanical blends from trusted EU suppliers. Our Calm Blend™ is perfect for relaxation and wellness routines. It's designed for both tea and aromatherapy use, completely nicotine-free. Would you like to see our starter packs?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Starter packs", "DIY accessories", "Pricing"]
      };
    }
    
    // THC/CBD questions
    if (input.includes("thc") || input.includes("cbd") || input.includes("illegal") || input.includes("drug")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "No. We are an authorised distributor of legal botanical wellness devices and accessories only. All our curated products comply with EU regulations and are sourced from certified suppliers.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Legal products", "Botanical blends", "510 devices"]
      };
    }
    
    // 510 devices questions
    if (input.includes("510") || input.includes("battery") || input.includes("cartridge") || input.includes("device")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "We curate trusted 510-compatible devices from verified EU suppliers like CCELL and AVD. You'll find batteries, cartridges, and accessories in our '510-compatible devices' section. What specific use case are you looking for?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Slimline battery", "Empty cartridges", "Filling accessories"]
      };
    }
    
    // Starter packs
    if (input.includes("starter") || input.includes("beginner") || input.includes("pack") || input.includes("kit")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Our starter packs are perfect for beginners! The Calm Pack™ includes a battery, cartridges, and Calm Blend™. The Smoke & Tea Pack™ is even more comprehensive. Which suits your wellness goals best?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Smoke & Tea Pack™", "Pricing"]
      };
    }
    
    // Shipping questions
    if (input.includes("shipping") || input.includes("delivery") || input.includes("how long") || input.includes("time")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "We ship from Finland and dispatch orders within 1-2 business days. Most orders arrive within 2-4 days. Shipping is €5.90 for orders under €50, free shipping for orders over €50!",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Pricing", "Returns", "Order now"]
      };
    }
    
    // Pricing
    if (input.includes("price") || input.includes("cost") || input.includes("how much")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Our curated products range from €3.90 to €34.90. Calm Blend™ is €12.90, Slimline battery €14.90, and Calm Pack™ starter pack €29.90. Is there a specific product that interests you?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Slimline battery", "Calm Blend™"]
      };
    }
    
    // DIY accessories
    if (input.includes("diy") || input.includes("filling") || input.includes("accessories") || input.includes("empty")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Our DIY accessories allow you to create your own botanical blends! We have empty cartridges, filling syringes, and pipette sets. You can also order pre-made Calm Blend™ mixtures.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Empty cartridges", "Filling syringes", "Calm Blend™"]
      };
    }
    
    // Usage instructions
    if (input.includes("use") || input.includes("how") || input.includes("instruction") || input.includes("guide")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "All our curated products come with detailed usage instructions. Calm Blend™ works for both tea and aromatherapy use. 510 devices are easy to use - just attach the cartridge to the battery!",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Usage guides", "Calm Blend™", "510 devices"]
      };
    }
    
    // Legality
    if (input.includes("legal") || input.includes("allowed") || input.includes("permitted")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Yes! All our curated products are completely legal in the EU. They are made from registered herbs and natural ingredients. We don't sell any intoxicating substances.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Blend™", "510 devices", "Starter packs"]
      };
    }
    
    // Thank you
    if (input.includes("thank") || input.includes("great") || input.includes("good")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "You're welcome! I'm glad I could help. Is there anything else you'd like to know about our curated products?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Shipping", "Pricing"]
      };
    }
    
    // Default response
    return {
      id: (Date.now() + 1).toString(),
      text: "Thank you for your message! I can help you with products, pricing, shipping, or usage instructions. I recommend our Calm Pack™ starter pack for beginners!",
      isBot: true,
      timestamp: new Date(),
      suggestions: ["Calm Pack™", "510 devices", "Shipping", "Pricing"]
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    handleSendMessage();
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-[var(--brand)] text-black rounded-full shadow-lg z-40 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open HerbSpot Wellness Concierge™"
      >
        <span className="text-xl">🌿</span>
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
          <div className="bg-black border border-white/20 rounded-lg w-full max-w-md h-[500px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--brand)] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">HerbSpot Wellness Concierge™</h3>
                  <p className="text-xs text-white/60">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-white/10 text-white'
                          : 'bg-[var(--brand)] text-black'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString('fi-FI', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  {/* Suggestions */}
                  {message.suggestions && message.isBot && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-0">
                      {message.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1 bg-[var(--brand)]/20 text-[var(--brand)] text-xs rounded-full hover:bg-[var(--brand)]/30 transition-colors border border-[var(--brand)]/30"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask HerbSpot Wellness Concierge™..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-[var(--brand)] text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
