// "use client";
// import {
//   FaPaintBrush,
//   FaLaptopCode,
//   FaMobileAlt,
//   FaRocket,
//   FaCheckCircle,
//   FaShieldAlt,
//   FaAngleRight,
//   FaArrowRight,
// } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     title: "UI/UX Design",
//     desc: "Crafting user experiences that resonate and engage",
//     icon: <FaPaintBrush className="text-orange-500 text-4xl" />,
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     desc: "Developing dynamic websites that are powerful and efficient",
//     icon: <FaLaptopCode className="text-orange-500 text-4xl" />,
//   },
//   {
//     id: 3,
//     title: "Mobile Development",
//     desc: "Creating innovative mobile apps that connect and inspire",
//     icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
//   },
//   {
//     id: 4,
//     title: "Cutting Edge",
//     desc: "Latest technology solutions to lead the industry",
//     icon: <FaRocket className="text-orange-500 text-4xl" />,
//   },
//   {
//     id: 5,
//     title: "Quality Assurance",
//     desc: "Delivering excellence and reliability in every product",
//     icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
//   },
//   {
//     id: 6,
//     title: "Cyber Security",
//     desc: "Protecting your digital assets with advanced security solutions",
//     icon: <FaShieldAlt className="text-orange-500 text-4xl" />,
//   },
// ];

// const EnterpriseSection = () => {
//   return (
//     <section className="py-20 bg-[#F6F7F8]">
//       {/* Header */}
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10  text-left md:text-left">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Custom Enterprise <br /> Software Development Services
//         </h2>
//         <p className="text-gray-600 text-lg">
//           We prioritize cultivating lasting business partnerships as your
//           trusted software development partner.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="max-w-6xl mx-auto px-6 mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4  text-left transition transform hover:-translate-y-2 hover:shadow-lg"
//           >
//             {service.icon}
//             <h3 className="mt-4 text-xl font-semibold text-gray-900">
//               {service.title}
//             </h3>
//             <p className="mt-2 text-gray-600">{service.desc}</p>

//             <FaArrowRight size={30} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EnterpriseSection;

"use client";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "Crafting user experiences that resonate and engage",
    icon: <FaPaintBrush className="text-orange-500 text-4xl" />,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Developing dynamic websites that are powerful and efficient",
    icon: <FaLaptopCode className="text-orange-500 text-4xl" />,
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "Creating innovative mobile apps that connect and inspire",
    icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Cutting Edge",
    desc: "Latest technology solutions to lead the industry",
    icon: <FaRocket className="text-orange-500 text-4xl" />,
  },
  {
    id: 5,
    title: "Quality Assurance",
    desc: "Delivering excellence and reliability in every product",
    icon: <FaCheckCircle className="text-orange-500 text-4xl" />,
  },
  {
    id: 6,
    title: "Cyber Security",
    desc: "Protecting your digital assets with advanced security solutions",
    icon: <FaShieldAlt className="text-orange-500 text-4xl" />,
  },
];

const EnterpriseSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-20 bg-[#F6F7F8]">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-left"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeLeft}
          className="text-3xl font-bold text-gray-900"
        >
          Custom Enterprise <br /> Software Development Services
        </motion.h2>
        <motion.p variants={fadeRight} className="text-gray-600 text-lg">
          We prioritize cultivating lasting business partnerships as your
          trusted software development partner.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-6xl mx-auto px-6 mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4 text-left transition transform hover:-translate-y-2 hover:shadow-lg"
          >
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>
            <FaArrowRight size={30} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EnterpriseSection;
