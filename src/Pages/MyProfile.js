import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const locationref = useRef();
    const phoneref = useRef();
    const linkedinref = useRef();
    const [userinfo ,setUserinfo] = useState({})


     useEffect(() => {
       fetch("http://localhost:7000/userInfo")
         .then((res) => res.json())
         .then((data) => {
             console.log(data)
             setUserinfo(data[0])
         });
     }, []);


  
     

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const location = locationref.current.value;
        const phone = phoneref.current.value;
        const linkedin = linkedinref.current.value;

        const userInfo = { name ,email,location,phone,linkedin};
        console.log(userInfo);


           const url = "http://localhost:7000/userInfo";
           fetch(url, {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(userInfo),
           })
             .then((res) => res.json())
             .then((result) => {
               console.log(result);
               alert("Your User Information Updated Successfully");
             });

    }
    return (
      <div className="h-screen px-5">
        <div class="h-full flex justify-between">
          <div class="border-b-2 w-2/4 md:flex">
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
                  />
                </div>
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
                <button className="btn btn-primary ml-5" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/4 px-10">
            <h3>Your Updated Information</h3>
            <h4>
              <storng className="text-1xl">Name : </storng>
              {userinfo.name}
            </h4>
            <h4>
              <storng>Email : </storng>
              {userinfo.email}
            </h4>
            <h4>
              <storng>Phone : </storng>
              {userinfo.phone}
            </h4>
            <h4>
              <storng>Location : </storng>
              {userinfo.location}
            </h4>
            <h4>
              <storng>LInkedin : </storng>
              {userinfo.linkedin}
            </h4>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;