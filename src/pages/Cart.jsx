import React, { useContext } from "react"
import "./CSS/cart.css"
// import all_product from "../assets/all_products"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router"

const Cart = () => {
	const { cartItems, all_product, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext)
	console.log("this is cart", all_product)

	const navigate = useNavigate()
	return (
		<div className="cart-container">
			<div className="cart-item">
				<div className="cart-items-title cart-items-title2">
					<p>Items</p>
					<p>Name</p>
					<p>Price</p>
					<p>Qty</p>
					<p>Total:</p> 
					<p>X</p>
				</div>
				<br />
				<hr />
				{all_product.map((item, i) => {
					if (cartItems[item._id] > 0) {
						return (
							<div>
								<div className="cart-items-title cart-items-item">
									<img
										src={item.thumbnail}
										alt=""
									/>
									<p>{item.name}</p>
									<p>₹{item.price}</p>
									<p>{cartItems[item._id]}</p> 
									<p>₹{item.price * cartItems[item._id]}</p>
									<p
										className="cross"
										onClick={() => removeFromCart(item._id)}
									>
										<img
											className="remove-cart"
											src={assets.cart_remove}
											alt=""
										/>
									</p>
								</div>
								{/* <hr /> */}
							</div>
						)
					}
				})}
			</div>
			<div className="cart-bottomm">
				<div className="cart-address">
					<h2>ADDRESS</h2>
					<p>Anurag Sagar</p>
					<p>9401, Urban Estate, Phase-2, Ludhiana-141010</p>
					<p>+91 9999999999</p>
				</div>
				<div className="cart-billing">
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

export default Cart
