"use client";
import {
  FaPalette,
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We have been thriving for 14 years. Choose us for cutting-edge
            expertise and dedicated service. As Bangladesh’s premier software
            company, we deliver tailored solutions with a team of top-tier
            developers. Rely on us for innovative, efficient, and reliable
            results that drive your business forward.
          </p>
          <h3 className="text-xl font-semibold text-orange-500">Our Team</h3>
        </div>

        {/* Right Side - Circle with text and icons */}
        <div className="relative flex items-center justify-center">
          {/* Circle */}
          <div className="w-72 h-72 rounded-full border-4 border-orange-400 flex items-center justify-center text-center p-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Visual Support
              </h4>
              <p className="text-gray-600 text-sm">
                Designing intuitive, visually appealing interfaces for an
                engaging user experience.
              </p>
            </div>
          </div>

          {/* Icons around border */}
          <FaPalette className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-orange-500 text-3xl bg-white rounded-full p-1" />
          <FaLaptopCode className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-orange-500 text-3xl bg-white rounded-full p-1" />
          <FaMobileAlt className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-500 text-3xl bg-white rounded-full p-1" />
          <FaShieldAlt className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-orange-500 text-3xl bg-white rounded-full p-1" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
