import React, { useEffect, useState } from "react";
import { Await, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/${id}")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetail;
