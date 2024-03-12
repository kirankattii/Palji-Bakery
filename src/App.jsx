import { useState } from "react"

import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
