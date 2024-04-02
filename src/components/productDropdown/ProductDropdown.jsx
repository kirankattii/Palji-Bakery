import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductDropdown = () => {
	const [categories, setCategories] = useState([])
	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await makeApi("/api/get-all-categories", "GET")
				if (response.status === 200) {
					setCategories(response.data.categories)
				}
			} catch (error) {
				console.log("Error fetching categories:", error)
			} finally {
			}
		}
		fetchCategories()
	}, [])

	return (
		<div className="product-dropdown">
			{" "}
			<ul className="drop-down-menu">
				{categories.map((items, i) => (
					<li className="dropdown-li">
						<Link to="/products">{items.name}</Link>
					</li>
				))}

				{/* <li className="dropdown-li">
					<Link to="/products/savory">Savory</Link>
				</li>
				<li className="dropdown-li">
					<Link to="/products/biscuits">Biscuits</Link>
				</li> */}
			</ul>
		</div>
	)
}

export default ProductDropdown
