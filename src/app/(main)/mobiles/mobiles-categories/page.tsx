import { mobileBrands } from "@/utils/mobile-demo-data";

export default function AllBrandsPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Mobile Brands</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mobileBrands?.map((brand, index) => (
          <li
            key={index}
            className="bg-slate-50 rounded-lg p-6 text-center text-lg font-medium text-slate-800"
          >
            {brand}
          </li>
        ))}
      </ul>
    </section>
  );
}
