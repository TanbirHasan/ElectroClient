import React from 'react';
import BuisnessSummery from '../Shared/BuisnessSummery';
import Carousel from '../Shared/Carousel';
import Reviews from '../Shared/Reviews/Reiviews';
import Tools from '../Shared/Tools';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Tools/>
            <BuisnessSummery/>
            <Reviews/>
            
        </div>
    );
};

export default Home;