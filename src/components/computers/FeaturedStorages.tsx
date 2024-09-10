import Image from "next/image";

const storageData = [
  {
    id: 1,
    name: "Samsung 970 Evo Plus",
    type: "NVMe SSD",
    capacity: "1TB",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "WD Black SN850",
    type: "NVMe SSD",
    capacity: "2TB",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Crucial MX500",
    type: "SATA SSD",
    capacity: "1TB",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Seagate BarraCuda",
    type: "HDD",
    capacity: "2TB",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedStorages() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Storages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {storageData.map((storage) => (
          <div
            key={storage.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={storage.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{storage.name}</h3>
            <p className="text-gray-700">Type: {storage.type}</p>
            <p className="text-gray-700">Capacity: {storage.capacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
