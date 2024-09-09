// import { demoGadgets } from "@/utils/gadget-demo-data";
import { demoGadgetsOneCategory } from "@/utils/gadgets-demo-data";
import Image from "next/image";
// import { useRouter } from "next/router";

export default function GadgetsCategoryPage() {
  // const router = useRouter();
  // const { category } = router.query;

  // Filter gadgets based on the selected category
  // const filteredGadgets = demoGadgets.filter(
  //   (gadget) => gadget.category.toLowerCase() === category?.toLowerCase()
  // );
  const filteredGadgets = demoGadgetsOneCategory;

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Earbuds | Gadgets</h1>

      {filteredGadgets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredGadgets.map((gadget) => (
            <div
              key={gadget.id}
              className="bg-slate-50 rounded-lg border overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={gadget.name}
                width={1280}
                height={720}
                className="object-cover h-48 w-full"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">
                  {gadget.name}
                </h2>
                <p className="text-sm text-slate-600 mb-1">
                  <strong>Price:</strong> {gadget.price}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Description:</strong> {gadget.description}
                </p>
                <h3 className="text-md font-semibold text-slate-800 mb-2">
                  Features:
                </h3>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {gadget.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600">
          No gadgets found in this category.
        </p>
      )}
    </section>
  );
}
