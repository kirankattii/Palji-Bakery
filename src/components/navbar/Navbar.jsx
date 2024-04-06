import React, { useContext, useEffect, useState } from "react"
import user_icon from "../../assets/Male User.png"
import { Link, useLocation } from "react-router-dom"
import { assets } from "../../assets/assets"
import { IoSearch } from "react-icons/io5"
import { HiMiniShoppingBag } from "react-icons/hi2"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdArrowDropDown } from "react-icons/md"

import "./navbar.css"
import { ShopContext } from "../../context/ShopContext"
import ProductDropdown from "../productDropdown/ProductDropdown"
import ProfileDropdown from "../profileDropdown/ProfileDropdown"
import { makeApi } from "../../api/callApi"
import NavSearchList from "../navSearchList/NavSearchList"

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false)
	const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false)
	const [isloggedIn, setIsloggedIn] = useState(false)
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
	const toggleCategoryDropdown = () => {
		setCategoryDropdownVisible(!categoryDropdownVisible)
	}

	const [openProfile, setOpenProfile] = useState(false)
	const [products, setProducts] = useState([])
	const [input, setInput] = useState("")
	// useEffect(() => {
	const fetchData = async (value) => {
		try {
			// setLoading(true)
			const response = await makeApi(`/api/get-all-products`, "GET")

			const getProduct = response.data.products
			const result = getProduct.filter((product) => {
				return (
					value &&
					product &&
					product.name &&
					product.name.toLowerCase().includes(value)
				)
			})
			setProducts(result)
			// console.log(result)
		} catch (error) {
			console.error("Error fetching products:", error)
		}
	}
	// fetchData()
	// }, [])
	console.log(products)

	const handleChange = (value) => {
		setInput(value), fetchData(value)
	}

	return showNavbar ? (
		<div className="navbar">
			<div className="left-navbar">
				{isloggedIn ? (
					<div>
						<img
							onClick={() => setOpenProfile((prev) => !prev)}
							src={user_icon}
							alt=""
						/>
					</div>
				) : (
					<button className="btn btn-primary">
						<Link to="/login">LOGIN</Link>
					</button>
				)}

				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li className="product-navbar">
						<Link to="/products">
							Products <MdArrowDropDown />
						</Link>
						<ProductDropdown />
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
				<div className="nav-search-bar">
					<div
						className={shouldApplySpecialStyles() ? "special-search" : "search"}
					>
						<input
							type="text"
							placeholder="SEARCH"
							value={input}
							onChange={(e) => handleChange(e.target.value)}
						/>
						<IoSearch className="search_icon" />
					</div>
					<NavSearchList product={products} />
				</div>
				<Link
					to="/Signup"
					className="media-profile-icon"
				>
					<img
						src={user_icon}
						alt=""
					/>
				</Link>
				<Link to="/cart">
					<div className="nav-cart">
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
							{/* <p
								className={
									shouldApplySpecialStyles() ? "special-menu-icon" : "menu-icon"
								}
								onClick={toggleMenu}
							></p> */}
							<li>
								<Link
									to="/"
									onClick={closeMenu}
								>
									HOME
								</Link>
							</li>{" "}
							{/* <li className="click-dropdown">
								<Link
								
								>
									PRODUCTS
								</Link>
							</li> */}
							{/* <li className="category-dropdown">
								<Link>Hi</Link>
								<br />
								<Link>Hi</Link>
								<br />
								<Link>Hi</Link>
								<br />
								<Link>Hi</Link>
							</li> */}
							<li
								className="click-dropdown"
								onClick={toggleCategoryDropdown}
							>
								<Link>PRODUCTS</Link>
								{categoryDropdownVisible && (
									<div className="category-dropdown">
										{categories.map((item, id) => {
											return (
												<div>
													<Link
														onClick={closeMenu}
														to="/products"
													>
														{item.name}
													</Link>
													<br />
												</div>
											)
										})}
									</div>
								)}
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
							onClick={toggleMenu}
						/>
					</nav>
				</div>
			</div>
			{openProfile && (
				<ProfileDropdown
					openProfile={setOpenProfile}
					setOpenProfile={setOpenProfile}
				/>
			)}
		</div>
	) : null
}

export default Navbar
