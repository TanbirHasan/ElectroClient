import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import useToken from "../Hooks/useToken";

import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";




const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(" ");
 

 const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, fpasserror] =
    useSendPasswordResetEmail(auth);
       const [token] = useToken(user || guser);


       

  let from = location.state?.from?.pathname || "/";

 


   useEffect(() => {
     if (user || guser) {
       navigate(from, { replace: true });
     }
   },[token])

  let errorMessage;

    if (loading || gloading) {
      return <Loading></Loading>;
    }
    if (error) {
      errorMessage = <p className="text-red">{error?.message}</p>;
    }




  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    setEmail(data.email);
  };


  return (
    <div className="mt-20 py-10">
      <button
        className="flex justify-center items-center my-3 bg-green-600 text-white rounded-md px-2 py-2 mx-auto"
        onClick={() => signInWithGoogle()}
      >
        <i className="fa-brands fa-google"></i>
        Google Sign In
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-auto my-10 lg:w-2/4 px-5 py-5 shadow-lg sm:w-full"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors?.email?.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors?.email?.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Provide a valid Password", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors?.password?.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input type="submit" className="btn w-ful max-w-xs" value="Login" />
        {errorMessage}
        <p>
          Forget Password?
          <button
            className="text-blue-600 my-5"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              alert("Sent email");
            }}
          >
            Reset Now
          </button>
        </p>
      </form>
      <p className="text-center">
        New to Electro?{" "}
        <Link to="/register" className="text-blue-600">
          Create new account
        </Link>
      </p>
    </div>
  );
};

export default Login;
