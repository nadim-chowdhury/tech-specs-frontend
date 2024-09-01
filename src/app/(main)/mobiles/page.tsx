import { allMobileBrandsName, demoMobiles } from "@/utils/mobile-demo-data";
import Image from "next/image";
import Link from "next/link";

export default function AllMobilesPage() {
  return (
    <section className="container mx-auto">
      {/* Category Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">All Mobile Phones</h1>
        <p className="text-slate-600">
          Explore all mobile phones with detailed specs and reviews.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-slate-100 border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price Range</label>
            <select className="p-2 w-full rounded">
              <option value="">All</option>
              <option value="0,299">$0 - $299</option>
              <option value="300,599">$300 - $599</option>
              {/* Add more price ranges */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">RAM</label>
            <select className="p-2 w-full rounded">
              <option value="">All</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              {/* Add more RAM options */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Storage</label>
            <select className="p-2 w-full rounded">
              <option value="">All</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              {/* Add more storage options */}
            </select>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">By Brands</h2>
            <Link href="/mobiles/mobiles-categories">
              <span className="text-slate-600">Show All</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {allMobileBrandsName?.map((item) => (
              <Link
                key={item.id}
                href={`/mobiles/mobiles-categories/${item.name.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 p-2 bg-white border rounded-md hover:shadow-sm transition-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1678059285248-031d5128c38a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={480}
                    height={480}
                    className="w-5 h-5 rounded-md object-cover"
                  />
                  <h3 className="text-slate-800 text-sm">{item?.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-end mb-4">
            <select className="p-2 rounded">
              <option value="relevance">Sort by Relevance</option>
              <option value="price">Sort by Price</option>
              {/* Add more sorting options */}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoMobiles?.map((mobile) => (
              <div
                key={mobile.id}
                className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col justify-between"
              >
                <div className="p-6">
                  <Image
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={mobile.name}
                    width={1280}
                    height={720}
                    className="object-cover h-48 w-full rounded-md"
                  />

                  <div className="mt-4">
                    <h2 className="text-lg font-semibold text-slate-800 mb-2">
                      {mobile.name}
                    </h2>
                    <p className="text-sm text-slate-600 mb-1">
                      <strong>Display:</strong> {mobile.specs.display}
                    </p>
                    <p className="text-sm text-slate-600 mb-1">
                      <strong>Storage:</strong> {mobile.specs.storage}
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Camera:</strong> {mobile.specs.camera}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link href="/mobiles/mobiles-categories/apple/iphone-14">
                    <span className="font-bold text-blue-600 hover:underline">
                      View More
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded hover:bg-slate-300 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 mx-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded hover:bg-slate-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 mx-1 bg-slate-200 rounded hover:bg-slate-300 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
