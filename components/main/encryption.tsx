"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16 md:py-20">
      <div className="absolute w-full h-auto top-10 sm:top-16 md:top-20 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-medium text-center text-gray-200 leading-tight"
        >
          Velocità{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          protezione totale.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-0 sm:translate-y-[-25px] md:translate-y-[-50px] z-[20] w-auto h-auto mt-16 sm:mt-20 md:mt-24">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-2 sm:translate-y-3 md:translate-y-5 transition-all duration-200 group-hover:translate-y-4 sm:group-hover:translate-y-6 md:group-hover:translate-y-11 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-[50px] xl:h-[50px]"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-[70px] 2xl:h-[70px]"
          />
        </div>

        <div className="Welcome-box px-3 sm:px-4 md:px-[15px] py-2 sm:py-3 md:py-[4px] z-[20] border my-4 sm:my-5 md:my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[11px] md:text-[12px]">🔒 Sicurezza Enterprise</h1>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute inset-0 z-[-1]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
