import React, { useEffect, useState } from "react"
import "./CSS/userProfile.css"
import { assets } from "../assets/assets"
import { Outlet, useNavigate } from "react-router-dom"
import { makeApi } from "../api/callApi"

const UserProfile = () => {
	const navigate = useNavigate()
	const [userDatails, setUserDetails] = useState()
	const fetchUserDetail = async () => {
		try {
			const responce = await makeApi("/api/my-profile", "GET")
			setUserDetails(responce.data.user)
		} catch (error) {
			console.log(error) 
		}
	}
	useEffect(() => {
		fetchUserDetail()
	}, [])
	return (
		<div className="userProfile">
			<hr />
			<div className="user-sidebar-info">
				<div className="userProfile-sidebar">
					<h1>PROFILE</h1>
					<div className="userprofile-name ">
						<img
							src={userDatails?.userImage}
							alt=""
						/>
						<div className="user-name">
							<span>HELLO</span>
							<p>{`${userDatails?.firstName} ${userDatails?.lastName}`}</p>
						</div>
					</div>
					<div
						className="user-account user-flexcol
				"
						onClick={() => navigate("/userprofile")}
					>
						<img
							src={assets.user_account}
							alt="user_account"
						/>
						<p>MY ACCOUNT</p>
					</div>
					<div
						className="user-orders user-flexcol
				"
						onClick={() => navigate("/userprofile/myorders")}
					>
						<img
							src={assets.user_orders}
							alt="user-orders"
						/>
						<p>MY ORDERS</p>
					</div>
					<div
						className="user-address user-flexcol
				"
						onClick={() => navigate("/userprofile/myaddress")}
					>
						<img
							src={assets.user_address}
							alt="user_address"
						/>
						<p>MY ADDRESS</p>
					</div>
					<div
						className="user-watchlist user-flexcol
				"
						onClick={() => navigate("/userprofile/mywatchlist")}
					>
						<img
							src={assets.user_watchlist}
							alt="user_watchlist"
						/>
						<p>WISHLIST</p>
					</div>
				</div>
				<div className="userProfile-info">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default UserProfile
