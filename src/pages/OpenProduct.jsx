import React, { useContext } from "react"
import ProductDisplay from "../components/productDisplay/ProductDisplay"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router"

const OpenProduct = () => {
	const { all_product } = useContext(ShopContext)
	const { productId } = useParams()
	const pro = all_product
	console.log(pro)
	const product = all_product.find((e) => e._id === Number(productId))
	console.log(product)
	return (
		<div className="openProduct">
			<ProductDisplay product={product} />
		</div>
	)
}

export default OpenProduct
