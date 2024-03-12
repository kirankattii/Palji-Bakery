import React from "react"
import { assets } from "../../../assets/assets"
import "./customer.css"

const Customer = () => {
	return (
		<div className="customer">
			<div className="customer-cards">
				<h1>A word from our customers</h1>
				<div className="cards">
					<img
						src={assets.cust_review1}
						alt=""
					/>
					<img
						src={assets.cust_review1}
						alt=""
					/>
					<img
						src={assets.cust_review1}
						alt=""
					/>
				</div>
			</div>
			<div className="subscriber">
				<h1>Subscribe for regular updates</h1>
				<div className="subscribe-here">
					<input
						type="text"
						placeholder="Enter Your Mail"
						required
					/>
					<img
						src={assets.subscriberBtn_icon}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default Customer
