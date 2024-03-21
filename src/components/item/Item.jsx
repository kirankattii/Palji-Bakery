import React from "react"
// import { ShopContext } from "../context"
import "./item.css"
import img1 from "../../assets/m1.png"
import { Link } from "react-router-dom"

const Item = (props) => {
	return (
		<div className="item">
			<div className="item-card">
				<Link to={`/openproduct/${props.id}`}>
					<img
						// onClick={window.scrollTo(0, 0)}
						src={props.image}
						alt=""
					/>
				</Link>
				<div className="item-price-name">
					<p className="item-name">{props.name} </p>
					<div className="old-new-price">
						<p className="old-item-price">₹{props.old_price}</p>
						<p className="new-item-price">₹{props.new_price}</p>
					</div>
				</div>
				<div className="item-addto-cart">Add To cart </div>
			</div>
		</div>
	)
}

export default Item
