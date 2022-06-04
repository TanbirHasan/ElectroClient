import React from "react";
import picture from "../Image/warhouse.jpg";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div className=" bg-base-200 my-16">
      <h1 className=" text-center text-4xl uppercase pt-10">About Us</h1>
      <div class="hero min-h-screen">
     
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={picture}
            class="lg:w-2/4 rounded-lg shadow-2xl sm:w-full"
            alt=""
          />
          <div>
            <Fade left>
              <h1 class="text-5xl font-bold">35Years Of Experience</h1>

              <p class="py-6">
                About Us 35Years Of Experience Our commitment to bring
                professionalism, good service & trust to the service &
                maintenance business. We take immense pride in sending some of
                the most of professional handymen to yours homes to fix things
                that aren't workings.
              </p>

              <button class="btn btn-primary">Know More</button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
