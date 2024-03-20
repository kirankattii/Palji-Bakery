import React, { useState } from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { makeApi } from "../../api/callApi"

const Login = () => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const navigate = useNavigate()
	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	axios
	// 		.post("https://pajiweb.onrender.com/api/login-user/", {
				// password,
				// email,
	// 		})
	// 		.then((res) => {
				
	// 			if (res.data.success === true) {
	// 				try {
	// 					localStorage.setItem("token", res.data.token)
	// 					// navigate("/")
	// 				} catch (error) {
	// 					console.error("Error navigating:", error)
	// 				}
	// 			} else {
	// 				alert(res.data === message)
	// 			}
	// 		})
	// 		.catch((err) => console.log(err))
	// }
	const handleSubmit = async () => {
		event.preventDefault()
        try {
            const response = await makeApi("/api/login-user", "POST", {password,email})
            localStorage.setItem("token", response.data.token)
			navigate("/")
        } catch (error) { 
            console.error('Error sending data:', error.response.data);
        }
    }

	return (
		<div className="login-signup">
			<form
				// action=""
				onSubmit={handleSubmit}
			>
				<div className="login">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit">Login</button>
					<p>
						Don't have an account?{" "}
						<span>
							<Link to="/Signup">Sign Up</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default Login
