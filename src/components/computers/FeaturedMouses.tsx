import Image from "next/image";

const mouseData = [
  {
    id: 1,
    name: "Logitech G Pro Wireless",
    dpi: "25,600 DPI",
    connectivity: "Wireless",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Razer DeathAdder V2",
    dpi: "20,000 DPI",
    connectivity: "Wired",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "SteelSeries Rival 600",
    dpi: "12,000 DPI",
    connectivity: "Wired",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Glorious Model O",
    dpi: "12,000 DPI",
    connectivity: "Wired",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedMouses() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Mouses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mouseData.map((mouse) => (
          <div
            key={mouse.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={mouse.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{mouse.name}</h3>
            <p className="text-gray-700">DPI: {mouse.dpi}</p>
            <p className="text-gray-700">Connectivity: {mouse.connectivity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
