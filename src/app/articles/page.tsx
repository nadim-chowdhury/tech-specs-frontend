const articles = [
  {
    id: 1,
    title: "Introduction to React",
    description:
      "Learn the basics of React.js and build your first application.",
    author: "John Doe",
    date: "2024-09-01",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description:
      "A deep dive into closures in JavaScript and their applications.",
    author: "Jane Smith",
    date: "2024-08-25",
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox",
    description:
      "When to use CSS Grid and when to use Flexbox in modern layouts.",
    author: "Alice Johnson",
    date: "2024-08-20",
  },
  {
    id: 4,
    title: "Optimizing Web Performance",
    description:
      "Tips and tricks to make your website load faster and more efficiently.",
    author: "Mark Wilson",
    date: "2024-08-15",
  },
];

export default function AllArticlesPage() {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        All Articles
      </h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="p-6 bg-slate-50 border rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>By {article.author}</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
