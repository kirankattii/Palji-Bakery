import React, { useContext, useEffect, useState } from "react"
import Breadcrum from "../components/breadcrum/Breadcrum"
import "./CSS/checkoutPayment.css"
import { ShopContext } from "../context/ShopContext"
import { useNavigate } from "react-router"
import { makeApi } from "../api/callApi"

const CheckoutPayment = () => {
	const { cartItems, all_product, removeFromCart, getTotalCartAmount } =
		useContext(ShopContext)
	const [shippingAddresses, setShippingAddresses] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectedAddress, setSelectedAddress] = useState(null)
	const [cartItem, setCartItem] = useState([])
	const [cartPoductList, setCartProductList] = useState([])
	const [coupanCode, setCoupanCode] = useState(null)

	const fetchShippingAddresses = async () => {
		try {
			setLoading(true)
			const response = await makeApi("/api/get-my-shiped-address", "GET")
			setShippingAddresses(response.data.shipedaddress)
			setLoading(false)
		} catch (error) {
			console.error("Error fetching shipping addresses: ", error)
			setLoading(false)
		}
	}
	useEffect(() => {
		const fetchCartItem = async () => {
			const response = await makeApi("/api/my-cart", "GET")
			setCartItem(response.data)
			setCartProductList(response.data.orderItems)
		}
		fetchCartItem()
	}, [])
	// action
	console.log("coupanCode", coupanCode)
	const SubmitCoupan = async (e) => {
		e.preventDefault()
		try {
			const applyCoupan = await makeApi("/api/apply-coupon", "POST", {
				coupanCode: coupanCode,
			})
			console.log(applyCoupan.data.message)
		} catch (error) {
			console.log(error)
		}
	}
	const handleAddressSelect = (address) => {
		setSelectedAddress(address)
	}

	// calling getting data
	useEffect(() => {
		fetchShippingAddresses()
	}, [])

	const navigate = useNavigate()
	return (
		<div className="checkoutpayment">
			<Breadcrum />
			<h1 className="checkout-h1">checkout & payment</h1>
			<div className="checkoutpayment-div">
				<div className="left-checkoutpayment">
					<div className="check-outt">
						<h2>Shipping Address:</h2>
						<button onClick={() => navigate("/userprofile/myaddress")}>
							Add New Address
						</button>
					</div>
					<div className="checkout-shipping-address">
						{/* <input type="checkbox" />
						<div className="checkout-checkbox">
							<div className="shipping-address-editdelete">
								<h3>shipping address</h3>
								<div>
									<button>EDIT</button>
									<button>DELETE</button>
								</div>
							</div>
							<div className="checkout-shipaddress">
								john doe xyx, block- x, sector, xx, city, state pincode
							</div>
						</div> */}
						{!loading &&
							shippingAddresses.map((address, index) => (
								<div
									key={index}
									className="address-item"
								>
									<input
										type="radio"
										id={`address-${index}`}
										name="shipping-address"
										value={address._id}
										checked={selectedAddress === address}
										onChange={() => handleAddressSelect(address)}
										className="address-radio"
									/>
									<label
										htmlFor={`address-${index}`}
										className="address-label"
									>
										{`${address.firstname} ${address.lastname}, ${address.address}, ${address.city}, ${address.state}, ${address.country}`}
									</label>
								</div>
							))}
					</div>
				</div>
				<div className="right-checkoutpayment cart-billing">
					<div className="cart-order-summary">
						<h2>order summary</h2>
						<div className="cart-billing-charges">
							<div className="cart-billing-subtotal">
								<p>SUBTOTAL</p>
								<p>₹{getTotalCartAmount()}</p>
							</div>{" "}
							<div className="cart-billing-discount">
								<p>DISCOUNT</p>
								<p>₹{0}</p>
							</div>{" "}
							<div className="cart-billing-tax">
								<p>TAX</p>
								<p>₹{0}</p>
							</div>{" "}
							<div className="cart-billing-shipping">
								<p>SHIPPING</p>
								<p>FREE</p>
							</div>{" "}
							<div className="cart-billing-shipping">
								<b>TOTAL</b>
								<b>₹{getTotalCartAmount()}</b>
							</div>
						</div>
						<button onClick={() => navigate("./payment")}>
							proceed to checkout
						</button>
						<hr />
						<p className="cart-delivery-day">
							estimated delivery by <span>29 february, 24</span>
						</p>
					</div>
					<div className="cart-promocode">
						<h2>HAVE A COUPON ?</h2>
						<div className="cart-promocode-input">
							<input
								type="text"
								placeholder="COUPON CODE"
							/>
							<button>APPLY</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutPayment
