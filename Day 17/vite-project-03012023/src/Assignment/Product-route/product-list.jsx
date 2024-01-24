import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("Error :", err);
        setProducts([]);
      });
  }, []);

  const handleItemClick = (productId) => {
    // Navigate to ProductDetail with the product ID as a parameter
    navigate("/productDetail/${productId}");
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((products) => (
          <li key={products.id} onClick={() => handleItemClick(products.id)}>
            <p>Product ID: {products.id}</p>

            <Link
              to={
                "/Assignment/Product-route/product-details/ProductDetail/${products.id}"
              }
            >
              {products.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
