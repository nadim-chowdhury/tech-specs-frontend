"use client";

import { mobileItem } from "@/utils/mobile-demo-data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileItemSlugPage() {
  const router = useRouter();
  // const { id } = router.query;
  const id = 420;

  return (
    <section className="container mx-auto">
      {/* mobileItem Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{mobileItem.name}</h1>
        <p className="text-slate-600">
          Brand: {mobileItem.brand} | Release Date: {mobileItem.releaseDate}
        </p>
        <p className="text-yellow-500">Rating: {mobileItem.rating} / 5</p>
      </div>

      {/* mobileItem Gallery */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mobileItem.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={1280}
              height={720}
              alt={`${mobileItem.name} Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Key Specifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Specifications</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li>Processor: {mobileItem.keySpecs.processor}</li>
          <li>RAM: {mobileItem.keySpecs.ram}</li>
          <li>Storage: {mobileItem.keySpecs.storage}</li>
          <li>Display: {mobileItem.keySpecs.display}</li>
          <li>Battery: {mobileItem.keySpecs.battery}</li>
          <li>Camera: {mobileItem.keySpecs.camera}</li>
        </ul>
      </div>

      {/* Detailed Specifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Detailed Specifications</h2>
        <table className="table-auto w-full bg-white rounded-lg p-4">
          <tbody>
            <tr>
              <td className="p-2 font-semibold">Chipset</td>
              <td className="p-2">{mobileItem.detailedSpecs.chipset}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">GPU</td>
              <td className="p-2">{mobileItem.detailedSpecs.gpu}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">OS</td>
              <td className="p-2">{mobileItem.detailedSpecs.os}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Dimensions</td>
              <td className="p-2">{mobileItem.detailedSpecs.dimensions}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Weight</td>
              <td className="p-2">{mobileItem.detailedSpecs.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* User Reviews */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <ul>
          {mobileItem.reviews.map((review) => (
            <li key={review.id} className="mb-4">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Buy Now/CTA */}
      <div className="mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Buy Now
        </button>
        <button className="bg-slate-200 text-slate-800 px-4 py-2 rounded ml-4">
          Compare
        </button>
      </div>
    </section>
  );
}
