import React, { useEffect, useState, useTransition } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {

    //  const {
    //    data: users,
    //    isLoading,
    //    refetch,
    //  } = useQuery("users", () =>
    //    fetch("http://localhost:7000/users", {
    //      method: "GET",
    //      headers: {
    //        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //      },
    //    }).then((res) => res.json())
    //  );

    //  if (isLoading) {
    //    return <Loading></Loading>;
    //  }

    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:7000/users",{
            method :  "GET",
           headers: {
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setUsers(data);
        

        })
    },  [users])
    return (
      <div>
        <h3>Users length : {users.length} </h3>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => (
                <UserRow key={user._id} index={index} users={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MakeAdmin;