import { useEffect, useState } from "react";

const useItemsDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:7000/productdetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useItemsDetails;
