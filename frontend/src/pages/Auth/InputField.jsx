import React from "react";

const InputField = ({ name, placeholder, type, label }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xs text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="rounded p-2 border shadow-sm focus:outline-none placeholder:text-xs my-1"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
