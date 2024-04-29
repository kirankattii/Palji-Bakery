import React, { useEffect, useState } from "react"
import "./CSS/product.css"
import { assets } from "../assets/assets"
import { useParams } from "react-router"

import { makeApi } from "../api/callApi"
import ShopCategory from "./ShopCategory"

const Product = (props) => {
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(1000)
	const handlePriceChange = (event) => {
		const { value } = event.target
		setMaxPrice(value)
	}
	const [categories, setCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [category, setCategory] = useState("")
	const [products, setProducts] = useState([])
	const [ResultPerPage, setResultPerPage] = useState(50)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [toalProduct, setToalProduct] = useState(0)
	const [loading, setLoading] = useState(false)
	// const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await makeApi(
					`/api/get-all-products?name=${searchQuery}
					&category=${category}
					&IsOutOfStock=false&maxPrice=${maxPrice}
					&page=${currentPage}&perPage=${ResultPerPage}`,
					"GET"
				)
				// const response = await makeApi(
				// 	`/api/get-all-products?name=${searchQuery}
				// 	&category=${category}
				// 	&IsOutOfStock=false&maxPrice=${maxPrice}
				// 	 `,
				// 	"GET"
				// )
				setProducts(response.data.products)
				setToalProduct(response.data.totalProducts)
			} catch (error) {
				console.error("Error fetching products:", error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [searchQuery, category, maxPrice, currentPage])
	useEffect(() => {
		const a = Math.ceil(toalProduct / ResultPerPage)
		setTotalPages(a)
	}, [products, ResultPerPage, currentPage])

	useEffect(() => {
		async function fetchCategories() {
			try {
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
	const handlePageClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
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
							min="0"
							max="1000"
						/>
						<div className="product-range-price">
							<p>₹{minPrice}</p>
							<p>₹{maxPrice}</p>
						</div>
					</div>
					<div className="search-and-category">
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
				</div>

				<hr />
				<div className="all-products">
					{/* <Item /> */}
					{loading ? (
						<div className="all_products_spinner_loader_div">
							<div class="all_products_spinner_loader">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					) : (
						<ShopCategory
							products={products}
							categories={categories}
						/>
					)}
				</div>
			</div>
			<div className="pagination">
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(pageNumber) => (
						<button
							key={pageNumber}
							className={pageNumber === currentPage ? "active" : ""}
							onClick={() => handlePageClick(pageNumber)}
						>
							{pageNumber}
						</button>
					)
				)}
			</div>
		</div>
	)
}

export default Product
