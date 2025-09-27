// "use client";
// import Image from "next/image";
// import { FaSmile, FaLock, FaHandshake } from "react-icons/fa";
// import { MdPolicy } from "react-icons/md";
// import { motion, Variants } from "framer-motion";

// const values = [
//   {
//     title: "Accountability",
//     desc: "Client satisfaction defines our success, measured by the smiles we address.",
//     icon: <FaSmile className="text-orange-500" size={28} />,
//   },
//   {
//     title: "Confidentiality",
//     desc: "Rest assured, your idea stays secure, confidentiality is our practice and, enduring.",
//     icon: <FaLock className="text-orange-500" size={28} />,
//   },
//   {
//     title: "Transparency",
//     desc: "We maintain an employee policy, requiring timely follow-up.",
//     icon: <MdPolicy className="text-orange-500" size={28} />,
//   },
//   {
//     title: "Relationships",
//     desc: "Our talented and dedicated team works together enthusiastically to materialize your ideas.",
//     icon: <FaHandshake className="text-orange-500" size={28} />,
//   },
// ];

// // ✅ safe variants with cubic-bezier easing
// const fadeLeft: Variants = {
//   hidden: { opacity: 0, x: -100 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
//   },
// };

// const fadeRight: Variants = {
//   hidden: { opacity: 0, x: 100 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
//   },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
//   },
// };

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const AboutSection = () => {
//   return (
//     <>
//       {/* About Us (Text + Image) */}
//       <section className="py-20 bg-gray-50">
//         <motion.div
//           className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Left Side - Text */}
//           <motion.div variants={fadeLeft}>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//               About Us
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Nascenia is one of the best software companies in Bangladesh. With{" "}
//               <span className="font-semibold">14+ years of experience</span>,
//               delivering innovative and tailored software solutions. Our journey
//               has been driven by a passion for technology and a commitment to
//               excellence, helping our clients navigate the complexities of the
//               digital landscape.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               At Nascenia, we believe in the power of collaboration and the
//               impact of well-crafted software. Our team of highly skilled
//               developers, designers, and strategists work closely with our
//               clients to understand their unique needs and challenges. We take
//               pride in transforming ideas into robust, scalable solutions that
//               drive growth and success.
//             </p>
//           </motion.div>

//           {/* Right Side - Image */}
//           <motion.div
//             variants={fadeRight}
//             className="flex justify-center md:justify-end"
//           >
//             <Image
//               src="https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/07/7-800x531-1.jpg"
//               alt="About Nascenia"
//               width={600}
//               height={400}
//             />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Values Section */}
//       <section className="bg-gray-50 py-10">
//         <motion.div
//           className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {values.map((item, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeUp}
//               className="flex items-start gap-4 p-6 rounded-lg"
//             >
//               <div className="p-3 border-2 border-orange-500">{item.icon}</div>
//               <div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default AboutSection;

"use client";
import Image from "next/image";
import { FaSmile, FaLock, FaHandshake } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";

const values = [
  {
    title: "Accountability",
    desc: "Client satisfaction defines our success, measured by the smiles we address.",
    icon: <FaSmile className="text-orange-500" size={28} />,
  },
  {
    title: "Confidentiality",
    desc: "Rest assured, your idea stays secure, confidentiality is our practice and, enduring.",
    icon: <FaLock className="text-orange-500" size={28} />,
  },
  {
    title: "Transparency",
    desc: "We maintain an employee policy, requiring timely follow-up.",
    icon: <MdPolicy className="text-orange-500" size={28} />,
  },
  {
    title: "Relationships",
    desc: "Our talented and dedicated team works together enthusiastically to materialize your ideas.",
    icon: <FaHandshake className="text-orange-500" size={28} />,
  },
];

const AboutSection = () => {
  return (
    <>
      {/* About Us (Text + Image) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nascenia is one of the best software companies in Bangladesh. With{" "}
              <span className="font-semibold">14+ years of experience</span>,
              delivering innovative and tailored software solutions. Our journey
              has been driven by a passion for technology and a commitment to
              excellence, helping our clients navigate the complexities of the
              digital landscape.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Nascenia, we believe in the power of collaboration and the
              impact of well-crafted software. Our team of highly skilled
              developers, designers, and strategists work closely with our
              clients to understand their unique needs and challenges. We take
              pride in transforming ideas into robust, scalable solutions that
              drive growth and success.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://cdn-ilccjcp.nitrocdn.com/kUqSgfkOAatBTySULySRafklOQMXBHwf/assets/images/optimized/rev-5026f65/nascenia.com/wp-content/uploads/2024/07/7-800x531-1.jpg"
              alt="About Nascenia"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-lg">
              <div className="p-3 border-2 border-orange-500">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
