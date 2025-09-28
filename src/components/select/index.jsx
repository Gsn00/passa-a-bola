import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Select({
  children,
  placeholder = "Selecione",
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value, label) => {
    setSelected(label);
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-xl px-5 py-3 w-full min-w-full max-w-full h-[48px] text-left shadow-md flex justify-between items-center"
      >
        <span>{selected || placeholder}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
          {children &&
            React.Children.map(children, (child) => (
              <li
                key={child.props.value}
                onClick={() =>
                  handleSelect(child.props.value, child.props.children)
                }
                className="px-5 py-2 cursor-pointer hover:bg-[#690A6C]/10 rounded-md"
              >
                {child.props.children}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
