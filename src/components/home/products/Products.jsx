import React from "react"
// import Slider from "./sliders/Sliders"

import { assets } from "../../../assets/assets"
import "./Products.css"
import Sliders from "./sliders/Sliders"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
	return (
		// <div className="products">
		// 	<h1>Featured Products</h1>
		// 	<p className="sub-heading">Discover our Signature Selection</p>
		// 	<div className="product-slides">
		// 		<Slider {...settings}>
		// 			<div>
		// 				<Sliders productInfo={product1} />
		// 			</div>
		// 			<div>
		// 				<Sliders productInfo={product2} />
		// 			</div>
		// 			<div>
		// 				<Sliders productInfo={product3} />
		// 			</div>
		// 		</Slider>
		// 	</div>
		// 	<button className="products-btn">ALL PRODUCTS</button>
		// </div>
		// <div className="products">
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
				<button>ALL PRODUCTS</button>
			</div>
		</div>
	)
}

export default Products
