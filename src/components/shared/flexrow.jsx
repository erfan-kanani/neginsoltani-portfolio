import React from "react";

const FlexRow = ({ children, half = false, reverse, className = "" }) => {
  if (!children || children.length !== 2) {
    console.error("FlexRow requires exactly two children.");
    return null;
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "64px",
      }}
    >
      <div
        style={{
          flex: half ? "0 0 50%" : "0 0 66%",
          display: "flex",
          justifyContent: "center",
          textAlign: reverse ? "right" : "left",
        }}
      >
        {children[0]}
      </div>
      <div
        style={{
          flex: half ? "0 0 50%" : "0 0 33%",
        }}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default FlexRow;
