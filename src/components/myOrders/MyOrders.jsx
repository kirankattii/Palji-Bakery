import React from "react"
import "./myOrders.css"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router"

const MyOrders = () => {
	const navigate = useNavigate()
	return (
		<div className="myorders">
			<div className="userprofile-heading">
				<h1>MY ORDERS</h1>
			</div>
			<div className="order-history">
				<div className="order-summary order-summary1">
					<p>Items</p>
					<p>Name</p>
					<p>Price</p>
					<p>Statue</p>
					<p style={{ textAlign: "center", fontSize: "20px" }}>
						see your <br /> orders
					</p>
				</div>
				<hr />
				{/* <br /> */}
			</div>
			<div className="order-summary order-summary2">
				<img
					src={assets.insta_icon}
					alt=""
				/>
				<p>{"Name"}</p>
				<p>₹{}</p>
				<p>{"Pending"}</p>
				<button onClick={() => navigate("./ordersummary")}>View</button>
				{/* <p>₹{item.price * cartItems[item._id]}</p> */}
			</div>
		</div>
	)
}

export default MyOrders
