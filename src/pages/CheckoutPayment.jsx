import React, { useContext } from "react"
import Breadcrum from "../components/breadcrum/Breadcrum"
import "./CSS/checkoutPayment.css"
import { ShopContext } from "../context/ShopContext"

const CheckoutPayment = () => {
	const { cartItems, all_product, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext)
	return (
		<div className="checkoutpayment">
			<Breadcrum />
			<h1 className="checkout-h1">checkout & payment</h1>
			<div className="checkoutpayment-div">
				<div className="left-checkoutpayment">
					<div className="check-outt">
						<h2>Shipping Address:</h2>
						<button>add new address</button>
					</div>
					<div className="checkout-shipping-address">
						<input type="checkbox" />
						<div className="checkout-checkbox">
							<div className="shipping-address-editdelete">
								<h3>shipping address</h3>
								<div>
									<button>EDIT</button>
									<button>DELETE</button>
								</div>
							</div>
							<div className="checkout-shipaddress">
								john doe xyx, block- x, sector, xx, city, state pincode
							</div>
						</div>
					</div>
				</div>
				<div className="right-checkoutpayment cart-billing">
					<div className="cart-order-summary">
						<h2>order summary</h2>
						<div className="cart-billing-charges">
							<div className="cart-billing-subtotal">
								<p>SUBTOTAL</p>
								<p>₹{getTotalCartAmount()}</p>
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
								<b>₹{getTotalCartAmount()}</b>
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

export default CheckoutPayment
