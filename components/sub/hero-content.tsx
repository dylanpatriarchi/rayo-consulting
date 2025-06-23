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
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 mt-20 sm:mt-32 md:mt-40 w-full z-[20] gap-8 lg:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:text-start text-center lg:order-1 order-2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
           Trasformiamo le tue idee in successi digitali
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Sviluppiamo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              soluzioni innovative
            </span>{" "}
            che fanno crescere il tuo business.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Da siti web performanti ad app mobile native, fino alle più avanzate automazioni AI. 
          Ogni progetto è studiato per massimizzare il tuo ROI e superare la concorrenza.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 sm:py-3 px-4 sm:px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm sm:text-base"
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
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
