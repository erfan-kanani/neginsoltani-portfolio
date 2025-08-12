import React from "react";
import "./button.css";

const Button = ({ outlined, children, onClick }) => {
  const buttonClass = outlined ? "button outlined" : "button not-outlined";

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
