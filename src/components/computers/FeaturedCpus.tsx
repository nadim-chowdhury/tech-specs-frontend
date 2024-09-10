import Image from "next/image";

const cpuData = [
  {
    id: 1,
    name: "Intel Core i9-12900K",
    cores: 16,
    threads: 24,
    clockSpeed: "3.2 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "AMD Ryzen 9 5950X",
    cores: 16,
    threads: 32,
    clockSpeed: "3.4 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Intel Core i7-12700K",
    cores: 12,
    threads: 20,
    clockSpeed: "3.6 GHz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "AMD Ryzen 7 5800X",
    cores: 8,
    threads: 16,
    clockSpeed: "3.8 GHz",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedCpus() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured CPUs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cpuData.map((cpu) => (
          <div key={cpu.id} className="rounded-lg p-4 border bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={cpu.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{cpu.name}</h3>
            <p className="text-gray-700">Cores: {cpu.cores}</p>
            <p className="text-gray-700">Threads: {cpu.threads}</p>
            <p className="text-gray-700">Clock Speed: {cpu.clockSpeed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
