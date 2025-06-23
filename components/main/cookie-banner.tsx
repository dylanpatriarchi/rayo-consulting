"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const cookieConsent = localStorage.getItem('rayo-cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('rayo-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('rayo-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-[#7042f88b] p-4 sm:p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                🍪 Rispettiamo la tua privacy
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Utilizziamo cookie essenziali per garantire il corretto funzionamento del sito e cookie analitici per migliorare la tua esperienza. 
                I tuoi dati sono protetti secondo il <span className="text-purple-400">GDPR</span>.
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg text-sm hover:bg-gray-800 transition-all duration-300"
              >
                Solo essenziali
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
              >
                Accetta tutti
              </button>
              <button
                onClick={rejectCookies}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Chiudi banner cookie"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Links alle policy */}
          <div className="mt-3 pt-3 border-t border-gray-600 text-center">
            <p className="text-xs text-gray-400">
              Per maggiori informazioni consulta la nostra{" "}
              <a href="/cookie-policy" className="text-purple-400 hover:text-purple-300 underline">
                Cookie Policy
              </a>{" "}
              e{" "}
              <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                Privacy Policy
              </a>
            </p>
          </div>
          
          {/* Info legali */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-xs text-gray-500">
              Rayo Consulting di Patriarchi Dylan • P.IVA: 03988190546 • Città di Castello (PG) • 
              <a href="mailto:info@rayoconsulting.org" className="text-purple-400 hover:text-purple-300 ml-1">
                info@rayoconsulting.org
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 