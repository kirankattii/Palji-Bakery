import React from "react";
import { Route, Routes } from "react-router";

import Allproduct from "../AdminComponents/product/Allproduct";
import AdminProductDetaills from "../AdminComponents/product/adminProductDetaills";
import UpdateProduct from "../AdminComponents/product/adminUpdateProduct";
import Adminsidebar from "../AdminComponents/slidebar/adminsidebar";
import AdminaddProduct from "../AdminComponents/product/adminaddProduct";

function Admin() {
  return (
    <div className="main_admin_pages" >
      <div className="admin_page_sidebar_div" >
        <Adminsidebar />
      </div>
      <div className="admin_page_main_div" >
        <Routes>
          <Route path="/allproducts" element={<Allproduct />} />
          <Route path="/add-product" element={<AdminaddProduct />} />
          <Route
            path="/product-details/:productId"
            element={<AdminProductDetaills />}
          />
          <Route
            path="/product-update/:productId"
            element={<UpdateProduct />}
          />
          <Route path="/sidebar" element={<Adminsidebar />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
