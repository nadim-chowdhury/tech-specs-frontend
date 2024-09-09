import React from "react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "John is the visionary behind the website, leading the team with a passion for technology.",
      image: "/images/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Jane oversees all technical aspects, ensuring a smooth user experience.",
      image: "/images/jane-smith.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p>
          Our mission is to provide users with comprehensive and accurate mobile
          device information, reviews, and comparisons, helping them make
          informed decisions.
        </p>
      </section>

      {/* Team Profiles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-slate-600">{member.role}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our History</h2>
        <p>
          Founded in 2022, our website started as a small project aimed at
          providing users with detailed mobile phone specifications. Over time,
          we have expanded our content to include reviews, comparisons, and a
          broader range of tech products.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>Email: contact@website.com</p>
        <p>Follow us on social media:</p>
        <div className="flex space-x-4 mt-4">
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
