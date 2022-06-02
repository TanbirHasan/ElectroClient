import React, { useEffect, useState } from 'react';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const UserReview = () => {
    const [review,setReview] = useState([]);


    useEffect(() => {
        fetch("https://infinite-shore-68933.herokuapp.com/review")
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
      <div>
        <h3 className="text-3xl font-bold text-center">User Reviews</h3>

        <AwesomeSlider className="h-48 bg-blue-200 ">
          {review.map((review) => (
            <div className='lg:px-20 sm:px-0'>
              <h3 className='font-semibold text-xl text-center my-5'>{review?.username}</h3>
              <p className="text-xl font-semibold text-black text-center px-20">
                {review.message}
              </p>
            </div>
          ))}
        </AwesomeSlider>
      </div>
    );
};

export default UserReview;