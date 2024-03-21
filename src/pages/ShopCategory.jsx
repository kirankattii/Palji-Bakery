import React, { useContext } from "react"
import "./CSS/shopCategory.css"
import { ShopContext } from "../context/ShopContext"

import Item from "../components/item/Item"

const ShopCategory = (props) => {
	const { all_product } = useContext(ShopContext)
	return (
		<div className="ShopCategory-container">
			<h1>{props.name}</h1>
			<div className="shopcategory-products">
				{all_product.map((item, i) => {
					if (props.category === item.category) {
						return (
							<Item
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						)
					} else {
						return null
					}
				})}
				{/* <Item /> */}
			</div>
		</div>
	)
}

export default ShopCategory
