import { createContext, useEffect, useState } from "react"
import { makeApi } from "../api/callApi"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({})
	const [all_products, setall_product] = useState([])
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				// setLoading(true)
				const response = await makeApi(`/api/get-all-products`, "GET")
				setall_product(response.data.products)
			} catch (error) {
				console.error("Error fetching products:", error)
			}
		}
		fetchData()
	}, [])
	const all_product = all_products
	console.log(all_product)

	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
		}
	}
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0
		// for (const item in cartItems) {
		// 	if (cartItems[item] > 0) {
		// 		let itemInfo = all_product.find(
		// 			(product) => Number(product._id) === Number(item)
		// 		)
		// 		totalAmount += itemInfo.price * cartItems[item]
		// 	}
		// }
		return totalAmount
	}
	const getTotalCartItems = () => {
		let totalItem = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalItem += cartItems[item]
			}
		}
		return totalItem
	}
	const contextValue = {
		all_product,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
		getTotalCartItems,
	}

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider
