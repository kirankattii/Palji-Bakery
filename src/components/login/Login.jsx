import React, { useState } from "react"
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div className="login-signup">
			<form action="">
				<div className="login">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
					/>

					<input
						type="password"
						placeholder="Password"
						name="password"
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
