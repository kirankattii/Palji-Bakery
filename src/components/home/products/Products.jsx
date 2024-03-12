import React from "react"
import Slider from "./sliders/Slider"
import { assets } from "../../../assets/assets"
import "./Products.css"

const Products = () => {
	const product1 = {
		productName: "Choco Chip Cookie",
		cookieImage: assets.chocoChipCookie1,
		cookieBgImage: assets.chocoChipCookiebg1,
		originalPrice: 350,
		discountedPrice: 199,
		quantity: 0,
	}
	const product2 = {
		productName: "Choco Chip Cookie",
		cookieImage: assets.chocoChipCookie2,
		cookieBgImage: assets.chocoChipCookiebg2,
		originalPrice: 350,
		discountedPrice: 199,
		quantity: 0,
	}
	const product3 = {
		productName: "Choco Chip Cookie",
		cookieImage: assets.chocoChipCookie3,
		cookieBgImage: assets.chocoChipCookiebg3,
		originalPrice: 350,
		discountedPrice: 199,
		quantity: 0,
	}
	return (
		<div className="products">
			<h1>Featured Products</h1>
			<p className="sub-heading">Discover our Signature Selection</p>
			<div className="product-slides">
				<Slider productInfo={product1} />
				<Slider productInfo={product2} />
				<Slider productInfo={product3} />
			</div>
			<button className="products-btn">ALL PRODUCTS</button>
		</div>
	)
}

export default Products
