import React, { useState } from "react"
import "./banner.css"
import { assets } from "../../../assets/assets"

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const banner = [
		{
			title: "Jaggery & Til",
			subTitle: "Premium Cookies",
			content:
				"Savor our Jaggery and Til Premium Cookies: a sweet and nutty blend, combining the warmth of jaggery with the crunch of sesame seeds. Perfect for a healthful snack.",
			banner_Image: assets.banner1,

			backgroundColor: "rgb(255,102,92)",
		},
		{
			title: "Moong Dal Cashew",
			subTitle: "Premium Cookies",
			content:
				"Savor our Moong Dal Cashew Premium Cookies: a luxurious mix of nutty flavors, perfect crunch, and golden bake. Ideal for indulgence or gifting.",
			banner_Image: assets.banner2,
			backgroundColor: "linear-gradient(180deg, #00B7FF 0%, #BEDAE4 100%)",
		},
		{
			title: "Punjabi Atta",
			subTitle: "Premium Cookies",
			content:
				"Indulge in our Punjabi Atta Premium Cookies: a perfect fusion of traditional whole wheat richness and crisp texture for a wholesome treat.",
			banner_Image: assets.banner3,
			backgroundColor: "linear-gradient(180deg, #00B7FF 0%, #BEDAE4 100%)",
		},
	]

	const handlePrevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? banner.length - 1 : prevSlide - 1
		)
	}

	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === banner.length - 1 ? 0 : prevSlide + 1
		)
	}

	return (
		// <div className="banner">
		// 	{banner.map((item, index) => (
		// 		<div
		// 			key={index}
		// 			className={`palji-banners ${index === currentSlide ? "active" : ""}`}
		// 		>
		// 			<div className="left-banner">
		// 				<div className="banner-info">
		// 					<div className="title">
		// 						<h2>Jaggery </h2>
		// 						<p>Premium Cookies</p>
		// 					</div>
		// 					<div>
		// 						<p className="content">{item.subTitle}</p>
		// 					</div>
		// 				</div>
		// 				<div className="cart">
		// 					<button>Add to Cart</button>
		// 				</div>
		// 			</div>
		// 			<div className="right-banner">
		// 				<img
		// 					src={item.banner_Image}
		// 					alt=""
		// 				/>
		// 			</div>
		// 		</div>
		// 	))}

		// 	<div className="arrow-btn">
		// 		<img
		// 			src={assets.left_arrow}
		// 			alt=""
		// 			onClick={handlePrevSlide}
		// 		/>
		// 		<img
		// 			src={assets.right_arrow}
		// 			alt=""
		// 			onClick={handleNextSlide}
		// 		/>
		// 	</div>
		// </div>
		<div className="banner">
			<div
				className="palji-banners"
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
								<div className="title">
									<h2>{item.title}</h2>
									<p>{item.subTitle}</p>
								</div>
								<p className="content">{item.content}</p>
							</div>
							<div className="cart">
								<button>Add to Cart</button>
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
