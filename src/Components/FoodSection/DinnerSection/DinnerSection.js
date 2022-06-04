import React from "react";
import useAllFood from "../../../Hook/useAllFood";
import CheckOutBtn from "../../../Shared/CheckOutBtn/CheckOutBtn";
import FoodCart from "../../../Shared/FoodCart/FoodCart";

const DinnerSection = () => {
  const [foods] = useAllFood();
  const dinner = foods.filter((food) => food.category === "dinner");
  return (
    <div className='my-4'>
      <div className='bg-white mx-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[7.5rem] '>
        {dinner.map((food) => (
          <FoodCart key={food.id} food={food}></FoodCart>
        ))}
      </div>
      <CheckOutBtn />
    </div>
  );
};

export default DinnerSection;
