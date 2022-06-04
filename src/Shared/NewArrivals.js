import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../Hooks/UseItems';
import Fade from "react-reveal/Fade";

const NewArrivals = () => {

  const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch("https://infinite-shore-68933.herokuapp.com/products")
       .then((res) => res.json())
       .then((data) => setProducts(data.reverse()));
   }, []);

    return (
      <div className=" sm:px-5">
        <h2 className="text-2xl font-semibold text-center my-10 ">
          New Arrivals.Chekout Now
        </h2>
        <Fade top>
          <div className="grid lg:grid-cols-3 gap-4 mx-auto px-20 sm:grid-cols-1 px-0">
            {products.slice(0, 3).map((tools) => (
              <div
                id="card"
                class=" flex flex-row items-center justify-center card card-compact w-96 bg-base-100 shadow-xl lg:mx-auto sm:mx-5"
              >
                <figure className="w-2/4">
                  <img src={tools.img} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">{tools.name}</h2>

                  <div class="card-actions justify-start">
                    <Link to={`/purchase/${tools._id}`}>
                      <button class="btn btn-primary">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
};

export default NewArrivals;