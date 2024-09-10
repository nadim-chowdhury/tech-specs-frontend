import Image from "next/image";

const gpuData = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4090",
    memory: "24GB GDDR6X",
    boostClock: "2.5 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "AMD Radeon RX 7900 XTX",
    memory: "24GB GDDR6",
    boostClock: "2.4 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 3080",
    memory: "10GB GDDR6X",
    boostClock: "1.71 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "AMD Radeon RX 6800 XT",
    memory: "16GB GDDR6",
    boostClock: "2.25 GHz",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedGpus() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured GPUs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gpuData.map((gpu) => (
          <div
            key={gpu.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={gpu.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{gpu.name}</h3>
            <p className="text-gray-700">Memory: {gpu.memory}</p>
            <p className="text-gray-700">Boost Clock: {gpu.boostClock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
