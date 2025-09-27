"use client";
import Image from "next/image";

const partnerships = [
  {
    id: 1,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/Amazon_Web_Services_Logo.svg-200x120.png",
    alt: "AWS",
  },
  {
    id: 2,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/Oracle-Logo-200x113.png",
    alt: "Oracle",
  },
  {
    id: 3,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/Odoo_logo.svg-200x64.png",
    alt: "Odoo",
  },
  {
    id: 4,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/pngwing.com-39-200x163.png",
    alt: "Certification",
  },
];

const Partnerships = () => {
  return (
    <section className="py-16 bg-[#F4F4F6]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Our Partnerships and Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {partnerships.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={partner.img}
                alt={partner.alt}
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
