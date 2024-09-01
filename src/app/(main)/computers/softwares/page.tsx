import { demoSoftwares } from "@/utils/computer-demo-data";
import Image from "next/image";

export default function AllSoftwaresPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Software</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {demoSoftwares.map((software) => (
          <div
            key={software.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={software.name}
              width={1280}
              height={720}
              className="object-cover h-48 w-full"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {software.name}
              </h2>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Category:</strong> {software.category}
              </p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Price:</strong> {software.price}
              </p>
              <p className="text-sm text-slate-600 mb-1">
                <strong>Platform:</strong> {software.platform}
              </p>
              <p className="text-sm text-slate-600">
                <strong>Description:</strong> {software.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
