"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft } from "@/lib/motion";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  buttonText: string;
  index: number;
}

export const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  highlight,
  buttonText,
  index
}: PricingCardProps) => {
  const cardVariants = slideInFromLeft(0.2 * index);

  return (
    <motion.div
      variants={cardVariants}
      className={`relative flex flex-col justify-between p-4 sm:p-6 md:p-8 rounded-lg border backdrop-blur-sm ${
        highlight
          ? "border-purple-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"
          : "border-[#7042f88b] bg-black/20"
      } h-full min-h-[400px] w-full`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Più Popolare
          </span>
        </div>
      )}

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {price}
          </span>
          <span className="text-gray-400 ml-2 text-sm sm:text-base">/{period}</span>
        </div>
        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{description}</p>

        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-gray-300">
              <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
          highlight
            ? "button-primary text-white hover:scale-105"
            : "border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white"
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}; 