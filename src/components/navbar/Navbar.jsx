import React, { useEffect, useState } from "react"
import user_icon from "../../assets/Male User.png"
import { Link, useLocation } from "react-router-dom"
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

	const location = useLocation()

	const shouldApplySpecialStyles = () => {
		return location.pathname === "/contact" // Change '/about' to the route you want to apply special styles to
	}
	return showNavbar ? (
		<div className="navbar">
			<div className="left-navbar">
				<Link to="/login">
					<img
						src={user_icon}
						alt=""
					/>
				</Link>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/aboutus">ABOUT US</Link>
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
					<li className={shouldApplySpecialStyles() ? "special-navbar" : null}>
						<Link to="/contact">CONTACT US</Link>
					</li>
				</ul>
				<div
					className={shouldApplySpecialStyles() ? "special-search" : "search"}
				>
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
