import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDecrement, productIncrement, removeTocart } from "../redux/createSlice";
import "../App.css";

const AddToCart = () => {
  const fevcart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTocart(id));
  };

  const handleIncrese = (id) =>{
    dispatch(productIncrement(id))
  }

  const handleDecrese = (id) =>{
    dispatch(productDecrement(id))
  }
  return (
    <>
      {fevcart.map((item) => {
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
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <h4>{item.price}</h4>
                </div>
                <div id="quntity">
                <button onClick={()=>handleIncrese(item.id)}>+</button>
                <p>{item.quntity}</p>
                <button onClick={()=>handleDecrese(item.id)}>-</button>
                </div>
               
                <button
                  id="remove-btn"
                  onClick={() => handleRemove({ id: item.id })}
                > Remove to Cart
                </button>
                
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AddToCart;
