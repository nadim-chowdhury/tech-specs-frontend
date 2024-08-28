"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function SearchResultsPage() {
  // Sample data
  const [searchQuery] = useState("iPhone");
  const results = [
    {
      id: 1,
      name: "iPhone 13",
      description:
        "Latest model with A15 Bionic chip, 5G, and improved cameras.",
      image: "/images/iphone-13.jpg",
    },
    {
      id: 2,
      name: "iPhone 12",
      description:
        "Previous generation, still a powerful device with A14 Bionic chip.",
      image: "/images/iphone-12.jpg",
    },
    // Add more results as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Search Results for {searchQuery}
      </h1>
      <p className="text-gray-600 mb-8">{results.length} results found</p>

      {/* Filters and Sorting Options */}
      <div className="mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
          Sort by Relevance
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Filter Results
        </button>
      </div>

      {/* Search Results List/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <div key={result.id} className="border p-4 rounded-lg">
            <Image
              src={result.image}
              alt={result.name}
              width={1280}
              height={720}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{result.name}</h2>
            <p className="text-gray-700">{result.description}</p>
            <a
              href={`/product/${result.id}`}
              className="text-blue-600 underline mt-4 inline-block"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
          Previous
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
