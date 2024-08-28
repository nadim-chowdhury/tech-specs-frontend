"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileSlug() {
  const router = useRouter();
  // const { id } = router.query;

  const id = 420;

  const product = {
    id: 1,
    name: "Phone 1",
    brand: "Brand A",
    releaseDate: "2024-08-01",
    rating: 4.5,
    images: ["", "", ""],
    keySpecs: {
      processor: "Octa-core 2.8 GHz",
      ram: "6GB",
      storage: "128GB",
      display: "6.5-inch AMOLED",
      battery: "4500mAh",
      camera: "48MP + 12MP Dual",
    },
    detailedSpecs: {
      chipset: "Snapdragon 888",
      gpu: "Adreno 660",
      os: "Android 12",
      dimensions: "160.8 x 74.2 x 8.4 mm",
      weight: "190g",
    },
    reviews: [
      { id: 1, user: "John Doe", rating: 5, comment: "Great phone!" },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Good value for money.",
      },
      // More reviews...
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Product Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">
          Brand: {product.brand} | Release Date: {product.releaseDate}
        </p>
        <p className="text-yellow-500">Rating: {product.rating} / 5</p>
      </header>

      {/* Product Gallery */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={1280}
              height={720}
              alt={`${product.name} Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Key Specifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Specifications</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li>Processor: {product.keySpecs.processor}</li>
          <li>RAM: {product.keySpecs.ram}</li>
          <li>Storage: {product.keySpecs.storage}</li>
          <li>Display: {product.keySpecs.display}</li>
          <li>Battery: {product.keySpecs.battery}</li>
          <li>Camera: {product.keySpecs.camera}</li>
        </ul>
      </section>

      {/* Detailed Specifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Detailed Specifications</h2>
        <table className="table-auto w-full bg-white rounded-lg p-4">
          <tbody>
            <tr>
              <td className="p-2 font-semibold">Chipset</td>
              <td className="p-2">{product.detailedSpecs.chipset}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">GPU</td>
              <td className="p-2">{product.detailedSpecs.gpu}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">OS</td>
              <td className="p-2">{product.detailedSpecs.os}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Dimensions</td>
              <td className="p-2">{product.detailedSpecs.dimensions}</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Weight</td>
              <td className="p-2">{product.detailedSpecs.weight}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* User Reviews */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <ul>
          {product.reviews.map((review) => (
            <li key={review.id} className="mb-4">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Buy Now/CTA */}
      <section className="mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Buy Now
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded ml-4">
          Compare
        </button>
      </section>
    </div>
  );
}
