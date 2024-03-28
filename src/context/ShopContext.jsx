import { createContext, useEffect, useState } from "react"
import { makeApi } from "../api/callApi"
// import all_product from "../assets/all_products"

export const ShopContext = createContext(null)
// https://pajiweb.onrender.com/api/get-all-products
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

		// fetch("https://pajiweb.onrender.com/api/get-all-products")
		// 	.then((responce) => responce.json())
		// 	.then((data) => setall_product(data))
		// if (localStorage.getItem("auth-token")) {
		// 	fetch("http://localhost:4000/getcart", {
		// 		method: "POST",
		// 		headers: {
		// 			Accept: "application/form-data",
		// 			"auth-token": `${localStorage.getItem("auth-token")}`,
		// 			"Content-type": "application/json",
		// 		},
		// 		body: "",
		// 	}).then((data) => setCartItems(data))
		// }
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
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = all_product.find(
					(product) => product.id === Number(item)
				)
				totalAmount += itemInfo.new_price * cartItems[item]
			}
		}
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
