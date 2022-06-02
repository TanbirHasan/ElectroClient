import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://infinite-shore-68933.herokuapp.com/productdetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useItemsDetails;
