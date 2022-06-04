import React from "react";
import bg from "../../images/bannerbackground.png";
const HeroSection = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} class="hero min-h-[89vh]">
      <div class="hero-content text-center text-neutral-content">
        <div class=" text-black">
          <h1 class="mb-5 lg:text-5xl md:text-5xl text-xl font-bold">
            Best food waiting for your belly
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Type here"
              class="input focus:outline-0 bg-white w-full max-w-xs"
            />

            <button class="btn btn-secondary rounded-full ml-[-35px]">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
