"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
      <input
        type="text"
        className="w-full py-3 pl-4 pr-16 text-slate-700 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Search products, reviews..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-2 mr-2 bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-700"
      >
        Search
      </button>
    </form>
  );
}
