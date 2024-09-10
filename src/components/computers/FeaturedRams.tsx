import Image from "next/image";

const ramData = [
  {
    id: 1,
    name: "Corsair Vengeance LPX",
    type: "DDR4",
    capacity: "16GB",
    speed: "3200MHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "G.Skill Trident Z RGB",
    type: "DDR4",
    capacity: "32GB",
    speed: "3600MHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "HyperX Fury",
    type: "DDR4",
    capacity: "16GB",
    speed: "3000MHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Crucial Ballistix",
    type: "DDR4",
    capacity: "32GB",
    speed: "3200MHz",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedRams() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured RAMs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ramData.map((ram) => (
          <div
            key={ram.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={ram.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{ram.name}</h3>
            <p className="text-gray-700">Type: {ram.type}</p>
            <p className="text-gray-700">Capacity: {ram.capacity}</p>
            <p className="text-gray-700">Speed: {ram.speed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
