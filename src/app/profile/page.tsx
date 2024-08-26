"use client";

import React, { useState } from "react";

export default function UserProfilePage() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const [activityLog] = useState([
    { id: 1, type: "Review", content: "Reviewed iPhone 13" },
    { id: 2, type: "Comment", content: "Commented on Galaxy S21 review" },
    // Add more activities as needed
  ]);

  const [savedItems] = useState([
    { id: 1, name: "iPhone 13", link: "/product/iphone-13" },
    { id: 2, name: "Galaxy S21", link: "/product/galaxy-s21" },
    // Add more saved items as needed
  ]);

  const handleUpdateProfile = (e: any) => {
    e.preventDefault();
    // Handle profile update
    console.log("Profile updated:", userInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      {/* Profile Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update Profile
          </button>
        </form>
      </section>

      {/* Activity Log */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
        <ul>
          {activityLog.map((activity) => (
            <li key={activity.id} className="mb-2">
              {activity.type}:{activity.content}
            </li>
          ))}
        </ul>
      </section>

      {/* Saved Products/Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Saved Products/Articles</h2>
        <ul>
          {savedItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a href={item.link} className="text-blue-600 underline">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
