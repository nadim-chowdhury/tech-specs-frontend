import React, { useState } from "react";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>Email: contact@website.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </section>

      {/* Social Media Links */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600">
            Facebook
          </a>
          <a href="#" className="text-blue-600">
            Twitter
          </a>
          <a href="#" className="text-blue-600">
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
