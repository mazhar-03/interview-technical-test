import React from "react";

export default function Logo({
     className = "",
     children = "SK",
     bgColor = "#34febc",
     ...rest
   }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`text-black px-3 py-1 font-bold rounded-b-xl text-xl flex items-center justify-center w-12 h-12 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
