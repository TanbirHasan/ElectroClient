import React from "react";
import webdesign from "../Image/webdesign.png";
import webdev from "../Image/webdevelopement.png";
import bootstrap from "../Image/bootstrap.png";
import react from "../Image/react.png";
import github from "../Image/github.png";
import javascript from "../Image/java-script.png";
import nodejs from "../Image/nodejs.png";
import tailwind from "../Image/tailwind.png";
import firebase from "../Image/firebase.png";
import material from "../Image/material.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="personal-info mx-16 ">
        <h1 className="text-4xl text-center font-bold my-16 ">
          Personal Information
        </h1>
        <h1 className="text-2xl">
          <strong>Name :</strong> Tanbir Hasan Mohan
        </h1>
        <p>
          <strong>Email:</strong> Mdtanbir576@gmail.com
        </p>
        <p>
          <strong>Github:</strong> https://github.com/TanbirHasan
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          https://www.linkedin.com/in/tanbir-hasan-mohan/
        </p>
      </div>
      <h1 className="text-4xl text-center font-bold my-16 ">
        Educational Information
      </h1>
      <div className="education-info justify-center items-center  grid lg:grid-cols-2 mx-24 gap-20 sm:grid-cols-1">
        <div className="card mr-5 w-full h-1/2   p-10 bg-base-100 shadow-xl">
          <h1 className="text-xl font-bold mb-3">
            BSc in Computer Science and Engineering:
          </h1>
          <p>
            <strong>Institution :</strong> International Islamic University
            Chittagong
          </p>
          <p>
            <strong>Department :</strong> Computer Science and Engineering (CSE)
          </p>
          <p>
            <strong>Academic session :</strong> Spring 2016 - Autumn 2019
          </p>
          <p>
            <strong>Duration of Course :</strong> Four Years
          </p>
          <p>
            <strong>CGPA :</strong> 3.70 (out of 4.00)
          </p>
        </div>

        <div className="flex flex-col gap-y-10 justify-center items-center">
          <div className="card w-full  mr-5 p-10 bg-base-100 shadow-xl">
            <h1 className="text-xl font-bold mb-3">
              Secondary School Certificate:
            </h1>
            <p>
              <strong>Institution :</strong> Sitakund Govt Model High School,
              Chittagong
            </p>
            <p>
              <strong> Group :</strong> Science
            </p>
            <p>
              {" "}
              <strong>Year of Passing :</strong> 2013
            </p>
            <p>
              <strong>GPA :</strong> 5.00
            </p>
          </div>

          <div className="card w-full mr-5 p-10 bg-base-100 shadow-xl">
            <p className="text-xl font-bold mb-3">
              Higher Secondary Certificate:
            </p>
            <p>
              {" "}
              <strong>Institution :</strong> Sitakund University College,
              Chittagong
            </p>
            <p>
              {" "}
              <strong> Group :</strong> Science
            </p>
            <p>
              <strong>Year of Passing :</strong> 2015
            </p>
            <p>
              <strong>GPA :</strong> 3.87
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center font-bold my-16 ">My Projects</h1>
        <a href="http://"></a>
        <a href="http://"></a>
        <a href="http://"></a>
      </div>
      <h2 className="text-center text-3xl">My Skills</h2>
      <div className="flex lg:flex-row justify-evenly mt-10 flex-wrap sm:flex flex-col">
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={webdesign} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">HTML/CSS</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={javascript} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Javascript(ES6)</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={bootstrap} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Bootstrap</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={react} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">ReactJs</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={tailwind} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">TailWind</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={github} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Github</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={nodejs} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">NodeJs</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={firebase} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Firebase</h2>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl flex flex-col items-center mx-3 my-5 lg:w-1/4 py-5 sm:w-full">
          <figure>
            <img src={material} alt="Movie" className="w-2/4" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Material UI</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
