"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:scale-105 transition-all duration-300 bg-[#10132E] flex flex-col h-full"
    >
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow mb-4">
          {description}
        </p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm sm:text-base font-medium rounded-lg hover:scale-105 transition-all duration-300 mt-auto"
        >
          Scopri di più
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
