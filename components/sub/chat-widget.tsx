"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  ChatBubbleLeftEllipsisIcon, 
  PaperAirplaneIcon,
  XMarkIcon 
} from "@heroicons/react/24/outline";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [contactId, setContactId] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Ciao! 👋 Prima di iniziare, potresti dirmi il tuo nome?",
      isBot: true,
      timestamp: "Ora"
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
          text: `Ciao ${message}! 🎉 Sono l'assistente di Rayo Consulting. Come posso aiutarti?`,
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
        )}
        
        {/* Notification dot */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
            1
          </div>
        )}
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-16 right-0 w-80 sm:w-96 h-96 bg-black/90 backdrop-blur-md border border-[#7042f88b] rounded-lg shadow-2xl overflow-hidden ${
          !isOpen ? 'pointer-events-none' : ''
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 border-b border-[#7042f88b]">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              RC
            </div>
            <div className="ml-3">
              <h3 className="text-white font-semibold text-sm">Assistente Rayo</h3>
              <div className="text-green-400 text-xs flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Online ora
              </div>
            </div>
            {isNameSet && (
              <div className="ml-auto">
                <span className="text-xs text-gray-400">Ciao, {contactId}!</span>
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="flex-1 p-4 overflow-y-auto h-64 scrollbar-hidden">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
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
            <div className="mb-4 flex justify-start">
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

        {/* Input */}
        <div className="p-4 border-t border-[#7042f88b]">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={!isNameSet ? "Scrivi il tuo nome..." : "Scrivi un messaggio..."}
              className="flex-1 bg-gray-800/50 text-white text-sm px-4 py-2 rounded-full border border-gray-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={handleButtonClick}
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2 rounded-full hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              : "Rispondiamo in tempo reale 🚀"
            }
          </p>
        </div>
      </motion.div>
    </div>
  );
}; 