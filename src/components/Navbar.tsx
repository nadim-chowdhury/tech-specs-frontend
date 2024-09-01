"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">TechReviews</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-slate-300">
            Home
          </Link>
          <Link href="/reviews" className="hover:text-slate-300">
            Reviews
          </Link>
          <Link href="/specifications" className="hover:text-slate-300">
            Specifications
          </Link>
          <Link href="/blog" className="hover:text-slate-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-slate-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Home
          </Link>
          <Link
            href="/reviews"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Reviews
          </Link>
          <Link
            href="/specifications"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Specifications
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-white hover:bg-slate-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
