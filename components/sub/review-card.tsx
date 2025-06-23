"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { slideInFromLeft } from "@/lib/motion";

interface ReviewCardProps {
  name: string;
  company: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  project: string;
  result: string;
  index: number;
}

export const ReviewCard = ({
  name,
  company,
  role,
  image,
  rating,
  text,
  project,
  result,
  index
}: ReviewCardProps) => {
  const cardVariants = slideInFromLeft(0.2 * index);

  // Funzione per renderizzare le stelle
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Stelle piene
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
      );
    }
    
    // Mezza stella
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative h-4 w-4 sm:h-5 sm:w-5">
          <StarOutlineIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 absolute" />
          <div className="overflow-hidden w-1/2 absolute">
            <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    // Stelle vuote per completare fino a 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOutlineIcon key={`empty-${i}`} className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
      );
    }
    
    return stars;
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col p-4 sm:p-6 md:p-8 rounded-lg border border-[#7042f88b] bg-black/20 backdrop-blur-sm h-full min-h-[350px] w-full"
    >
      {/* Header con foto e info */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-4">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{name}</h3>
          <p className="text-purple-400 text-xs sm:text-sm font-medium">{role}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{company}</p>
        </div>
      </div>

      {/* Rating stelle */}
      <div className="flex items-center mb-4">
        {renderStars(rating)}
        <span className="ml-2 text-gray-400 text-xs sm:text-sm">{rating}</span>
      </div>

      {/* Testo recensione */}
      <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow italic">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Footer con progetto e risultato */}
      <div className="border-t border-[#7042f88b] pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <p className="text-purple-300 text-xs sm:text-sm font-medium">Progetto:</p>
            <p className="text-white text-xs sm:text-sm">{project}</p>
          </div>
          <div className="text-right sm:text-left">
            <p className="text-cyan-300 text-xs sm:text-sm font-medium">Risultato:</p>
            <p className="text-white text-xs sm:text-sm font-bold">{result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 