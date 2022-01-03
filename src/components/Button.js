import React from "react";

export default function Button({ children, btnclass }) {
  return (
    <button type="button" className={btnclass}>
      {children}
    </button>
  );
}
