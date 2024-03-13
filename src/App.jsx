import { useState } from "react"

import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import AboutUs from "./components/aboutus/AboutUs"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>{" "}
				<Route
					path="/aboutus"
					element={<AboutUs />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>{" "}
				<Route
					path="/signup"
					element={<Signup />}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
