import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Store from "./../pages/Store";
import About from "./../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Store />} />
      <Route path="/store" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
