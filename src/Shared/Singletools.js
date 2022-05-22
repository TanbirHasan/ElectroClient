import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mycontext } from '../App';



const Singletools = ({tools}) => {


    

   

    const {
      _id,
      name,
      img,
      description,
      priceperunit,
      minimumorder,
      availablequantity,
    } = tools;


        const navigate = useNavigate();

        const navigattoproductDetails = (id) => {
          console.log(id);
          navigate(`/purchase/${id}`);
        };
  
    return (
      <div class="card lg:card-top bg-base-100 shadow-xl lg:w-3/12 my-10 mx-10 lg:py-10 sm:w-full">
        <figure>
          <img src={img} alt="Album" className="w-2/4" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Name : {name}</h2>
          <p>Description : {description}</p>
          <p>Available Quantity : {availablequantity}</p>
          <p>Price Per Unit : {priceperunit}</p>
          <div class="card-actions justify-start">
          
              <button
                class="btn btn-primary"
                onClick={() => navigattoproductDetails(_id)}
              >
                Order
              </button>
        
          </div>
        </div>
      </div>
    );
};

export default Singletools;