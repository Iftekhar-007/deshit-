"use client";
import Image from "next/image";

const endorsements = [
  {
    id: 1,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/04/image-131-200x293.jpg",
    alt: "Endorsement 1",
  },
  {
    id: 2,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg",
    alt: "Endorsement 2",
  },
  {
    id: 3,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/04/image-128.jpg",
    alt: "Endorsement 3",
  },
  {
    id: 4,
    img: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/04/image-129.svg",
    alt: "Endorsement 4",
  },
];

const Endorsements = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Widely Endorsed Software Company
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {endorsements.map((endorse) => (
            <div
              key={endorse.id}
              className="flex justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <Image
                src={endorse.img}
                alt={endorse.alt}
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endorsements;
