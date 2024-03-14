import React from "react"
import "./contact.css"

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact">
				<h1>CONTACT US</h1>
			</div>
			<div className="contact-form">
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
							cols="30"
							rows="4"
							placeholder="Message"
						></textarea>
						<button>Submit</button>
					</form>
				</div>
			</div>
			<div className="google-map">
				<h1>Where to Find Us</h1>
				<div className="geo-location">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13694.569790832711!2d75.80660897740836!3d30.896661903417566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a839a09925acd%3A0xc21362fc90786a27!2sPalji%20Bakery!5e0!3m2!1sen!2sin!4v1710379919663!5m2!1sen!2sin"
						width="600"
						height="450"
						// style="border:0;"
						// allowfullscreen=""
						loading="lazy"

						// frameborder={0}
						// referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Contact
