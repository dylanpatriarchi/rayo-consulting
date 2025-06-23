"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          🚀 Stack tecnologico all'avanguardia
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] px-4"
      >
        Creiamo soluzioni robuste con le tecnologie più performanti del mercato.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-200 mb-10 mt-[10px] text-center px-4"
      >
        Ogni progetto è sviluppato con precisione maniacale e consegnato sempre in tempo.
      </motion.div>
    </div>
  );
};
