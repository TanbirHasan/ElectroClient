import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        
      const getItem = async () => {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:7000/myorder?email=${email}`;

        const { data } = await axios.get(url,{
             headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
             }
               });
        setItems(data);
      };
      getItem();
    }, [user]);
    console.log(items);


     const handleDelete = (id) => {
       const proceed = window.confirm("Are you sure you want to delete?");
       if (proceed) {
         const url = `http://localhost:7000/order/${id}`;
         fetch(url, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((result) => {
             const remaining = items.filter((item) => item._id !== id);
             setItems(remaining);
           });
       }
     };
    return (
      <div className="px-5">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Country</th>
                <th>Product Name</th>
                <th>Order Amount</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th>{index}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.productname}</td>
                  <td>{item.productquantity}</td>
                  <td>{item.productprice}</td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrders;