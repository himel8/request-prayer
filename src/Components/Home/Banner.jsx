import React from "react";
import Img from "../../assets/img/banner.png";
import Title from "../Shared/Title";

const Banner = () => {
  return (
    <section className="flex justify-center items-center min-h-screen gap-8 flex-wrap-reverse">
      <div className="w-full md:w-1/2 text-center custom1183:text-left">
        <Title>Request Prayer Here for ALLAH's Pleasure</Title>

        <p className="font-primary text-[1rem] text-white font-normal mb-8 opacity-80 tracking-wide">
          Dua is like a conversation with Allah Almighty in which we put our
          needs before Him and ask His help in the resolution of our
          problems.You can request prayer for you and your family. There are
          many people here to pray for you. And we will pray for you.
        </p>
        <div className="flex items-center gap-8 flex-wrap custom1183:justify-start justify-center">
          <div className="border border-[#1cd1b5] px-6 py-3 rounded-3xl bg-gradient-to-r from-[#00d6d8] to-[#00a9d5] hover:scale-110 transform transition-all ease-in-out duration-500 custom-btn-animation">
            <a
              href="#!"
              className="text-white font-primary text-[1rem] tracking-wider"
            >
              Request Prayer
            </a>
          </div>
          <div className="border border-[#1cd1b5] px-6 py-3 rounded-3xl hover:scale-110 transform transition-all ease-in-out duration-500">
            <a
              href="#!"
              className="text-white font-primary text-[1rem] tracking-wider"
            >
              Read Prayer
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <img src={Img} alt="" className="w-full custom-animation" />
      </div>
    </section>
  );
};

export default Banner;
