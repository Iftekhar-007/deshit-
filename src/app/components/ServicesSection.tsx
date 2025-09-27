// // "use client";
// // import { FaUsers, FaUserPlus, FaProjectDiagram } from "react-icons/fa";
// // import { motion } from "framer-motion";
// // import { useInView } from "react-intersection-observer";

// // const ServicesSection = () => {
// //   const { ref, inView } = useInView({
// //     triggerOnce: true,
// //     threshold: 0.2,
// //   });

// //   const services = [
// //     {
// //       title: "Dedicated Team",
// //       desc: "Our Dedicated Team of expert developers will work exclusively on your projects. They’ll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.",
// //       icon: <FaUsers size={28} />,
// //     },
// //     {
// //       title: "Staff Augmentation",
// //       desc: "Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth, and boost productivity without the need for long-term hiring commitments.",
// //       icon: <FaUserPlus size={28} />,
// //     },
// //     {
// //       title: "Project Deliveries",
// //       desc: "From concept to completion, we’ll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.",
// //       icon: <FaProjectDiagram size={28} />,
// //     },
// //   ];

// //   const containerVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: -30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: [0.25, 0.1, 0.25, 1],
// //       },
// //     },
// //   };

// //   return (
// //     <section ref={ref} className="py-16">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
// //         {services.map((service, i) => (
// //           <div
// //             key={i}
// //             className="bg-white rounded-2xl border border-gray-200 p-6 text-center"
// //           >
// //             <motion.div
// //               variants={containerVariants}
// //               initial="hidden"
// //               animate={inView ? "visible" : "hidden"}
// //             >
// //               <motion.div
// //                 className="flex justify-center mb-4"
// //                 variants={itemVariants}
// //               >
// //                 <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
// //                   {service.icon}
// //                 </div>
// //               </motion.div>

// //               <motion.h3
// //                 className="text-xl font-bold text-gray-800 mb-3"
// //                 variants={itemVariants}
// //               >
// //                 {service.title}
// //               </motion.h3>

// //               <motion.p
// //                 className="text-gray-600 text-sm leading-relaxed"
// //                 variants={itemVariants}
// //               >
// //                 {service.desc}
// //               </motion.p>
// //             </motion.div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;

// "use client";
// import { FaUsers, FaUserPlus, FaProjectDiagram } from "react-icons/fa";
// import { motion, Variants } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const services = [
//     {
//       title: "Dedicated Team",
//       desc: "Our Dedicated Team of expert developers will work exclusively on your projects. They’ll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.",
//       icon: <FaUsers size={28} />,
//     },
//     {
//       title: "Staff Augmentation",
//       desc: "Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth, and boost productivity without the need for long-term hiring commitments.",
//       icon: <FaUserPlus size={28} />,
//     },
//     {
//       title: "Project Deliveries",
//       desc: "From concept to completion, we’ll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.",
//       icon: <FaProjectDiagram size={28} />,
//     },
//   ];

//   // ✅ Type-safe variants
//   const containerVariants: Variants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   return (
//     <section ref={ref} className="py-16">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className="bg-white rounded-2xl border border-gray-200 p-6 text-center"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.div
//               className="flex justify-center mb-4"
//               variants={itemVariants}
//             >
//               <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
//                 {service.icon}
//               </div>
//             </motion.div>

//             <motion.h3
//               className="text-xl font-bold text-gray-800 mb-3"
//               variants={itemVariants}
//             >
//               {service.title}
//             </motion.h3>

//             <motion.p
//               className="text-gray-600 text-sm leading-relaxed"
//               variants={itemVariants}
//             >
//               {service.desc}
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

"use client";
import { FaUsers, FaUserPlus, FaProjectDiagram } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Dedicated Team",
      desc: "Our Dedicated Team of expert developers will work exclusively on your projects. They’ll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.",
      icon: <FaUsers size={28} />,
    },
    {
      title: "Staff Augmentation",
      desc: "Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth, and boost productivity without the need for long-term hiring commitments.",
      icon: <FaUserPlus size={28} />,
    },
    {
      title: "Project Deliveries",
      desc: "From concept to completion, we’ll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.",
      icon: <FaProjectDiagram size={28} />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
