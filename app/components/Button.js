import React from 'react';

export default function Button({
                                 children,
                                 className = '',
                                 ...props
                               }) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ease-in-out font-body
        bg-darkblue border border-lightblue text-lightblue hover:bg-lightblue hover:text-darkblue
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
