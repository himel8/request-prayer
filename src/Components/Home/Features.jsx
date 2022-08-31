import React from "react";
import Img1 from "../../assets/img/1.png";
import Img2 from "../../assets/img/2.png";
import Img3 from "../../assets/img/3.png";
import Img4 from "../../assets/img/4.png";
import Img from "../../assets/img/feature.png";
import Title from "../Shared/Title";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="flex justify-center items-center gap-8 min-h-screen custom1160:flex-nowrap flex-wrap-reverse">
      <div className="w-full md:w-1/2 text-center custom1160:text-left">
        <Title>Conditions for acceptance of prayers</Title>
        <p className="font-primary text-[1rem] text-white font-normal mb-8 opacity-80">
          Every Muslim should know what are the conditions for acceptance of
          prayers, Otherwise our prayers will fail.
        </p>
        <div className="flex items-center justify-center gap-6 mb-6 custom1160:flex-nowrap flex-wrap">
          <FeatureCard
            id="1"
            title="belief one Allah"
            img={Img1}
            color="#836afa"
          />
          <FeatureCard
            id="2"
            title="Follow the Quran"
            img={Img2}
            color="#222f5d"
          />
        </div>
        <div className="flex items-center justify-center gap-6 mb-6 custom1160:flex-nowrap flex-wrap">
          <FeatureCard
            id="3"
            title="Wearing Islamic dress"
            img={Img3}
            color="#1cd1b5"
          />
          <FeatureCard
            id="4"
            title="Eat Halal Food"
            img={Img4}
            color="#fc4468"
          />
        </div>
      </div>
      <div className="">
        <img src={Img} alt="" className="w-full custom-animation" />
      </div>
    </section>
  );
};

export default Features;
