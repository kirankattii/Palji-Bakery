import React, { useContext } from "react"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router"

const OpenProduct = () => {
	const { all_product } = useContext(ShopContext)
	const { productId } = useParams()
	const product = all_product.find((e) => e.id === Number(productId))
	return (
		<div className="openProduct">
			<ProductDisplay product={product} />
		</div>
	)
}

export default OpenProduct
