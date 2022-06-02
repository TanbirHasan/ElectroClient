import React, { useEffect, useState } from 'react';
import MyOrders from './MyOrders';

const ManageAllOrders = () => {
    const [order, setOrder] = useState([]);
    const [shipped,setShipped] = useState()

    


    useEffect(() => {
        fetch('https://infinite-shore-68933.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrder(data))

    },[])


    const handleshipped = () => {
      setShipped(true)

    }

      const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://infinite-shore-68933.herokuapp.com/order/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              const remaining = order.filter(
                (item) => item._id !== id
              );
              setOrder(remaining);
            });
        }

    }


    
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
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order, index) => (
                <tr>
                  <th>{index}</th>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.city}</td>
                  <td>{order.productname}</td>
                  <td>{order.productquantity}</td>
                  <td>{order.productprice}</td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {order.paid ? <span>paid</span> : <span>Unpaid</span>}
                  </td>
                  <td>
                    {order.paid ? (
                      <button onClick={handleshipped}>
                        {shipped ? <span>shipped</span> : <span>pending</span>}
                      </button>
                    ) : (
                      <button>Not Shipped</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageAllOrders;