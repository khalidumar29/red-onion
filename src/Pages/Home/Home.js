import React from "react";
import ChefSection from "../../Components/ChefSection/ChefSection";
import FoodSection from "../../Components/FoodSection/FoodSection";
import HeroSection from "../../Components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FoodSection></FoodSection>
      <ChefSection></ChefSection>
    </div>
  );
};

export default Home;
