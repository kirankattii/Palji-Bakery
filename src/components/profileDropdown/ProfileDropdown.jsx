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
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	)
}

export default ProfileDropdown
