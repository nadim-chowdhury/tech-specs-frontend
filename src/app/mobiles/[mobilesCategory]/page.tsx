// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Filter } from "@/interfaces/mobiles";

// export default function BrandAllMobilesPage() {
//   const [filter, setFilter] = useState<Filter>({
//     brand: "",
//     priceRange: [],
//     ram: "",
//     storage: "",
//   });
//   const [mobiles, setMobiles] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("relevance");
//   const [page, setPage] = useState(1);
//   const limit = 10;

//   useEffect(() => {
//     fetchMobiles();
//   }, [filter, search, sort, page]);

//   const fetchMobiles = async () => {
//     const priceRangeQuery = filter.priceRange.join(",");
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mobiles?search=${search}&page=${page}&limit=${limit}&sort=${sort}&priceRange=${priceRangeQuery}&ram=${filter.ram}&storage=${filter.storage}`
//     );
//     const data = await res.json();
//     setMobiles(data.mobiles);
//   };

//   const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value.split(",").map(Number);
//     setFilter({ ...filter, priceRange: value });
//   };

//   return (
//     <section className="container mx-auto">
//       {/* Category Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold">
//           {filter.brand || "Xiaomi"} Phones
//         </h1>
//         <p className="text-slate-600">
//           Explore the latest {filter.brand || "Xiaomi"} phones with detailed
//           specs and reviews.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Filters Sidebar */}
//         <aside className="p-6 bg-slate-100 rounded-lg border">
//           <h2 className="text-xl font-bold mb-4">Filters</h2>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Price Range</label>
//             <select
//               className="p-2 w-full rounded"
//               value={filter.priceRange.join(",")}
//               onChange={handlePriceRangeChange}
//             >
//               <option value="">All</option>
//               <option value={[0, 299].join(",")}>$0 - $299</option>
//               <option value={[300, 599].join(",")}>$300 - $599</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">RAM</label>
//             <select
//               className="p-2 w-full rounded"
//               value={filter.ram}
//               onChange={(e) => setFilter({ ...filter, ram: e.target.value })}
//             >
//               <option value="">All</option>
//               <option value="4GB">4GB</option>
//               <option value="6GB">6GB</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Storage</label>
//             <select
//               className="p-2 w-full rounded"
//               value={filter.storage}
//               onChange={(e) =>
//                 setFilter({ ...filter, storage: e.target.value })
//               }
//             >
//               <option value="">All</option>
//               <option value="64GB">64GB</option>
//               <option value="128GB">128GB</option>
//             </select>
//           </div>
//         </aside>

//         {/* Product Grid */}
//         <div className="md:col-span-3">
//           <div className="flex justify-end mb-4">
//             <select
//               className="p-2 rounded"
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//             >
//               <option value="relevance">Sort by Relevance</option>
//               <option value="price">Sort by Price</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {mobiles?.map((product: any) => (
//               <div
//                 key={product?.id}
//                 className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col"
//               >
//                 <Image
//                   src={product?.image}
//                   alt={product?.name}
//                   className="w-full h-48 object-cover mb-2 rounded-t-md"
//                   width={150}
//                   height={150}
//                 />

//                 <div className="mt-4 px-6">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-2">
//                     {product?.name}
//                   </h3>
//                   <p className="text-sm text-slate-600">RAM: {product?.ram}</p>
//                   <p className="text-sm text-slate-600">
//                     Storage: {product?.storage}
//                   </p>
//                 </div>

//                 <div className="px-6 py-4 mt-auto">
//                   <Link
//                     href={`/mobiles/mobiles-categories/${product?.brand.toLowerCase()}/${
//                       product?.id
//                     }`}
//                     className="font-bold text-slate-600 hover:underline"
//                   >
//                     View More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center mt-8">
//             <button
//               className="px-4 py-2 mx-1 bg-slate-200 rounded"
//               onClick={() => setPage(page - 1)}
//               disabled={page === 1}
//             >
//               Previous
//             </button>
//             <button className="px-4 py-2 mx-1 bg-blue-600 text-white rounded">
//               {page}
//             </button>
//             <button
//               className="px-4 py-2 mx-1 bg-slate-200 rounded"
//               onClick={() => setPage(page + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

// Server-side data fetching function
async function fetchMobiles(
  page = 1,
  limit = 12,
  sort = "createdAt",
  sortDirection = "DESC"
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mobile/all-mobiles?page=${page}&limit=${limit}&sort=${sort}&sortDirection=${sortDirection}`,
      { cache: "no-store" } // no caching for server-side data fetching
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();

    if (data && data.data && data.total) {
      return { mobiles: data.data, total: data.total };
    } else {
      console.error("Unexpected data format:", data);
      return { mobiles: [], total: 0 };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { mobiles: [], total: 0 };
  }
}

export default async function MobilesCategoryPage({
  searchParams,
}: {
  searchParams: any;
}) {
  // Extract query params from URL
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
  const sort = searchParams.sort || "createdAt";
  const sortDirection = searchParams.sortDirection || "DESC";
  const limit = 12;

  // Fetch mobiles data
  const { mobiles, total } = await fetchMobiles(
    page,
    limit,
    sort,
    sortDirection
  );

  return (
    <section className="container mx-auto">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Xiaomi Phones</h1>
        <p className="text-slate-600">
          Explore the latest Xiaomi phones with detailed specs and reviews.
        </p>
      </div>

      <div className="">
        {/* Filters Sidebar */}
        {/* <aside className="p-6 bg-slate-100 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price Range</label>
            <select
              className="p-2 w-full rounded"
              defaultValue={filter.priceRange.join(",")}
              // onChange={(e) => {
              //   const newPriceRange = e.target.value.split(",");
              //   window.location.search = `?priceRange=${newPriceRange.join(
              //     ","
              //   )}`;
              // }}
            >
              <option value="">All</option>
              <option value={[0, 299].join(",")}>$0 - $299</option>
              <option value={[300, 599].join(",")}>$300 - $599</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">RAM</label>
            <select
              className="p-2 w-full rounded"
              defaultValue={filter.ram}
              // onChange={(e) => {
              //   window.location.search = `?ram=${e.target.value}`;
              // }}
            >
              <option value="">All</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Storage</label>
            <select
              className="p-2 w-full rounded"
              defaultValue={filter.storage}
              // onChange={(e) => {
              //   window.location.search = `?storage=${e.target.value}`;
              // }}
            >
              <option value="">All</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
            </select>
          </div>
        </aside> */}

        {/* Product Grid */}
        <div className="">
          {/* <div className="flex justify-end mb-4">
            <select
              className="p-2 rounded"
              defaultValue={sort}
              // onChange={(e) => {
              //   window.location.search = `?sort=${e.target.value}`;
              // }}
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price">Sort by Price</option>
            </select>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobiles?.map((mobile: any) => (
              <div
                key={mobile?.id}
                className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col"
              >
                <Image
                  src={
                    mobile?.images
                      ? mobile?.images[0]?.url
                      : "https://via.placeholder.com/150"
                  }
                  alt={mobile?.name}
                  className="w-full h-48 object-cover mb-2 rounded-t-md"
                  width={150}
                  height={150}
                />

                <div className="mt-4 px-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {mobile?.name}
                  </h3>
                  <p className="text-sm text-slate-600">RAM: {mobile?.ram}</p>
                  <p className="text-sm text-slate-600">
                    Storage: {mobile?.storage}
                  </p>
                </div>

                <div className="px-6 py-4 mt-auto">
                  <Link
                    href={`/mobiles/${mobile?.brand.toLowerCase()}/${
                      mobile?.slug
                    }`}
                    className="font-bold text-slate-600 hover:underline"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="flex justify-center mt-8">
            <Link
              href={`?page=${page - 1}`}
              className="px-4 py-2 mx-1 bg-slate-200 rounded"
              passHref
            >
              <button disabled={page === 1}>Previous</button>
            </Link>
            <span className="px-4 py-2 mx-1 bg-blue-600 text-white rounded">
              {page}
            </span>
            <Link
              href={`?page=${page + 1}`}
              className="px-4 py-2 mx-1 bg-slate-200 rounded"
              passHref
            >
              <button>Next</button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
