import React from "react"
import { assets } from "../../../assets/assets"
import "./customer.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Customer = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className="customer">
			<div className="customer-cards">
				<h1>A word from our customers</h1>
				<div className="cards">
					<Slider
						{...settings}
						className="cust-slides"
					>
						<div className="cust1">
							<img
								src={assets.cust_review1}
								alt=""
							/>
						</div>
						<div className="cust2">
							<img
								src={assets.cust_review1}
								alt=""
							/>
						</div>
						<div className="cust3">
							<img
								src={assets.cust_review1}
								alt=""
							/>
						</div>
					</Slider>
				</div>
			</div>
			<div className="subscriber">
				<h1>Subscribe for regular updates</h1>
				<div className="subscribe-here">
					<input
						type="text"
						placeholder="Enter Your Mail"
						required
					/>
					<img
						src={assets.subscriberBtn_icon}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default Customer
