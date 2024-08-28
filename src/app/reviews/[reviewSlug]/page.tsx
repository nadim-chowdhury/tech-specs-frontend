"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ReviewPage() {
  const router = useRouter();
  // const { id } = router.query;
  const id = 555;

  // Sample data
  const review = {
    productImage: "/images/sample-product.jpg",
    productName: "Sample Product",
    starRating: 4.5,
    reviewer: {
      name: "John Doe",
      date: "August 26, 2024",
      summary: "A thorough and detailed review of the Sample Product.",
    },
    content: [
      {
        sectionTitle: "Design",
        text: "The design of this product is sleek and modern...",
        images: ["/images/design1.jpg", "/images/design2.jpg"],
      },
      {
        sectionTitle: "Performance",
        text: "The performance is top-notch, with no lags...",
        images: [],
      },
      // Add more sections as needed
    ],
    pros: ["Great design", "High performance", "Long battery life"],
    cons: ["Expensive", "Limited color options"],
    ratingDistribution: {
      5: 80,
      4: 15,
      3: 3,
      2: 1,
      1: 1,
    },
    comments: [
      { user: "Alice", comment: "Great review, very helpful!" },
      { user: "Bob", comment: "I found the cons section to be accurate." },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Review Header */}
      <div className="flex items-center mb-8">
        <Image
          src={review.productImage}
          alt={review.productName}
          width={360}
          height={360}
          className="w-24 h-24 mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{review.productName}</h1>
          <p className="text-yellow-500">Rating: {review.starRating} / 5</p>
        </div>
      </div>

      {/* Reviewer Details */}
      <div className="mb-8">
        <p className="font-semibold">{review.reviewer.name}</p>
        <p className="text-gray-500">{review.reviewer.date}</p>
        <p>{review.reviewer.summary}</p>
      </div>

      {/* Review Content */}
      {review.content.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.sectionTitle}</h2>
          <p>{section.text}</p>
          <div className="flex mt-4">
            {section.images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                width={360}
                height={360}
                alt={section.sectionTitle}
                className="w-1/3 h-auto mr-4"
              />
            ))}
          </div>
        </div>
      ))}

      {/* Pros and Cons */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pros and Cons</h2>
        <div className="flex">
          <div className="w-1/2">
            <h3 className="font-semibold">Pros</h3>
            <ul className="list-disc list-inside">
              {review.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold">Cons</h3>
            <ul className="list-disc list-inside">
              {review.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Rating Breakdown</h2>
        <div className="space-y-2">
          {Object.entries(review.ratingDistribution).map(([stars, count]) => (
            <div key={stars} className="flex items-center">
              <span className="w-12">{stars} stars</span>
              <div className="bg-gray-300 w-full h-4 rounded-md overflow-hidden">
                <div
                  className="bg-yellow-500 h-full"
                  style={{ width: `${count}%` }}
                ></div>
              </div>
              <span className="ml-4">{count}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Comments */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Comments</h2>
        <ul>
          {review.comments.map((comment, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{comment.user}</p>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
