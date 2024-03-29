import React from "react"

import { assets } from "../../../assets/assets"
import "./hampers.css"
import Gifts from "./Gifts/Gifts"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

const Hampers = () => {
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
		// <div className="hamper-container">
		// 	<div className="hamper-title">
		// 		<h2>exciting RANGE OF HAMPERS </h2>
		// 		<p>Discover our Signature Selection</p>
		// 	</div>
		// 	<div className="gift-slides">
		// 		<Gifts />
		// 		<Gifts />
		// 		<Gifts />
		// 	</div>
		// 	<button className="products-btn hamper-btn">ALL PRODUCTS</button>
		// </div>

		<div className="gift-container">
			<h1>Featured Products</h1>
			<p className="sub-heading">Discover our Signature Selection</p>
			<div className="all-gift">
				<Slider
					{...settings}
					className="gift-slide"
				>
					<div>
						<Gifts />
					</div>
					<div>
						<Gifts />
					</div>
					<div>
						<Gifts />
					</div>
				</Slider>
			</div>
			<div className="products-btn">
				<button>ALL PRODUCTS</button>
			</div>
		</div>
	)
}

export default Hampers
