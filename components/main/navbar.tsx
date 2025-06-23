'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[60px] sm:h-[65px] md:h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Logo Rayo Consulting"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px]"
          />
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex flex-1 max-w-lg h-full flex-row items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-4 xl:px-[20px] py-2 xl:py-[10px] rounded-full text-gray-200 gap-4 xl:gap-6 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-300 px-1 xl:px-2 text-sm xl:text-base font-medium whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden lg:flex flex-row gap-3 xl:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Icon className="h-5 w-5 xl:h-6 xl:w-6 text-white hover:text-purple-400 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] sm:top-[65px] md:top-[70px] left-0 w-full bg-[#030014]/95 backdrop-blur-md border-t border-gray-800/50 lg:hidden">
          <div className="flex flex-col items-center py-4 sm:py-6">
            {/* Links */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition-colors duration-300 text-center text-base sm:text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 sm:gap-6 pt-4 border-t border-gray-800/50">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white hover:text-purple-400 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};