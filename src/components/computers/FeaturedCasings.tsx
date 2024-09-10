import Image from "next/image";

const casingData = [
  {
    id: 1,
    name: "NZXT H510",
    formFactor: "Mid Tower",
    material: "Steel",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Fractal Design Meshify C",
    formFactor: "Mid Tower",
    material: "Tempered Glass",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Corsair iCUE 4000X RGB",
    formFactor: "Mid Tower",
    material: "Steel & Glass",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Phanteks Eclipse P300A",
    formFactor: "Mid Tower",
    material: "Steel",
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedCasings() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Casings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {casingData.map((casing) => (
          <div
            key={casing.id}
            className="bg-slate-50 border border-gray-300 rounded-lg p-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={casing.name}
              width={1270}
              height={720}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{casing.name}</h3>
            <p className="text-gray-700">Form Factor: {casing.formFactor}</p>
            <p className="text-gray-700">Material: {casing.material}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
