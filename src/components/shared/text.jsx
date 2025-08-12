import React from "react";
import "./text.css";

const Text = ({
  header,
  subheader,
  color,
  fontSize,
  fontWeight,
  children,
  lineHeight,
}) => {
  const baseClass = header
    ? "text-header"
    : subheader
    ? "text-subheader"
    : "text-default";

  return (
    <span
      className={`text ${baseClass}`}
      style={{
        color: color || "#1F1F1F",
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight || "inherit",
      }}
    >
      {children}
    </span>
  );
};

export default Text;
