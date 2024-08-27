import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 TechReviews. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Facebook SVG Icon */}
            </svg>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Twitter SVG Icon */}
            </svg>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn SVG Icon */}
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
