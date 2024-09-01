import { allMobileBrandsName, demoMobiles } from "@/utils/mobile-demo-data";
import Image from "next/image";
import Link from "next/link";

export default function AllMobilesPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        All Mobile Devices
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-slate-100 border rounded-lg p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-xl">By Brands</h2>
            <Link href="/mobiles/mobiles-categories" className="text-cyan-600">
              Show All
            </Link>
          </div>

          <div className="flex gap-2 flex-wrap">
            {allMobileBrandsName?.map((item) => (
              <Link
                key={item.id}
                href={`/mobiles/mobiles-categories/${item.name.toLowerCase()}`}
                className="flex items-center gap-2 p-2 bg-white border rounded-md"
              >
                <Image
                  src=""
                  alt=""
                  width={480}
                  height={480}
                  className="w-10 h-10 rounded-md object-contain"
                />
                <h3>{item?.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-span-3 gap-8">
          {demoMobiles?.map((mobile) => (
            <div
              key={mobile.id}
              className="bg-slate-50 rounded-lg overflow-hidden p-6 border"
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
                {/* <p className="text-sm text-gray-600 mb-1">
                  <strong>Brand:</strong> {mobile.brand}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Price:</strong> {mobile.price}
                </p> */}
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Display:</strong> {mobile.specs.display}
                </p>
                {/* <p className="text-sm text-gray-600 mb-1">
                  <strong>Processor:</strong> {mobile.specs.processor}
                </p> */}
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
      </div>
    </section>
  );
}
