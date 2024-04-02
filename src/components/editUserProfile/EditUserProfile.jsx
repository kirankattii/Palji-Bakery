import React, { useState } from "react"
import "./editUserProfile.css"

const EditUserProfile = () => {
	const [editData, setEditData] = useState({
		firstname: "",
		lastname: "",
		gender: "",
		date: "",
		city: "",
		email: "",
		phoneno: "",
		password: "",
	})
	const onChangeHandler = (event) => {
		setEditData(() => ({
			...editData,
			[event.target.name]: event.target.value,
		}))
	}
	return (
		<div className="editUserProfile">
			<form
				action=""
				className="edit-form"
			>
				<div className="edit-about-section">
					<div className="about-edit-btn">
						<h2>About</h2>
						<button>Edit</button>
					</div>
					<div className="edit-username">
						<input
							type="text"
							placeholder="First Name"
							name="firstname"
							onChange={onChangeHandler}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="edit-gender">
						<label htmlFor="">Gender</label>
						<div>
							<div>
								<input
									type="radio"
									name="gender"
									value="male"
									onChange={onChangeHandler}
								/>
								<label htmlFor="male">Male</label>
							</div>
							<div>
								<input
									type="radio"
									name="gender"
									value="female"
									onChange={onChangeHandler}
								/>
								<label htmlFor="female">Female</label>
							</div>
						</div>
					</div>
					<div className="edit-dob">
						<label htmlFor="">D.O.B</label>
						<input
							type="date"
							name="date"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="edit-city">
						<label htmlFor="">City</label>
						<input
							type="text"
							placeholder="City"
							name="city"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="edit-state">
						<label htmlFor="">State</label>
						<input
							type="text"
							placeholder="State"
							name="state"
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<div className="edit-contacts">
					<h2>Contacts</h2>
					<div className="edit-email">
						<label htmlFor="">Email</label>
						<input
							type="email"
							placeholder="Johndeo@gmail.com"
							name="email"
							onChange={onChangeHandler}
						/>
					</div>
					<div className="edit-pno">
						<label htmlFor="">Phone number</label>
						<input
							type="text"
							placeholder="Phone Number"
							name="phoneno"
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<div className="edit-security">
					<h2>Security</h2>

					<div className="edit-password">
						<label htmlFor="">Password</label>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<button
					type="button"
					onClick={() => console.log(editData)}
					className="edit-save-btn"
				>
					Save
				</button>
			</form>
		</div>
	)
}

export default EditUserProfile
