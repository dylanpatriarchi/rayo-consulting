"use client";

import { motion } from "framer-motion";
import { ReviewCard } from "@/components/sub/review-card";
import { REVIEWS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";
import Script from "next/script";

export const Reviews = () => {
  // Schema per le recensioni
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rayo Consulting",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "4",
      "bestRating": "5",
      "worstRating": "4"
    },
    "review": REVIEWS.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "publisher": {
        "@type": "Organization",
        "name": review.company
      }
    }))
  };

  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 relative"
    >
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema),
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <motion.h2
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 md:py-20 text-center px-4"
        >
          Clienti che hanno trasformato il loro business
        </motion.h2>

        <motion.p
          variants={slideInFromTop}
          className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
        >
          <strong className="text-white">Recensioni autentiche</strong> di imprenditori che hanno scelto 
          Rayo Consulting per digitalizzzare la loro azienda. Risultati reali, testimonianze concrete.
        </motion.p>

        {/* Grid semplice per 4 recensioni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
          {REVIEWS.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${review.company}`}
              name={review.name}
              company={review.company}
              role={review.role}
              image={review.image}
              rating={review.rating}
              text={review.text}
              project={review.project}
              result={review.result}
              index={index}
            />
          ))}
        </div>

        <motion.div
          variants={slideInFromTop}
          className="text-center mt-8 sm:mt-12 md:mt-16 px-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
            ⭐ Media recensioni: 4.8/5 • 🚀 +200% ROI medio clienti • 💼 100% progetti consegnati in tempo
          </p>
          <motion.a
            href="#contatti"
            className="button-primary text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-medium text-sm sm:text-base hover:scale-105 transition-all duration-300 inline-block"
          >
            Diventa il prossimo caso di successo
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}; 