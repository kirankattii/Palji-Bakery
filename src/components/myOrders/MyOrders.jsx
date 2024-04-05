import React, { useContext, useEffect, useState } from "react"
import "./myOrders.css"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router"
import { makeApi } from "../../api/callApi"

import { Link } from "react-router-dom"
// api / get - my - order
const MyOrders = () => {
	const navigate = useNavigate()
	const [orderStatus, setOrderStatus] = useState([])
	useEffect(() => {
		const fetchWishlist = async () => {
			try {
				const response = await makeApi(`/api/get-my-order`, "GET")
				setOrderStatus(response.data.order)
			} catch (error) {
				console.log(error)
			}
		}
		fetchWishlist()
	}, [])
	console.log(orderStatus) // Check if orderStatus is populated correctly

	console.log("Order status", orderStatus)
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
			{orderStatus.map((order) => {
				return order.orderItems.map((item) => {
					if (item.productId) {
						return (
							<div
								className="order-summary order-summary2"
								key={item._id}
							>
								<img
									src={item.productId.thumbnail}
									alt=""
								/>
								<p>{item.productId.name}</p>
								<p>₹{item.totalPrice}</p>
								<p>{order.status}</p>
								<Link></Link>

								<Link to={`/userprofile/myorders/${order._id}`}>
									<button>View</button>
								</Link>
							</div>
						)
					} else {
						return null
					}
				})
			})}
		</div>
	)
}

export default MyOrders
