import React from "react"
import { assets } from "../../../../assets/assets"
import "./slides.css"
import productInfo from "../Products"

const Sliders = ({ productInfo }) => {
	return (
		<div className="container">
			<div className="sliders">
				<div className="top-slider">
					<div className="cookies-images">
						<img
							src={productInfo.cookieImage}
							alt=""
						/>
						<img
							src={productInfo.cookieBgImage}
							alt=""
						/>
					</div>
					<div className="cookies-info">
						<div className="price">
							<p>{productInfo.originalPrice}/-</p>
							<p>{productInfo.discountedPrice}/-</p>
						</div>
						<h2>{productInfo.productName}</h2>
					</div>
				</div>
				<div className="bottom-slider">
					<p>Add to Cart</p>
					<div className="count">
						<span>-</span>
						<p>0</p>
						<span>+</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sliders
