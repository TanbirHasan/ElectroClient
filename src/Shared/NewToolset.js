import React from 'react';
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

const NewToolset = () => {
    return (
      <div className=" flex lg:flex-row justify-evenly my-10 px-20 sm:flex flex-col px-0 mb-5">
        <Fade left>
          <div className="new-tools-one border-2 border-solid px-5 py-5 mx-5 lg:w-2/4 shadow-xl sm:w-full mb-5">
            <h4>Tools Set</h4>
            <h2 className="text-xl font-semibold">Adjustable Wrench</h2>
            <h2 className="text-xl font-semibold">From : $350</h2>
            <Link to="/tools">
              <button className="btn btn-xs">Shop Now</button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="new-tools border-2 border-solid px-5 py-5 mx-5 lg:w-2/4 shadow-xl bg-[#E74C3C] sm:w-full">
            <h4>New Tools</h4>
            <h2 className="text-xl font-semibold">Ac Drill Machine</h2>
            <h2 className="text-xl font-semibold">From : $390</h2>
            <Link to="/tools">
              <button className="text-white btn btn-xs">Shop Now</button>
            </Link>
          </div>
        </Fade>
      </div>
    );
};

export default NewToolset;