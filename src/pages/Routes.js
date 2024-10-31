import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Homepage from "./Homepage"; // Assuming Homepage component exists
import Categories from "../Adminportal/Categories";
import Products from "../Adminportal/Products";

import Adminportal from "../Adminportal/Adminportal";
import Transactiondetails from "../Adminportal/Transactiondetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />{" "}

        <Route path="/adminportal" element={<Adminportal />}>
          <Route path="categories" element={<Categories/>} />
          <Route path="products" element={<Products />} />
          <Route path="transactions" element={<Transactiondetails />} />
        </Route>
        {/* Protected route for logged-in users */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
