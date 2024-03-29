import React, { useEffect, useState } from "react"
import "./CSS/product.css"
import { assets } from "../assets/assets"

import { makeApi } from "../api/callApi"
import ShopCategory from "./ShopCategory"

const Product = (props) => {
	const [minPrice, setMinPrice] = useState(200)
	const [maxPrice, setMaxPrice] = useState(1000)
	const handlePriceChange = (event) => {
		const { value } = event.target
		setMaxPrice(value)
	}
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [category, setCategory] = useState("")

	// useEffect(() => {
	// 	fetch("https://pajiweb.onrender.com/api/get-all-categories/")
	// 		.then((responce) => responce.json())
	// 		.then((data) => setCategories(data))
	// 		.catch((error) => console.error("Error fetching categories:", error))
	// }, [])

	useEffect(() => {
		const fetchData = async () => {
			try {
				// setLoading(true)
				const response = await makeApi(
					`/api/get-all-products?name=${searchQuery}&category=${category} `,
					"GET"
				)
				setProducts(response.data.products)
			} catch (error) {
				console.error("Error fetching products:", error)
			}
		}
		fetchData()
	}, [searchQuery, category])

	useEffect(() => {
		async function fetchCategories() {
			try {
				// setLoading(true)
				const response = await makeApi("/api/get-all-categories", "GET")
				if (response.status === 200) {
					setCategories(response.data.categories)
				}
			} catch (error) {
				console.log("Error fetching categories:", error)
			}
		}
		fetchCategories()
	}, [])

	console.log(products)

	return (
		<div className="product">
			<div className="product-header">
				<h1>Products</h1>
			</div>
			<div className="porduct-category">
				<div className="product-sidebar">
					<div className="product-filter">
						<label>Filter By Price:</label>
						<input
							type="range"
							className="price-filter"
							value={maxPrice}
							onChange={handlePriceChange}
							min="200"
							max="1000"
						/>
						<div className="product-range-price">
							<p>₹{minPrice}</p>
							<p>₹{maxPrice}</p>
						</div>
						<button>Filter</button>
					</div>
					<div className="product-categories">
						<h1>Product Categories:</h1>
						<select
							className="add_product_input_filed add_product_dropdown"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="">Select Category</option>
							<option value="">All</option>
							{categories.map((category) => (
								<option
									key={category._id}
									value={category._id}
								>
									{category.name}
								</option>
							))}
						</select>
					</div>
					<div className="recentely-viewed"></div>
					<div className="products-search">
						<h1>Product Search:</h1>
						<div>
							<input
								type="text"
								placeholder="Search"
								id="inputBox"
								onChange={(e) => setSearchQuery(e.target.value)}
								value={searchQuery}
							/>
							<img
								src={assets.search_icon2}
								alt=""
							/>
						</div>
					</div>
				</div>

				<hr />
				<div className="all-products">
					{/* <Item /> */}
					<ShopCategory
						products={products}
						categories={categories}
					/>
				</div>
			</div>
		</div>
	)
}

export default Product
