import React from "react";
import "./rectangel.css";

const Rectangle = ({ secondary, children }) => {
  const className = secondary ? "rectangle secondary" : "rectangle primary";

  return <div className={className}>{children}</div>;
};

export default Rectangle;
