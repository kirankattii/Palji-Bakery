// import React from "react"
// import { Route, Routes } from "react-router"
// import Allproduct from "../AdminComponents/product/Allproduct"
// import AdminProductDetaills from "../AdminComponents/product/adminProductDetaills"
// import UpdateProduct from "../AdminComponents/product/adminUpdateProduct"
// import Adminsidebar from "../AdminComponents/slidebar/adminsidebar"
// import AdminaddProduct from "../AdminComponents/product/adminaddProduct"
// import Getallcatogory from "../AdminComponents/catogory/getallcatogory"
// import Addcatogory from "../AdminComponents/catogory/addcatogory"
// import Editcategories from "../AdminComponents/catogory/editcategories"
// import Allorder from "../AdminComponents/Order/allorder"
// import Orderdetails from "../AdminComponents/Order/orderdetails"
// import Admindasboard from "../AdminComponents/dasboard/admindasboard"
// import Allproduct from "../AdminComponents/product/Allproduct";
// import AdminProductDetaills from "../AdminComponents/product/adminProductDetaills";
// import UpdateProduct from "../AdminComponents/product/adminUpdateProduct";
// import Adminsidebar from "../AdminComponents/slidebar/adminsidebar";
// import AdminaddProduct from "../AdminComponents/product/adminaddProduct";
// import Getallcatogory from "../AdminComponents/catogory/getallcatogory";
// import Addcatogory from "../AdminComponents/catogory/addcatogory";
// import Editcategories from "../AdminComponents/catogory/editcategories";
// import Allorder from "../AdminComponents/Order/allorder";
// import Orderdetails from "../AdminComponents/Order/orderdetails";
// import Admindasboard from "../AdminComponents/dasboard/admindasboard";
// import OfferPage from "../AdminComponents/email/OfferTemplate";
// import GetallCoupan from "../AdminComponents/Coupan/coupanallcatogory";
// import AddCoupan from "../AdminComponents/Coupan/coupanCreate";
// import EditCoupan from "../AdminComponents/Coupan/coupanUpdate";

// function Admin() {
// 	return (
// 		<div className="main_admin_pages">
// 			<div className="admin_page_sidebar_div">
// 				<Adminsidebar />
// 			</div>
// 			<div className="admin_page_main_div">
// 				<Routes>
// 					<Route
// 						path="/sidebar"
// 						element={<Adminsidebar />}
// 					/>
// 					{/* products */}
// 					<Route
// 						path="/allproducts"
// 						element={<Allproduct />}
// 					/>
// 					<Route
// 						path="/add-product"
// 						element={<AdminaddProduct />}
// 					/>
// 					<Route
// 						path="/product-details/:productId"
// 						element={<AdminProductDetaills />}
// 					/>
// 					<Route
// 						path="/product-update/:productId"
// 						element={<UpdateProduct />}
// 					/>

// 					{/* category */}
// 					<Route
// 						path="/all-categories"
// 						element={<Getallcatogory />}
// 					/>
// 					<Route
// 						path="/add-category"
// 						element={<Addcatogory />}
// 					/>
// 					<Route
// 						path="/category-update/:Id"
// 						element={<Editcategories />}
// 					/>

//           {/* orders */}
//           <Route path="/all-orders" element={<Allorder />} />
//           <Route path="/order/:id" element={<Orderdetails/>} />

//           {/* coupan */}
//           <Route path="/All-coupan" element={<GetallCoupan />} />
//           <Route path="/add-coupan" element={<AddCoupan />} />
//           <Route path="/update-coupan" element={<EditCoupan />} />

// 					{/* admin */}
// 					<Route
// 						path="/admin-dashboard"
// 						element={<Admindasboard />}
// 					/>
// 			</div>
//           {/* admin */}
//           <Route path="/admin-dashboard" element={<Admindasboard />} />


//           {/* email send */}
//           <Route path="/send-email" element={<OfferPage />} />
//         </Routes>
// 		</div>
//   );
// }

// export default Admin





import React from "react";
import { Route, Routes } from "react-router-dom";
import Allproduct from "../AdminComponents/product/Allproduct";
import AdminProductDetails from "../AdminComponents/product/adminProductDetails";
import UpdateProduct from "../AdminComponents/product/adminUpdateProduct";
import Adminsidebar from "../AdminComponents/slidebar/adminsidebar";
import AdminaddProduct from "../AdminComponents/product/adminaddProduct";
import GetallCategory from "../AdminComponents/catogory/getallcatogory";
import AddCategory from "../AdminComponents/catogory/addCategory";
import EditCategories from "../AdminComponents/catogory/editCategories";
import Allorder from "../AdminComponents/Order/allorder";
import Orderdetails from "../AdminComponents/Order/orderdetails";
import Admindashboard from "../AdminComponents/dashboard/admindashboard";
import OfferPage from "../AdminComponents/email/OfferTemplate";
import GetallCoupon from "../AdminComponents/Coupon/couponallcategory";
import AddCoupon from "../AdminComponents/Coupon/couponCreate";
import EditCoupon from "../AdminComponents/Coupon/couponUpdate";

function Admin() {
  return (
    <div className="main_admin_pages">
      <div className="admin_page_sidebar_div">
        <Adminsidebar />
      </div>
      <div className="admin_page_main_div">
        <Routes>
          <Route path="/sidebar" element={<Adminsidebar />} />

          {/* Products */}
          <Route path="/allproducts" element={<Allproduct />} />
          <Route path="/add-product" element={<AdminaddProduct />} />
          <Route
            path="/product-details/:productId"
            element={<AdminProductDetails />}
          />
          <Route
            path="/product-update/:productId"
            element={<UpdateProduct />}
          />

          {/* Categories */}
          <Route path="/all-categories" element={<GetallCategory />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/category-update/:Id" element={<EditCategories />} />

          {/* Orders */}
          <Route path="/all-orders" element={<Allorder />} />
          <Route path="/order/:id" element={<Orderdetails />} />

          {/* Coupons */}
          <Route path="/All-coupon" element={<GetallCoupon />} />
          <Route path="/add-coupon" element={<AddCoupon />} />
          <Route path="/update-coupon" element={<EditCoupon />} />

          {/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<Admindashboard />} />

          {/* Email Send */}
          <Route path="/send-email" element={<OfferPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
