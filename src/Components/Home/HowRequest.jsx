import React from "react";
import Img from "../../assets/img/header.png";
import Title from "../Shared/Title";
const list = [
  { id: 1, text: "Complete your information" },
  { id: 2, text: "Your contact information" },
  { id: 3, text: "Conditions of submitting a request" },
  { id: 4, text: "Look for your request" },
  { id: 5, text: "Complete your request" },
];

const HowRequest = () => {
  return (
    <div className="flex justify-center items-center gap-12 min-h-screen flex-wrap custom1329:flex-nowrap my-12">
      <div className="">
        <img src={Img} alt="" className="w-[85%]" />
      </div>
      <div className="w-full md:w-[60%] text-center custom1329:text-left">
        <Title>
          Can't Understand
          <br /> How to Request Prayer?
        </Title>
        <p className="font-primary text-[1rem] text-white font-normal mb-8 opacity-80 lg:mr-10 tracking-wider">
          As-salaamu 'alaukum and welcome <br />
          Thank you for your confidence in our website and for contacting us
          Steps 1-3 need only be completed the first time, when requesting your
          first Prayer.
        </p>

        <div>
          {list.map((data, index) => (
            <div
              key={index}
              className="flex ml-12 custom1329:ml-0 justify-start items-center gap-6 mb-6 text-lg font-primary font-semibold"
            >
              <div className="relative before:absolute before:w-[2rem] before:h-[2rem] before:border-[#06c6a8] before:border-[2px] before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full hover:scale-[1.3] transform transition-all ease-in-out duration-300">
                <p className="text-[#06c6a8] ">{data.id}</p>
              </div>

              <p className="text-white text-left">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center custom1329:justify-start items-center mt-12">
          <div className="border border-[#1cd1b5] px-6 py-3 rounded-3xl bg-gradient-to-r from-[#00d6d8] to-[#00a9d5] hover:scale-110 transform transition-all ease-in-out duration-500">
            <a
              href="#!"
              className="text-white font-primary text-[1rem] tracking-wider"
            >
              Request Prayer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowRequest;
