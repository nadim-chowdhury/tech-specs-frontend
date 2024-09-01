import { featuredProducts } from "@/utils/featured-products";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts?.map((product: any) => (
            <div
              key={product.id}
              className="bg-slate-50 rounded-lg flex flex-col justify-between transition-all duration-500 hover:bg-slate-100 border"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={1280}
                height={720}
                className="h-48 w-full object-cover mb-4 rounded-md"
              />

              <div className="px-6">
                <h3 className="text-xl font-semibold text-slate-800">
                  {product.name}
                </h3>
                <p className="text-slate-600">{product.shortDescription}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 mb-6 inline-block text-primary font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
