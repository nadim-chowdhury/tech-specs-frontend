import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-6 px-4">
      <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600">
        Oops! Page not found
      </h2>
      <p className="text-lg text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <span className="mt-4 px-6 py-3 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 transition-colors duration-300 shadow-lg">
          Return Home
        </span>
      </Link>
    </div>
  );
}
