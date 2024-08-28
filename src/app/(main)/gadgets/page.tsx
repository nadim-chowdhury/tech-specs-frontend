import { demoGadgets } from "@/utils/gadgets-demo-data";
import Image from "next/image";

export default function AllGadgetsPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Gadgets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {demoGadgets.map((gadget) => (
          <div
            key={gadget.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1489359413553-6c264fb36c83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={gadget.name}
              width={1280}
              height={720}
              className="object-cover h-48 w-full"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {gadget.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Category:</strong> {gadget.category}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Price:</strong> {gadget.price}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Description:</strong> {gadget.description}
              </p>
              <h3 className="text-md font-semibold text-gray-800 mb-2">
                Features:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {gadget.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
