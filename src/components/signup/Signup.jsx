import React, { useEffect, useState } from "react"
import "./signup.css"

import axios from "axios"

const Signup = () => {
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState()
	const [mobileNumber, setMobileNumber] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
		axios
			.post("https://pajiweb.onrender.com/api/register-user", {
				firstName,
				lastName,
				password,
				email,
				mobileNumber,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
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
					type="tel"
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
			</form>
		</div>
	)
}

export default Signup
