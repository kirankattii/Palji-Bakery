// import React, { useState } from "react";
// import axios from "axios";
// import "../../adminCss/catogory/AddCategory.css"; // Import CSS file for styling
// import { makeApi } from "../../api/callApi";
// import { Link } from "react-router-dom";

// const AddCoupan = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     Coupancode: "",
//     discountPercentage: "",
//     coupanform: "",
//     applicableCategories: [],
//     applicableProducts: [],
//     minimumOrderValue: "",
//     startDate: "",
//     endDate: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //   const response = await axios.post('/api/add-category', { name, description });
//       const response = await makeApi("/api/create-coupan", "POST", formData);
//       if (response.status === 201) {
//         alert("Coupan added successfully");
//         setName("");
//         setDescription("");
//       }
//     } catch (error) {
//       console.error("Error adding Coupan:", error);
//       setErrorMessage("Error adding Coupan. Please try again.");
//     }
//   };

//   return (
//     <>
//       <div>
//         <Link to={"/admin/All-coupan"}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="26"
//             height="36"
//             fill="currentColor"
//             className="bi bi-arrow-left back_arrow_icon back_button_add_catogory"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
//             />
//           </svg>
//         </Link>
//       </div>
//       <div className="add-category">
//         <div className="add_category_div">Add Coupan</div>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//             />
//           </div>
//           <button
//             type="submit"
//             className="admin_add_product_button add_category_button"
//           >
//             Add Category
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddCoupan;

import React, { useState } from "react";
import axios from "axios";
import "../../adminCss/catogory/AddCategory.css"; // Import CSS file for styling
import { makeApi } from "../../api/callApi";
import { Link } from "react-router-dom";

const AddCoupan = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    Coupancode: "",
    discountPercentage: "",
    coupanform: "",
    applicableCategories: [],
    applicableProducts: [],
    minimumOrderValue: "",
    startDate: "",
    endDate: "",
  });

  // Function to handle input changes and update formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeApi("/api/create-coupan", "POST", formData);
      if (response.status === 201) {
        alert("Coupan added successfully");
        setFormData({
          name: "",
          Coupancode: "",
          discountPercentage: "",
          coupanform: "",
          applicableCategories: [],
          applicableProducts: [],
          minimumOrderValue: "",
          startDate: "",
          endDate: "",
        });
      }
    } catch (error) {
      console.error("Error adding Coupan:", error);
      setErrorMessage("Error adding Coupan. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Link to={"/admin/All-coupan"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="36"
            fill="currentColor"
            className="bi bi-arrow-left back_arrow_icon back_button_add_catogory"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
      </div>
      <div className="add-category">
        <div className="add_category_div">Add Coupan</div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Coupan Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        
          <div className="form-group">
            <label htmlFor="Coupancode">Coupancode:</label>
            <input
              type="text"
              name="Coupancode"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="discountPercentage">discountPercentage:</label>
            <input
              type="number"
              name="discountPercentage"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
         
          <button
            type="submit"
            className="admin_add_product_button add_category_button"
          >
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCoupan;
