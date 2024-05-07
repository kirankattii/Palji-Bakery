import React from "react"
import "./navSearchList.css"
import { Link } from "react-router-dom"
const NavSearchList = ({ product }) => {
	return (
		<div className="nav-search-list">
			<div className="nav-result-list">
				{product.map((result, id) => {
					return (
						<Link
							to={`/product/product-details/${result._id}`}
							className="result-list"
						>
							<img
								src={result.thumbnail}
								alt=""
							/>
							<h1>{result.name}</h1>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default NavSearchList
