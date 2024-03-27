import React from "react"
import { Link } from "react-router-dom"

const ProductDropdown = () => {
	return (
		<div className="product-dropdown">
			{" "}
			<ul className="drop-down-menu">
				<li className="dropdown-li">
					<Link to="/products">Gift Hamper</Link>
				</li>
				<li className="dropdown-li">
					<Link to="/products/savory">Savory</Link>
				</li>
				<li className="dropdown-li">
					<Link to="/products/biscuits">Biscuits</Link>
				</li>
			</ul>
		</div>
	)
}

export default ProductDropdown
