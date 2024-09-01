"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "@/interfaces/mobiles";
import { mobileProducts } from "@/utils/mobile-demo-data";

export default function BrandAllMobilesPage() {
  const [filter, setFilter] = useState<Filter>({
    brand: "",
    priceRange: [],
    ram: "",
    storage: "",
  });

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value.split(",").map(Number);
    setFilter({ ...filter, priceRange: value });
  };

  const filteredProducts = mobileProducts.filter((product) => {
    return (
      (filter.brand === "" || product.brand === filter.brand) &&
      (filter.priceRange.length === 0 ||
        (product.price >= filter.priceRange[0] &&
          product.price <= filter.priceRange[1])) &&
      (filter.ram === "" || product.ram === filter.ram) &&
      (filter.storage === "" || product.storage === filter.storage)
    );
  });

  return (
    <section className="container mx-auto">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {filter.brand || "Xiaomi"} Phones
        </h1>
        <p className="text-slate-600">
          Explore the latest {filter.brand || "Xiaomi"} phones with detailed
          specs and reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="p-6 bg-slate-100 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price Range</label>
            <select
              className="p-2 w-full rounded"
              value={filter.priceRange.join(",")}
              onChange={handlePriceRangeChange}
            >
              <option value="">All</option>
              <option value={[0, 299].join(",")}>$0 - $299</option>
              <option value={[300, 599].join(",")}>$300 - $599</option>
              {/* Add more price ranges as needed */}
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
              {/* Add more RAM options as needed */}
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
              {/* Add more storage options as needed */}
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-3">
          <div className="flex justify-end mb-4">
            <select className="p-2 rounded">
              <option value="relevance">Sort by Relevance</option>
              <option value="price">Sort by Price</option>
              {/* Add more sorting options as needed */}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-2 rounded-t-md"
                  width={150}
                  height={150}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600">RAM: {product.ram}</p>
                  <p className="text-sm text-slate-600">
                    Storage: {product.storage}
                  </p>
                </div>
                <div className="p-6 mt-auto">
                  <Link
                    href={`/mobiles/mobiles-categories/${product.brand.toLowerCase()}/${
                      product.id
                    }`}
                    className="font-bold text-slate-600 hover:underline"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded">
              Previous
            </button>
            <button className="px-4 py-2 mx-1 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded">2</button>
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
