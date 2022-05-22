import React from 'react';

const Carousel = () => {
    return (
      <div className='carousel'>
        <div class="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full flex flex-col ">
            <div className="absolute top-2/4 left-1/4  text-white shadow-white ">
              <h2 className="text-6xl font-semibold">
                Welocome to Electro House
              </h2>
              <p className="text-4xl font-semibold">
                Here you can find all the electirc products
              </p>
              <button class="mt-5 btn btn-outline btn-primary">Shop Now</button>
            </div>
            <img
              src="https://i.ibb.co/LgBZt2y/pexels-cottonbro-4488660.jpg"
              height="500"
              alt="pic"
              class="w-full mix-blend-normal"
            />{" "}
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/XtBMch9/electric.jpg"
              alt="pic"
              class="w-full object-cover"
            />{" "}
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/cN1LDZG/electric2.jpg"
              alt="pic"
              class="w-full object-cover "
            />{" "}
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Carousel;