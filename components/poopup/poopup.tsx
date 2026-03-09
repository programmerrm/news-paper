
"use client";

import { useState, useEffect } from "react";

export default function AdPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 
      transition-opacity duration-800 
      ${isVisible ? "opacity-100 bg-black/70" : "opacity-0 bg-black/0"}`}
    >
      <div
        className={`bg-[#FBF7EF] p-8 rounded-lg relative 
        max-w-200 w-full max-h-172 h-[90vh] 
        flex items-center justify-center
        transition-all duration-500
        ${isVisible ? "scale-100 opacity-100" : "scale-80 opacity-0"}`}
      >
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="text-red-700 text-2xl font-semibold">
          Place Ad
        </div>
      </div>
    </div>
  );
}