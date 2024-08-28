// import { useRouter } from "next/navigation";
import { demoLaptopItem } from "@/utils/computer-demo-data";
import Image from "next/image";

export default function LaptopSlugPage() {
  // const router = useRouter();
  // const { slug } = router.query;

  // Find the laptop that matches the slug
  // const laptop = demoLaptops.find((laptop) => laptop.slug === slug);

  // if (!laptop) {
  //   return <p className="text-center py-8">Laptop not found</p>;
  // }

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Laptop Image */}
        <div className="flex justify-center items-center">
          <Image
            src={demoLaptopItem.image}
            alt={demoLaptopItem.name}
            width={640}
            height={360}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Laptop Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{demoLaptopItem.name}</h1>
          <p className="text-xl text-gray-700 mb-2">
            <strong>Brand:</strong> {demoLaptopItem.brand}
          </p>
          <p className="text-xl text-gray-700 mb-4">
            <strong>Price:</strong> {demoLaptopItem.price}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Display:</strong> {demoLaptopItem.specs.display}
            </li>
            <li>
              <strong>Processor:</strong> {demoLaptopItem.specs.processor}
            </li>
            <li>
              <strong>Storage:</strong> {demoLaptopItem.specs.storage}
            </li>
            <li>
              <strong>RAM:</strong> {demoLaptopItem.specs.ram}
            </li>
            <li>
              <strong>Graphics:</strong> {demoLaptopItem.specs.graphics}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
