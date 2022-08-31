import React from "react";
import Img1 from "../../assets/img/icon1.png";
import Img2 from "../../assets/img/icon2.png";
import Img3 from "../../assets/img/icon3.png";
import Img4 from "../../assets/img/icon4.png";
import Img5 from "../../assets/img/icon5.png";
import Title from "../Shared/Title";

const list = [
  { img: Img1, name: "shahada", tag: "faith" },
  { img: Img2, name: "salat", tag: "prayer" },
  { img: Img3, name: "Zakat", tag: "Alms" },
  { img: Img4, name: "Sawm", tag: "Fasting" },
  { img: Img5, name: "Hajj", tag: "Pilgrimage" },
];

const IslamicPillar = () => {
  return (
    <section className="text-center py-20">
      <Title>5 Pillars Of Islam</Title>
      <p className="font-primary text-[1rem] text-white font-normal mb-8 opacity-80">
        The five pillars of Islam define the basic identity of Muslims - their
        faith, beliefs and practices - and bind together a worldwide community
        of believers into a fellowship of shared values and concerns.
      </p>
      <div className="flex justify-center items-center gap-4 custom1105:flex-nowrap flex-wrap">
        {list.map((data, index) => (
          <div
            className={`flex flex-col justify-center items-center shadow-xl  ${
              index === 0
                ? "bg-gradient-to-t from-[#00d6d8] to-[#00a9d5]"
                : "bg-[#ffffff6a]"
            } hover:bg-gradient-to-t from-[#00d6d8] to-[#00a9d5] w-[15rem] h-[15rem] gap-3 rounded-lg cursor-pointer hover:translate-y-[10px] transform transition-all ease-in-out duration-500`}
          >
            <div className="flex justify-center ">
              <img src={data.img} alt="" className="w-[30%]" />
            </div>
            <h6 className="text-white font-primary text-2xl capitalize font-semibold">
              {data.name}
            </h6>
            <p className="text-white font-primary text-[1rem] capitalize font-semibold">
              ({data.tag})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IslamicPillar;
