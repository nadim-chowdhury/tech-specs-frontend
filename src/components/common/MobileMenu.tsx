"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/utils/nav-links";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-center md:hidden">
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="text-2xl focus:outline-none"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t md:hidden">
          <div className="flex flex-col items-center space-y-4 pt-6 pb-8">
            {navLinks.map((item, i) => (
              <Link key={i} href={item.href}>
                <span
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  className="text-lg text-gray-700 hover:text-blue-500"
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
