"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ComparisonPage() {
  // Sample data
  const products = [
    {
      id: 1,
      name: "Product A",
      image: "/images/product-a.jpg",
      price: "$999",
      display: "6.5-inch OLED",
      processor: "A15 Bionic",
      camera: "12MP + 12MP",
      battery: "4000mAh",
    },
    {
      id: 2,
      name: "Product B",
      image: "/images/product-b.jpg",
      price: "$799",
      display: "6.1-inch LCD",
      processor: "Snapdragon 888",
      camera: "48MP + 8MP + 2MP",
      battery: "4500mAh",
    },
    // Add more products as needed
  ];

  const [selectedProducts, setSelectedProducts] = useState(products);

  const removeProduct = (id: any) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Product Comparison</h1>

      {/* Comparison Table */}
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3">Feature</th>
            {selectedProducts.map((product, index) => (
              <th key={index} className="px-6 py-3 relative">
                {product.name}
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute top-0 right-0 text-red-500"
                >
                  Remove
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 font-semibold">Image</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={480}
                  height={480}
                  className="w-24 h-24"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 font-semibold">Price</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                {product.price}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 font-semibold">Display</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                {product.display}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 font-semibold">Processor</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                {product.processor}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 font-semibold">Camera</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                {product.camera}
              </td>
            ))}
          </tr>
          <tr>
            <td className="px-6 py-4 font-semibold">Battery</td>
            {selectedProducts.map((product, index) => (
              <td key={index} className="px-6 py-4">
                {product.battery}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Quick Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
        <p>
          Product A has a better display and processor, while Product B offers a
          better camera and battery life.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <a
          href={`/product/${selectedProducts[0]?.id}`}
          className="text-blue-600 underline"
        >
          View Product A Details
        </a>
        <a
          href={`/product/${selectedProducts[1]?.id}`}
          className="text-blue-600 underline ml-4"
        >
          View Product B Details
        </a>
      </div>
    </div>
  );
}
