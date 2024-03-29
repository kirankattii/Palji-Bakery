import React, { useState, useEffect } from "react"
import "../../adminCss/allproduct.css"
import { makeApi } from "../../api/callApi"
import { Link } from "react-router-dom"
import ConfirmationModal from "./admindeleteproduct"

import Loader from "../../components/loader/loader"

const Allproduct = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [deleteProductId, setDeleteProductId] = useState(null)
	const [category, setCategory] = useState("")
	const [categories, setCategories] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [stockQuery, setStockQuery] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await makeApi(
					`/api/get-all-products?name=${searchQuery}&category=${category} `,
					"GET"
				)
				setProducts(response.data.products)
			} catch (error) {
				console.error("Error fetching products:", error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [searchQuery, category])

	const deleteProduct = async (productId) => {
		try {
			const response = await makeApi(
				`/api/delete-product/${productId}`,
				"DELETE"
			)
			console.log(response)
			setProducts(products.filter((product) => product._id !== productId))
		} catch (error) {
			console.error("Error deleting product:", error)
		}
	}

	const handleDeleteConfirm = () => {
		if (deleteProductId) {
			deleteProduct(deleteProductId)
			setDeleteProductId(null)
		}
	}

	useEffect(() => {
		async function fetchCategories() {
			try {
				setLoading(true)
				const response = await makeApi("/api/get-all-categories", "GET")
				if (response.status === 200) {
					setCategories(response.data.categories)
				}
			} catch (error) {
				console.log("Error fetching categories:", error)
			} finally {
				setLoading(false)
			}
		}
		fetchCategories()
	}, [])

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div>
					<div className="admin_add_product_button_div">
						<Link to="/admin/add-product">
							<div className="admin_add_product_button">Add product</div>
						</Link>
					</div>
					{/* filter bar */}
					<div className="main_admin_all_product_filter_bar">
						{/* search */}
						<div>
							<div className="inputBox_container">
								<svg
									className="search_icon"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
									alt="search icon"
								>
									<path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
								</svg>
								<input
									className="inputBox"
									id="inputBox"
									type="text"
									value={searchQuery}
									placeholder="Search For Products"
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>
						</div>
						{/* category */}
						<div>
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
						{/* in a stock */}
						<div>
							<select
								className="add_product_input_filed add_product_dropdown"
								// value={category}
								onChange={(e) => setStockQuery(e.target.value)}
							>
								<option value="">All product</option>
								<option value="true">In a stock</option>
								<option value="false">Out of stock</option>
							</select>
						</div>
					</div>
					<div className="product-list">
						{products.map((product) => (
							<div
								key={product._id}
								className="product-card"
							>
								<img
									src={product.thumbnail}
									alt={product.name}
								/>
								<div className="product-info">
									<h3>{product.name}</h3>
									<p>Price: ₹{product.price}</p>
									<p>Stock: {product.quantity}</p>
									<p>Brand: {product.brand}</p>
									<p>Brand: {product?.category?.name}</p>
								</div>
								<div className="all_products_page_button">
									<Link to={`/admin/product-update/${product._id}`}>
										<button className="edit_button_all_product">Edit</button>
									</Link>
									<button
										onClick={() => setDeleteProductId(product._id)}
										className="delete_button_all_product"
									>
										Delete
									</button>
								</div>
								<div>
									<Link to={`/admin/product-details/${product._id}`}>
										<button className="view_button_all_product">View</button>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			<ConfirmationModal
				isOpen={deleteProductId !== null}
				onClose={() => setDeleteProductId(null)}
				onConfirm={handleDeleteConfirm}
			/>
		</>
	)
}

export default Allproduct
