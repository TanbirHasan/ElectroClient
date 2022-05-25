import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const UserRow = ({ users ,index}) => {

    const [user] = useAuthState(auth);


 
   const { email,role ,_id, name } = users;

  const makeAdmin = () => {


    fetch(`http://localhost:7000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    // .then(res => res.json())
    // .then(data => console.log(data));


      .then((res) => {
        if (res.status === 403 || 401) {
          toast.error("You are not an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
        
          toast.success("Successfully make an Admin");
        }
      });

    
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
