import React from "react"
import "./productDisplay.css"

const ProductDisplay = (props) => {
	const { product } = props

	return (
		<div className="productDisplay">
			<div className="product-display-left">
				<div className="productdisplay-img-list">
					<img
						src={product.image}
						alt=""
					/>
					<img
						src={product.image}
						alt=""
					/>
					<img
						src={product.image}
						alt=""
					/>
					<img
						src={product.image}
						alt=""
					/>
				</div>
				<div className="productdisplay-img">
					<img
						src={product.image}
						alt=""
						className="productdisplay-main-img"
					/>
				</div>
			</div>
			<div className="product-display-right">
				<h1>{product.name}</h1>
				<h2>{product.subTitle}</h2>
				<p>{product.description}</p>
				{/* <div className="productdisplay-addtocart">Add To Cart</div> */}
				<button>ADD To CART</button>
				<button>BUY NOW</button>
			</div>
		</div>
	)
}

export default ProductDisplay
