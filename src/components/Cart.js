import React from "react";
import { addTocart } from "../redux/createSlice";
import { useDispatch } from "react-redux";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ product }) => {
  const { name, image, price } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleAddProduct = () => {
    dispatch(addTocart(product));
    navigate("/wishlist");
  };

  return (
    <>
      <div>
        <div
          className="productCard2"
          style={{
            width: "60rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            height: "15rem",
          }}
        >
          <img src={image} alt="" style={{ width: "50%", height: "50%" }} />
          <div>
            <h4>{name}</h4>
            <h4>{price}</h4>
          </div>
          <button id="add-btn" onClick={handleAddProduct}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
