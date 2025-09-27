"use client";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import animationData from "../../../public/lzd.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="bg-[url(Background.png)] py-28 w-full bg-no-repeat bg-cover">
      <div className="hero">
        <div className="flex w-7/12 mx-auto justify-between items-center flex-col lg:flex-row-reverse">
          {/* Lottie Animation - Fixed size */}
          <div>
            <Lottie
              animationData={animationData}
              loop={true}
              autoPlay={true}
              style={{ width: 400, height: 400 }}
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="font-[plus_jakarta_sans] text-4xl/14 font-bold">
              Experience Excellence with Top <br /> Software Company of
              Bangladesh
            </h1>
            <p className="py-6 font-[plus_jakarta_sans] text-xl font-normal">
              Get your application developed by experts. As Bangladesh’s leading
              software company, we create top-notch custom software that meets
              our client’s requirements.
            </p>
            <button className="btn text-xl font-normal shadow-none text-black p-8 rounded-xl bg-transparent hover:bg-[#F86011] hover:border-none hover:text-white">
              Our Services <MdOutlineKeyboardDoubleArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
