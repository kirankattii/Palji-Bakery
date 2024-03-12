import React, { useEffect, useState } from "react"
import Header from "./header/Header"

import Products from "./products/Products"
import Banner from "./banner/Banner"
import Hampers from "./hampers/Hampers"
import Customer from "./customer/Customer"

const Home = () => {
	return (
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
