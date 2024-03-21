import React, { useContext } from "react"
import "./CSS/cart.css"
// import all_product from "../assets/all_products"
import { ShopContext } from "../context/ShopContext"

const Cart = () => {
	const { cartItems, all_product, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext)
	return (
		<div className="cart-container">
			<div className="cart-item">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
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
									<p>{item.new_price}</p>
									<p>{cartItems[item.id]}</p>
									<p>{item.new_price * cartItems[item.id]}</p>
									<p
										className="cross"
										onClick={() => removeFromCart(item.id)}
									>
										X
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
