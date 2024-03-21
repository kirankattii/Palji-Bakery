import React, { useContext, useEffect, useState } from "react"
import user_icon from "../../assets/Male User.png"
import { Link, useLocation } from "react-router-dom"
import { assets } from "../../assets/assets"
import { IoSearch } from "react-icons/io5"
import { HiMiniShoppingBag } from "react-icons/hi2"
import { GiHamburgerMenu } from "react-icons/gi"

import "./navbar.css"
import { ShopContext } from "../../context/ShopContext"

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false)
	const [message, setMessage] = useState("")
	const { getTotalCartItems } = useContext(ShopContext)
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowNavbar(true)
		}, 1000)

		return () => clearTimeout(timeoutId)
	}, [])

	const location = useLocation()

	const shouldApplySpecialStyles = () => {
		return (
			location.pathname === "/contact" ||
			location.pathname === "/login" ||
			location.pathname === "/Signup" ||
			location.pathname === "/products" ||
			location.pathname === "/products/savory" ||
			location.pathname === "/products/biscuits" ||
			location.pathname === "/cart"

			// location.pathname === "/openproduct"
		)
	}

	const [moblieMenu, setMobileMenu] = useState(false)

	const toggleMenu = () => {
		setMobileMenu(!moblieMenu)
	}

	const closeMenu = () => {
		setMobileMenu(false)
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
			<Link to="/">
				<img
					className="center-logo"
					src={assets.logo2}
					alt=""
				/>
			</Link>
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
					<IoSearch className="search_icon" />
				</div>
				<Link
					to="/login"
					className="media-profile-icon"
				>
					<img
						src={user_icon}
						alt=""
					/>
				</Link>
				<Link to="/cart">
					<div className="cart">
						<span className="cart-no">{getTotalCartItems()}</span>
						<HiMiniShoppingBag
							className={
								shouldApplySpecialStyles() ? "special-cart-icon" : "cart-icon"
							}
						/>
					</div>
				</Link>

				<div className="media-navbar">
					<nav>
						<ul className={moblieMenu ? "" : "hide-mobile-menu"}>
							<li>
								<Link
									to="/"
									onClick={closeMenu}
								>
									HOME
								</Link>
							</li>{" "}
							<li>
								<Link
									to="/products"
									onClick={closeMenu}
								>
									PRODUCTS
								</Link>
							</li>{" "}
							<li>
								<Link
									to="/aboutus"
									onClick={closeMenu}
								>
									ABOUT US
								</Link>
							</li>{" "}
							<li>
								<Link
									to="/contact"
									onClick={closeMenu}
								>
									CONTACTUS
								</Link>
							</li>
						</ul>
						<GiHamburgerMenu
							className={
								shouldApplySpecialStyles() ? "special-menu-icon" : "menu-icon"
							}
							// className=""
							onClick={toggleMenu}
						/>
					</nav>
				</div>
			</div>
		</div>
	) : null
}

export default Navbar
