//

import React, { useState, useEffect } from "react"
import "./banner.css"
import { assets } from "../../../assets/assets"

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [backgroundColor, setBackgroundColor] = useState(null)
	const [backgroundCart, setBackgroundCart] = useState(null)
	const [animationDirection, setAnimationDirection] = useState(null)
	const banner = [
		{
			title: "Jaggery & Til",
			subTitle: "Premium Cookies",
			content:
				"Savor our Jaggery and Til Premium Cookies: a sweet and nutty blend, combining the warmth of jaggery with the crunch of sesame seeds. Perfect for a healthful snack.",
			banner_Image: assets.banner1,
			backgroundColor:
				"linear-gradient(180deg, rgba(255,102,92,1) 0%, rgba(254,165,159,1) 100%)",
			backgroundCart: "#E31E24",
		},
		{
			title: "Moong Dal Cashew",
			subTitle: "Premium Cookies",
			content:
				"Savor our Moong Dal Cashew Premium Cookies: a luxurious mix of nutty flavors, perfect crunch, and golden bake. Ideal for indulgence or gifting.",
			banner_Image: assets.banner2,
			backgroundCart: "#007897",
			backgroundColor: "linear-gradient(180deg, #00B7FF 0%, #BEDAE4 100%)",
		},
		{
			title: "Punjabi Atta",
			subTitle: "Premium Cookies",
			content:
				"Indulge in our Punjabi Atta Premium Cookies: a perfect fusion of traditional whole wheat richness and crisp texture for a wholesome treat.",
			banner_Image: assets.banner3,
			backgroundColor:
				"linear-gradient(180deg, rgba(211,126,55,1) 0%, rgba(218,180,149,1) 100%)",
			backgroundCart: "#65321C",
		},
		{
			title: "Punjabi Atta",
			subTitle: "Premium Cookies",
			content:
				"Indulge in our Punjabi Atta Premium Cookies: a perfect fusion of traditional whole wheat richness and crisp texture for a wholesome treat.",
			banner_Image: assets.banner3,
			backgroundColor:
				"linear-gradient(180deg, rgba(255,158,60,1) 0%, rgba(226,208,189,1) 100%)",
			backgroundCart: "#BB8248",
		},
		{
			title: "Punjabi Atta",
			subTitle: "Premium Cookies",
			content:
				"Indulge in our Punjabi Atta Premium Cookies: a perfect fusion of traditional whole wheat richness and crisp texture for a wholesome treat.",
			banner_Image: assets.banner3,
			backgroundColor:
				"linear-gradient(180deg, rgba(130,201,90,1) 0%, rgba(172,205,153,1) 50%, rgba(193,204,187,1) 100%)",
			backgroundCart: "#519B29",
		},
	]

	const handlePrevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? banner.length - 1 : prevSlide - 1
		)
		setAnimationDirection("prev")
	}

	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === banner.length - 1 ? 0 : prevSlide + 1
		)
		setAnimationDirection("next")
	}

	useEffect(() => {
		// JavaScript code to handle arrow clicks
		const arrowLeft = document.querySelector(".arrow-btn img:first-child")
		const arrowRight = document.querySelector(".arrow-btn img:last-child")
		const bannerSlides = document.querySelectorAll(".slide")
		let currentSlideIndex = 0

		// Function to handle click on left arrow
		arrowLeft.addEventListener("click", () => {
			goToSlide(currentSlideIndex - 1)
		})

		// Function to handle click on right arrow
		arrowRight.addEventListener("click", () => {
			goToSlide(currentSlideIndex + 1)
		})

		// Function to navigate to a specific slide
		function goToSlide(index) {
			const totalSlides = bannerSlides.length
			currentSlideIndex = (index + totalSlides) % totalSlides // Ensure index wraps around for infinite loop
			bannerSlides.forEach((slide, i) => {
				slide.classList.toggle("active", i === currentSlideIndex)
			})
		}

		return () => {
			// Cleanup event listeners
			arrowLeft.removeEventListener("click", () => {})
			arrowRight.removeEventListener("click", () => {})
		}
	}, []) // Empty dependency array ensures this effect runs only once after initial render

	useEffect(() => {
		setBackgroundColor(banner[currentSlide].backgroundColor)
		setBackgroundCart(banner[currentSlide].backgroundCart)
	}, [currentSlide])
	return (
		<div
			className="banner"
			style={{ background: backgroundColor }}
		>
			<div
				className={`palji-banners ${animationDirection}`}
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{banner.map((item, index) => (
					<div
						key={index}
						className="slide banner-flex"
						style={{ backgroundColor: item.backgroundColor }}
					>
						<div className="left-banner">
							<div className="banner-info">
								<div
									className={`title ${currentSlide === index ? "show" : ""}`}
								>
									<h2>{item.title}</h2>
									<p>{item.subTitle}</p>
								</div>
								<p
									className={`content ${currentSlide === index ? "show" : ""}`}
								>
									{item.content}
								</p>
							</div>
							<div
								className="cart5"
								style={{ backgroundColor: backgroundCart }}
							>
								<button style={{ backgroundColor: backgroundCart }}>
									Add to Cart
								</button>
							</div>
						</div>
						<div className="right-banner">
							<img
								src={item.banner_Image}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
			<div className="arrow-btn">
				<img
					src={assets.left_arrow}
					alt=""
					onClick={handlePrevSlide}
				/>
				<img
					src={assets.right_arrow}
					alt=""
					onClick={handleNextSlide}
				/>
			</div>
		</div>
	)
}

export default Banner
