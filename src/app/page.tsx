import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-10 rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p>Check out the latest and greatest mobile phones available now!</p>
        <button className="mt-4 bg-white text-blue-600 p-2 rounded">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
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
          {/* Repeat for other products */}
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Review for Phone 1</h3>
            <p>Summary of the review...</p>
          </div>
          {/* Repeat for other reviews */}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Mobile Phones</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Laptops</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Cameras</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Accessories</h3>
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Article Title 1</h3>
            <p>Summary of the article...</p>
          </div>
          {/* Repeat for other articles */}
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p>Stay updated with the latest mobile reviews and news.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-black mt-4"
        />
        <button className="ml-2 bg-white text-blue-600 p-2 rounded">
          Subscribe
        </button>
      </section>

      <Footer />
    </main>
  );
}
