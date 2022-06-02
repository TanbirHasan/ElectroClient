import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [disable,setDisable] = useState(false)
  


    const locationref = useRef();
    const phoneref = useRef();
    const linkedinref = useRef();
    const [userinfo ,setUserinfo] = useState()


      //  useEffect(() => {
      //    const getOrders = async () => {
      //      const email = user.email;
      //      console.log(email);
      //      const url = `https://infinite-shore-68933.herokuapp.com/userInfo?email=${email}`;
      //      const { data } = await axios.get(url
      //       , {
      //        headers: {
      //          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //        },
      //      }
      //      );
      //      console.log(data);
      //      setUserinfo(data[0]);
      //    };
      //    getOrders();
      //  }, [user]);

       useEffect(() => {
         if (user) {
           fetch(`http://localhost:7000/userInfo?email=${user.email}`, {
             method: "GET",
             headers: {
               authorization: `Bearer ${localStorage.getItem("accessToken")}`,
             },
           })
             .then((res) => {
               if (res.status === 401 || res.status === 403) {
                 navigate("/");
                 signOut(auth);
                 localStorage.removeItem("accessToken");
               }
               return res.json();
             })
             .then((data) => {
               setUserinfo(data[0]);
               console.log(data);
             });
         }
       }, [user,userinfo]);

  
  
     

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const location = locationref.current.value;
        const phone = phoneref.current.value;
        const linkedin = linkedinref.current.value;

        const userInfo = { email,name ,location,phone,linkedin};
        console.log(userInfo);

 
          //    const url = "https://infinite-shore-68933.herokuapp.com/userInfo";
          //    fetch(url, {
          //      method: "POST",
          //      headers: {
          //        "content-type": "application/json",
          //      },
          //      body: JSON.stringify(userInfo),
          //    })
          //      .then((res) => res.json())
          //      .then((result) => {
          //        console.log(result);
          //        alert("Your User Information Updated Successfully");
          //      });
         

          fetch(`http://localhost:7000/usersinfo/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if(data){
                alert("Your Information Submitted Succesfully");
                 console.log("data inside useToken", data);
              }
             
            });

            locationref.current.value = " ";
            phoneref.current.value = " ";
            linkedinref.current.value = " ";

    }
    return (
      <div className="h-screen px-5">
        <div class="h-full flex lg:flex-row justify-between sm:flex flex-col">
          <div class="border-b-2 lg:w-2/4 md:flex sm:w-full">
            <div class="w-full bg-white lg:ml-4 shadow-md">
              <form class="rounded  shadow p-6" onSubmit={handleSubmit}>
                <div class="pb-6">
                  <label
                    for="name"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Name
                  </label>
                  <div class="flex">
                    <input
                      disabled
                      id="username"
                      class="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      value={user.displayName}
                    />
                  </div>
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    value={user.email}
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Location
                  </label>
                  <input
                    ref={locationref}
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    required
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="number"
                    ref={phoneref}
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="number"
                    required
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="about"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    LinkedIn
                  </label>
                  <input
                    id="linkedin"
                    ref={linkedinref}
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    required
                  />
                </div>
                <button className="btn btn-success" type="submit" disabled={disable}>
                  Submit
                </button>
                <button className="btn btn-primary ml-5" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-2/4 lg:px-10 sm:w-full mb-5">
            <h3>Your Updated Information</h3>
            <h4>
              <storng className="text-1xl">Name : </storng>
              {user?.displayName}
            </h4>
            <h4>
              <storng>Email : </storng>
              {user?.email}
            </h4>
            <h4>
              <storng>Phone : </storng>
              {userinfo?.phone}
            </h4>
            <h4>
              <storng>Location : </storng>
              {userinfo?.location}
            </h4>
            <h4>
              <storng>LInkedin : </storng>
              {userinfo?.linkedin}
            </h4>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;