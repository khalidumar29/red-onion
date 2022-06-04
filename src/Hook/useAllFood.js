import { useEffect } from "react";
import { useState } from "react";

const useAllFood = () => {
  const [foods, setAllFoods] = useState([]);
  useEffect(() => {
    fetch("./foodData.json")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);
  return [foods];
};

export default useAllFood;
