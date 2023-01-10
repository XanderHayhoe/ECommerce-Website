import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./CheckOut.styles.scss";
import { CartOpenContext } from "../../contexts/CartOpen";
const CheckOut = () => {
  const { cartItems, addItemToCart, deleteItemFromCart } =
    useContext(CartOpenContext);
  return (
    <div>
      <h1>CheckOut ben Ben</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name} </h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => deleteItemFromCart(cartItem)}>
                Decrement
              </span>
              <span onClick={() => addItemToCart(cartItem)}> Increment</span>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default CheckOut;
