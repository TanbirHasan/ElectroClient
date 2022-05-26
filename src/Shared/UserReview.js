import React, { useEffect, useState } from 'react';

const UserReview = () => {
    const [review,setReview] = useState([]);


    useEffect(() => {
        fetch("http://localhost:7000/review")
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
      <div>
        <h3 className="text-3xl font-bold text-center">User Reviews</h3>
        <div className="grid lg:grid-cols-3 gap-5 px-20 my-10">
          {review.map((review) => (
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>{review.rating}</figure>
              <div class="card-body">
                <h2 class="card-title">{review.message}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UserReview;