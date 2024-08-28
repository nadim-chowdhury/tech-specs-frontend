"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ArticlePage() {
  const router = useRouter();
  // const { id } = router.query;

  const id = 1;

  // Sample data
  const article = {
    title: "Understanding Mobile Technology in 2024",
    author: "Jane Smith",
    date: "August 25, 2024",
    category: "Technology",
    content: `
      <p>Mobile technology has advanced rapidly over the years...</p>
      <p>In 2024, we are seeing new trends like...</p>
      <!-- Add more content as needed -->
    `,
    authorBio:
      "Jane Smith is a technology writer with over 10 years of experience...",
    relatedArticles: [
      { id: 2, title: "The Future of Smartphones" },
      { id: 3, title: "5G Technology: What You Need to Know" },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <div className="text-gray-500">
          <p>By {article.author}</p>
          <p>
            {article.date} - {article.category}
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

      {/* Social Sharing Buttons */}
      <div className="my-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Share on Facebook
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded ml-4">
          Share on Twitter
        </button>
      </div>

      {/* Author Bio */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About the Author</h2>
        <p>{article.authorBio}</p>
      </div>

      {/* Comments Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {/* Add comment form or list of comments here */}
      </div>

      {/* Related Articles */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <ul>
          {article.relatedArticles.map((related) => (
            <li key={related.id}>
              <a href={`/blog/${related.id}`} className="text-blue-600">
                {related.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
