import React from "react"
import "./editUserProfile.css"

const EditUserProfile = () => {
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
						/>
						<input
							type="text"
							placeholder="Last Name"
						/>
					</div>
					<div className="edit-gender">
						<label htmlFor="">Gender</label>
						<div>
							<input
								className="edit-male"
								type="text"
								placeholder="Male"
							/>
							<input
								className="edit-female"
								type="text"
								placeholder="Female"
							/>
						</div>
					</div>
					<div className="edit-dob">
						<label htmlFor="">D.O.B</label>
						<input type="date" />
					</div>
					<div className="edit-city">
						<label htmlFor="">City</label>
						<input
							type="text"
							placeholder="City"
						/>
					</div>
					<div className="edit-state">
						<label htmlFor="">State</label>
						<input
							type="text"
							placeholder="State"
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
						/>
					</div>
					<div className="edit-pno">
						<label htmlFor="">Phone number</label>
						<input
							type="text"
							placeholder="Phone Number"
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
						/>
					</div>
				</div>
				<button className="edit-save-btn">Save</button>
			</form>
		</div>
	)
}

export default EditUserProfile
