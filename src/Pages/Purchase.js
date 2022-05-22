import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useItemsDetails from '../Hooks/useItemsDetails';
import Loading from '../Shared/Loading';



const Purchase = () => {
      const { id } = useParams();
      const [user,loading] = useAuthState(auth);
      console.log(user);
   
   const [product] = useItemsDetails(id);
   console.log(product);




        const [quantity, setQuantity] = useState();

        useEffect(() => {
          setQuantity(product.quantity);
        }, [product]);


     const amountref = useRef();

     const handlerestock = (e, id) => {
       e.preventDefault();
       const number = parseInt(amountref.current.value);

       setQuantity(quantity + number);

       const increasedquantity = { quantity };

       const url = `http://localhost:7000/increase/${id}`;
       fetch(url, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(increasedquantity),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log("succes", data);
           alert("Quantity updated succesfully");
         });
     };
        if (loading) {
          return <Loading></Loading>;
        }
     
    return (
      <div>
        <div className='flex justify-evenly'>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product?.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                {product?.name}
                <div class="badge badge-secondary">NEW</div>
              </h2>

              <div class="card-actions justify-start">
                <h3>Price:{product.priceperunit} $</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
         
            <form
              className="flex flex-col  px-5 py-10 mx-5 my-5  border-solid border-2"
              onSubmit={(e) => handlerestock(e, id)}
            >
             
              <input
                type="number"
                placeholder='Increse Items'
                className="border-solid border-2 my-5"
                ref={amountref}
              />
              <button
                className="flex mb-3 bg-orange-600 text-white rounded-md px-2 py-2 w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="leading-loose flex justify-center my-20">
          <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 font-medium">Customer information</p>
            <div class="">
              <label class="block text-sm text-gray-00" for="cus_name">
                Name
              </label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                value={user.displayName}
                placeholder="Your Name"
                aria-label="Name"
                disabled
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-gray-600" for="cus_email">
                Email
              </label>
              <input
                class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                value={user?.email}
                type="text"
                required=""
                placeholder="Your Email"
                aria-label="Email"
                disabled
              />
            </div>
            <div class="mt-2">
              <label class=" block text-sm text-gray-600" for="cus_email">
                Address
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Street"
                aria-label="Email"
              />
            </div>
            <div class="mt-2">
              <label class="hidden text-sm block text-gray-600" for="cus_email">
                City
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="City"
                aria-label="Email"
              />
            </div>
            <div class="inline-block mt-2 w-1/2 pr-1">
              <label class="hidden block text-sm text-gray-600" for="cus_email">
                Country
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Country"
                aria-label="Email"
              />
            </div>
            <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label class="hidden block text-sm text-gray-600" for="cus_email">
                Zip
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                aria-label="Email"
              />
            </div>
            <p class="mt-4 text-gray-800 font-medium">Payment information</p>
            <div class="">
              <label class="block text-sm text-gray-600" for="cus_name">
                Card
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Card Number MM/YY CVC"
                aria-label="Name"
              />
            </div>
            <div class="mt-4">
              <button
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >
                $3.00
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Purchase;