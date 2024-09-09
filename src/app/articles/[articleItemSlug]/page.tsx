import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const article = {
  title: "Introduction to React",
  author: "John Doe",
  date: "2024-09-01",
  content: `
    React is a popular JavaScript library for building user interfaces, particularly for single-page applications. 
    It's used for handling the view layer and can be integrated with other libraries or frameworks. React allows developers 
    to create large web applications that can update and render efficiently in response to data changes.
    
    ### Why React?
    1. **Component-Based Architecture**: React encourages building small, reusable components.
    2. **Virtual DOM**: React maintains a lightweight representation of the real DOM.
    3. **Declarative**: Describe how the UI should look based on the current state, and React takes care of updating the DOM to match.
    
    ### Getting Started
    To get started with React, you can install it using a package manager like npm or yarn. Here's a quick example of a simple component:
    
    \`\`\`jsx
    import React from 'react';
    
    function HelloWorld() {
      return <h1>Hello, world!</h1>;
    }
    
    export default HelloWorld;
    \`\`\`
    
    React also supports modern JavaScript features like hooks, which allow you to use state and other React features without writing classes.
  `,
};

export default function ArticleItemSlugPage() {
  return (
    <section className="container mx-auto">
      <div className="bg-slate-50 border p-6 rounded-lg">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {article.title}
          </h1>
          <div className="text-gray-500 mb-6">
            <span>By {article.author}</span> |{" "}
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700">
          <Markdown remarkPlugins={[remarkGfm]}>{article.content}</Markdown>
        </div>
      </div>
    </section>
  );
}
