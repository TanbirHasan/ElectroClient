import React from 'react';
import BuisnessSummery from '../Shared/BuisnessSummery';
import Carousel from '../Shared/Carousel';
import Reviews from '../Shared/Reviews/Reiviews';
import Tools from '../Shared/Tools';
import UserReview from '../Shared/UserReview';



const Home = () => {
    return (
        <div>
            <Carousel/>
            <Tools/>
            <BuisnessSummery/>
            <UserReview/>
      
            
            
        </div>
    );
};

export default Home;