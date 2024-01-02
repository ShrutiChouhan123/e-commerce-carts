import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Product = () => {
  const data = useSelector((state) => state.cart.data);
  return (
    <>
      <h1>Shopping Cart using redux toolkit</h1>
      {data.map((products) => {
        return <Cart key={products.id} product={products} />;
      })}
    </>
  );
};

export default Product;
