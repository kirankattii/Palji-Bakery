import React, { useContext } from "react"
import "./myWatchlist.css"
import Item from "../item/Item"
import { ShopContext } from "../../context/ShopContext"
import React, { useEffect, useState } from "react"
import { makeApi } from "../../api/callApi"
import "./myWatchlist.css"
import { IoIosHeart } from "react-icons/io"
import { Link } from "react-router-dom"

const MyWatchlist = () => {
	const [wishlistItems, setWishlistItems] = useState([])
	const [isInWishlist, setIsInWishlist] = useState(false)

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

	const { all_product } = useContext(ShopContext)
	console.log("wishlist", all_product)

	return (
		<div className="myWatchlist">
			<div className="userprofile-heading">
				{wishlistItems.map((item, index) => {
					return (
						<div
							className="item"
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
										<p className="old-item-price">₹{item.products.old_price}</p>
										<p className="new-item-price">₹{item.products.new_price}</p>
									</div>
								</div>
								{/* You need to handle cartItems and addToCart/removeFromCart */}
							</div>
						</div>
					)
				})}
				{all_product?.map((item, i) => (
					<Item
						products={item}
						key={i}
					/>
				))}
			</div>
		</div>
	)
}

export default MyWatchlist
