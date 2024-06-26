import React from "react"
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import AboutUs from "./components/aboutus/AboutUs"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import UserProfile from "./pages/UserProfile"
import ShopCategory from "./pages/ShopCategory"
import OpenProduct from "./pages/OpenProduct"
import Cart from "./pages/Cart"
import MyAccount from "./components/myAccount/MyAccount"
import MyOrders from "./components/myOrders/MyOrders"
import MyAddress from "./components/myAddress/MyAddress"
import MyWatchlist from "./components/myWatchlist/MyWatchlist"
import ShippingAddress from "./components/shippingAddress/ShippingAddress"
import EditUserProfile from "./components/editUserProfile/EditUserProfile"
import CheckoutPayment from "./pages/CheckoutPayment"
import BillingAddress from "./components/billingAddress/BillingAddress"
import Payment from "./components/Payment/Payment"
import OrderSummary from "./pages/OrderSummary"
import ForgotPasswordForm from "./components/login/sendMail"
import OtpVerifiedForm from "./components/login/otp"
import ProductDetails from "./components/productDetails/ProductDetails"
import Products from "./pages/products.jsx"
import Checkout from "./components/pay/Checkout.jsx"

function App() {
	// const [categories, setCategories] = useState([])
	// const location = useLocation()
	// useEffect(() => {
	// 	fetch("https://pajiweb.onrender.com/api/get-all-categories/")
	// 		.then((responce) => responce.json())
	// 		.then((data) => setCategories(data))
	// 		.catch((error) => console.error("Error fetching categories:", error))
	// }, [])
	// const categoriesName = categories.categories
	// console.log(categoriesName)

	return (
		<div className="app">
			{!location.pathname.startsWith("/admin") && <Navbar />}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/aboutus"
					element={<AboutUs />}
				/>
				{/* <Route
					path="/products"
					element={<Product />}
				/>
				<Route
					path="/openproduct"
					element={<OpenProduct />}
				>
					<Route
						path=":productId"
						element={<OpenProduct />}
					/>
				</Route> */}
				<Route
					path="/product/*"
					element={<Products />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>{" "}
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/userprofile"
					element={<UserProfile />}
				>
					<Route
						index
						element={<MyAccount profile="Profile Information" />}
					/>
					<Route
						path="/userprofile/myorders"
						element={<MyOrders />}
					/>
					<Route
						path="/userprofile/myaddress"
						element={<MyAddress />}
					/>{" "}
					<Route
						path="/userprofile/mywatchlist"
						element={<MyWatchlist />}
					/>
				</Route>
				<Route
					path="/edit-userprofile"
					element={<EditUserProfile />}
				/>
				<Route
					path="/shipping-address"
					element={<ShippingAddress />}
				/>
				<Route
					path="/billing-address"
					element={<BillingAddress />}
				/>
				<Route
					path="/cart/checkout"
					element={<Checkout />}
				/>
				<Route
					path="/cart/checkoutpayment"
					element={<CheckoutPayment />}
				/>
				<Route
					path="/cart/checkoutpayment/payment"
					element={<Payment />}
				/>
				<Route
					path="/userprofile/myorders/:ordersummary"
					element={<OrderSummary />}
				/>
				<Route
					path="/:productdetails/:productdetails"
					element={<ProductDetails />}
				/>
				{/* <Route
					path="/admin/*"
					element={<Admin />}
				/> */}
				<Route
					path="/Forgot-Password"
					element={<ForgotPasswordForm />}
				/>
				<Route
					path="/otp-verified"
					element={<OtpVerifiedForm />}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
