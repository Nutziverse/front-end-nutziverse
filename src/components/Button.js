import React from "react";

export default function Button({ children, btnclass, type="button" }) {
  return (
    <button type={type} className={btnclass}>
      {children}
    </button>
  );
}
