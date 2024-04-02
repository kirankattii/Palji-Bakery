import React from "react"
import "./myAddress.css"
import { useNavigate } from "react-router"

const MyAddress = () => {
	const navigator = useNavigate()
	return (
		<div className="myaddress">
			{" "}
			<div className="userprofile-heading">
				<h1>MY ADDRESS</h1>
			</div>
			<div className="shipping-billing-address">
				<p>
					the following addresses will be used on the checkout page by default.
				</p>
				<div className="shipping-billing-flex">
					<div className="shipping-address">
						<div className="shipping-address-flex">
							<h3>BILLING ADDRESS</h3>
							<div>
								<button onClick={() => navigator("/add-address")}>EDIT</button>
								<button>DELETE</button>
							</div>
						</div>
						<p>john doe xyx, block- x, sector, xx, city, state pincode</p>
					</div>
					<div className="billing-address">
						<div className="billing-address-flex">
							<h3>SHIPPING ADDRESS</h3>
							<div>
								<button onClick={() => navigator("/add-address")}>EDIT</button>
								<button>DELETE</button>
							</div>
						</div>
						<p>john doe xyx, block- x, sector, xx, city, state pincode</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyAddress
