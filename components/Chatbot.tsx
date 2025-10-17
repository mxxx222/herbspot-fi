"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hei! Olen HerbSpot:n AI-avustaja. Miten voin auttaa sinua tänään?",
      isBot: true,
      timestamp: new Date()
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
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("hinta") || input.includes("paljonko")) {
      return "Tuotteemme hinnat vaihtelevat €3.90 - €24.90 välillä. Tarkat hinnat näet tuotesivulla. Onko jokin tuote erityisesti kiinnostava?";
    }
    
    if (input.includes("toimitus") || input.includes("postitus")) {
      return "Toimitamme kaikki tuotteet EU:n sisällä 1-3 arkipäivässä. Toimituskulu on €5.90 alle €50 tilauksille, yli €50 tilaukset toimitetaan ilmaiseksi!";
    }
    
    if (input.includes("laatu") || input.includes("materiaali")) {
      return "Kaikki tuotteemme ovat lääkinnällistä terästä, pyrex-lasia ja keraamista ytintä. Ne ovat raskasmetallitestattuja ja EU-standardien mukaisia. Voit luottaa laatuun!";
    }
    
    if (input.includes("palautus") || input.includes("vaihto")) {
      return "Sinulla on 30 päivää aikaa palauttaa tuotteet. Palautukset ovat ilmaisia ja helppoja. Haluatko lisätietoja palautusprosessista?";
    }
    
    if (input.includes("b2b") || input.includes("yritys")) {
      return "B2B-palvelumme on tulossa pian! Voimme tarjota white-label ratkaisuja, bulk-hinnoittelua ja räätälöityä pakkausta. Jätä yhteystietosi niin otamme yhteyttä!";
    }
    
    if (input.includes("kiitos") || input.includes("loistavaa")) {
      return "Kiitos! Olen iloinen että voin auttaa. Onko muuta mitä haluaisit tietää?";
    }
    
    return "Kiitos viestistäsi! Voin auttaa sinua tuotteiden, hinnoittelun, toimituksen tai palautusten kanssa. Mikä kiinnostaa sinua eniten?";
  };

  const quickReplies = [
    "Hinnat",
    "Toimitus",
    "Laatu",
    "Palautukset",
    "B2B"
  ];

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-[var(--brand)] text-black rounded-full shadow-lg z-40 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Avaa chat"
      >
        <span className="text-xl">💬</span>
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
          <div className="bg-black border border-white/20 rounded-lg w-full max-w-md h-[500px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--brand)] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">HerbSpot AI</h3>
                  <p className="text-xs text-white/60">Online nyt</p>
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
                <div
                  key={message.id}
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

            {/* Quick Replies */}
            <div className="p-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => setInputText(reply)}
                    className="px-3 py-1 bg-white/10 text-white text-xs rounded-full hover:bg-white/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Kirjoita viesti..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-[var(--brand)] text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  Lähetä
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
