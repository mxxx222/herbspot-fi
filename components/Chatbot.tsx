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
      text: "Hei! Olen HerbSpot Avustaja™. Autan sinua löytämään täydelliset tuotteet luonnolliseen hyvinvointiin. Miten voin auttaa sinua tänään?",
      isBot: true,
      timestamp: new Date(),
      suggestions: ["Calm Blend™ käyttö", "510-osat", "Toimitus", "Starter-paketit"]
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
    
    // Calm Blend™ kysymykset
    if (input.includes("calm blend") || input.includes("calm") || input.includes("rauhoittava")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Calm Blend™ on luonnollinen yrttisekoitus, joka sopii sekä rentouttavaksi iltateeksi että höyrytyskäyttöön, nikotiinittomasti. Se ei sisällä päihdyttäviä aineita. Haluatko myös starter-paketin, joka sisältää akun ja patruunat?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Starter-paketti", "DIY-välineet", "Hinta"]
      };
    }
    
    // THC/CBD kysymykset
    if (input.includes("thc") || input.includes("cbd") || input.includes("päihde") || input.includes("laiton")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Ei. Kaikki tuotteemme ovat täysin laillisia ja kasvipohjaisia. Emme myy tai toimita THC- tai CBD-tuotteita. Tarjoamme vain luonnollisia yrttisekoituksia ja laillisia välineitä.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Lailliset tuotteet", "Calm Blend™", "510-osat"]
      };
    }
    
    // 510-osat kysymykset
    if (input.includes("510") || input.includes("akku") || input.includes("patruuna") || input.includes("osat")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Löydät kaikki 510-yhteensopivat osat suoraan valikosta kohdasta '510-patruunat'. Meillä on akkuja, patruunoita ja täyttövälineitä. Etsitkö jotain erityistä käyttötarkoitusta?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Slimline akku", "Tyhjät patruunat", "Täyttövälineet"]
      };
    }
    
    // Starter-paketit
    if (input.includes("starter") || input.includes("aloitus") || input.includes("paketti") || input.includes("aloittelija")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Starter-paketit ovat täydellinen aloitusvalinta! Calm Pack™ sisältää akun, patruunat ja Calm Blend™ -seoksen. Smoke & Tea Pack™ on vielä kattavampi. Mikä sopii sinulle parhaiten?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Smoke & Tea Pack™", "Hinnat"]
      };
    }
    
    // Toimitus kysymykset
    if (input.includes("toimitus") || input.includes("postitus") || input.includes("kauanko") || input.includes("aika")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Toimitamme Suomesta, ja lähetämme tuotteet 1–2 arkipäivässä. Useimmat tilaukset saapuvat 2–4 päivän sisällä. Toimituskulu on €5.90 alle €50 tilauksille, yli €50 tilaukset toimitetaan ilmaiseksi!",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Hinnat", "Palautukset", "Tilaa nyt"]
      };
    }
    
    // Hinnat
    if (input.includes("hinta") || input.includes("paljonko") || input.includes("maksaa")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Tuotteemme hinnat vaihtelevat €3.90 - €34.90 välillä. Calm Blend™ maksaa €12.90, Slimline akku €14.90 ja Calm Pack™ starter-paketti €29.90. Onko jokin tuote erityisesti kiinnostava?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Slimline akku", "Calm Blend™"]
      };
    }
    
    // DIY-välineet
    if (input.includes("diy") || input.includes("täyttö") || input.includes("välineet") || input.includes("itse")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "DIY-välineet mahdollistavat omien sekoitusten tekemisen! Meillä on tyhjiä patruunoita, täyttöruiskuja ja pipetti-settejä. Voit myös tilata valmiita Calm Blend™ -sekoituksia.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Tyhjät patruunat", "Täyttöruiskut", "Calm Blend™"]
      };
    }
    
    // Käyttöohjeet
    if (input.includes("käyttö") || input.includes("miten") || input.includes("ohje") || input.includes("käyttää")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Kaikki tuotteemme tulevat yksityiskohtaisten käyttöohjeiden kanssa. Calm Blend™ sopii sekä teeksi että höyrytyskäyttöön. 510-osat ovat helppoja käyttää - vain kiinnitä patruuna akkuun!",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Käyttöohjeet", "Calm Blend™", "510-osat"]
      };
    }
    
    // Laillisuus
    if (input.includes("laillinen") || input.includes("laillista") || input.includes("sallittu")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Kyllä! Kaikki tuotteemme ovat täysin laillisia Suomessa. Ne ovat rekisteröityjen yrttien ja luonnonainesosien pohjalta koostettuja. Emme myy päihdyttäviä aineita.",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Blend™", "510-osat", "Starter-paketit"]
      };
    }
    
    // Kiitos
    if (input.includes("kiitos") || input.includes("loistavaa") || input.includes("hyvä")) {
      return {
        id: (Date.now() + 1).toString(),
        text: "Kiitos! Olen iloinen että voin auttaa. Onko muuta mitä haluaisit tietää tuotteistamme?",
        isBot: true,
        timestamp: new Date(),
        suggestions: ["Calm Pack™", "Toimitus", "Hinnat"]
      };
    }
    
    // Oletusvastaus
    return {
      id: (Date.now() + 1).toString(),
      text: "Kiitos viestistäsi! Voin auttaa sinua tuotteiden, hinnoittelun, toimituksen tai käyttöohjeiden kanssa. Suosittelen Calm Pack™ -starter-pakettia aloittelijoille!",
      isBot: true,
      timestamp: new Date(),
      suggestions: ["Calm Pack™", "510-osat", "Toimitus", "Hinnat"]
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
        aria-label="Avaa HerbSpot Avustaja™"
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
                  <h3 className="font-semibold text-white">HerbSpot Avustaja™</h3>
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
                  placeholder="Kysy HerbSpot Avustaja™:lta..."
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
