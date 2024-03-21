import React, { useContext } from "react"
import "./CSS/cart.css"
// import all_product from "../assets/all_products"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"

const Cart = () => {
	const { cartItems, all_product, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext)
	return (
		<div className="cart-container">
			<div className="cart-item">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Product Name</p>
					<p>Price</p>
					<p>Qty</p>
					<p>Total:</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{all_product.map((item, i) => {
					if (cartItems[item.id] > 0) {
						return (
							<div>
								<div className="cart-items-title cart-items-item">
									<img
										src={item.image}
										alt=""
									/>
									<p>{item.name}</p>
									<p>₹{item.new_price}</p>
									<p>{cartItems[item.id]}</p>
									<p>₹{item.new_price * cartItems[item.id]}</p>
									<p
										className="cross"
										onClick={() => removeFromCart(item.id)}
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
		</div>
	)
}

export default Cart
