import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";
const FoodSection = () => {
  return (
    <div>
      <div className='navbar justify-center bg-white'>
        <div className='flex-none '>
          <ul className='menu menu-horizontal p-0 text-xl'>
            <li>
              <CustomLink to={"/"}>Breakfast</CustomLink>
            </li>
            <li>
              <CustomLink to={"/lunch"}>Lunch</CustomLink>
            </li>
            <li>
              <CustomLink to={"/dinner"}>Dinner</CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default FoodSection;
