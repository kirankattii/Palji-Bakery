import React from "react"
import "./productDisplay.css"

const ProductDisplay = (props) => {
	// const { products } = props
	// console.log(props.products)
	return (
		<div className="productDisplay">
			<div className="product-display-left">
				<div className="productdisplay-img-list">
					{/* {props.product.image.map((item, i) => {
						return (
							<img
								src={props.product.thumbnail}
								alt=""
							/>
						)
					})} */}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>{" "}
					<img
						src={props.product.thumbnail}
						alt=""
					/>
				</div>
				<div className="productdisplay-img">
					<img
						src={props.product.thumbnail}
						alt=""
						className="productdisplay-main-img"
					/>
				</div>
			</div>
			<div className="product-display-right">
				<h1>{props.product.name}</h1>
				<h2>{props.product.subTitle}</h2>
				<p>{props.product.description}</p>
				<div className="productdisplay-addtocart">Add To Cart</div>
				<button>ADD To CART</button>
				<button>BUY NOW</button>
			</div>
		</div>
	)
}

export default ProductDisplay
