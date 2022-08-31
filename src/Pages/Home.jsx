import React from "react";
import Banner from "../Components/Home/Banner";
import Features from "../Components/Home/Features";
import HowRequest from "../Components/Home/HowRequest";
import NewsLatter from "../Components/Home/NewsLatter";
import PrayerSection from "../Components/Home/PrayerSection";
import Service from "../Components/Home/Service";

const Home = () => {
  return (
    <div className=" bg-mainBg bg-cover bg-fixed ">
      <div className="w-[90%] custom1329:w-[80%] mx-auto pb-20">
        <Banner />
        <Service />
        <PrayerSection />
        <Features />
        <HowRequest />
        <NewsLatter />
      </div>
    </div>
  );
};

export default Home;
