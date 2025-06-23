"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20 px-4">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-center text-gray-200"
        >
          Velocità{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          protezione totale.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px]"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">🔒 Sicurezza Enterprise</h1>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
