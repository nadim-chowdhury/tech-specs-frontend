import { trendingArticles } from "@/utils/trending-articles";
import Image from "next/image";
import Link from "next/link";

export default function TrendingArticles() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Trending Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {trendingArticles?.map((article: any) => (
            <div
              key={article.id}
              className="bg-slate-50 rounded-lg lg:flex lg:items-center gap-8 transition-all duration-500 hover:bg-slate-100 border"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={1280}
                height={720}
                className="h-48 lg:w-1/2 object-cover rounded-md"
              />

              <div className="lg:w-1/2 pr-6 pl-6 md:pl-0">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4 lg:mt-0">
                  {article.title}
                </h3>
                <p className="text-slate-600">{article.summary}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="mt-4 inline-block text-primary font-semibold hover:underline pb-6 md:pb-0"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
