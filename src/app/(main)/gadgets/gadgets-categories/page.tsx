import { demoGadgetCategories } from "@/utils/gadgets-demo-data";
import Image from "next/image";

export default function AllGadgetsCategoriesPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Gadget Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {demoGadgetCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={category.name}
              width={1280}
              height={720}
              className="object-cover h-48 w-full"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {category.name}
              </h2>
              <p className="text-sm text-slate-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
