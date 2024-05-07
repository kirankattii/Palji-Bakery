import React, { useEffect, useState } from "react"
import "./payment.css"
import { assets } from "../../assets/assets"
import Orderbar from "../orderbar/orderbar.jsx"

import CartCalculation from "../CartCalculation/cartCalculation.jsx"
import { Link, useNavigate } from "react-router-dom"
import SucessGIF from "../../assets/Order Placed.gif"
import Primaryloader from "../loaders/primaryloader.jsx"
import { makeApi } from "../../api/callApi"
import { ToastContainer, toast } from "react-toastify"

const Payment = () => {
	const navigation = useNavigate()
	const [shippingAddresses, setShippingAddresses] = useState([])
	const [selectedAddress, setSelectedAddress] = useState(null)
	const [selectPaymentMethod, setSelectPaymentMethod] = useState(null)
	const [loading, setLoading] = useState(false)
	const [cartItem, setCartItem] = useState([])
	const [currentPage, setCurrentPage] = useState("CHECKOUT")
	const [orderPlaced, setOrderPlaced] = useState(false)

	useEffect(() => {
		const fetchCartItem = async () => {
			const response = await makeApi("/api/my-cart", "GET")
			setCartItem(response.data)
		}
		fetchCartItem()
	}, [])

	const handlepaymentmethodSelect = (payment) => {
		setSelectPaymentMethod(payment)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (!selectPaymentMethod) {
			toast("Please select payment method")
			return
		}
		const data = {
			shippingAddress: selectedAddress,
			paymentMethod: selectPaymentMethod,
			CartId: cartItem._id,
		}
		try {
			setLoading(true)
			const response = await makeApi("/api/create-second-order", "POST", data)
			setOrderPlaced(true)
			setTimeout(() => {
				setOrderPlaced(false)
				navigation("/product/all-products")
			}, 5000)
		} catch (error) {
			console.error("Error fetching shipping addresses: ", error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="payment">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{orderPlaced && (
				<div className="success-gif-container">
					<img
						src={SucessGIF}
						alt="Success GIF"
						className="success-gif"
					/>
				</div>
			)}
			{!orderPlaced && (
				<div>
					<div>
						<div>
							<Orderbar activeOptionName="PAYMENT" />
						</div>

						<div className="main_checkout_div">
							<div className="shipping-address-container">
								<div className="shipping-address-title">Payment Method</div>
								<div>
									<div
										className="address-item"
										onClick={() =>
											handlepaymentmethodSelect("Cash On Delievery")
										}
									>
										<input
											type="radio"
											id={`Cash On Delievery`}
											name="payment-method"
											value="Cash On Delievery"
											checked={selectPaymentMethod === "Cash On Delievery"}
											onChange={() =>
												handlepaymentmethodSelect("Cash On Delievery")
											}
											className="address-radio"
										/>
										<label
											htmlFor={`Cash On Delivery`}
											className="address-label"
										>
											Cash On Delievery
										</label>
									</div>
									<div
										className="address-item"
										onClick={() => handlepaymentmethodSelect("Razorpay")}
									>
										<input
											type="radio"
											id={`Razorpay`}
											name="payment-method"
											value="Razorpay"
											checked={selectPaymentMethod === "Razorpay"}
											onChange={() => handlepaymentmethodSelect("Razorpay")}
											className="address-radio"
										/>
										<label
											htmlFor={`Razorpay`}
											className="address-label"
										>
											Razorpay
										</label>
									</div>
								</div>
							</div>
							<div>
								{/* <CartCalculation
									tax={cartItem.taxPrice}
									shipping={cartItem.shippingPrice}
									total={cartItem.totalPrice}
									CoupanApplied={cartItem.Iscoupanapplied}
									Final={cartItem.TotalProductPrice}
									ButtonName="PLACE ORDER"
									disabled={!selectPaymentMethod}
								/> */}
								<div className="cart-order-summary">
									<h2>order summary</h2>
									<div className="cart-billing-charges">
										<div className="cart-billing-subtotal">
											<p>SUBTOTAL</p>
											<p>
												₹
												{cartItem.totalPrice
													? cartItem.totalPrice.toFixed(2)
													: "0.00"}
											</p>
										</div>{" "}
										<div className="cart-billing-discount">
											<p>DISCOUNT</p>
											<p>₹{0}</p>
										</div>{" "}
										<div className="cart-billing-tax">
											<p>TAX</p>
											<p>₹{cartItem.taxPrice}</p>
										</div>{" "}
										<div className="cart-billing-shipping">
											<p>SHIPPING</p>
											<p>{cartItem.shippingPrice}</p>
										</div>{" "}
										<div className="cart-billing-shipping">
											<b>TOTAL</b>
											<b>₹{cartItem.TotalProductPrice}</b>
										</div>
									</div>

									<button onClick={(e) => handleSubmit(e)}>Place Order</button>

									<hr />
									{/* <p className="cart-delivery-day">
										Delivery In <span>4 To 5 Days</span>
									</p> */}
								</div>
							</div>
						</div>
					</div>
					{/* )} */}
				</div>
			)}
		</div>
	)
}

export default Payment
