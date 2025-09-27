// "use client";
// import Image from "next/image";

// // const logos = Array.from({ length: 30 }, (_, i) => ({
// //   id: i + 1,
// //   src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
// // }));

// const logos = [
//   {
//     id: 1,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 2,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UNDP-200x100.png",
//   },
//   {
//     id: 3,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/ICT-200x129.png",
//   },
//   {
//     id: 4,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/PWC.png",
//   },
//   {
//     id: 5,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/08/Logos-01-200x200.png",
//   },
//   {
//     id: 6,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Transparency_International_Bangladesh_Emblem-logo-200x88.png",
//   },
//   {
//     id: 7,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/khan-academy-200x76.png",
//   },
//   {
//     id: 8,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/Murphy-system.png",
//   },
//   {
//     id: 9,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/telenor-health-200x87.png",
//   },
//   {
//     id: 10,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/telenor-Maritime-200x77.png",
//   },
//   {
//     id: 11,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/Robi.png",
//   },
//   {
//     id: 12,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Nokia_logo-200x34.png",
//   },
//   {
//     id: 13,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Vivo-Logo-200x52.png",
//   },
//   {
//     id: 14,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/BC.png",
//   },
//   {
//     id: 15,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/tourkeystay-200x57.png",
//   },
//   {
//     id: 16,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/RedDot-Digital-Limited-Transparent-Background-Logo-200x63.png",
//   },
//   {
//     id: 17,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 18,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/simple-signup-200x138.png",
//   },
//   {
//     id: 19,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/CZM-Logo-200x200.png",
//   },
//   {
//     id: 20,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/BUP.png",
//   },
//   {
//     id: 21,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/city-group-logo-png-200x52.png",
//   },
//   {
//     id: 22,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/logo.png",
//   },
//   {
//     id: 23,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 24,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 25,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 26,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/new_schoolit-200x113.png",
//   },
//   {
//     id: 27,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Herfy_logo-200x191.png",
//   },
//   {
//     id: 28,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
//   {
//     id: 29,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/biyeta.png",
//   },
//   {
//     id: 30,
//     src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
//   },
// ];

// const LogoGrid = () => {
//   return (
//     <section className="py-12">
//       <h2 className="text-center font-bold text-3xl lg:mb-5">Our Clients</h2>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
//           {logos.map((logo) => (
//             <div
//               key={logo.id}
//               className="flex items-center justify-center transition-transform duration-300 transform hover:scale-90"
//             >
//               <Image
//                 src={logo.src}
//                 alt={`Logo ${logo.id}`}
//                 width={120}
//                 height={120}
//                 className="grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoGrid;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    id: 1,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 2,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UNDP-200x100.png",
  },
  {
    id: 3,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/ICT-200x129.png",
  },
  {
    id: 4,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/PWC.png",
  },
  {
    id: 5,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2025/08/Logos-01-200x200.png",
  },
  {
    id: 6,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Transparency_International_Bangladesh_Emblem-logo-200x88.png",
  },
  {
    id: 7,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/khan-academy-200x76.png",
  },
  {
    id: 8,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/Murphy-system.png",
  },
  {
    id: 9,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/telenor-health-200x87.png",
  },
  {
    id: 10,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/telenor-Maritime-200x77.png",
  },
  {
    id: 11,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/Robi.png",
  },
  {
    id: 12,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Nokia_logo-200x34.png",
  },
  {
    id: 13,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Vivo-Logo-200x52.png",
  },
  {
    id: 14,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/BC.png",
  },
  {
    id: 15,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/tourkeystay-200x57.png",
  },
  {
    id: 16,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/RedDot-Digital-Limited-Transparent-Background-Logo-200x63.png",
  },
  {
    id: 17,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 18,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/simple-signup-200x138.png",
  },
  {
    id: 19,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/CZM-Logo-200x200.png",
  },
  {
    id: 20,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/BUP.png",
  },
  {
    id: 21,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/city-group-logo-png-200x52.png",
  },
  {
    id: 22,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/logo.png",
  },
  {
    id: 23,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 24,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 25,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 26,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/new_schoolit-200x113.png",
  },
  {
    id: 27,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/02/Herfy_logo-200x191.png",
  },
  {
    id: 28,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
  {
    id: 29,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/biyeta.png",
  },
  {
    id: 30,
    src: "https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2021/03/UN-logo.png",
  },
];

const LogoGrid = () => {
  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // logos gulo ek ek kore asbe
      },
    },
  };

  return (
    <motion.section
      className="py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeDown}
    >
      <h2 className="text-center font-bold text-3xl lg:mb-5">Our Clients</h2>
      <motion.div className="max-w-7xl mx-auto px-6" variants={container}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className="flex items-center justify-center transition-transform duration-300 transform hover:scale-90"
              variants={fadeDown} // logos guloo individually fade + slide
            >
              <Image
                src={logo.src}
                alt={`Logo ${logo.id}`}
                width={120}
                height={120}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LogoGrid;
