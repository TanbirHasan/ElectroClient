import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
      const { id } = useParams();
      const [product,setProduct] = useState()

     
    return (
        <div>
            <h3>the product is </h3>
            
        </div>
    );
};

export default ProductDetails;