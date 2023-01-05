import React, { useContext } from "react";
import "./ProductCard.styles.scss";
import Button from "../button/Button";
import CartItem from "../CartItem/CartItem";
import { CartOpenContext } from "../../contexts/CartOpen";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartOpenContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
