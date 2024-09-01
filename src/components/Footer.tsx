import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaReddit,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 TechReviews. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400"
          >
            <FaReddit />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
}
