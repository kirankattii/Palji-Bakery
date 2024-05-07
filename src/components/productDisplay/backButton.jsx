import React from "react"
import { Link } from "react-router-dom"
import "./backButton.css"

function BackButton({ pageLocation }) {
	return (
		<>
			<Link
				to={pageLocation}
				className="css-for-link-tag text-black"
			>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="bi bi-arrow-left back_button_svg "
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
						/>
					</svg>
				</div>
			</Link>
		</>
	)
}

export default BackButton