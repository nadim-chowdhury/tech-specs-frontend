import Image from "next/image";

const laptopData = [
  {
    id: 1,
    name: 'Apple MacBook Pro 16"',
    processor: "Apple M1 Max",
    ram: "32GB",
    storage: "1TB SSD",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "1TB SSD",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus G14",
    processor: "AMD Ryzen 9",
    ram: "16GB",
    storage: "1TB SSD",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedLaptops() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Laptops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {laptopData.map((laptop) => (
          <div
            key={laptop.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={laptop.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{laptop.name}</h3>
            <p className="text-gray-700">Processor: {laptop.processor}</p>
            <p className="text-gray-700">RAM: {laptop.ram}</p>
            <p className="text-gray-700">Storage: {laptop.storage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
