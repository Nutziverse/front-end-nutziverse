import React from "react";
import Footer from "./Footer";
import Headers from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  );
}
