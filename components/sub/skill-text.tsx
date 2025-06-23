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
        <span className="Welcome-text text-[13px]">
          🚀 Stack tecnologico all'avanguardia
        </span>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] px-4"
      >
        Tecnologie Moderne per <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Progetti Eccellenti</span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="text-base sm:text-lg md:text-xl lg:text-[20px] text-gray-200 mb-10 mt-[10px] text-center px-4 max-w-4xl leading-relaxed"
      >
        <strong className="text-white">React, Next.js, Node.js, AI e molto altro</strong> - utilizziamo solo le tecnologie più performanti e affidabili per garantire risultati professionali e duraturi nel tempo.
      </motion.p>
    </div>
  );
};
