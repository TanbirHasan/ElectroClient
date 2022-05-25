import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user ,index}) => {
  const { email, _id, name, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:8000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
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
