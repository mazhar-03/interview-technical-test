import React from 'react';

export default function Dot({ className = '', dotColor = 'bg-yellow', ...props }) {
  return (
    <span
      className={`w-1.5 h-1.5 rounded-full ${dotColor} ${className}`}
      {...props}
    ></span>
  );
}
