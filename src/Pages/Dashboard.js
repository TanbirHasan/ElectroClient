import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)

  return (
    <div class="drawer drawer-mobile">
      <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-4xl text-blue-500 my-5 px-5">
          Welcome to your dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for=" dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          {
            !admin ?  <li>
            <Link to="/dashboard/orders">My Orders</Link>
          </li> : <span></span>
          }
          {
            !admin ?    
          <li>
            <Link to="/dashboard/review">Add a Review</Link>
          </li> : <span></span>
          }
          {
            admin ?   <li>
            <Link to="/dashboard/makeadmin">Make a Admin</Link>
          </li> : <span></span>
          }
      
        
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
