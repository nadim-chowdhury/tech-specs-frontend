"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductListing() {
  const router = useRouter();
  const { category } = router.query;

  const [filter, setFilter] = useState({
    brand: "",
    priceRange: "",
    ram: "",
    storage: "",
  });

  const products = [
    // Sample product data
    {
      id: 1,
      name: "Phone 1",
      brand: "Brand A",
      price: 299,
      ram: "4GB",
      storage: "64GB",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Phone 2",
      brand: "Brand B",
      price: 399,
      ram: "6GB",
      storage: "128GB",
      image: "https://via.placeholder.com/150",
    },
    // More products...
  ];

  const filteredProducts = products.filter((product) => {
    return (
      (filter.brand === "" || product.brand === filter.brand) &&
      (filter.priceRange === "" ||
        (product.price >= filter.priceRange[0] &&
          product.price <= filter.priceRange[1])) &&
      (filter.ram === "" || product.ram === filter.ram) &&
      (filter.storage === "" || product.storage === filter.storage)
    );
  });

  return (
    <div className="container mx-auto p-4">
      {/* Category Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{category} Phones</h1>
        <p className="text-gray-600">
          Explore the latest {category} phones with detailed specs and reviews.
        </p>
      </header>

      <div className="flex">
        {/* Filters Sidebar */}
        <aside className="w-1/4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Brand</label>
            <select
              className="p-2 w-full rounded"
              value={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
            >
              <option value="">All</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
              {/* Add more brands */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price Range</label>
            <select
              className="p-2 w-full rounded"
              value={filter.priceRange}
              onChange={(e) =>
                setFilter({ ...filter, priceRange: e.target.value })
              }
            >
              <option value="">All</option>
              <option value={[0, 299]}>$0 - $299</option>
              <option value={[300, 599]}>$300 - $599</option>
              {/* Add more price ranges */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">RAM</label>
            <select
              className="p-2 w-full rounded"
              value={filter.ram}
              onChange={(e) => setFilter({ ...filter, ram: e.target.value })}
            >
              <option value="">All</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              {/* Add more RAM options */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Storage</label>
            <select
              className="p-2 w-full rounded"
              value={filter.storage}
              onChange={(e) =>
                setFilter({ ...filter, storage: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              {/* Add more storage options */}
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="w-3/4 p-4">
          <div className="flex justify-end mb-4">
            <select
              className="p-2 rounded"
              onChange={(e) => {
                // Add sorting logic
              }}
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price">Sort by Price</option>
              {/* Add more sorting options */}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
                <p>RAM: {product.ram}</p>
                <p>Storage: {product.storage}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded">Previous</button>
        <button className="px-4 py-2 mx-1 bg-blue-600 text-white rounded">
          1
        </button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded">2</button>
        <button className="px-4 py-2 mx-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
}
