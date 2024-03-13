import React from "react"
import "./contact.css"

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact">
				<h1>CONTACT US</h1>
			</div>
			{/* <div className="contact-form">
				<h1>SHARE YOUR THOUGHTS</h1>
				<div className="fill-form">
					<form action="">
						<div className="enter-name">
							<input
								type="text"
								placeholder="First Name"
							/>
							<input
								type="text"
								placeholder="Last Name"
							/>
						</div>
						<input
							type="tel"
							placeholder="Phone Number"
						/>
						<input
							type="email"
							placeholder="Email Address"
						/>
						<textarea
							name=""
							id=""
							cols="30"
							placeholder="Message"
						></textarea>
					</form>
				</div>
			</div> */}
			<div className="google-map"></div>
		</div>
	)
}

export default Contact
