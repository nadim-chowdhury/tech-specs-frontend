export default function SubscriptionCTA() {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated with the Latest Tech News
        </h2>
        <p className="mb-6">
          Subscribe to our newsletter and never miss an update!
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              className="w-full py-3 px-4 rounded-l-lg focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-white text-primary font-semibold px-6 py-3 rounded-r-lg hover:bg-slate-200"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
