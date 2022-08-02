import React from 'react';

const Input = ({ type, placeholder }) => {
  return (
    <div className="mb-3">
      <input
        className="border-b-2 placeholder:text-sm p-2 w-full focus:outline-none focus:border-primary placeholder:uppercase"
        type={type}
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
