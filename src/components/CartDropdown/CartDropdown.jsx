import React, { useContext } from "react";
import "./CartDropdown.scss";
import { Link } from "react-router-dom";
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
      <Link className='logo-container' to='/checkout'>
        <Button> Go To Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
