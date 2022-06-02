import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user] = useAuthState(auth);
 
  

   

    const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken')

    }
    return (
      <div>
        <div class="navbar bg-blue-100 px-10 sm:flex justify-between">
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
             
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {user ? (
                  <li>
                    <Link to="/dashboard">
                      Dashboard
                    
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
            <a class="btn btn-ghost normal-case text-xl">ElectroHouse</a>
          </div>
          <div class="navbar hidden lg:flex w-full">
            <ul class="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
            
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/dashboard">
                    Dashboard
                   
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
          <div className="navbar-end">
            <label
              tabIndex="1"
              for=" dashboard-sidebar"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fillRule="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    );
};

export default Navbar;