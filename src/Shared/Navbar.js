import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken')

    }
    return (
      <div>
        <div class="navbar bg-blue-100 px-10">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabindex="0">
                  <a class="justify-between">
                    Parent
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Product</a>
                    </li>
                    <li>
                      <a>Reviews</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>Register</a>
                    </li>
                    <li>
                      <a>Login</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">ElectroHouse</a>
          </div>
          <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/dashboard">
                    Dashboard
                    <span className='font-semibold'>
                      {`(${user?.displayName})`}
                    </span>
                  </Link>
                </li>
              ) : (
                <span></span>
              )}
              {!user ? (
                <li>
                  <Link to="/register">Register</Link>
                </li>
              ) : (
                <span></span>
              )}

              {!user ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;