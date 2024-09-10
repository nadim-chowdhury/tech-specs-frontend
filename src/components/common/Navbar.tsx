import Link from "next/link";
import { navLinks } from "@/utils/nav-links";
import MobileMenu from "./MobileMenu";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <nav className="container mx-auto py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold uppercase">
          Tech<span className="text-cyan-600">Specs</span>
        </h1>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((item, i) => (
          <Link key={i} href={item.href}>
            <span className="text-gray-700 font-medium hover:text-cyan-500">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Search Box */}
      <SearchBox />
    </nav>
  );
}
