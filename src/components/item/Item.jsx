import React, { useContext, useEffect, useState } from "react"
import "./item.css"
import { IoIosHeart } from "react-icons/io"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import { assets } from "../../assets/assets"
import { makeApi } from "../../api/callApi"

const Item = (props) => {
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	const [isInWishlist, setIsInWishlist] = useState(false)
	// const [loading , setLoading] = useState(true)
	const [loading, setLoading] = useState(false)


	useEffect(() => {
		const checkWishlist = async () => {
			try {
				const response = await makeApi(`/api/get-my-wishlist`, "GET")
				const wishlistItems = response.data.wishlist

				const existsInWishlist = wishlistItems.some(
					(item) => item.products._id === props.id
				)

				setIsInWishlist(existsInWishlist)
			} catch (error) {
				console.log(error)
			}
		}

		checkWishlist()
	}, [props.id])

	const toggleWishlist = async () => {
		try {
			setLoading(true)
			const method = "POST"
			const endpoint = `/api/create-wishlist/${props.id}`
			const data = await makeApi(endpoint, method)
			setIsInWishlist(!isInWishlist)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="item">
			
			<div className="item-card">
				{loading ? (
					<div className="whist_loader_main_div" >
						<div class="whislist_loader"></div>
					</div>
				) : (
					<div>
						<IoIosHeart
							className={`watchlist-icon pointer-event ${isInWishlist ? "wishlist-active" : ""
								}`}
							onClick={toggleWishlist}
						/>
					</div>
				)}
				<Link to={`/openproduct/${props.id}`}>
					<img
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
						</div>
					) : (
						<div className="food-item-counter">
							<img
								onClick={() => removeFromCart(props.id)}
								src={assets.add_icon_red}
								alt=""
							/>
							<p className="cart-item-no">{cartItems[props.id]}</p>
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
