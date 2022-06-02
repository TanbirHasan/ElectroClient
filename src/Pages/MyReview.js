import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyReview = () => {
  const [user] = useAuthState(auth)
    const ratingsref = useRef();
 
    const review = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let ratings = ratingsref.current.value;
        let username = user.displayName;
        let message = review.current.value;
        console.log(ratings, message);

        const Finalreview = { ratings, message, username };

           const url = "https://infinite-shore-68933.herokuapp.com/review";
           fetch(url, {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(Finalreview),
           })
             .then((res) => res.json())
             .then((result) => {
               console.log(result);
               alert("Your review Submitted Successfully");
             });

       ratingsref.current.value = ' ';
       review.current.value = " ";
  
      
    }
    return (
      <div className="my-20">
        <h3 className="px-5 font-semibold text-center">
          Give a feedback to Us
        </h3>
        <div>
         
          <form
            className="px-5 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          > 
           <input type="number" 
           ref={ratingsref} 
           className="w-1/4 border-solid border-2 py-1 p-2 rounded mb-5" 
           placeholder="Ratings between 1 to 5" required/>
            <textarea
              class="textarea textarea-info w-4/5 h-48"
              ref={review}
              placeholder="Give your precious review"
              required
            ></textarea>
            <button className="btn btn-success mt-6" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default MyReview;