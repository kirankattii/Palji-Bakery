// import React, { useState, useEffect } from "react";
// import "../adminCss/allproduct.css";
// import { makeApi } from "../api/callApi";
// import { Link } from "react-router-dom";
// import ConfirmationModal from "./admindeleteproduct";
// import Loader from "../components/loader/loader";
// const Allproduct = () => {
//   const [products, setProducts] = useState([]);
//   // loading
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await makeApi("/api/get-all-products", "GET");
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);


//   const deleteProduct = async (productId) => {
//     try {
//       await makeApi(`/api/delete-product/${productId}`, "DELETE");
//       setProducts(products.filter((product) => product._id !== productId));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div>
//           <div className="product-list">
//             {products.map((product) => (
//               <div key={product._id} className="product-card">
//                 <img src={product.thumbnail} alt={product.name} />
//                 <div className="product-info">
//                   <h3>{product.name}</h3>
//                   <p>Price: ${product.price}</p>
//                   <p>Stock: {product.quantity}</p>
//                   <p>Brand: {product.brand}</p>
//                 </div>
//                 <div className="all_products_page_button">
                  
//                   <Link to={`/admin/product-update/${product._id}`}>
//                     <button className="edit_button_all_product">Edit</button>
//                   </Link>
//                   <button
//                     onClick={() => deleteProduct(product._id)}
//                     className="delete_button_all_product"
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 <div>
//                   <Link to={`/admin/product-details/${product._id}`}>
//                     <button className="view_button_all_product">View</button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//         <ConfirmationModal
//         isOpen={deleteProductId !== null}
//         onClose={() => setDeleteProductId(null)}
//         onConfirm={handleDeleteConfirm}
//       />
//     </>
//   );
// };

// export default Allproduct;

import React, { useState, useEffect } from "react";
import "../adminCss/allproduct.css";
import { makeApi } from "../api/callApi";
import { Link } from "react-router-dom";
import ConfirmationModal from "./admindeleteproduct";

import Loader from "../components/loader/loader";

const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeApi("/api/get-all-products", "GET");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      console.log(productId);
      const response = await makeApi(`/api/delete-product/${productId}`, "DELETE");
      console.log(response);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleDeleteConfirm = () => {
    if (deleteProductId) {
      deleteProduct(deleteProductId);
      setDeleteProductId(null);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="product-list">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.thumbnail} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Stock: {product.quantity}</p>
                  <p>Brand: {product.brand}</p>
                </div>
                <div className="all_products_page_button">
                  <Link to={`/admin/product-update/${product._id}`}>
                    <button className="edit_button_all_product">Edit</button>
                  </Link>
                  <button
                    onClick={() => setDeleteProductId(product._id)}
                    className="delete_button_all_product"
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <Link to={`/admin/product-details/${product._id}`}>
                    <button className="view_button_all_product">View</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <ConfirmationModal
        isOpen={deleteProductId !== null}
        onClose={() => setDeleteProductId(null)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default Allproduct;
