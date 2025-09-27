"use client";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Let’s Make Things Happen!</h2>
          {/* Office Image */}
          <div className="my-6">
            <Image
              src="https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/BAB_1266-600x399.jpg"
              alt="Office"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <blockquote className="italic text-gray-300 mb-6">
            “Do not suffer novices, hire a skilled team”
          </blockquote>

          {/* Fuad Info */}
          <div className="flex items-center gap-4">
            <Image
              src="https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/fuadbhai-200x200.png"
              alt="Fuad Bin Omar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h4 className="text-xl font-semibold">Fuad Bin Omar</h4>
              <p className="text-sm text-gray-400">COO, Nascenia</p>
            </div>
          </div>

          {/* Office Image
          <div className="mt-6">
            <Image
              src="https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/08/BAB_1266-600x399.jpg"
              alt="Office"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div> */}
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-black font-bold text-2xl text-center">
            Contact Us
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-white text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your number"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Your Query</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
