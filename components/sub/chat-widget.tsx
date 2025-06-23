"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ChatBubbleLeftEllipsisIcon, 
  PaperAirplaneIcon,
  XMarkIcon 
} from "@heroicons/react/24/outline";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const mockMessages = [
    {
      id: 1,
      text: "Ciao! 👋 Sono l'assistente di Rayo Consulting. Come posso aiutarti oggi?",
      isBot: true,
      timestamp: "Ora"
    }
  ];

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
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-64 scrollbar-hidden">
          {mockMessages.map((msg) => (
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
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#7042f88b]">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 bg-gray-800/50 text-white text-sm px-4 py-2 rounded-full border border-gray-600 focus:border-purple-500 focus:outline-none"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // Qui andrà la logica di invio messaggio
                  setMessage("");
                }
              }}
            />
            <button
              onClick={() => {
                // Qui andrà la logica di invio messaggio
                setMessage("");
              }}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white p-2 rounded-full hover:scale-110 transition-all duration-300"
            >
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Rispondiamo in media entro 5 minuti 🚀
          </p>
        </div>
      </motion.div>
    </div>
  );
}; 