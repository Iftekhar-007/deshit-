"use client";
import Image from "next/image";

const awards = [
  {
    id: 1,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/1-1-200x200.png",
  },
  {
    id: 2,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/2-200x200.png",
  },
  {
    id: 3,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/3-200x200.png",
  },
  {
    id: 4,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/8-200x200.png",
  },
  {
    id: 5,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/4-200x200.png",
  },
  {
    id: 6,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/5-200x200.png",
  },
  {
    id: 7,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/7-200x200.png",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Awards</h2>

        {/* First row - 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {awards.slice(0, 4).map((award) => (
            <div
              key={award.id}
              className="flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={award.src}
                alt={`Award ${award.id}`}
                width={150}
                height={150}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {awards.slice(4).map((award) => (
            <div
              key={award.id}
              className="flex items-center justify-center transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={award.src}
                alt={`Award ${award.id}`}
                width={150}
                height={150}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
