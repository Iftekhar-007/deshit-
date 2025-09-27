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
