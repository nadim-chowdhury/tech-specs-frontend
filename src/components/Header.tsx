import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">TechReviews</div>
        <nav className="hidden md:flex space-x-4">
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
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
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
          </button>
        </div>
      </div>
    </header>
  );
}
