import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";





const Registerhookform = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  let errorMessage;

  if (loading || updating || gloading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  if (error || gerror) {
    errorMessage = <p className="text-red">{error?.message}</p>;
  }
  return (
    <div className="mt-20 py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-auto my-10 w-2/4 px-5 py-5 shadow-lg"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {" "}
                {errors?.email?.message}
              </span>
            )}
          </label>
        </div>

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

        <button type="submit" className="btn w-ful max-w-xs">
          Register
        </button>
        {errorMessage}
        <div class="flex flex-col w-full border-opacity-50">
          <div class="divider">OR</div>
        </div>
        <button onClick={() => signInWithGoogle()} className="btn btn-accent">
          Register with Google
        </button>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Registerhookform;
