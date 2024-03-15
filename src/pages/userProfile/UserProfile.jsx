import React from "react"
import { useParams } from "react-router"
import UserSidebar from "../../components/userProfile/UserSidebar"

import PersonalInfo from "../../components/userProfile/PersonalInfo"
import Navbar from "../../components/navbar/Navbar"
const UserProfile = () => {
	const { activepage } = useParams()
	// alert(activepage)
	return (
		<div className="user-profile-container">
			<div className="user-profile">
				<div className="left">
					<UserSidebar activepage={activepage} />
				</div>
				<div className="right">
					{activepage === "personalinfo" && <PersonalInfo />}
				</div>
			</div>
		</div>
	)
}

export default UserProfile
