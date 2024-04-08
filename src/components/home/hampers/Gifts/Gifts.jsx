import React, { useContext } from "react"
import "./gifts.css"
import { assets } from "../../../../assets/assets"
import { ShopContext } from "../../../../context/ShopContext"
const Gifts = ({ products }) => {
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	return (
		<div className="gifts">
			<div className="hampers">
				<div className="hampers-product">
					<div className="top-hamper">
						<div className="hamper-images">
							<img
								src={assets.rapper1}
								alt=""
							/>
							<img
								src={products.thumbnail}
								alt=""
							/>
							<img
								src={assets.rapper2}
								alt=""
							/>
						</div>
						<div className="hamper-info">
							<div className="price">
								<p>{products.price}/-</p>
								<p>{products.PriceAfterDiscount}/-</p>
							</div>
							<h2>{products.name}</h2>
						</div>
					</div>
					<div className="bottom-hampers">
						<div className="item-cart1">
							{!cartItems[products._id] ? (
								<div
									className="item-addto-cart1"
									onClick={() => addToCart(products._id)}
								>
									ADD TO CART
								</div>
							) : (
								<div className="food-item-counter1">
									<img
										onClick={() => removeFromCart(products._id)}
										src={assets.add_icon_red}
										alt=""
									/>
									<p className="cart-item-no1">{cartItems[products._id]}</p>
									<img
										onClick={() => addToCart(products._id)}
										src={assets.add_icon_green}
										alt=""
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gifts
