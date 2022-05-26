import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState(' ');
      const [clientsecret,setClientsecret] = useState(' ');
      const {price} = data;

      useEffect(() => {
          fetch("http://localhost:7000/create-payment-intent",{
              method : "POST",
              headers : {
                  "content-type" : "application/json",
                  authorization : `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res => res.json())
          .then(data => {})


      }, [price])


      const handleSubmit = async (e) => {
          e.preventDefault()
          if(!stripe || !elements){
              return ;
          }
          const card = elements.getElement(CardElement);
             if (card == null) {
               return;
             }
     const { error, paymentMethod } = await stripe.createPaymentMethod({
       type: "card",
       card,
     });

     
          setCardError(error?.message || ' ');
      

      }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button className='btn btn-xs' type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        {
            cardError && <p className='text-danger'>{cardError}</p>
        }
      </div>
    );
};

export default CheckoutForm;