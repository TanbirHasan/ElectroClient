import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  "pk_test_51L3crVI20gp0i97m1j1eQCS8GypyBfb5Le13zVBryMdJHoy9KzJHwFQ9lMwNmrcZ1x0XJXLCOIexwyMdU9IQcB7500LuooR7ld"
);

const Payment = () => {

    const stripepass = "FUllwebdevelopment12345@@"


    const {id} = useParams();
    const url = `http://localhost:7000/order/${id}`

    const {data,isLoading} = useQuery(['order',id] , () => fetch(url,{
        method: "GET",
       
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
      <div className="ml-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 className="text-success text-2xl">Hello {data.name},</h3>
            <h2 className="text-2xl font-semibold">Your Product Name :</h2>
            <h2 class="card-title">{data.productname}</h2>

            <div class="card-actions justify-start">
              <p>Your Product Quantity : {data.productquantity}</p>
              <p>Pleasae Pay : {data.productprice} $</p>

             
            </div>
            <div className='mt-5'>
              <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Payment;