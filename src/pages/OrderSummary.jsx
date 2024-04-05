import React from "react"
import "./CSS/orderSummary.css"
import { assets } from "../assets/assets"

const OrderSummary = () => {
	return (
		<div className="ordersummary">
			<div className="order-address">
				<div className="order-shipping-address">
					<h2>Shipping Address</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
						id minus est ipsa eius neque, soluta fuga alias dignissimos porro.
					</p>
					<p>
						<span>Phone Number</span> : {9696969696}
					</p>
				</div>
				<div className="billing-shipping-address">
					<h2>Billing Address</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
						id minus est ipsa eius neque, soluta fuga alias dignissimos porro.
					</p>
					<p>
						<span>Phone Number</span> : {9696969696}
					</p>
				</div>
			</div>
			<hr />
			<div className="order-summary-details">
				<img
					src={assets.banner2}
					alt=""
				/>
				<div>
					<p>{"Choconut Cookies"}</p>
					<p>₹{221}</p>
				</div>
				<div>
					<p>Order Placed : {"12/10/2024"}</p>
					<p>Delivered : {"12/10/2024"}</p>
				</div>
				<p>{"Completed"}</p>
			</div>
			<hr />
		</div>
	)
}

export default OrderSummary
