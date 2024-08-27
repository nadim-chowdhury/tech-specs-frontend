import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated Mobile Phones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src=""
            alt="Product Image"
            width={1280}
            height={720}
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="text-lg font-bold mb-2">Mobile Phone 1</h3>
          <p>Brief description of the mobile phone.</p>
        </div>
      </div>
    </section>
  );
}
