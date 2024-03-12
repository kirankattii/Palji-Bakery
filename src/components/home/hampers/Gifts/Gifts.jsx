import React from "react"
import "./gifts.css"
import { assets } from "../../../../assets/assets"
const Gifts = () => {
	return (
		<div className="gifts">
			<div className="hampers">
				<div className="hampers-product">
					<div className="top-hamper">
						<div className="hamper-images">
							<img
								src={assets.rapper1}
								alt=""
							/>
							<img
								src={assets.hampers}
								alt=""
							/>
							<img
								src={assets.rapper2}
								alt=""
							/>
						</div>
						<div className="hamper-info">
							<div className="price">
								<p>1699/-</p>
								<p>999/-</p>
							</div>
							<h2>Gift Hamper</h2>
						</div>
					</div>
					<div className="bottom-hampers">
						<p>Add to Cart</p>
						<div className="add-cart">
							<span>-</span>
							<p>0</p>
							<span>+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gifts
