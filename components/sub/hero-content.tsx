"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40 w-full z-[20] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto"
    >
      <div className="h-full w-full flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center text-center lg:text-left lg:order-1 order-2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 sm:py-[8px] px-3 sm:px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <span className="Welcome-text text-xs sm:text-[13px]">
           Trasformiamo le tue idee in successi digitali
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto leading-tight"
        >
          Sviluppiamo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            soluzioni innovative
          </span>{" "}
          che fanno crescere il tuo business.
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 my-3 sm:my-4 md:my-5 max-w-full lg:max-w-[600px] leading-relaxed"
        >
          <strong className="text-white">Agenzia web a Città di Castello</strong> specializzata in siti web performanti, 
          app mobile native e automazioni AI. Ogni progetto è studiato per massimizzare il tuo ROI e superare la concorrenza.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#contatti"
          className="py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[200px] md:max-w-[220px] text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-300 mx-auto lg:mx-0"
        >
          Inizia il tuo progetto
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center lg:order-2 order-1"
      >
        <Image
          src="/hero-bg.svg"
          alt="Rayo Consulting - Sviluppo Web e App Mobile a Città di Castello"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[650px] h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
