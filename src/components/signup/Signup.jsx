import React, { useEffect, useState } from "react"
import { makeApi } from "../../api/callApi"
import "./signup.css"

import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState()
	const [mobileNumber, setMobileNumber] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const navigate = useNavigate()

	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	axios
	// 		.post("https://pajiweb.onrender.com/api/register-user", {
	// firstName: firstName,
	// lastName: lastName,
	// password: password,
	// email: email,
	// mobileNumber: mobileNumber,
	// 		})
	// 		.then((res) => {
	// 			console.log(res)
	// 			navigate("/login")
	// 		})
	// 		.catch((err) => console.log(err))
	// }
	const handleSubmit = async () => {
		event.preventDefault()
		try {
			const response = await makeApi("/api/register-user", "POST", {
				firstName: firstName,
				lastName: lastName,
				password: password,
				email: email,
				mobileNumber: mobileNumber,
			})
			navigate("/login")
		} catch (error) {
			console.error("Error sending data:", error.response)
		}
	}

	return (
		<div className="signup">
			<form onSubmit={handleSubmit}>
				<div className="enter-name">
					<input
						name="firstName"
						type="text"
						placeholder="First Name"
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<input
						name="lastName"
						type="text"
						placeholder="Last Name"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<input
					name="email"
					type="email"
					placeholder="Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>{" "}
				<input
					name="mobileNumber"
					type="number"
					placeholder="Phone Number"
					onChange={(e) => setMobileNumber(e.target.value)}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>{" "}
				<button type="submit">Sign Up</button>
				<p>
					Already have an account ?{" "}
					<span>
						<Link to="/login"> Log in</Link>
					</span>
				</p>
			</form>
		</div>
	)
}

export default Signup
