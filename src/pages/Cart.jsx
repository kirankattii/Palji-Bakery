import React, { useContext, useEffect, useState } from "react"
import "./CSS/cart.css"
// import all_product from "../assets/all_products"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router"
import { makeApi } from "../api/callApi"

const Cart = () => {
	const {
		cartItems,
		getTotalCartDiscountAmount,
		all_product,

		removeFromCart,
		getTotalCartAmount,
	} = useContext(ShopContext)

	// const totalDiscount = getTotalCartAmount() - getTotalCartDiscountAmount()
	const totalDiscount = (
		getTotalCartAmount() - getTotalCartDiscountAmount()
	).toFixed(2)

	// console.log("this is cart", all_product)

	console.log(cartItems)
	const navigate = useNavigate()

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

	return (
		<div className="cart-container">
			<div className="cart-item">
				<div className="cart-items-title cart-items-title2">
					<p>Items</p>
					<p>Name</p>
					<p>Price</p>
					<p>Qty</p>
					<p>Total:</p>
					<p>X</p>
				</div>
				<br />
				<hr />
				{cartPoductList &&
					cartPoductList.map((item, index) => (
						<div key={index}>
							<div className="cart-items-title cart-items-item">
								<img
									src={item.productId.thumbnail}
									alt=""
								/>
								<p>{item.productId.name}</p>
								<p>₹{item.productId.price}</p>
								<p>{item.quantity}</p>
								<p>₹{item.totalPrice}</p>
								<p
									className="cross"
									onClick={() => removeFromCart(item._id)}
								>
									<img
										className="remove-cart"
										src={assets.cart_remove}
										alt=""
									/>
								</p>
							</div>
							{/* <hr /> */}
						</div>
					))}
			</div>
			<div className="cart-bottomm">
				<div className="cart-address">
					{/* <h2>ADDRESS</h2> */}
					<div className="cart-shipping-address">
						{/* {!loading && shippingAddresses.map((address, index) => (
							<div key={index} className="address-item">
								<input
									type="radio"
									id={`address-${index}`}
									name="shipping-address"
									value={address._id}
									checked={selectedAddress === address}
									onChange={() => handleAddressSelect(address)}
									className='address-radio'
								/>
								<label htmlFor={`address-${index}`} className="address-label" >
									{`${address.firstname} ${address.lastname}, ${address.address}, ${address.city}, ${address.state}, ${address.country}`}
								</label>
							</div>
						))} */}
					</div>
				</div>
				<div className="cart-billing">
					<div className="cart-order-summary">
						<h2>order summary</h2>
						<div className="cart-billing-charges">
							<div className="cart-billing-subtotal">
								<p>SUBTOTAL</p>
								<p>₹{cartItem.totalPrice}</p>
							</div>{" "}
							<div className="cart-billing-discount">
								<p>DISCOUNT</p>
								<p>₹{totalDiscount}</p>
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
						<button onClick={() => navigate("./checkoutpayment")}>
							proceed to checkout
						</button>
						<hr />
						<p className="cart-delivery-day">
							estimated delivery by <span>29 february, 24</span>
						</p>
					</div>
					{/* <div className="cart-promocode">
						<h2>HAVE A COUPON ?</h2>
						<div className="cart-promocode-input">
							<input
								type="text"
								placeholder="COUPON CODE"
								value={coupanCode}
								onChange={(e) => setCoupanCode(e.target.value)}
							/>
							<button onClick={(e) => SubmitCoupan(e)}>APPLY</button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Cart

// add address api
