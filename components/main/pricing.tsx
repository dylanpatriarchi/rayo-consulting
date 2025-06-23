"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/sub/pricing-card";
import { PRICING_PLANS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <motion.h1
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-16 md:py-20 text-center px-4"
        >
          Scegli il piano perfetto per te
        </motion.h1>

        <motion.p
          variants={slideInFromTop}
          className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
        >
          Dalla presenza online ai sistemi AI più avanzati. Scopri i nostri servizi 
          per trasformare digitalmente la tua azienda.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              highlight={plan.highlight}
              buttonText={plan.buttonText}
              index={index}
            />
          ))}
        </div>

        <motion.div
          variants={slideInFromTop}
          className="text-center mt-8 sm:mt-12 md:mt-16 px-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
            Tutti i piani includono consulenza gratuita e preventivo personalizzato
          </p>
          <p className="text-gray-500 text-xs">
            * I prezzi possono variare in base alla complessità del progetto
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}; 