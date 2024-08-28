import { demoLaptops } from "@/utils/computer-demo-data";
import Image from "next/image";

export default function AllLaptopsPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Laptops</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {demoLaptops?.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-slate-50 rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={laptop.name}
              width={1280}
              height={720}
              className="object-cover h-48 w-full"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {laptop.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Brand:</strong> {laptop.brand}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Price:</strong> {laptop.price}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Display:</strong> {laptop.specs.display}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processor:</strong> {laptop.specs.processor}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Storage:</strong> {laptop.specs.storage}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>RAM:</strong> {laptop.specs.ram}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Graphics:</strong> {laptop.specs.graphics}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
