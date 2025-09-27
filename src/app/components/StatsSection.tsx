// "use client";
// import React from "react";
// import CountUp from "react-countup";

// const StatsSection = () => {
//   const stats = [
//     { number: 14, label: "Years of experience" },
//     { number: 175, label: "Delivered Projects" },
//     { number: 22, label: "Countries Served" },
//     { number: 50, label: "Developers" },
//   ];
//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row justify-around py-20 bg-[#F9F9F9]">
//         {stats.map((stat, idx) => (
//           <div key={idx}>
//             <h2 className="text-center text-orange-500 text-5xl font-normal">
//               <CountUp start={0} end={stat.number} duration={3}></CountUp>
//             </h2>
//             <p className="text-xl font-normal text-center">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsSection;

"use client";
import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { number: 14, label: "Years of experience" },
    { number: 175, label: "Delivered Projects" },
    { number: 22, label: "Countries Served" },
    { number: 50, label: "Developers" },
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-around items-center gap-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h2 className="text-orange-500 font-normal text-4xl sm:text-5xl md:text-6xl">
              <CountUp start={0} end={stat.number} duration={3} />
            </h2>
            <p className="text-center text-lg sm:text-xl md:text-2xl mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
