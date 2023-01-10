import React from "react";
import { useContext } from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartOpenContext } from "../../contexts/CartOpen";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartOpenContext);
  const { addItemToCart } = useContext(CartOpenContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
