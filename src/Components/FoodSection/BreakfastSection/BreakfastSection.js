import React from "react";
import useAllFood from "../../../Hook/useAllFood";
import CheckOutBtn from "../../../Shared/CheckOutBtn/CheckOutBtn";
import FoodCart from "../../../Shared/FoodCart/FoodCart";
const BreakfastSection = () => {
  const [foods] = useAllFood();
  const breakfast = foods.filter((food) => food.category === "breakfast");
  return (
    <div className='mb-4'>
      <div className='bg-white mx-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[7.5rem] '>
        {breakfast.map((food) => (
          <FoodCart key={food.id} food={food}></FoodCart>
        ))}
      </div>
      <CheckOutBtn />
    </div>
  );
};

export default BreakfastSection;
