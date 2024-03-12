import React from "react"

import { assets } from "../../../assets/assets"
import "./hampers.css"
import Gifts from "./Gifts/Gifts"

const Hampers = () => {
	const gifts = [{}]
	return (
		<div className="hamper-container">
			<div className="hamper-title">
				<h2>exciting RANGE OF HAMPERS </h2>
				<p>Discover our Signature Selection</p>
			</div>
			<div className="gift-slides">
				<Gifts />
				<Gifts />
				<Gifts />
			</div>
			<button className="products-btn hamper-btn">ALL PRODUCTS</button>
		</div>
	)
}

export default Hampers
