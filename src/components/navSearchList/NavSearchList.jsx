import React from "react"
import "./navSearchList.css"
const NavSearchList = ({ product }) => {
	return (
		<div className="nav-search-list">
			<div className="nav-result-list">
				{product.map((result, id) => {
					return <h1>{result.name}</h1>
				})}
			</div>
		</div>
	)
}

export default NavSearchList
