import React, { useContext, useEffect, useState } from "react"
// import Slider from "./sliders/Sliders"

import { assets } from "../../../assets/assets"
import "./Products.css"
import Sliders from "./sliders/Sliders"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from "react-router"
import { makeApi } from "../../../api/callApi"
import { ShopContext } from "../../../context/ShopContext"
// import Slider from "./sliders/Sliders.jsx"
function Arrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
			}}
			onClick={onClick}
		/>
	)
}

const Products = () => {
	const [products, setProducts] = useState([])

	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
	useEffect(() => {
		async function fetchCategories() {
			try {
				// setLoading(true)
				const response = await makeApi(
					"/api/get-all-products-by-category/65f3c6ee7fd052885f56d587",
					"GET"
				)
				if (response.status === 200) {
					setProducts(response.data.products)
				}
			} catch (error) {
				console.log("Error fetching categories:", error)
			}
		}
		fetchCategories()
	}, [])

	const product1 = {
		id: products.length > 0 ? products[0]?._id : "",
		productName: products.length > 0 ? products[0].name : "",
		cookieImage: assets.chocoChipCookie1,
		cookieBgImage: assets.chocoChipCookiebg1,
		originalPrice: products.length > 0 ? products[0].PriceAfterDiscount : "",
		discountedPrice: products.length > 0 ? products[0].price : "",
		quantity: 0,
	}
	const product2 = {
		id: products.length > 0 ? products[1]?._id : "",
		productName: products.length > 0 ? products[1].name : "",
		cookieImage: assets.chocoChipCookie2,
		cookieBgImage: assets.chocoChipCookiebg2,
		originalPrice: products.length > 0 ? products[1].PriceAfterDiscount : "",
		discountedPrice: products.length > 0 ? products[1].price : "",
		quantity: 0,
	}
	// PriceAfterDiscount
	const product3 = {
		id: products.length > 0 ? products[2]?._id : "",
		productName: products.length > 0 ? products[2].name : "",
		cookieImage: assets.chocoChipCookie3,
		cookieBgImage: assets.chocoChipCookiebg3,
		originalPrice: products.length > 0 ? products[2].PriceAfterDiscount : "",
		discountedPrice: products.length > 0 ? products[2].price : "",
		quantity: 0,
	}
	const settings = {
		className: "center",
		dots: true,
		infinite: true,
		speed: 500,
		centerPadding: "120px",
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <Arrow className="nextarrow" />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	}
	const navigator = useNavigate()
	return (
		<div className="product-container">
			<h1>Featured Products</h1>
			<p className="sub-heading">Discover our Signature Selection</p>
			<div className="all-slides">
				<Slider
					{...settings}
					className="product-slide"
				>
					<div>
						<Sliders productInfo={product1} />
					</div>
					<div>
						<Sliders productInfo={product2} />
					</div>
					<div>
						<Sliders productInfo={product3} />
					</div>
				</Slider>
			</div>
			<div className="products-btn">
				<button onClick={() => navigator("/products")}>ALL PRODUCTS</button>
			</div>
		</div>
	)
}

export default Products
