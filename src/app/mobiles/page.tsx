// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function AllMobilesPage() {
//   const [mobiles, setMobiles] = useState([]);
//   console.log("mobiles:", mobiles);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [limit] = useState(12);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("createdAt");
//   const [sortDirection, setSortDirection] = useState<"ASC" | "DESC">("DESC");
//   const [filter, setFilter] = useState<any>({
//     brand: "",
//     priceRange: [],
//     ram: "",
//     storage: "",
//   });

//   async function fetchMobiles() {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mobile/all-mobiles?page=${page}&limit=${limit}&sort=${sort}&sortDirection=${sortDirection}`
//       );

//       if (!res.ok) {
//         throw new Error(`Error: ${res.statusText}`);
//       }

//       const data = await res.json();

//       console.log("data:", data);

//       if (data && data.data && data.total) {
//         setMobiles(data.data);
//         setTotal(data.total);
//       } else {
//         console.error("Unexpected data format:", data);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   }

//   useEffect(() => {
//     fetchMobiles();
//   }, [page, search, sort, sortDirection]);

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSort(value);
//     setSortDirection(value === "price" ? "ASC" : "DESC");
//   };

//   const handleFilterChange = (field: string, value: any) => {
//     // setFilters({ ...filters, [field]: value });
//   };

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   return (
//     <section className="container mx-auto">
//       {/* Category Header */}
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold text-slate-800">All Mobile Phones</h1>
//         <p className="text-slate-600">
//           Explore all mobile phones with detailed specs and reviews.
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Filters Sidebar */}
//         <aside className="bg-slate-100 border rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Filters</h2>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">Price Range</label>
//             <select
//               className="p-2 w-full rounded"
//               onChange={(e) =>
//                 handleFilterChange("priceRange", e.target.value.split(","))
//               }
//             >
//               <option value="0,1000">All</option>
//               <option value="0,299">$0 - $299</option>
//               <option value="300,599">$300 - $599</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 font-semibold">RAM</label>
//             <select
//               className="p-2 w-full rounded"
//               onChange={(e) => handleFilterChange("ram", e.target.value)}
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
//               onChange={(e) => handleFilterChange("storage", e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="64GB">64GB</option>
//               <option value="128GB">128GB</option>
//             </select>
//           </div>
//         </aside>

//         {/* Product Grid */}
//         <div className="col-span-1 md:col-span-3">
//           <div className="flex justify-end mb-4">
//             <select
//               className="p-2 rounded"
//               onChange={handleSortChange}
//               value={sort}
//             >
//               <option value="createdAt">Sort by Relevance</option>
//               <option value="price">Sort by Price</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {mobiles?.map((mobile: any) => (
//               <div
//                 key={mobile?.id}
//                 className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col justify-between"
//               >
//                 <div className="">
//                   <Image
//                     src={
//                       mobile?.images
//                         ? mobile?.images[0]?.url
//                         : "https://via.placeholder.com/150"
//                     }
//                     alt={mobile?.name}
//                     width={1280}
//                     height={720}
//                     className="object-cover h-48 w-full rounded-md"
//                   />

//                   <div className="mt-4 px-6 pb-6">
//                     <h2 className="text-lg font-semibold text-slate-800 mb-2">
//                       {mobile?.name}
//                     </h2>
//                     <p className="text-sm text-slate-600 mb-1">
//                       <strong>Brand:</strong> {mobile?.brand}
//                     </p>
//                     <p className="text-sm text-slate-600 mb-1">
//                       <strong>Launch Date:</strong>{" "}
//                       {mobile?.launch.release_date}
//                     </p>
//                     <p className="text-sm text-slate-600 mb-1">
//                       <strong>Display Size:</strong> {mobile?.display.size}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="px-6 pb-6">
//                   <Link
//                     href={`/mobiles/mobiles-categories/${mobile?.brand.toLowerCase()}/${
//                       mobile?.slug
//                     }`}
//                   >
//                     <span className="font-bold text-blue-600 hover:underline">
//                       View More
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center mt-8">
//             {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => handlePageChange(i + 1)}
//                 className={`px-4 py-2 mx-1 ${
//                   page === i + 1 ? "bg-blue-600 text-white" : "bg-slate-200"
//                 } rounded hover:bg-slate-300 transition-colors`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import AllMobileBrands from "@/components/mobiles/AllMobileBrands";
import Image from "next/image";
import Link from "next/link";

// Fetch data server-side
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

export default async function AllMobilesPage({
  searchParams,
}: {
  searchParams: any;
}) {
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
        <h1 className="text-3xl font-bold text-slate-800">All Mobile Phones</h1>
        <p className="text-slate-600">
          Explore all mobile phones with detailed specs and reviews.
        </p>
      </div>

      <AllMobileBrands />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="bg-slate-100 border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Price Range</label>
            <select className="p-2 w-full rounded">
              <option value="0,1000">All</option>
              <option value="0,299">$0 - $299</option>
              <option value="300,599">$300 - $599</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">RAM</label>
            <select className="p-2 w-full rounded">
              <option value="">All</option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Storage</label>
            <select className="p-2 w-full rounded">
              <option value="">All</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-end mb-4">
            <select className="p-2 rounded" defaultValue={sort}>
              <option value="createdAt">Sort by Relevance</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobiles?.map((mobile: any) => (
              <div
                key={mobile?.id}
                className="bg-slate-50 rounded-lg overflow-hidden border flex flex-col justify-between"
              >
                <div className="">
                  <Image
                    src={
                      mobile?.images
                        ? mobile?.images[0]?.url
                        : "https://via.placeholder.com/150"
                    }
                    alt={mobile?.name}
                    width={1280}
                    height={720}
                    className="object-cover h-48 w-full rounded-md"
                  />

                  <div className="mt-4 px-6 pb-6">
                    <h2 className="text-lg font-semibold text-slate-800 mb-2">
                      {mobile?.name}
                    </h2>
                    <p className="text-sm text-slate-600 mb-1 capitalize">
                      <strong>Brand:</strong> {mobile?.brand}
                    </p>
                    <p className="text-sm text-slate-600 mb-1">
                      <strong>Launch Date:</strong>{" "}
                      {mobile?.launch.release_date}
                    </p>
                    {/* <p className="text-sm text-slate-600 mb-1">
                      <strong>Display Size:</strong> {mobile?.display.size}
                    </p> */}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/mobiles/${mobile?.brand.toLowerCase()}/${
                      mobile?.slug
                    }`}
                  >
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
            {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
              <Link
                key={i}
                href={`?page=${
                  i + 1
                }&sort=${sort}&sortDirection=${sortDirection}`}
              >
                <button
                  className={`px-4 py-2 mx-1 ${
                    page === i + 1 ? "bg-blue-600 text-white" : "bg-slate-200"
                  } rounded hover:bg-slate-300 transition-colors`}
                >
                  {i + 1}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
