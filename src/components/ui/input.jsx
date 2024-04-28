// Input.js
import React from "react";

const Input = ({ className, id, placeholder,onChange,value }) => {
  return <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 h-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  id={id} 
  placeholder={placeholder} 
  type='text' 
  onChange={onChange}
  value={value}
  />;
};

export default Input;
