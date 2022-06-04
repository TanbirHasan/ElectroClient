import React from 'react';
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

const Carousel = () => {
    return (
      <div>
        <div className="carousel">
          <div class="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full flex justify-center lg:flex-row items-center sm:flex flex-col-reverse"
            >
              <Fade top>
                <div className="mx-10">
                  <h3 className="text-2xl">Big Sale on</h3>
                  <h2 className="text-6xl font-bold">Drill Machine</h2>
                  <Link to="/tools">
                    {" "}
                    <button class="btn btn-outline btn-accent">Buy Now</button>
                  </Link>
                </div>
              </Fade>

              <div className="mx-10">
                <Fade top>
                  <img
                    src="https://i.ibb.co/YD7dvv5/electricdrill-removebg-preview.png"
                    alt="tools"
                    height="600"
                    width="500"
                  />
                </Fade>
              </div>

              {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
                <a
                  href="#slide4"
                  class="btn btn-circle bg-white text-black border-0"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  class="btn btn-circle bg-white text-black border-0"
                >
                  ❯
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      // <div className='carousel'>
      //   <div class="carousel w-full">
      //     <div id="slide1" className="carousel-item relative w-full flex flex-col ">
      //       <div className="absolute top-2/4 left-1/4  text-white shadow-white ">
      //         <h2 className="text-6xl font-semibold">
      //           Welocome to Electro House
      //         </h2>
      //         <p className="text-4xl font-semibold">
      //           Here you can find all the electirc products
      //         </p>
      //         <button class="mt-5 btn btn-outline btn-primary">Shop Now</button>
      //       </div>
      //       <img
      //         src="https://i.ibb.co/LgBZt2y/pexels-cottonbro-4488660.jpg"

      //         alt="pic"
      //         class="w-full object-cover"
      //       />{" "}
      //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      //         <a href="#slide4" class="btn btn-circle">
      //           ❮
      //         </a>
      //         <a href="#slide2" class="btn btn-circle">
      //           ❯
      //         </a>
      //       </div>
      //     </div>
      //     <div id="slide2" class="carousel-item relative w-full">
      //       <img
      //         src="https://i.ibb.co/XtBMch9/electric.jpg"
      //         alt="pic"
      //         class="w-full object-cover"
      //       />{" "}
      //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      //         <a href="#slide1" class="btn btn-circle">
      //           ❮
      //         </a>
      //         <a href="#slide3" class="btn btn-circle">
      //           ❯
      //         </a>
      //       </div>
      //     </div>
      //     <div id="slide3" class="carousel-item relative w-full">
      //       <img
      //         src="https://i.ibb.co/cN1LDZG/electric2.jpg"
      //         alt="pic"
      //         class="w-full object-cover "
      //       />{" "}
      //       <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
      //         <a href="#slide2" class="btn btn-circle">
      //           ❮
      //         </a>
      //         <a href="#slide4" class="btn btn-circle">
      //           ❯
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
};

export default Carousel;