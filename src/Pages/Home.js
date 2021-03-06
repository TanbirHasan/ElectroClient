import React from 'react';
import BuisnessSummery from '../Shared/BuisnessSummery';
import Carousel from '../Shared/Carousel';
import NewArrivals from '../Shared/NewArrivals';
import NewToolset from '../Shared/NewToolset';

import Tools from '../Shared/Tools';
import UserReview from '../Shared/UserReview';
import About from './About';
import Newsletter from './Newsletter';



const Home = () => {
    return (
        <div>
            <Carousel/>
            <NewArrivals/>
            <Tools/>
            <NewToolset/>
            <BuisnessSummery/>
            <UserReview/>
            <Newsletter/>
            <About/>
      
            
            
        </div>
    );
};

export default Home;