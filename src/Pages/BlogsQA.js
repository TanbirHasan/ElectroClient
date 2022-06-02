import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const BlogsQA = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);
  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className=" flex items-center w-full	 justify-between p-2 mt-2 rounded bg-blue-200"
      >
        <div className="flex">
          <div className="text-grey-500 font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <BsFillArrowDownCircleFill className="w-8 h-8" />
          ) : (
            <BsFillArrowUpCircleFill className="w-8 h-8" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default BlogsQA;
