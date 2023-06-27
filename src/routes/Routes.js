import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import BookDetails from "../pages/bookDetails";
const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
