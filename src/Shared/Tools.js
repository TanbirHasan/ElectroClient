import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useItems from '../Hooks/UseItems';
import Singletools from './Singletools';


const Tools = () => {

   const [products, setProducts] = useItems();

   

 

 
   
 
    // const {data : tools} = useQuery("tools", () => fetch("toolsdata.json").then(res => res.json()))

   
    return (
      <div className="my-20 lg:px-20 sm:px-3">
        <h2 className="text-4xl font-bold text-center">
          Tools And Accessories
        </h2>
        <div className="flex lg:flex-row justify-center flex-wrap sm:flex-col ">
          {products.map((tools) => (
            <Singletools tools={tools} />
          ))}
        </div>
      </div>
    );
};

export default Tools;