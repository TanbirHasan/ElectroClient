import React, { useState } from "react";
import BlogsQA from "./BlogsQA";


const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  return (
    <div className="my-24 mx-16">
      <h2 className="text-3xl font-bold text-center mb-5">FAQ</h2>
      <div className="flex w-full mx-auto flex-col justify-center items-left">
        <BlogsQA
          title="How will you improve the performance of a React Application?"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <p>
            -Avoid inline functions as much as possible.
            <br />
            -Remember that Immutability is the key to avoid unnecessary
            re-renders.
            <br />
            -Always render hidden components like Modals and Dropdowns
            conditionally.
            <br />
            -Always call multiple APIs parallelly.
          </p>
        </BlogsQA>

        <BlogsQA
          title="What are the different ways to manage a state in a React application?"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              There are four main ways of state to properly manage React apps:
              <br />
              1. Local state
              <br />
              2. Global state
              <br />
              3. Server state
              <br />
              4. URL state
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="How does prototypical inheritance work?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p></p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              1.Import {useState} and set state variables.
              <br />
              2.Set a callback function and pass it down as a prop to the Search
              Component within App.
            </p>
          </div>
        </BlogsQA>

        <BlogsQA
          title="What is a unit test? Why should write unit tests?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div>
            <p>
              Unit tests are typically automated tests written and run by
              software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
        </BlogsQA>
      </div>
    </div>
  );
};

export default Blogs;
