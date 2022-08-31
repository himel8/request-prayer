import React from "react";
import Title from "../Shared/Title";

const NewsLatter = () => {
  return (
    <section className="text-center py-12 bg-[#ffffff1a] mt-20 rounded-xl">
      <div className="w-[95%] sm:w-[80%] mx-auto">
        <div className="lg:mx-20 mx-0">
          <Title>Follow us For Further Information</Title>
          <p className="font-primary text-[1rem] text-white font-normal mb-8 opacity-80 lg:mx-32 mx-0">
            Subscribe our newsletter and get notified when will publish a new
            article or event
          </p>
        </div>
        <div className="flex justify-center items-center custom950:w-1/2 w-full shadow bg-white rounded-full p-1 mx-auto">
          <input
            class="appearance-none rounded w-[70%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-l-3xl font-primary text-[1rem] font-medium"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <button
            class="w-[30%] rounded-3xl text-white font-bold py-3 px-2  focus:outline-none focus:shadow-outline font-primary text-sm bg-gradient-to-r from-[#00d6d8] to-[#00a9d5]"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
