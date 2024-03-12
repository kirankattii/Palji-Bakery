import React from "react"
import "./footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
	return (
		<div className="footer">
			<div className="left-footer">
				<img
					className="pulji-footer-logo"
					src={assets.logo2}
					alt=""
				/>
				{/* <hr /> */}
				<div className="social-icons">
					<img
						src={assets.insta_icon}
						alt="Palji instagram"
					/>
					<img
						src={assets.youtube_icon}
						alt="Palji youtube"
					/>
					<img
						src={assets.facebook_icon}
						alt="Palji facebook"
					/>
					<img
						src={assets.twitter_icon}
						alt="Palji twitter"
					/>
				</div>
			</div>
			<div className="middle-footer">
				<ul>
					<li>HOME</li>
					<li>ABOUT US</li>
					<li>BISCUIT</li>
					<li>SAVORY</li>
					<li>GIFT HAMPERS</li>
					<li>CONTACT US</li>
					<li>CART</li>
					<li>TERMS & CONDITIONS</li>
				</ul>
			</div>
			<div className="right-footer">
				<div className="palji-location">
					<img
						src={assets.location_icon}
						alt=""
					/>
					<ul>
						<li>
							4GV, Main Hambran Rd, Mayur Vihar, Dev Nagar, Ludhiana, Punjab
							141027
						</li>
						<li>
							1236, Kailash Cinema Rd, Kailash Chowk, Civil Lines, Ludhiana,
							Punjab 141001
						</li>
						<li>
							5A, Sat Paul Mittal Rd, A - Block, Sarabha Nagar, Ludhiana, Punjab
							141001
						</li>
					</ul>
				</div>
				<div className="palji-phoneno">
					<img
						src={assets.phone_icon}
						alt="Palji contact no"
					/>
					<ul>
						<li>+91 7901706000</li>
						<li>+91 9814367260</li>
					</ul>
				</div>
				<div className="palji-mail">
					<img
						src={assets.email_icon}
						alt="Palji mail"
					/>
					<ul>
						<li>paljibakery@gmail.com</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
