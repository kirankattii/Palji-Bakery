
import React, { useState, useEffect } from "react";
import "./myAddress.css";
import { useNavigate } from "react-router";
import { makeApi } from "../../api/callApi";
import ConfirmationModal from "../../AdminComponents/product/admindeleteproduct";

const MyAddress = () => {
	const [billingAddresses, setBillingAddresses] = useState([]);
	const [ShipppingAddresses, setShipppingAddresses] = useState([]);
	const [deleteProductId, setDeleteProductId] = useState(null);


	const handleDeleteConfirm = async () => {
		if (deleteProductId) {
			if (billingAddresses.some(address => address._id === deleteProductId)) {
				await deleteBillingAddress(deleteProductId);
			} else if (ShipppingAddresses.some(address => address._id === deleteProductId)) {
				await deleteShippingAddress(deleteProductId);
			}
			setDeleteProductId(null);
		}
	};
	
	const deleteBillingAddress = async (productId) => {
		try {
			console.log(productId);
			const response = await makeApi(
				`/api/delete-billing-address/${productId}`,
				"DELETE"
			);
			console.log(response);
			// Update the billingAddresses state after successful deletion if necessary
			 setBillingAddresses(billingAddresses.filter(address => address._id !== productId));
		} catch (error) {
			console.error("Error deleting billing address:", error);
		}
	};
	
	const deleteShippingAddress = async (productId) => {
		try {
			console.log(productId);
			const response = await makeApi(
				`/api/delete-shiped-address/${productId}`,
				"DELETE"
			);
			console.log(response);
			// Update the ShipppingAddresses state after successful deletion if necessary
			 setShipppingAddresses(ShipppingAddresses.filter(address => address._id !== productId));
		} catch (error) {
			console.error("Error deleting shipping address:", error);
		}
	};
	
	

	const navigator = useNavigate();

	// Function to fetch billing addresses
	const fetchBillingAddresses = async () => {
		try {
			const response = await makeApi("/api/get-my-billing-address", "GET");
			if (response.data.success) {
				setBillingAddresses(response.data.billingaddress);
			}
		} catch (error) {
			console.error("Error fetching billing addresses:", error);
		}
	};
	const fetchShippingAddresses = async () => {
		try {
			const response = await makeApi("/api/get-my-shiped-address", "GET");
			if (response.data.success) {
				setShipppingAddresses(response.data.shipedaddress);
			}
		} catch (error) {
			console.error("Error fetching billing addresses:", error);
		}
	};

	useEffect(() => {
		fetchBillingAddresses();
		fetchShippingAddresses();
	}, []);
	return (
		<div className="myaddress">
			{" "}
			<div className="userprofile-heading">
				<h1>MY ADDRESS</h1>
			</div>
			<div className="shipping-billing-address"> 
				<p>
					the following addresses will be used on the checkout page by default.
				</p>
				<div className="shipping-billing-flex d-flex justify-content-between">
					<div className="d-flex flex-column gap-5">
						{billingAddresses.map((address) => (
							<div key={address._id} className="billing-address">
								<div className="billing-address-flex">
									<h3>BILLING ADDRESS</h3>
									<div>
										<button onClick={() => navigator("/billing-address")}>
											Add
										</button>
										<button
                        onClick={() => setDeleteProductId(address._id)}
										
										>DELETE</button>
									</div>
								</div>
								<p>
									{`${address.name}, ${address.address}, ${address.city}, ${address.state} ${address.pincode}`}
								</p>
							</div>
						))}
					</div>
					<div className="billing-address">
						<div className="d-flex flex-column gap-5">
							{ShipppingAddresses.map((address) => (
								<div key={address._id} className="billing-address">
									<div className="billing-address-flex">
										<h3>Shippping ADDRESS</h3>
										<div>
											<button onClick={() => navigator("/shipping-address")}>
												Add
											</button>
											<button
                        onClick={() => setDeleteProductId(address._id)}
											
											>DELETE</button>
										</div>
									</div>
									<p>
										{`${address.firstname}, ${address.lastname} , ${address.address}, ${address.city}, ${address.state} ${address.pincode} ${address.pincode} `}
									</p>
								</div>
							))}
						</div></div>
				</div>
			</div>
			<ConfirmationModal
              isOpen={deleteProductId !== null}
              onClose={() => setDeleteProductId(null)}
              onConfirm={handleDeleteConfirm}
            />
		</div>
	)
}

export default MyAddress


