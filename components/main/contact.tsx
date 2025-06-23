"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  IdentificationIcon,
  ChatBubbleLeftEllipsisIcon,
  SparklesIcon,
  PaperAirplaneIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/lib/motion";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [contactId, setContactId] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Ciao! 👋 Prima di iniziare, potresti dirmi il tuo nome?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll all'ultimo messaggio
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSetName = () => {
    if (message.trim()) {
      setContactId(message.trim());
      setIsNameSet(true);
      
      // Aggiungi messaggio utente con il nome
      const userMessage: Message = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage("");

      // Messaggio di benvenuto
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: messages.length + 2,
          text: `Ciao ${message}! 🎉 Sono l'assistente di Rayo Consulting. Come posso aiutarti con il tuo progetto?`,
          isBot: true,
          timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, welcomeMessage]);
      }, 500);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && contactId) {
      setIsLoading(true);
      
      // Aggiungi messaggio utente
      const userMessage: Message = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      const currentMessage = message;
      setMessage("");

      try {
        // Chiamata POST al webhook
        const response = await fetch('https://dylanpatriarchi.app.n8n.cloud/webhook/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userInput: currentMessage,
            contactId: contactId
          })
        });

        if (response.ok) {
          const data = await response.json();
          
          // Estrai il messaggio dalla risposta JSON
          let responseMessage = "Grazie per il tuo messaggio! Ti risponderemo al più presto.";
          if (data && Array.isArray(data) && data.length > 0 && data[0].output) {
            responseMessage = data[0].output;
          }
          
          // Aggiungi risposta dal webhook
          const botResponse: Message = {
            id: messages.length + 2,
            text: responseMessage,
            isBot: true,
            timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, botResponse]);
        } else {
          throw new Error('Errore nella risposta del server');
        }
      } catch (error) {
        console.error('Errore nell\'invio del messaggio:', error);
        
        // Messaggio di errore
        const errorMessage: Message = {
          id: messages.length + 2,
          text: "Si è verificato un errore nell'invio del messaggio. Riprova tra qualche istante.",
          isBot: true,
          timestamp: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      if (!isNameSet) {
        handleSetName();
      } else {
        handleSendMessage();
      }
    }
  };

  const handleButtonClick = () => {
    if (!isLoading) {
      if (!isNameSet) {
        handleSetName();
      } else {
        handleSendMessage();
      }
    }
  };

  return (
    <section
      id="contatti"
      className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
      >
        <motion.h1
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 md:py-20 text-center"
        >
          Inizia il tuo progetto ora
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6 sm:p-8 rounded-2xl border border-[#7042f88b]">
              {/* Chat Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Assistente Rayo</h3>
                  <div className="text-green-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Online ora • Risposta in tempo reale
                  </div>
                </div>
                {isNameSet && (
                  <div className="ml-auto">
                    <span className="text-sm text-gray-400">Ciao, {contactId}!</span>
                  </div>
                )}
              </div>

              {/* Messages Area */}
              <div ref={messagesContainerRef} className="h-64 sm:h-80 overflow-y-auto mb-4 space-y-4 scrollbar-hidden">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                        msg.isBot
                          ? 'bg-gray-700/50 text-gray-200 rounded-bl-sm'
                          : 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-br-sm'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700/50 text-gray-200 p-3 rounded-2xl rounded-bl-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={!isNameSet ? "Scrivi il tuo nome..." : "Scrivi il tuo messaggio..."}
                    className="flex-1 bg-gray-800/50 text-white text-sm px-4 py-3 rounded-2xl border border-gray-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleButtonClick}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-3 rounded-2xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <PaperAirplaneIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  {!isNameSet 
                    ? "Inizia inserendo il tuo nome per continuare" 
                    : "Il nostro team risponde personalmente in tempo reale 🚀"
                  }
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="text-white font-semibold text-sm mb-1">Risposta Rapida</h4>
                <p className="text-gray-400 text-xs">In 30 secondi</p>
              </div>
              <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="text-white font-semibold text-sm mb-1">Preventivo Gratuito</h4>
                <p className="text-gray-400 text-xs">Sempre incluso</p>
              </div>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-black/20 to-gray-900/20 p-6 sm:p-8 rounded-2xl border border-[#7042f88b]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Rayo Consulting di Patriarchi Dylan
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    Città di Castello, Italia
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <AtSymbolIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@rayoconsulting.org" 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
                  >
                    info@rayoconsulting.org
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <IdentificationIcon className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    P.IVA 03988190546
                  </span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 p-6 sm:p-8 rounded-2xl border border-[#7042f88b]">
              <h4 className="text-lg font-bold text-white mb-4">Perché scegliere Rayo Consulting?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">✅ Consulenza gratuita e senza impegno</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">🚀 Progetti completati in tempo record</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">💰 ROI garantito sui tuoi investimenti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">🔧 Supporto post-lancio incluso</span>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-gradient-to-br from-green-500/5 to-blue-500/5 p-6 rounded-2xl border border-green-500/20">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-green-400" />
                Orari di supporto
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Chat live:</span>
                  <span className="text-green-400">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Consulenza telefonica:</span>
                  <span className="text-white">Lun-Ven 9:00-18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Tempo risposta medio:</span>
                  <span className="text-purple-400">30 secondi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          variants={slideInFromTop}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6 sm:p-8 rounded-2xl border border-[#7042f88b] max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Pronto a trasformare la tua idea in successo?
            </h3>
            <p className="text-gray-400 mb-6">
              Inizia la conversazione nella chat qui sopra e ricevi subito una consulenza personalizzata
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>⏱️ Risposta immediata</span>
              <span>•</span>
              <span>💰 Preventivo in 2 minuti</span>
              <span>•</span>
              <span>🎯 Consulenza gratuita</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}; 