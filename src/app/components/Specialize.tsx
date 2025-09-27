"use client";
import {
  FaGlobe,
  FaShoppingCart,
  FaLaptopCode,
  FaCloud,
  FaUsersCog,
  FaCogs,
  FaCashRegister,
  FaEdit,
  FaGraduationCap,
} from "react-icons/fa";

const specializations = [
  {
    id: 1,
    icon: <FaGlobe className="text-orange-500 text-4xl mb-4" />,
    title: "Portal",
    desc: "Get Your Customized Portal to Engage, Collaborate, and Navigate the Digital Landscape.",
  },
  {
    id: 2,
    icon: <FaShoppingCart className="text-orange-500 text-4xl mb-4" />,
    title: "E-Commerce",
    desc: "Showcase your Digital Storefronts with dynamic E-commerce Development Solutions for Lasting Success.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-orange-500 text-4xl mb-4" />,
    title: "Brand Website",
    desc: "Craft a Dynamic Website that articulates your vision and captivates your audience, amplifying your brand’s unique identity.",
  },
  {
    id: 4,
    icon: <FaCloud className="text-orange-500 text-4xl mb-4" />,
    title: "SaaS",
    desc: "Step into the future of digital innovation with SaaS. We’re here to turn your ideas into reality through custom SaaS dev.",
  },
  {
    id: 5,
    icon: <FaUsersCog className="text-orange-500 text-4xl mb-4" />,
    title: "CRM",
    desc: "We specialize in crafting robust CRM solutions meticulously designed to enhance and elevate every aspect of your customer interactions.",
  },
  {
    id: 6,
    icon: <FaCogs className="text-orange-500 text-4xl mb-4" />,
    title: "ERP",
    desc: "Design, Develop, and Deploy Customized ERP Solutions Tailored to Streamline and Maximize Efficiency in Your Business’s Resource Planning.",
  },
  {
    id: 7,
    icon: <FaCashRegister className="text-orange-500 text-4xl mb-4" />,
    title: "POS",
    desc: "Innovate at checkout with a tailored POS system designed to facilitate swift and secure transactions.",
  },
  {
    id: 8,
    icon: <FaEdit className="text-orange-500 text-4xl mb-4" />,
    title: "CMS",
    desc: "We specialize in customized CMS development to control, updates, and amplification of online content.",
  },
  {
    id: 9,
    icon: <FaGraduationCap className="text-orange-500 text-4xl mb-4" />,
    title: "LMS",
    desc: "We are dedicated to crafting bespoke Learning Management Systems (LMS) that empower education.",
  },
];

const Specialize = () => {
  return (
    <section className="py-16 bg-[url(Background.png)] bg-blend-overlay bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">We Specialize</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We specialize in providing on-demand software solutions across various
          sectors. Our expertise covers a wide range of domains, ensuring
          tailored solutions to meet diverse business needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-left">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialize;
