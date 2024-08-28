// import { useRouter } from "next/router";
import Image from "next/image";
import { demoSoftwareItem } from "@/utils/computer-demo-data";

export default function SoftwareSlugPage() {
  // const router = useRouter();
  // const { slug } = router.query;

  // Find the software that matches the slug
  // const software = demoSoftwares.find((software) => software.slug === slug);
  const software = demoSoftwareItem;
  if (!software) {
    return <p className="text-center py-8">Software not found</p>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Software Image */}
        <div className="flex justify-center items-center">
          <Image
            src={software.image}
            alt={software.name}
            width={640}
            height={360}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Software Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{software.name}</h1>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Category:</strong> {software.category}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Price:</strong> {software.price}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Platform:</strong> {software.platform}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Description:</h2>
          <p className="text-gray-600 mb-6">{software.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Features:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {software.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
