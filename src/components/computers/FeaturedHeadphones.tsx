import Image from "next/image";

const headphoneData = [
  {
    id: 1,
    name: "Sony WH-1000XM4",
    type: "Over-Ear",
    connectivity: "Wireless",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Bose QuietComfort 35 II",
    type: "Over-Ear",
    connectivity: "Wireless",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sennheiser HD 650",
    type: "Over-Ear",
    connectivity: "Wired",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "SteelSeries Arctis Pro",
    type: "Over-Ear",
    connectivity: "Wireless",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedHeadphones() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Featured Headphones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headphoneData.map((headphone) => (
          <div
            key={headphone.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={headphone.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{headphone.name}</h3>
            <p className="text-gray-700">Type: {headphone.type}</p>
            <p className="text-gray-700">
              Connectivity: {headphone.connectivity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
