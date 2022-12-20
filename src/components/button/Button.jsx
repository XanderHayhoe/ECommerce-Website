import "./Button.styles.scss";
import React from "react";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, variant, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[variant]}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
