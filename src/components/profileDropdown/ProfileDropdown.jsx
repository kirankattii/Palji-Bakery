import React from "react"
import "./profileDropdown.css"
import { Link } from "react-router-dom"

const ProfileDropdown = ({ openProfile, setOpenProfile }) => {
	const toggleProfile = () => {
		setOpenProfile(!openProfile)
	}
	const closeProfile = () => {
		setOpenProfile(false)
	}
	return (
		<div className="profile-dropdown">
			<ul>
				<li onClick={closeProfile}>
					<Link to="/userprofile">Profile</Link>
				</li>
				<li onClick={closeProfile}>
					<Link to="/admin">Admin Dashboard</Link>
				</li>
				<li onClick={closeProfile}>
					{localStorage.getItem("auth-token") ? (
						<button
							onClick={() => {
								localStorage.removeItem("auth-token")
								window.location.replace("/")
							}}
						>
							Logout
						</button>
					) : (
						<Link to="/Signup">Login</Link>
					)}
				</li>
			</ul>
		</div>
	)
}

export default ProfileDropdown
