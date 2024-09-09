"use client";

import React, { useState } from "react";

export default function FAQPage() {
  const [faqs] = useState([
    {
      question: "How do I create an account?",
      answer:
        'To create an account, click on the "Sign Up" button at the top right corner and fill out the registration form.',
    },
    {
      question: "How do I reset my password?",
      answer:
        'Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.',
    },
    // Add more FAQs as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-8"
      />

      {/* Accordion Style FAQ */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <details key={index} className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">
              {faq.question}
            </summary>
            <p className="mt-2">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
