import Image from "next/image";

const motherboardData = [
  {
    id: 1,
    name: "ASUS ROG Strix Z690-E",
    chipset: "Intel Z690",
    formFactor: "ATX",
    socket: "LGA 1700",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "MSI MPG B550 Gaming Edge",
    chipset: "AMD B550",
    formFactor: "ATX",
    socket: "AM4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Gigabyte Z490 AORUS Master",
    chipset: "Intel Z490",
    formFactor: "ATX",
    socket: "LGA 1200",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "ASRock X570 Phantom Gaming",
    chipset: "AMD X570",
    formFactor: "ATX",
    socket: "AM4",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedMotherboards() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Featured Motherboards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {motherboardData.map((board) => (
          <div
            key={board.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={board.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{board.name}</h3>
            <p className="text-gray-700">Chipset: {board.chipset}</p>
            <p className="text-gray-700">Form Factor: {board.formFactor}</p>
            <p className="text-gray-700">Socket: {board.socket}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
