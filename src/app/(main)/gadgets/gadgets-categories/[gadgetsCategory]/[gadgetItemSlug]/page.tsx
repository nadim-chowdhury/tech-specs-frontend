// import { useRouter } from "next/router";
import { demoGadgetsOneCategoryOneItem } from "@/utils/gadgets-demo-data";
import Image from "next/image";

export default function GadgetItemSlugPage() {
  // const router = useRouter();
  // const { id } = router.query;

  // Find the gadget by id
  const gadget = demoGadgetsOneCategoryOneItem;

  if (!gadget) {
    return (
      <div className="text-center text-xl font-semibold mt-20">
        Gadget not found
      </div>
    );
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={gadget.image}
          alt={gadget.name}
          width={1280}
          height={720}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">{gadget.name}</h1>
          <p className="text-slate-600 mb-4">{gadget.description}</p>
          <ul className="list-disc list-inside mb-4">
            {gadget.features.map((feature, index) => (
              <li key={index} className="text-slate-700">
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-2xl font-semibold text-blue-500">
            {gadget.price}
          </div>
        </div>
      </div>
    </section>
  );
}
