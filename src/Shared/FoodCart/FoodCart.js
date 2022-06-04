import React from "react";

const FoodCart = ({ food }) => {
  const { name, img, price, description } = food;
  return (
    <div className='card lg:w-96 md:w-96 w-[21.5rem] shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='Shoes' className='rounded-full' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p> ${price}</p>
      </div>
    </div>
  );
};

export default FoodCart;
