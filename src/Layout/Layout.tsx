import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
