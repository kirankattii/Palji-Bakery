import React from "react"
import "./shippingAddress.css"

const ShippingAddress = () => {
	return (
		<div className="shipping-belling-address">
			<div className="shipping-address">
				<div className="shipping-header">
					<h1>Shipping Address:</h1>
					<button>Edit</button>
				</div>
				<form action="">
					<div className="add-form-name">
						<input
							type="text"
							placeholder="First Name"
						/>
						<input
							type="text"
							placeholder="Last Name"
						/>
					</div>

					<input
						type="text"
						placeholder="Phone Number"
					/>
					<div className="add-pin-country">
						<input
							type="text"
							placeholder="Pincode"
						/>
						<input
							type="text"
							placeholder="Country"
						/>
					</div>
					<div className="add-state-city">
						<input
							type="text"
							placeholder="State"
						/>
						<input
							type="text"
							placeholder="City"
						/>
					</div>
				</form>
			</div>
			<div className="billing-address"></div>
		</div>
	)
}

export default ShippingAddress
