import Image from "next/image";

const psuData = [
  {
    id: 1,
    name: "Corsair RM850x",
    wattage: "850W",
    rating: "80 Plus Gold",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "EVGA SuperNOVA 750 G5",
    wattage: "750W",
    rating: "80 Plus Gold",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Seasonic Prime TX-1000",
    wattage: "1000W",
    rating: "80 Plus Titanium",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Cooler Master MWE Gold 650",
    wattage: "650W",
    rating: "80 Plus Gold",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedPsus() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured PSUs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {psuData.map((psu) => (
          <div
            key={psu.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={psu.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{psu.name}</h3>
            <p className="text-gray-700">Wattage: {psu.wattage}</p>
            <p className="text-gray-700">Rating: {psu.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
