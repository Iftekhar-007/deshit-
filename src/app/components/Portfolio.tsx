"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const projects = [
  {
    id: 1,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2020/06/BUP-1-400x450.jpg",
    alt: "BUP",
  },
  {
    id: 2,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/03/Robishop-1-400x450.jpg",
    alt: "Robishop",
  },
  {
    id: 3,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/03/RStore-Solution-1-400x450.jpg",
    alt: "RStore",
  },
  {
    id: 4,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/Ritani-Case-Study-1-400x450.jpg",
    alt: "Ritani",
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Projects &amp; Portfolio
        </h2>

        {/* Marquee */}
        <Marquee speed={60} gradient={false}>
          {projects.map((project) => (
            <div key={project.id} className="mx-6">
              <Image
                src={project.img}
                alt={project.alt}
                width={250}
                height={300}
                className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Marquee>

        {/* Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition">
            Read More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
