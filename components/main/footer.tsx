"use client";

import {
  AtSymbolIcon,
  MapPinIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { SOCIALS } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-8 md:p-[15px] z-[20]">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between m-auto">
        {/* Informazioni Aziendali */}
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
            Rayo Consulting di Patriarchi Dylan
          </h3>
          <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
              <span>Città di Castello, Italia</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <AtSymbolIcon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
              <span>info@rayoconsulting.org</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <IdentificationIcon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
              <span>P.IVA 03988190546</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center lg:items-end gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            Seguici per rimanere aggiornato
          </p>
          <div className="flex flex-row gap-3 sm:gap-5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white hover:text-purple-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 border-t border-gray-700 text-center">
        <p className="text-xs text-gray-400">
          © 2024 Rayo Consulting di Patriarchi Dylan. Tutti i diritti riservati.
        </p>
      </div>
    </div>
  );
};
