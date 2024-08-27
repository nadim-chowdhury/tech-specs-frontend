export default function TrendingArticles() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Article Title 1</h3>
          <p>Summary of the article...</p>
        </div>
      </div>
    </section>
  );
}
