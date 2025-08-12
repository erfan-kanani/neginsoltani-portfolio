import React from "react";

const Divider = ({ color, width, margin, vertically }) => {
  return (
    <div
      style={{
        height: vertically ? "30px" : "1px",
        backgroundColor: color || "white",
        width: vertically ? "1px" : width || " 100%",
        margin: margin,
      }}
    />
  );
};
export default Divider;
