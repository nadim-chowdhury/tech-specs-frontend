export default function SubscriptionCta() {
  return (
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
  );
}
