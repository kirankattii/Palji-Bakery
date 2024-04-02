import React, { useContext, useEffect, useState } from "react"
import { makeApi } from "../../api/callApi"
import "./myWatchlist.css"
import { IoIosHeart } from "react-icons/io"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import { assets } from "../../assets/assets"
import { all } from "axios"

const MyWatchlist = (props) => {
	const [wishlistItems, setWishlistItems] = useState([])
	const [isInWishlist, setIsInWishlist] = useState(false)
	const { all_product, cartItems, addToCart, removeFromCart } =
		useContext(ShopContext)
	useEffect(() => {
		const fetchWishlist = async () => {
			try {
				const response = await makeApi(`/api/get-my-wishlist`, "GET")
				setWishlistItems(response.data.wishlist)
				// const wishlistItemsTwo = response.data;

				// const existsInWishlist = wishlistItemsTwo.some(
				//   (item) => item.productId === props.id
				// );

				// setIsInWishlist(existsInWishlist);
			} catch (error) {
				console.log(error)
			}
		}

		fetchWishlist()
	}, [])

	const toggleWishlist = async (productId) => {
		try {
			console.log("----------------", productId)
			// Logic to toggle wishlist item
			await makeApi(`/api/create-wishlist/${productId}`, "POST")
			console.log(wishlistItems)

			//    wishlistItems
			await setWishlistItems(
				wishlistItems.filter((item) => item.productId !== productId)
			)

			// Call API to toggle wishlist status for the given productId
		} catch (error) {
			console.log("error------", error)
			await setWishlistItems(
				wishlistItems.filter((item) => item.productId !== productId)
			)
		}
	}

	return (
		<div className="myWatchlist">
			<div className="userprofile-heading wishlist-items">
				{wishlistItems.map((item, index) => {
					return (
						<div
							className="item "
							key={index}
						>
							<div className="item-card ">
								<IoIosHeart
									className={`watchlist-icon pointer-event wishlist-active`}
									onClick={() => toggleWishlist(item.products._id)}
								/>
								<Link to={`/openproduct/${item.products.id}`}>
									<img
										src={item.products.thumbnail}
										alt=""
									/>
								</Link>
								<div className="item-price-name">
									<p className="item-name">{item.products.name}</p>
									<div className="old-new-price">
										<p className="old-item-price">
											₹{item.products.PriceAfterDiscount}
										</p>
										<p className="new-item-price">₹{item.products.price}</p>
									</div>
								</div>

								{/* You need to handle cartItems and addToCart/removeFromCart */}

								<div className="item-cart">
									{!cartItems[item.products._id] ? (
										<div
											className="item-addto-cart "
											onClick={() => addToCart(item.products._id)}
										>
											ADD TO CART
										</div>
									) : (
										<div className="food-item-counter">
											<img
												onClick={() => removeFromCart(item.products._id)}
												src={assets.add_icon_red}
												alt=""
											/>
											<p className="cart-item-no">
												{cartItems[item.products._id]}
											</p>
											<img
												onClick={() => addToCart(item.products._id)}
												src={assets.add_icon_green}
												alt=""
											/>
										</div>
									)}
								</div>

								{/* You need to handle cartItems and addToCart/removeFromCart */}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MyWatchlist
