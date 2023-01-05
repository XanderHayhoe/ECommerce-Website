import React, { useContext } from "react";
import "./CartDropdown.scss";

import { CartOpenContext } from "../../contexts/CartOpen";

import CartItem from "../CartItem/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartOpenContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button> Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
