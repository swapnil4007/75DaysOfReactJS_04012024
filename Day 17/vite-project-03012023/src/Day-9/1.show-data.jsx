import { useEffect, useState } from "react";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Step 2: Inside useEffect & Calling API");
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log("Main data: ", data);

        console.log("Step 3: Got data form API");
        setProducts(data);
      })
      .catch((err) => {
        console.log("Step 3: Got Error from API");
        console.log("Error : ", err);
        setProducts([]);
      });
  }, []);

  console.log("1. Re-Render: ", products);

  return (
    <div>
      <h1>My Products</h1>
    </div>
  );
};

export default ShowProducts;
