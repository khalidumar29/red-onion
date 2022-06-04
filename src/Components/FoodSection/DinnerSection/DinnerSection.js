import React from "react";
import useAllFood from "../../../Hook/useAllFood";
import FoodCart from "../../../Shared/FoodCart/FoodCart";

const DinnerSection = () => {
  const [foods] = useAllFood();
  const dinner = foods.filter((food) => food.category === "dinner");
  return (
    <div className='bg-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
      {dinner.map((food) => (
        <FoodCart key={food.id} food={food}></FoodCart>
      ))}
    </div>
  );
};

export default DinnerSection;
