import React, { useEffect, useState } from "react"
import Header from "./header/Header"
import "./home.css"
import Products from "./products/Products"
import Banner from "./banner/Banner"
import Hampers from "./hampers/Hampers"
import Customer from "./customer/Customer"
import Loader from "./loader/Loader.jsx"

const Home = () => {
	const [isloading, setIsLoading] = useState(true)
	const [animate, setAnimate] = useState(false)
	useEffect(() => {
		const fakeDataFetch = () => {
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
		setAnimate(true)
		fakeDataFetch()
	}, [])
	return isloading ? (
		<Loader />
	) : (
		<div className="home">
			<Header />
			<Products />
			<Banner />
			<Hampers />
			<Customer />
		</div>
	)
}

export default Home
