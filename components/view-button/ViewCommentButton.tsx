"use client";

import React from "react";

interface ViewCommentButtonProps {
  children?: React.ReactNode;
  active?: boolean;        
  onClick?: () => void;      
}

export default function ViewCommentButton({
  children = "View Comment",
  active = false,
  onClick,
}: ViewCommentButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border px-3 py-1.5 w-full text-xs leading-4 transition cursor-pointer ${
        active
          ? "bg-red text-white border-red"
          : "border-red text-body hover:bg-red-50"
      }`}
    >
      {children}
    </button>
  );
}