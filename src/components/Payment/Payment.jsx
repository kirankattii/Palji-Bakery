import React from "react"
import "./payment.css"
import { assets } from "../../assets/assets"

const Payment = () => {
   
	return (
		<div className="payment">
			<div className="cart-item">
				<div className="cart-items-title cart-items-title2">
					<p>Items</p>
					<p>Name</p>
					<p>Price</p>
					<p>Qty</p>
					<p>Total:</p>
				</div>
				<br />
				<hr /> 

				<div>
				{cartPoductList && cartPoductList.map((item,index) => (

					<div className="cart-items-title cart-items-item">
						<img
							src={assets.userprofile_icon}
							alt=""
						/>
						<p>{"name"}</p>
						<p>₹ {item.productId.price}</p>
						<p>{5}</p>
						<p>₹{120}</p>
					</div>
                                ))}

					{/* <hr /> */}
				</div>
			</div>
			<div className="cart-bottomm">
				<div className="cart-address">
					<h2>ADDRESS</h2>
					<div className="cart-shipping-address">
						<div className="cart-shipping-address-button">
							<input type="checkbox" />
							<div>
								<button onClick={() => navigate("/shipping-address")}>
									Edit
								</button>
								<button>Delete</button>
							</div>
						</div>
						<p>
							7297,Street No. 6, 22ft road, durga puri, haibowal kalan, near
							ekam fashion point, ludhiana, punjab, 141001 9501987577
							<br />
							<span>96969696</span>
						</p>
					</div>
					<div className="cart-shipping-address">
						<div className="cart-shipping-address-button">
							<input type="checkbox" />
							<div>
								<button onClick={() => navigate("/billing-address")}>
									Edit
								</button>
								<button>Delete</button>
							</div>
						</div>
						<p>
							7297,Street No. 6, 22ft road, durga puri, haibowal kalan, near
							ekam fashion point, ludhiana, punjab, 141001 9501987577
							<br />
							<span>96969696</span>
						</p>
					</div>
					<div className="two-payment">
						<h2>Payment Method:</h2>
						<div>
							<div className="payment1">
								<input type="checkbox" />
								<img
									src={assets.rozerpay}
									alt=""
								/>
								<p>RAZORRPAY</p>
							</div>
							<div className="payment1">
								<input type="checkbox" />
								<img
									src={assets.cashDelivery}
									alt=""
								/>
								<p>CASH ON DELIVERY</p>
							</div>
						</div>
					</div>
				</div>
				<div className="cart-billing">
					<div className="cart-order-summary">
						<h2>order summary</h2>
						<div className="cart-billing-charges">
							<div className="cart-billing-subtotal">
								<p>SUBTOTAL</p>
								<p>₹{cartItem.taxPrice}</p>
							</div>{" "}
							<div className="cart-billing-discount">
								<p>DISCOUNT</p>
								<p>₹{0}</p>
							</div>{" "}
							<div className="cart-billing-tax">
								<p>TAX</p>
								<p>₹{0}</p>
							</div>{" "}
							<div className="cart-billing-shipping">
								<p>SHIPPING</p>
								<p>FREE</p>
							</div>{" "}
							<div className="cart-billing-shipping">
								<b>TOTAL</b>
								<b>₹{}</b>
							</div>
						</div>
						<button onClick={() => navigate("./checkoutpayment")}>
							proceed to checkout
						</button>
						<hr />
						<p className="cart-delivery-day">
							estimated delivery by <span>29 february, 24</span>
						</p>
					</div>
					<div className="cart-promocode">
						<h2>HAVE A COUPON ?</h2>
						<div className="cart-promocode-input">
							<input
								type="text"
								placeholder="COUPON CODE"
							/>
							<button>APPLY</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
