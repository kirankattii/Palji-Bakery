import React, { useEffect, useState } from "react"
import user_icon from "../../assets/Male User.png"
import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import "./navbar.css"

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowNavbar(true)
		}, 1000)

		return () => clearTimeout(timeoutId)
	}, [])

	return showNavbar ? (
		<div className="navbar">
			<div className="left-navbar">
				<img
					src={user_icon}
					alt=""
				/>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/">Products</Link>
					</li>
					<li>
						<Link to="/">ABOUT US</Link>
					</li>
				</ul>
			</div>
			<img
				className="center-logo"
				src={assets.logo2}
				alt=""
			/>
			<div className="right-navbar">
				<ul>
					<li>
						<Link>CONTACT US</Link>
					</li>
				</ul>
				<div className="search">
					<input
						type="text"
						placeholder="SEARCH"
					/>
					<img
						src={assets.search_icon}
						alt=""
					/>
				</div>
				<div className="cart">
					<span className="cart-no">1</span>
					<img
						src={assets.cart_icon}
						alt=""
					/>
				</div>
			</div>
		</div>
	) : null
}

export default Navbar
