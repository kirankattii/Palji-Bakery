import React, { useEffect, useState } from "react"
import "./myAccount.css"
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router"
import { makeApi } from "../../api/callApi"

const MyAccount = () => {
	const navigate = useNavigate()
	const [userDatails, setUserDetails] = useState()
	const fetchUserDetail = async () => {
		try {
			const responce = await makeApi("/api/my-profile", "GET")
			console.log(responce.data.user)
			setUserDetails(responce.data.user)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchUserDetail()
	}, [])
	// console.log("user details", userDatails)
	return (
		<div className="myaccount">
			<div className="userprofile-heading">
				<h1>PERSONAL INFORMATION</h1>
			</div>
			<div className="myaccount-info userprofile-info-css">
				<div className="left-myaccount-info">
					<img
						src={assets.userprofile_icon}
						alt=""
					/>
					<div className="userprofilename">
						<span>NAME</span>
						<p></p>
					</div>
					<div className="userprofile-birthdate">
						<span>DATE OF BIRTH</span>
						<p>00 / 00 / 000</p>
					</div>
					<div className="userprofile-gender">
						<span>GENDER</span>
						<p>Male</p>
					</div>
					<div className="userprofile-no">
						<span>CONTACT NUMBER</span>
						<p>+91 9123456789</p>
					</div>
					<div className="userprofile-email">
						<span>EMAIL ADDRESS</span>
						<p>johndeo@gmail.com</p>
					</div>
				</div>
				<div className="right-myaccount-info">
					<div
						className="change-profileinfo"
						onClick={() => navigate("/edit-userprofile")}
					>
						<img
							src={assets.profile_reset}
							alt=""
						/>
						<p>change profile information</p>
					</div>{" "}
					<div
						className="change-profilepwd"
						onClick={() => navigate("/edit-userprofile")}
					>
						<img
							src={assets.password_reset}
							alt=""
						/>
						<p>change password</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyAccount
