import { popularCategories } from "@/utils/popular-categories";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCategories?.map((category: any) => (
            <div
              key={category.id}
              className="w-full bg-slate-50 rounded-lg overflow-hidden"
            >
              <Link
                href={`/categories/${category.slug}`}
                className="block p-6 rounded-lg hover:bg-slate-100 transition-all duration-500"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={1280}
                  height={720}
                  className="h-32 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {category.name}
                </h3>
                <p className="line-clamp-2 text-slate-600">
                  {category.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
