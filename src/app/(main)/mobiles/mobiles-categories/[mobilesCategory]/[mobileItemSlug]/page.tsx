"use client";

import { mobileItemSlugData } from "@/utils/mobile-demo-data";
import Image from "next/image";

export default function MobileItemSlugPage() {
  const {
    name,
    brand,
    releaseDate,
    rating,
    images,
    keySpecs,
    detailedSpecs,
    reviews,
    // price,
    // tests,
  } = mobileItemSlugData;

  return (
    <section className="container mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-slate-600">
          Brand: <span className="font-semibold">{brand}</span> | Release Date:{" "}
          <span className="font-semibold">{releaseDate}</span>
        </p>
        <p className="text-yellow-500 text-lg">
          Rating: {rating.toFixed(1)} / 5
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 bg-slate-100 border rounded-lg"></div>

        <div className="col-span-3">
          {/* Image Gallery */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={1280}
                  height={720}
                  alt={`${name} Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Key Specifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Specifications</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <li>Processor: {keySpecs.processor}</li>
              <li>RAM: {keySpecs.ram}</li>
              <li>Storage: {keySpecs.storage}</li>
              <li>Display: {keySpecs.display}</li>
              <li>Battery: {keySpecs.battery}</li>
              <li>Camera: {keySpecs.camera}</li>
            </ul>
          </div>

          {/* Detailed Specifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Detailed Specifications</h2>
            <div className="bg-slate-50 border rounded-lg px-6 py-2">
              <table className="table-auto w-full">
                <tbody>
                  {/* Render detailed specifications, handling different types of data */}
                  {Object.entries(detailedSpecs).map(([specKey, specValue]) => (
                    <tr key={specKey} className="">
                      <td className="py-2 font-semibold capitalize w-60">
                        {specKey.replace(/([A-Z])/g, " $1")}
                      </td>
                      <td className="p-2">
                        {Array.isArray(specValue)
                          ? specValue.join(", ")
                          : typeof specValue === "object"
                          ? Object.entries(specValue)
                              .map(
                                ([key, value]) =>
                                  `${key.toUpperCase()}: ${value}`
                              )
                              .join(" | ")
                          : specValue.toString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Price */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Price</h2> */}
          {/* <ul className="text-lg">
          {Object.entries(price).map(([currency, amount]) => (
            <li key={currency}>
              <span className="font-semibold">{currency.toUpperCase()}:</span>{" "}
              {amount}
            </li>
          ))}
        </ul> */}
          {/* </div> */}

          {/* Performance Tests */}
          {/* <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Performance Tests</h2> */}
          {/* <ul className="text-lg">
          {Object.entries(tests).map(([testType, testResults]) => (
            <li key={testType} className="mb-2">
              <p className="font-semibold capitalize">{testType}</p>
              {typeof testResults === "object" ? (
                <ul className="ml-4 list-disc">
                  {Object.entries(testResults).map(
                    ([resultType, resultValue]) => (
                      <li key={resultType}>
                        <span className="font-semibold">
                          {resultType.replace(/([A-Z])/g, " $1")}:{" "}
                        </span>
                        {resultValue}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p>{testResults}</p>
              )}
            </li>
          ))}
        </ul> */}
          {/* </div> */}

          {/* User Reviews */}
          <div className="">
            <h2 className="text-2xl font-bold mb-6">User Reviews</h2>
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="bg-gray-50 p-4 rounded-lg border"
                >
                  <p className="font-semibold text-lg">{review.user}</p>
                  <p className="text-yellow-500 text-lg">
                    Rating: {review.rating} / 5
                  </p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Buy Now/CTA */}
          {/* <div className="mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-lg">
          Buy Now
        </button>
        <button className="bg-slate-200 text-slate-800 px-4 py-2 rounded ml-4 text-lg">
          Compare
        </button>
      </div> */}
        </div>
      </div>
    </section>
  );
}
