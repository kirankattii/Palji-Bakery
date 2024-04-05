import React, { useEffect, useState } from "react"
import "./CSS/orderSummary.css"
import { assets } from "../assets/assets"
import { useParams } from "react-router"
import { makeApi } from "../api/callApi"

const OrderSummary = () => {
	const [orderSummaryy, setOrderSummaryy] = useState([])
	const { ordersummary } = useParams()
	useEffect(() => {
		const fetchOrderSummary = async () => {
			try {
				const response = await makeApi(
					`/api/get-order-by-id/${ordersummary}`,
					"GET"
				)
				setOrderSummaryy(response.data.order)
			} catch (error) {
				console.log(error)
			}
		}
		fetchOrderSummary()
	}, [ordersummary])
	// console.log(orderSummaryy)
	return (
		<div className="ordersummary">
			<div className="order-address">
				<div className="order-shipping-address">
					<h2>Shipping Address</h2>
					{/* <p>{orderSummary.shippingAddress.firstName}</p> */}
					<p>
						{orderSummaryy.shippingAddress &&
							orderSummaryy.shippingAddress.address}
					</p>
					<p>
						<span>Phone Number</span> :{" "}
						{orderSummaryy.shippingAddress &&
							orderSummaryy.shippingAddress.phonenumber}
					</p>
				</div>
				<div className="billing-shipping-address">
					<h2>Billing Address</h2>
					<p>
						{orderSummaryy.billingAddress &&
							orderSummaryy.billingAddress.address}
					</p>
					<p>
						<span>Phone Number</span> :
						{orderSummaryy.billingAddress &&
							orderSummaryy.billingAddress.phonenumber}
					</p>
				</div>
			</div>
			<hr />
			<div className="order-summary-details">
				<img
					src={
						orderSummaryy.orderItems &&
						orderSummaryy.orderItems[0].productId.image[0]
					}
					alt=""
				/>
				<div>
					<p>
						{orderSummaryy.orderItems &&
							orderSummaryy.orderItems[0].productId.name}
					</p>
					<p>
						₹
						{orderSummaryy.orderItems && orderSummaryy.orderItems[0].totalPrice}
					</p>
				</div>
				<div>
					<p>
						Order Placed :{" "}
						{orderSummaryy.createdAt &&
							new Date(orderSummaryy.createdAt).toLocaleDateString()}
					</p>
					<p>
						Delivered :{" "}
						{orderSummaryy.deliveredAt &&
							new Date(orderSummaryy.deliveredAt).toLocaleDateString()}
					</p>
				</div>
				<p>{orderSummaryy.status}</p>
			</div>
			<hr />
		</div>
	)
}

export default OrderSummary
