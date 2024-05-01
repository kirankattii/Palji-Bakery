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
	const [allProduct, setAllProduct] = useState([])
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
			setAllProduct(getProduct)
			setProducts(result)
			// console.log(result)
		} catch (error) {
			console.error("Error fetching products:", error)
		}
	}
	// fetchData()
	// }, [])

	const handleChange = (value) => {
		setInput(value), fetchData(value)
	}
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await makeApi("/api/get-all-categories", "GET")
				if (response.status === 200) {
					setCategories(response.data.categories)
				}
			} catch (error) {
				console.log("Error fetching categories:", error)
			}
		}
		fetchCategories()
	}, [])
	console.log(categories)

	useEffect(() => {
		// Check if token exists in local storage or any other state
		const token = localStorage.getItem("token")
		// Assuming token is stored in local storage

		if (token) {
			setIsloggedIn(true) // Set isloggedIn to true if token exists
		} else {
			setIsloggedIn(false) // Set isloggedIn to false if token doesn't exist
		}

		const timeoutId = setTimeout(() => {
			setShowNavbar(true)
		}, 1000)

		return () => clearTimeout(timeoutId)
	}, [localStorage.getItem("token")])

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
						<Link to="/Signup">LOGIN</Link>
					</button>
				)}

				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li className="product-navbar">
						<Link to="/product/all-products">
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
					<NavSearchList
						product={products}
						allProduct={allProduct}
					/>
				</div>
				{/* {isloggedIn ? (
					<div
						// to="/Signup"
						className="media-profile-icon"
					>
						<img
							onClick={() => setOpenProfile((prev) => !prev)}
							src={user_icon}
							style={{ cursor: "pointer" }}
							alt=""
						/>
					</div>
				) : (
					<button className="btn btn-primary">
						<Link to="/login">LOGIN</Link>
					</button>
				)} */}
				{isloggedIn && (
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
				)}
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
							{/* <li
								className="click-dropdown"
								// onClick={toggleCategoryDropdown}
							>
								<Link onClick={toggleCategoryDropdown}>PRODUCTS</Link>

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
							</li>{" "} */}
							<li className="click-dropdown">
								<Link
									to="#"
									onClick={toggleCategoryDropdown}
								>
									PRODUCTS <MdArrowDropDown />
								</Link>
								{categoryDropdownVisible && (
									<div className="category-dropdown">
										{categories.map((item, id) => {
											return (
												<div key={item._id}>
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
							</li>
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
					className="nav-profile-dropdown"
				/>
			)}
		</div>
	) : null
}

export default Navbar
