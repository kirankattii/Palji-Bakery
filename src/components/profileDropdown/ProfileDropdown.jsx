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
	const handleLogout = () => {
		localStorage.removeItem("token")
		window.location.replace("/")
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
					{localStorage.getItem("token") ? (
						<button onClick={handleLogout}>Logout</button>
					) : (
						<Link to="/signup">Login</Link>
					)}
				</li>
			</ul>
		</div>
	)
}

export default ProfileDropdown
