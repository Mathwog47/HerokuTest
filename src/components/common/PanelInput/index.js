import React from "react";
import { FiSearch } from "react-icons/fi";

export const PanelInput = ({
  type = "text",
  name = "",
  className = "bg-light w-full border-2 border-orange border-solid rounded-2 p-2 mb-3",
  onChange,
  ref = null,
  placeholder = "Type here...",
  value = "",
  isSearch = false,
}) => {
  return (
    <div className="relative">
      {isSearch ? (
        <>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
          />
          <FiSearch className="absolute bottom-7 right-5 cursor-pointer" />
        </>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          ref={ref}
        />
      )}
    </div>
  );
};
