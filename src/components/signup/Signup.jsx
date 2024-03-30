import React, { useEffect, useState } from "react"
import { makeApi } from "../../api/callApi"
import "./signup.css"

const Signup = () => {
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

	// const login = async () => {
	// 	console.log("Login function exituted", formData)
	// 	try {
	// 		let loginsingup = await makeApi(
	// 			"/api/login-user",
	// 			"post",
	// 			JSON.stringify(formData)
	// 		)
	// 		console.log("Login response:", loginsingup)
	// 		if (loginsingup.success) {
	// 			localStorage.setItem("auth-token", loginsingup.token)
	// 			console.log("Token stored in localStorage:", loginsingup.token)
	// 			// Redirect here if needed
	// 		} else {
	// 			console.log("Login failed:", loginsingup.error)
	// 			// Handle login failure
	// 		}
	// 	} catch (error) {
	// 		console.log("Error during login:", error)
	// 	}
	// }

	// const singup = async () => {
	// 	console.log("Login function exituted", formData)
	// 	try {
	// 		let loginsingup = await makeApi(
	// 			"/api/register-user",
	// 			"post",
	// 			JSON.stringify(formData)
	// 		)
	// 		console.log("Signup response:", loginsingup)
	// 		if (loginsingup.success) {
	// 			localStorage.setItem("auth-token", loginsingup.token)
	// 			console.log("Token stored in localStorage:", loginsingup.token)
	// 			// Redirect here if needed
	// 		} else {
	// 			console.log("Signup failed:", loginsingup.error)
	// 			// Handle signup failure
	// 		}
	// 	} catch (error) {
	// 		console.log("Error during signup:", error)
	// 	}
	// }

	// const login = async () => {
	// 	console.log("Login function exituted", formData)
	// 	let responceData = await makeApi(
	// 		"/api/register-user",
	// 		"post",
	// 		JSON.stringify(formData)
	// 	)
	// 		.then((responce) => responce.json())
	// 		.then((data) => (responceData = data))

	// 	if (responceData.success) {
	// 		localStorage.setItem("token", responceData.token)
	// 		window.location.replace("/")
	// 	} else {
	// 		alert(responceData.error)
	// 	}
	// }

	// const singup = async () => {
	// 	console.log("sign up function exituted", formData)
	// 	let responceData = await makeApi(
	// 		"/api/register-user",
	// 		"post",
	// 		JSON.stringify(formData)
	// 	)
	// 		.then((responce) => responce.json())
	// 		.then((data) => (responceData = data))

	// 	if (responceData.success) {
	// 		localStorage.setItem("token", responceData.token)
	// 		window.location.replace("/")
	// 	} else {
	// 		alert("Email is already exist")
	// 	}
	// }

	const login = async () => {
		console.log("Login function executed", formData)
		try {
			const response = await makeApi("/api/login-user", "post", formData)
			const responseData = response.data
			if (responseData.success) {
				localStorage.setItem("token", responseData.token)
				window.location.replace("/")
			} else {
				console.log("Login failed:", responseData.error)
				// Handle login failure
			}
		} catch (error) {
			console.log("Error during login:", error)
			// Handle error
		}
	}

	const signup = async () => {
		console.log("Signup function executed", formData)
		try {
			const response = await makeApi("/api/register-user", "post", formData)
			const responseData = response.data
			if (responseData.success) {
				localStorage.setItem("token", responseData.token)
				window.location.replace("/")
			} else {
				console.log("Signup failed:", responseData.error)
				// Handle signup failure
			}
		} catch (error) {
			console.log("Error during signup:", error)
			// Handle error
		}
	}

	return (
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
						state === "Login" ? login() : singup()
					}}
				>
					Continue
				</button>
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
						Create an account
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
	)
}

export default Signup
