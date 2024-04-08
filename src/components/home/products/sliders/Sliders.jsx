import React, { useContext } from "react"
import { assets } from "../../../../assets/assets"
import "./slides.css"
import productInfo from "../Products"
import { ShopContext } from "../../../../context/ShopContext"

const Sliders = ({ productInfo }) => {
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	return (
		<div className="container">
			<div className="sliders">
				<div className="top-slider">
					<div className="cookies-images">
						<img
							src={productInfo.cookieImage}
							alt=""
						/>
						<img
							src={productInfo.cookieBgImage}
							alt=""
						/>
					</div>
					<div className="cookies-info">
						<div className="price">
							<p>{productInfo.originalPrice}/-</p>
							<p>{productInfo.discountedPrice}/-</p>
						</div>
						<h2>{productInfo.productName}</h2>
					</div>
				</div>
				<div className="bottom-slider">
					<div className="item-cart1">
						{!cartItems[productInfo.id] ? (
							<div
								className="item-addto-cart1"
								onClick={() => addToCart(productInfo.id)}
							>
								ADD TO CART
							</div>
						) : (
							<div className="food-item-counter1">
								<img
									onClick={() => removeFromCart(productInfo.id)}
									src={assets.add_icon_red}
									alt=""
								/>
								<p className="cart-item-no1">{cartItems[productInfo.id]}</p>
								<img
									onClick={() => addToCart(productInfo.id)}
									src={assets.add_icon_green}
									alt=""
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sliders
