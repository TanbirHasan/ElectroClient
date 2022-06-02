import React, { useEffect, useState } from "react";

const useItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-shore-68933.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useItems;
