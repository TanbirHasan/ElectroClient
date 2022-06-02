import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";


const AddaProduct = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://infinite-shore-68933.herokuapp.com/newproduct";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert("Data added successfully"));
  };
  return (
    <div className="mx-10 my-10">
      <h2 className="text-3xl my-3 text-center">Add New Products</h2>
      {/* <form className="flex justify-center flex-col items-center">
          <input
            type="text"
            placeholder="Image"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />

          <input
            type="text"
            placeholder="Product Name"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />

          <input
            type="text"
            placeholder="Product Price"
            className="border-solid border-2 px-3 py-2 w-2/4 block my-3"
          />
          <button className="flex justify-center mb-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto w-1/4">
            Submit
          </button>
        </form> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3 "
          {...register("img")}
          placeholder="Product Photo Url"
        />

        <input
          type="text"
          placeholder="Enter Products Name"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3 "
          {...register("name")}
        />
      
        <input
          type="number"
          placeholder="Enter Products Minimum Order"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3"
          {...register("minimumorder")}
        />
        <input
          type="number"
          placeholder="Enter Available Quantity"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3"
          {...register("availablequantity")}
        />
        <textarea
          type="text"
          placeholder="Enter Prducts description"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3"
          {...register("description")}
        />

        <input
          type="number"
          className="border-solid border-2 px-3 py-2 lg:w-2/4 block my-3"
          {...register("priceperunit")}
          placeholder="Enter Products price"
        />

        <input
          type="submit"
          className="flex justify-center mb-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto w-1/4"
        />
      </form>
    </div>
  );
};

export default AddaProduct;
