"use client";

import { motion } from "framer-motion";
import {
  AtSymbolIcon,
  MapPinIcon,
  IdentificationIcon,
  HeartIcon,
  SparklesIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";
import { SOCIALS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent via-[#030014] to-[#0A0118] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    src="/logo.svg"
                    alt="Rayo Consulting Logo"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Rayo Consulting
                  </h3>
                  <p className="text-gray-400 text-sm">di Patriarchi Dylan</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Trasformiamo idee innovative in <span className="text-purple-400 font-medium">soluzioni digitali</span> che 
                fanno crescere il tuo business. La tecnologia che ti serve, 
                <span className="text-cyan-400 font-medium"> quando ti serve</span>.
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <SparklesIcon className="h-4 w-4 text-purple-400" />
                <span>Dal 2024 • Sempre innovativi</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <RocketLaunchIcon className="h-5 w-5 text-cyan-400" />
                Contatti
              </h4>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <MapPinIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Sede Operativa</p>
                    <p className="text-gray-400 text-sm">Città di Castello, Italia</p>
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:info@rayoconsulting.org"
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300">
                    <AtSymbolIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <p className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors duration-300">
                      info@rayoconsulting.org
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                    <IdentificationIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">P.IVA</p>
                    <p className="text-gray-400 text-sm">03988190546</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social & Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <HeartIcon className="h-5 w-5 text-pink-400" />
                Seguici
              </h4>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-8">
                {SOCIALS.map(({ link, name, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300"></div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h5 className="text-white font-medium text-sm mb-4">Link Utili</h5>
                <div className="grid grid-cols-1 gap-2">
                  <Link 
                    href="/privacy-policy" 
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm py-1 hover:translate-x-1 transform transition-transform duration-200"
                  >
                    → Privacy Policy
                  </Link>
                  <Link 
                    href="/cookie-policy" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1 hover:translate-x-1 transform transition-transform duration-200"
                  >
                    → Cookie Policy
                  </Link>
                  <Link 
                    href="#contatti" 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm py-1 hover:translate-x-1 transform transition-transform duration-200"
                  >
                    → Inizia Progetto
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Rayo Consulting di Patriarchi Dylan</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Tutti i diritti riservati</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Fatto con</span>
                <span className="inline-block">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <HeartIcon className="h-4 w-4 text-red-400" />
                  </motion.div>
                </span>
                <span>e tecnologia all'avanguardia</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
