import React, { useState } from "react"
import "./CSS/product.css"
import { assets } from "../assets/assets"
import { Link, Outlet } from "react-router-dom"

const Product = () => {
	const [minPrice, setMinPrice] = useState(200)
	const [maxPrice, setMaxPrice] = useState(1000)
	const handlePriceChange = (event) => {
		const { value } = event.target
		setMaxPrice(value)
	}
	// const filterProduct

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
						<ul>
							<li>
								<Link to="/products">Gift Hamper</Link>
							</li>
							<li>
								<Link to="/products/savory">Savory</Link>
							</li>
							<li>
								<Link to="/products/biscuits">Biscuits</Link>
							</li>
						</ul>
					</div>
					<div className="recentely-viewed"></div>
					<div className="products-search">
						<h1>Product Search:</h1>
						<div>
							<input
								type="text"
								placeholder="Search"
							/>
							<img
								src={assets.search_icon2}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="media-product-sidebar">
					<div className="media-product-categories">
						<h1>Product Categories:</h1>
						<ul>
							<li>
								<Link to="/products">Gift Hamper</Link>
							</li>
							<li>
								<Link to="/products/savory">Savory</Link>
							</li>
							<li>
								<Link to="/products/biscuits">Biscuits</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="all-products">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Product
