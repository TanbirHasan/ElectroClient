import React from 'react';
import useItems from '../Hooks/UseItems';

const ManageProduct = () => {
       const [products, setProducts] = useItems();

           const handleDelete = (id) => {
             const proceed = window.confirm("Are you sure you want to delete?");
             if (proceed) {
               const url = `https://infinite-shore-68933.herokuapp.com/order/${id}`;
               fetch(url, {
                 method: "DELETE",
               })
                 .then((res) => res.json())
                 .then((result) => {
                   const remaining = products.filter((item) => item._id !== id);
                   setProducts(remaining);
                 });
             }
           };
    return (
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ProductName</th>
                <th>Product Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <th>{index}</th>
                  <td>{product.name}</td>
                  <td>{product.availablequantity}</td>
                  <td>{product.priceperunit}</td>
                  <td>
                    <button onClick={() => handleDelete(product._id)}>
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

export default ManageProduct;