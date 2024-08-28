import { demoMobiles } from "@/utils/mobile-demo-data";
import Image from "next/image";

export default function AllMobilesPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        All Mobile Devices
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {demoMobiles?.map((mobile) => (
          <div
            key={mobile.id}
            className="bg-slate-50 rounded-lg overflow-hidden p-6"
          >
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={mobile.name}
              width={1280}
              height={720}
              className="object-cover h-36 w-full rounded-md"
            />

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {mobile.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Brand:</strong> {mobile.brand}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Price:</strong> {mobile.price}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Display:</strong> {mobile.specs.display}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processor:</strong> {mobile.specs.processor}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Storage:</strong> {mobile.specs.storage}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Camera:</strong> {mobile.specs.camera}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
