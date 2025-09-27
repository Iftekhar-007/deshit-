"use client";
import { useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Bodilija Abelsson",
    company: "Founder of SimpleSignup.se",
    comment: `I have been working with Nascenia since 2011. My contact person has now taken on the role of CTO. With the help of his team, he takes full responsibility for all tech-related things from daily maintenance to servers and security. Recently, Nascenia also took over product development. I highly trust Nascenia and am glad to work with such a committed and competent team. I can recommend Nascenia for any web or Ruby on Rails project.`,
    image:
      "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/02/Bodilija-Abelsson.jpg",
  },
  {
    id: 2,
    name: "Patrick Stockwell",
    company: "Founder, Volta Inc. San Francisco Bay Area, USA",
    comment: `Everything went extremely well. My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can’t wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!`,
    image:
      "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/03/Bilal-Musharraf-220.jpg",
  },
  {
    id: 3,
    name: "Bilal Musharraf",
    company: "Dean of Translations, Khan Academy (KhanAcademyBangla)",
    comment: `We needed to have a bulk of our video archive translated and made available with a quick turn around time. Nascenia has been able to manage a team of translators so the project was not only completed within the scheduled timeframe, it was within budget and of above par quality. I was working with Shaer remotely and found him to be a person of high personal integrity. A fast learner, he was quick in structuring processes that would deliver results. Shaer was responsive to issues when they came up, and addressed them in a timely manner, professionally and amicably.`,
    image:
      "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/03/Bilal-Musharraf-220.jpg",
  },
];

const OurClientSays = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Client Says
        </h2>

        {/* Testimonial Card */}
        <div className="relative  rounded-2xl p-10">
          {/* Stars */}
          <div className="flex mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-orange-500 text-xl" />
            ))}
          </div>

          {/* Quotation icon */}
          <FaQuoteLeft className="text-gray-200 text-6xl absolute top-16 left-6" />

          {/* Comment */}
          <p className="text-gray-700 relative z-10 leading-relaxed mb-6">
            {testimonials[active].comment}
          </p>

          {/* Client info */}
          <div className="flex flex-col lg:flex-row lg:justify-start items-center gap-3">
            <img
              src={testimonials[active].image}
              alt={testimonials[active].name}
              className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-orange-400"
            />
            <h4 className="font-semibold text-gray-900">
              {testimonials[active].name}
            </h4>
            <span className="text-sm text-gray-500">
              {testimonials[active].company}
            </span>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full ${
                active === i ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientSays;
