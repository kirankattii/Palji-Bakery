import React, { useContext } from "react"
import "./productDisplay.css"
import { Link, useNavigate } from "react-router-dom"

import { ShopContext } from "../../context/ShopContext"
import { assets } from "../../assets/assets"
import { IoIosHeart } from "react-icons/io"
const ProductDisplay = (props) => {
	// const { products } = props
	console.log("product display", props.product.price)
	// const { productId } = useParams()
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	const navigate = useNavigate()
	const handleAddToCart = () => {
		const token = localStorage.getItem("token")
		if (!token) {
			navigate("/login") // Redirect to login page if not logged in
			return
		}
		addToCart(props.product._id)
	}
	console.log("this is openproduct", props)

	return (
		<div className="productDisplay">
			<div className="product-display-left">
				<div className="productdisplay-img-list">
					{/* {props.product.image.map((item, i) => {
						return (
							<img
								src={props.product.thumbnail}
								alt=""
							/>
						)
					})} */}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>
				</div>
				<div className="productdisplay-img">
					<img
						src={props.product.thumbnail}
						alt=""
						className="productdisplay-main-img"
					/>
				</div>
			</div>
			<div className="product-display-right">
				<h1>{props.product.name}</h1>
				<h2>{props.product.subTitle}</h2>
				<p>{props.product.description}</p>
				<div className="productdisplay-addtocart">
					<div className="productdisplay-item-cart">
						{/* <div className="productdisplay-food-item-counter">
							<img
								onClick={() => removeFromCart(props.id)}
								src={assets.add_icon_red}
								alt=""
							/>
							<p className="productdisplay-cart-item-no">
								{cartItems[props.id]}
							</p>
							<img
								onClick={() => addToCart(props.id)}
								src={assets.add_icon_green}
								alt=""
							/>
						</div> */}
						{/* <div className="productdisplay-whislist">
							<IoIosHeart />
						</div> */}
					</div>
				</div>
				{/* <button onClick={() => addToCart(props.id)}>ADD To CART</button> */}
				<div className="productdisplay-item-cart">
					{!cartItems[props.product._id] ? (
						<div
							className="productdisplay-item-addto-cart "
							// onClick={() => addToCart(props.product._id)}
							onClick={handleAddToCart}
						>
							ADD TO CART
						</div>
					) : (
						<div className="productdisplay-food-item-counter">
							<img
								onClick={() => removeFromCart(props.product._id)}
								src={assets.add_icon_red}
								alt=""
							/>
							<p className="productdisplay-cart-item-no">
								{cartItems[props.product._id]}
							</p>
							<img
								onClick={() => addToCart(props.product._id)}
								src={assets.add_icon_green}
								alt=""
							/>
						</div>
					)}
				</div>
				<button>BUY NOW</button>
			</div>
		</div>
	)
}

export default ProductDisplay
