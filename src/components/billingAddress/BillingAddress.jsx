import React from "react"
import "./billingAddress.css"

const BillingAddress = () => {
	return (
		<div className="my-shipping-belling-address">
			<form
				action=""
				className="address-form"
			>
				{/* <div className="my-shipping-address">
					<div className="shipping-header">
						<h2>Shipping Address:</h2>
						<button>Edit</button>
					</div>

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
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						placeholder="Address"
					></textarea>
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

				</div> */}
				<div className="my-billing-address">
					<h2>Billing Address</h2>
					<div className="same-add-checkbox">
						<input type="checkbox" />
						<p>Use same as shipping address</p>
					</div>
					<input
						type="text"
						placeholder="Name"
					/>
					<input
						type="text"
						placeholder="Phone Number"
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="5"
						placeholder="Address"
					></textarea>
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
					<input
						type="text"
						placeholder="GST Number"
					/>
					<button className="edit-address-btn">Save</button>
				</div>
			</form>
		</div>
	)
}

export default BillingAddress
