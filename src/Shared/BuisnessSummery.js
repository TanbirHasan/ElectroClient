import React from 'react';

import { FaSpeakap } from "react-icons/fa";

import { IoBarChartSharp } from "react-icons/io5";
const BuisnessSummery = () => {
    return (
      <div className="buisness">
        <div className="flex flex-col justify-evenly items-center px-10 py-10">
          <div>
            <h2 className="text-3xl font-semibold">Buisness Summery</h2>
          </div>
          <div className='py-10'>
            <div class="stats shadow lg:grid grid-cols-3 sm:grid grid-rows-1">
              <div class="stat">
                <div class="stat-figure text-primary">
                  <i class="fa-solid fa-users text-2xl"></i>
                </div>
                <div class="stat-title">Total Customers</div>
                <div class="stat-value text-primary">25.6K</div>
                <div class="stat-desc">we have more then 1k+ customers</div>
              </div>

              <div class="stat">
                <div class="stat-figure text-primary">
                  <IoBarChartSharp className='text-2xl'/>
                </div>
                <div class="stat-title">Revenue</div>
                <div class="stat-value text-secondary">2.6M</div>
                <div class="stat-desc">21% more than last month</div>
              </div>

              <div class="stat">
                <div class="stat-figure text-primary">
                  <FaSpeakap className="text-2xl" />
                </div>
                <div class="stat-title">Total Customers</div>
                <div class="stat-value text-primary">25.6K</div>
                <div class="stat-desc">we have more then 1k+ customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BuisnessSummery;