import React from "react";
import bg from "../../images/bannerbackground.png";
const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-[89vh]"
    >
      <div className="hero-content text-center text-neutral-content">
        <div className=" text-black">
          <h1 className="mb-5 lg:text-5xl md:text-5xl text-xl">
            Best food waiting for your belly
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Type here"
              className="input focus:outline-0 bg-white w-full max-w-xs"
            />

            <button className="btn btn-secondary rounded-full ml-[-35px]">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
