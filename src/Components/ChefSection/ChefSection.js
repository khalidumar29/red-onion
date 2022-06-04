import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ChefSection = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./chefData.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  return (
    <div className='mx-8'>
      <div>
        <h1 className='text-4xl'>why you choose me</h1>
        <p className='py-2 '>
          barton waited twenty always repair in within we do.an delighted
          offending curiosity my is daswoods at. boy prosperous increasing
          surrounded
        </p>
      </div>
      <div className='py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-[7.25rem]'>
        {service.map((s) => (
          <div key={s.id} class='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={s.img} alt='Shoes' />
            </figure>
            <div class='card-body'>
              <div className='flex'>
                <div>
                  <img className='w-[130px]' src={s.icon} alt='' srcset='' />
                </div>
                <div className='ml-2'>
                  <h2 class='card-title capitalize'>{s.name}</h2>
                  <p>{s.description}</p>
                  <p>
                    <Link className='text-blue-600' to=''>
                      see more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
