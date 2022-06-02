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
      <div class="card lg:card-top bg-base-100 shadow-xl px-10 my-10 lg:py-10 sm:w-full mx-3">
        <figure>
          <img src={img} alt="Album" className="w-2/4" />
        </figure>
        <div class="card-body px-2">
          <h2 class="card-title">Name : {name}</h2>
          <p>Description : {description}</p>
          <p>Available Quantity : {availablequantity}</p>
          <p>Price Per Unit : {priceperunit}</p>
          <p>Minimum Buying Quantity : {minimumorder}</p>
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