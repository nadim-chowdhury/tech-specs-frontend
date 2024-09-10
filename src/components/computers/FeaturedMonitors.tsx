import Image from "next/image";

const monitorData = [
  {
    id: 1,
    name: "LG UltraGear 27GN950",
    resolution: "4K UHD",
    refreshRate: "144Hz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Samsung Odyssey G9",
    resolution: "5120x1440",
    refreshRate: "240Hz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "ASUS ROG Swift PG279Q",
    resolution: "1440p",
    refreshRate: "165Hz",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Dell UltraSharp U2720Q",
    resolution: "4K UHD",
    refreshRate: "60Hz",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedMonitors() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Monitors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {monitorData.map((monitor) => (
          <div
            key={monitor.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={monitor.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{monitor.name}</h3>
            <p className="text-gray-700">Resolution: {monitor.resolution}</p>
            <p className="text-gray-700">Refresh Rate: {monitor.refreshRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
