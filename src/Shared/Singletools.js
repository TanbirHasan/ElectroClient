import React from 'react';

const Singletools = ({tools}) => {
    const {
      id,
      name,
      img,
      description,
      priceperunit,
      minimumorder,
      availablequantity,
    } = tools;
    return (
   
      
          <div class="card lg:card-top bg-base-100 shadow-xl lg:w-3/12 my-10 mx-10 lg:py-10 sm:w-full">
            <figure>
              <img
                src={img}
                alt="Album"
                className='w-2/4'
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Name : {name}</h2>
              <p>Description : {description}</p>
              <p>Available Quantity : {availablequantity}</p>
              <p>Price Per Unit : {priceperunit}</p>
              <div class="card-actions justify-start">
                <button class="btn btn-primary">Order</button>
              </div>
            </div>
          </div>
      
    );
};

export default Singletools;