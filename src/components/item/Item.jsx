import React, { useContext } from "react"
// import { ShopContext } from "../context"
import "./item.css"
import img1 from "../../assets/m1.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import { assets } from "../../assets/assets"

const Item = (props) => {
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	return (
		<div className="item">
			<div className="item-card">
				<Link to={`/openproduct/${props.id}`}>
					<img
						// onClick={window.scrollTo(0, 0)}
						src={props.image}
						alt=""
					/>
				</Link>
				<div className="item-price-name">
					<p className="item-name">{props.name} </p>
					<div className="old-new-price">
						<p className="old-item-price">₹{props.old_price}</p>
						<p className="new-item-price">₹{props.new_price}</p>
					</div>
				</div>
				<div className="item-cart">
					{!cartItems[props.id] ? (
						<div
							className="item-addto-cart "
							onClick={() => addToCart(props.id)}
						>
							ADD TO CART
							{/* </h2> */}
						</div>
					) : (
						<div className="food-item-counter">
							{" "}
							<img
								onClick={() => removeFromCart(props.id)}
								src={assets.add_icon_red}
								alt=""
							/>
							<p>{cartItems[props.id]}</p>
							<img
								onClick={() => addToCart(props.id)}
								src={assets.add_icon_green}
								alt=""
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Item
