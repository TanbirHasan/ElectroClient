import { success } from 'daisyui/src/colors';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useItemsDetails from '../Hooks/useItemsDetails';
import Loading from '../Shared/Loading';



const Purchase = () => {
      const { id } = useParams();
      const [user,loading] = useAuthState(auth);
   
   
      const [product] = useItemsDetails(id);
  




      const [minimumorder, setMinimumorder] = useState(0);
      const [price,setPrice] = useState();
      const [totalprice,setTotalprice] = useState()

    



     const increaseref = useRef();
      const reduceref = useRef();
      const cityref = useRef();   
      const countryref = useRef();
      const zipref = useRef();
      const paymentref = useRef();


     // reducing quantity
      const reduceQuantity = (e,id) => {
        e.preventDefault();

          const number = parseInt(reduceref.current.value);

          console.log(minimumorder);
             const updatednumber = minimumorder - number;

             if (updatednumber < product.minimumorder){
               alert(`Your need to buy ${product.minimumorder} product not less `)
               reduceref.current.value = " ";
             } 
             else{
               setMinimumorder(updatednumber);
             }
          
            console.log(minimumorder);



               const updatedprice = product.priceperunit * number;
           

      
               setPrice(price - updatedprice);

               const newprice = price - updatedprice;

               console.log(newprice)
            const updatedquantity = { updatednumber };

            console.log(updatedquantity);

            // const url = `http://localhost:7000/reduce/${id}`;
            // fetch(url, {
            //   method: "PUT",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(updatedquantity),
            // })
            //   .then((res) => res.json())
            //   .then((data) => {
            //     console.log("succes", data);
            //   });
       

         console.log(minimumorder);

      };


     useEffect(() => {
       
     }, [])
      const handlerestock = (e, id) => {
        e.preventDefault();


        const number = parseInt(increaseref.current.value);

        const updatedquantity = minimumorder + number;
        if (updatedquantity > product.availablequantity) {
          alert("Your product amount is more than available quantity, please reduce your product amount")
          increaseref.current.value = " ";
        } else {
        setMinimumorder(updatedquantity);
        }


      
      

    
        
        
        const updatedprice = product.priceperunit * number;
        console.log(product.priceperunit);
        console.log(number);
      
        console.log(updatedquantity);
          setPrice(price+updatedprice);

          const newprice = price + updatedprice;


        const increasedquantity = { updatedquantity }; 


        console.log(increasedquantity);

       

        // const url = `http://localhost:7000/increase/${id}`;
        // fetch(url, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(increasedquantity),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("succes", data);
        //     alert("Quantity updated succesfully");
        //   });
      };



      useEffect(() => {
        setMinimumorder(product.minimumorder);
        setPrice(product.priceperunit*product.minimumorder)
      }, [product]);

      
    
        if (loading) {
          return <Loading></Loading>;
        }

      

        const completeOrder = () => {
          const productname = product.name;
          const productquantity = minimumorder;
          const productprice = price;

          const name = user.displayName;
          const email = user.email;
     
          const city = cityref.current.value;
          const country = countryref.current.value;
          const zip = zipref.current.value;
          const payment = paymentref.current.value;

          const Allinformation = { productname, productquantity, productprice,name,email,city,country,zip,payment };
          console.log(Allinformation)

             const url = "http://localhost:7000/order";
             fetch(url, {
               method: "POST",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(Allinformation),
             })
               .then((res) => res.json())
               .then((result) => {
                 
                console.log(result)
                 alert("Your Order Placed Successfully");
              }
             
                 );


        }     
    return (
      <div className="flex justify-center items-center my-10">
        <div className="flex justify-evenly">
          <div class="card w-96 bg-base-100 shadow-xl ">
            <figure>
              <img src={product?.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                {product?.name}
                <div class="badge badge-secondary">NEW</div>
              </h2>

              <div class="card-actions justify-start">
                <h3 className="text-2xl font-semibold">
                  Total-Price:{price} $
                </h3>
                <h3 className="text-2xl font-semibold">
                  Quantity : {minimumorder}
                </h3>
                <h3 className='text-2xl font-semibold'>Available Quantity: {product.availablequantity}</h3>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <form onSubmit={(e) => handlerestock(e, id)}>
                <input
                  type="number"
                  placeholder="Increase quantity"
                  ref={increaseref}
                  className="border-solid border-2"
                />
                <button
                  className="bg-orange-600 ml-5 px-4 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <form onSubmit={(e) => reduceQuantity(e, id)}>
                <input
                  type="number"
                  placeholder="Reduce quantity"
                  ref={reduceref}
                  className="border-solid border-2"
                />
                <button
                  className="bg-orange-600 ml-5 px-4 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="leading-loose flex justify-center my-20">
          <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
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
                value={user?.displayName}
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
            </div>
            <div class="mt-2">
              <label class="hidden text-sm block text-gray-600" for="cus_email">
                City
              </label>
              <input
                class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                ref={cityref}
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
                ref={countryref}
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
                ref={zipref}
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
                ref={paymentref}
                type="text"
                required=""
                placeholder="Card Number MM/YY CVC"
                aria-label="Name"
              />
            </div>
            <div class="mt-4">
              <button
                onClick={completeOrder}
                class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Purchase;