import React from "react"
import { Route, Routes } from "react-router"

<<<<<<< HEAD
import Allproduct from "../AdminComponents/product/Allproduct"
import AdminProductDetaills from "../AdminComponents/product/adminProductDetaills"
import UpdateProduct from "../AdminComponents/product/adminUpdateProduct"
import Adminsidebar from "../AdminComponents/slidebar/adminsidebar"
import AdminaddProduct from "../AdminComponents/product/adminaddProduct"
import Getallcatogory from "../AdminComponents/catogory/getallcatogory"
import Addcatogory from "../AdminComponents/catogory/addcatogory"
import Editcategories from "../AdminComponents/catogory/editcategories"
import Allorder from "../AdminComponents/Order/allorder"
import Orderdetails from "../AdminComponents/Order/orderdetails"
import Admindasboard from "../AdminComponents/dasboard/admindasboard"
=======
import Allproduct from "../AdminComponents/product/Allproduct";
import AdminProductDetaills from "../AdminComponents/product/adminProductDetaills";
import UpdateProduct from "../AdminComponents/product/adminUpdateProduct";
import Adminsidebar from "../AdminComponents/slidebar/adminsidebar";
import AdminaddProduct from "../AdminComponents/product/adminaddProduct";
import Getallcatogory from "../AdminComponents/catogory/getallcatogory";
import Addcatogory from "../AdminComponents/catogory/addcatogory";
import Editcategories from "../AdminComponents/catogory/editcategories";
import Allorder from "../AdminComponents/Order/allorder";
import Orderdetails from "../AdminComponents/Order/orderdetails";
import Admindasboard from "../AdminComponents/dasboard/admindasboard";
import OfferPage from "../AdminComponents/email/OfferTemplate";
>>>>>>> origin/main

function Admin() {
	return (
		<div className="main_admin_pages">
			<div className="admin_page_sidebar_div">
				<Adminsidebar />
			</div>
			<div className="admin_page_main_div">
				<Routes>
					<Route
						path="/sidebar"
						element={<Adminsidebar />}
					/>
					{/* products */}
					<Route
						path="/allproducts"
						element={<Allproduct />}
					/>
					<Route
						path="/add-product"
						element={<AdminaddProduct />}
					/>
					<Route
						path="/product-details/:productId"
						element={<AdminProductDetaills />}
					/>
					<Route
						path="/product-update/:productId"
						element={<UpdateProduct />}
					/>

					{/* category */}
					<Route
						path="/all-categories"
						element={<Getallcatogory />}
					/>
					<Route
						path="/add-category"
						element={<Addcatogory />}
					/>
					<Route
						path="/category-update/:Id"
						element={<Editcategories />}
					/>

					{/* orders */}
					<Route
						path="/all-orders"
						element={<Allorder />}
					/>
					<Route
						path="/order/:id"
						element={<Orderdetails />}
					/>

<<<<<<< HEAD
					{/* admin */}
					<Route
						path="/admin-dashboard"
						element={<Admindasboard />}
					/>
				</Routes>
			</div>
		</div>
	)
=======
          {/* admin */}
          <Route path="/admin-dashboard" element={<Admindasboard />} />


          {/* email send */}
          <Route path="/send-email" element={<OfferPage />} />
        </Routes>
      </div>
    </div>
  );
>>>>>>> origin/main
}

export default Admin
