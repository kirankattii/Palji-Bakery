import React, { useEffect, useState } from "react"
import { makeApi } from "../../api/callApi"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

import "./signup.css" 

const Signup = () => {
	const navigate = useNavigate()
	const [signupSuccess, setSignupSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
	const [state, setState] = useState("Login")
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		password: "",
		email: "",
		mobileNumber: "",
	})
	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const login = async () => {
		setLoading(true)
		if (!formData.email) {
			toast.error("Please fill email")
			setLoading(false)
			return
		}
		if (!formData.password) {
			toast.error("Please fill password")
			setLoading(false)
			return
		}

		try {
			const response = await makeApi("/api/login-user", "post", formData)
			const responseData = response.data
			if (responseData.success) {
				localStorage.setItem("token", responseData.token)
				setSignupSuccess(true)
				toast.success(responseData.message, {
					onClose: () => {
						navigate("/")
					},
				})
			} else {
				console.log("Login failed:", responseData.error)
				// Handle login failure
			}
		} catch (error) {
			console.log("Error during login:", error)
			toast.error(error.response.data.message)
			// Handle error
		} finally {
			setLoading(false) // Set loading back to false after authentication attempt
		}
	}

	const signup = async () => {
		console.log("Signup function executed", formData)

		if (!formData.email) {
			toast.error("Please fill email")
			return
		}
		if (!formData.password) {
			toast.error("Please fill password")
			return
		}
		if (!formData.mobileNumber) {
			toast.error("Please fill mobileNumber")
			return
		}
		if (!formData.firstName) {
			toast.error("Please fill firstName")
			return
		}
		if (!formData.lastName) {
			toast.error("Please fill lastName")
			return
		}

		try {
			const response = await makeApi("/api/register-user", "post", formData)
			const responseData = response.data
			if (responseData.success) {
				localStorage.setItem("token", responseData.token)
				setSignupSuccess(true)
				toast.success(responseData.message || "Sign up Successfully", {
					onClose: () => {
						navigate("/")
					},
				})
			} else {
				console.log("Signup failed:", responseData.error)
				// Handle signup failure
			}
		} catch (error) {
			// console.log("Error during signup:", error)
			// toast.error(error.response.data.message)

			// Handle error
			console.log("Error during signup:", error)
			const errorMessage =
				error.response?.data?.message || "An error occurred during signup."
			toast.error(errorMessage)
		}
	}

	return (
		<>
			<ToastContainer />
			<div className="signup">
				<div className="signup-form">
					<div className="enter-name">
						{state === "Sign Up" ? (
							<input
								name="firstName"
								type="text"
								placeholder="First Name"
								onChange={changeHandler}
								value={formData.firstName}
							/>
						) : (
							""
						)}
						{state === "Sign Up" ? (
							<input
								name="lastName"
								type="text"
								placeholder="Last Name"
								value={formData.lastName}
								onChange={changeHandler}
							/>
						) : (
							""
						)}
					</div>
					<input
						name="email"
						type="email"
						placeholder="Email Address"
						value={formData.email}
						onChange={changeHandler}
					/>
					{state === "Sign Up" ? (
						<input
							name="mobileNumber"
							type="number"
							placeholder="Phone Number"
							value={formData.mobileNumber}
							onChange={changeHandler}
						/>
					) : (
						""
					)}
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={changeHandler}
					/>
					<button
						onClick={() => {
							state === "Login" ? login() : signup()
						}}
						disabled={loading}
					>
						{loading ? "Loading..." : "Continue"}
					</button>
					{state === "Login" ? (
						<Link
							to="/Forgot-Password"
							className="login-forgot-password"
						>
							Forgot Password
						</Link>
					) : (
						""
					)}

					{state === "Sign Up" ? (
						<p>
							Already have an account ?{" "}
							<span
								onClick={() => setState("Login")}
								style={{ cursor: "pointer" }}
							>
								Log in
							</span>
						</p>
					) : (
						<p className="loginsignup-login">
							Create an account <span> </span>
							<span
								onClick={() => setState("Sign Up")}
								style={{ cursor: "pointer" }}
							>
								Click Here
							</span>
						</p>
					)}
				</div>
			</div>
		</>
	)
}

export default Signup
