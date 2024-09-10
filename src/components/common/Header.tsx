import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white mb-12 lg:mb-16">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="Tech Specs Logo"
            width={90}
            height={90}
            className="rounded-full"
          />

          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Tech Specs
            </h1>
            <p className="text-sm md:text-base text-gray-500">
              All About Technology
            </p>
          </div>
        </Link>

        {/* Right-side banner (or placeholder for ad) */}
        <div className="hidden md:block w-[300px] lg:w-[728px] h-[90px] bg-gradient-to-tr from-cyan-600 to-cyan-800">
          {/* Add ad content or placeholder here if needed */}
        </div>
      </div>

      {/* Navigation Bar */}
      <Navbar />
    </header>
  );
}
