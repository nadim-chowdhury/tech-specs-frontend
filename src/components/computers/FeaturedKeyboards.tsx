import Image from "next/image";

const keyboardData = [
  {
    id: 1,
    name: "Corsair K95 RGB Platinum",
    switchType: "Cherry MX Speed",
    keyType: "Mechanical",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Logitech G Pro X",
    switchType: "GX Blue Clicky",
    keyType: "Mechanical",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Razer Huntsman Elite",
    switchType: "Opto-Mechanical",
    keyType: "Mechanical",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "SteelSeries Apex Pro",
    switchType: "OmniPoint Adjustable",
    keyType: "Mechanical",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedKeyboards() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Featured Keyboards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {keyboardData.map((keyboard) => (
          <div
            key={keyboard.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={keyboard.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{keyboard.name}</h3>
            <p className="text-gray-700">Switch Type: {keyboard.switchType}</p>
            <p className="text-gray-700">Key Type: {keyboard.keyType}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
