import React from "react";
import { Route, Routes } from "react-router";

import Allproduct from "../AdminComponents/Allproduct";
import AdminProductDetaills from "../AdminComponents/adminProductDetaills";
import UpdateProduct from "../AdminComponents/adminUpdateProduct";

function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/allproducts" element={<Allproduct />} />
        <Route path="/product-details/:productId" element={<AdminProductDetaills />} />
        <Route path="/product-update/:productId" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
