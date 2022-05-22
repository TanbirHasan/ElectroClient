import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Singletools from './Singletools';


const Tools = () => {

    const [tools,setTools] = useState([]);

    useEffect(() => {
        fetch("toolsdata.json")
        .then(res => res.json())
        .then(data => setTools(data))
    },[])

 
   
 
    // const {data : tools} = useQuery("tools", () => fetch("toolsdata.json").then(res => res.json()))

   
    return (
      <div className='my-20 lg:px-20 sm:px-3'>
          <h2 className='text-4xl font-bold text-center'>Tools And Accessories</h2>
        <div className="flex lg:flex-row justify-between flex-wrap sm:flex-col ">
          {tools.map((tools) => (
            <Singletools tools={tools} />
          ))}
        </div>
      </div>
    );
};

export default Tools;