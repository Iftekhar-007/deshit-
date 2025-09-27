"use client";
import Image from "next/image";
import { useState } from "react";

const categories = ["Technologies", "AI", "Cases", "RoR", "Mobile", "Design"];

const blogs = [
  {
    id: 1,
    title:
      "Why Your Startup Needs a Fractional CTO: Benefits, Costs, and When to Hire One",
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/07/Fractional-CTO-400x400.jpg",
  },
  {
    id: 2,
    title: "Monolithic to Headless Migration",
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/09/Monolithic-to-Headless-Migration-400x400.jpg",
  },
  {
    id: 3,
    title:
      "Software Rescue Services: Turning Failed Software Into Success Stories",
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/07/Software-Rescue-400x400.png",
  },
  {
    id: 4,
    title: "Custom Odoo Theme Development Solutions",
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/02/Odoo-theme-development-solution-400x400.jpg",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("Technologies");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Blogs</h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="text-left">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-orange-500">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>

        {/* All Blogs button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition">
            All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
