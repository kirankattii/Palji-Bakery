// import "../../adminCss/adminUpdateProduct.css";
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { makeApi } from "../../api/callApi";
// import Loader from "../../components/loader/loader";

// function UpdateProduct() {
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [Updateloader, setUpdateLoader] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: "",
//     category: "",
//     brand: "",
//     image: [],
//     thumbnail: "",
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await makeApi(
//           `/api/get-single-product/${productId}`,
//           "GET"
//         );
//         setProduct(response.data.product);
//         setFormData({
//           name: response.data.product.name,
//           description: response.data.product.description,
//           price: response.data.product.price,
//           quantity: response.data.product.quantity,
//           category: response.data.product.category,
//           brand: response.data.product.brand,
//           image: response.data.product.image,
//           thumbnail: response.data.product.thumbnail,
//           // Set more fields if needed
//         });
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [productId]);

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       // Handle image upload
//       const files = Array.from(e.target.files);
//       const imageUrls = files.map((file) => URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         image: imageUrls,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setUpdateLoader(true);

//       const updateProduct = await makeApi(
//         `/api/update-product/${productId}`,
//         "PUT",
//         formData
//       );
//       console.log("Product updated successfully!", updateProduct);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     } finally {
//       setUpdateLoader(false);
//       navigate("/admin/allproducts");
//     }
//   };

//   const removeImage = (indexToRemove) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: prevFormData.image.filter((_, index) => index !== indexToRemove),
//     }));
//   };

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="main_update_product_page">
//           <div>
//             <Link to={"/admin/allproducts"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="36"
//                 fill="currentColor"
//                 className="bi bi-arrow-left back_arrow_icon"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
//                 />
//               </svg>
//             </Link>
//           </div>
//           <div className="update-product-container">
//             <h2>Update Product</h2>
//             <form onSubmit={handleSubmit}>
//   <div>
//     <label>Name:</label>
//     <input
//       type="text"
//       name="name"
//       value={formData?.name}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Description:</label>
//     <textarea
//       name="description"
//       value={formData?.description}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Price:</label>
//     <input
//       type="number"
//       name="price"
//       value={formData?.price}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Quantity:</label>
//     <input
//       type="number"
//       name="quantity"
//       value={formData?.quantity}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Category:</label>
//     <input
//       type="text"
//       name="category"
//       value={formData?.category}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Brand:</label>
//     <input
//       type="text"
//       name="brand"
//       value={formData?.brand}
//       onChange={handleChange}
//     />
//   </div>

//               {/* <div className="update_product_Image_section">
//                 <label>Images:</label>
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   multiple
//                   onChange={handleChange}
//                 />
//                 <div className="update_product_image_container">
//                   {formData?.image.map((imageUrl, index) => (
//                     <div key={index} className="image_wrapper">
//                       <img
//                         src={imageUrl}
//                         alt={`Image ${index + 1}`}
//                         className="update_product_image"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => removeImage(index)}
//                         className="remove_image_button"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div> */}

//               <div className="update_product_Image_section">
//                 <div>
//                   <label>Thumbnail:</label>
//                 </div>
//                 <input
//                   type="file"
//                   name="thumbnail"
//                   accept="image/*"
//                   onChange={handleChange}
//                 />
// <div>
//   {formData?.thumbnail && (
//     <img
//       src={formData?.thumbnail}
//       alt="Thumbnail"
//       className="update_product_image"
//     />
//   )}
// </div>
//               </div>
//               <button type="submit" className="update_product_button">
//                 {Updateloader ? <Loader /> : <div>Update Product</div>}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default UpdateProduct;
// working  23-3

// import "../../adminCss/adminUpdateProduct.css";
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { makeApi } from "../../api/callApi";
// import Loader from "../../components/loader/loader";
// import axios from "axios";

// function UpdateProduct() {
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [Updateloader, setUpdateLoader] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     quantity: "",
//     category: "",
//     brand: "",
//     image: [],
//     thumbnail: "",
//   });

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await makeApi(
//           `/api/get-single-product/${productId}`,
//           "GET"
//         );
//         setProduct(response.data.product);
//         setFormData({
//           name: response.data.product.name,
//           description: response.data.product.description,
//           price: response.data.product.price,
//           quantity: response.data.product.quantity,
//           category: response.data.product.category,
//           brand: response.data.product.brand,
//           image: response.data.product.image,
//           thumbnail: response.data.product.thumbnail,
//           // Set more fields if needed
//         });
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [productId]);
// console.log("image-------",formData?.image)

//   const handleChange = (e) => {
//     if (e.target.name === "image" || e.target.name === "thumbnail") {
//       // Handle image upload
//       const files = Array.from(e.target.files);
//       const imageUrls = files.map((file) => URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [e.target.name]: imageUrls,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setUpdateLoader(true);

//       const updateProduct = await makeApi(
//         `/api/update-product/${productId}`,
//         "PUT",
//         formData
//       );
//       console.log("Product updated successfully!", updateProduct);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     } finally {
//       setUpdateLoader(false);
//       navigate("/admin/allproducts");
//     }
//   };

//   const removeImage = (indexToRemove) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: prevFormData.image.filter((_, index) => index !== indexToRemove),
//     }));
//   };

//   const handleAddMoreImages = () => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       image: [...prevFormData.image, ""],
//     }));
//   };

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="main_update_product_page">
//           <div>
//             <Link to={"/admin/allproducts"}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="36"
//                 fill="currentColor"
//                 className="bi bi-arrow-left back_arrow_icon"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
//                 />
//               </svg>
//             </Link>
//           </div>
//           <div className="update-product-container">
//             <h2>Update Product</h2>
//             <form onSubmit={handleSubmit}>
// <div>
//     <label>Name:</label>
//     <input
//       type="text"
//       name="name"
//       value={formData?.name}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Description:</label>
//     <textarea
//       name="description"
//       value={formData?.description}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Price:</label>
//     <input
//       type="number"
//       name="price"
//       value={formData?.price}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Quantity:</label>
//     <input
//       type="number"
//       name="quantity"
//       value={formData?.quantity}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Category:</label>
//     <input
//       type="text"
//       name="category"
//       value={formData?.category}
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Brand:</label>
//     <input
//       type="text"
//       name="brand"
//       value={formData?.brand}
//       onChange={handleChange}
//     />
//   </div>
//               <div className="update_product_Image_section">
//                 <label>Images:</label>
//                 {formData?.image.map((imageUrl, index) => (
//                   <div key={index} className="image_wrapper">
//                     <input
//                       type="file"
//                       className="add_product_input_filed add_product_input_filed_image"
//                       accept="image/*"
//                       onChange={(event) => handleChange(event, index)}
//                       required
//                     />
//                     <img
//                       src={imageUrl}
//                       alt={`Image ${index + 1}`}
//                       className="update_product_image"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removeImage(index)}
//                       className="remove_image_button"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//                 <div>
//                   <button
//                     type="button"
//                     onClick={handleAddMoreImages}
//                     className="add_more_images_button"
//                   >
//                     Add More Images
//                   </button>
//                 </div>
//               </div>
//   <div>
//       {formData?.thumbnail && (
//         <img
//           src={formData?.thumbnail}
//           alt="Thumbnail"
//           className="update_product_image"
//         />
//       )}
//     </div>
//               {/* Your existing form inputs */}
//               <button type="submit" className="update_product_button">
//                 {Updateloader ? <Loader /> :                <div>Update Product</div>}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default UpdateProduct;

import "../../adminCss/adminUpdateProduct.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { makeApi } from "../../api/callApi";
import Loader from "../../components/loader/loader";
import axios from "axios";

function UpdateProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [Updateloader, setUpdateLoader] = useState(false);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    brand: "",
    image: [],
    thumbnail: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await makeApi(
          `/api/get-single-product/${productId}`,
          "GET"
        );
        setProduct(response.data.product);
        setFormData({
          name: response.data.product.name,
          description: response.data.product.description,
          price: response.data.product.price,
          quantity: response.data.product.quantity,
          category: response.data.product.category,
          brand: response.data.product.brand,
          image: response.data.product.image,
          thumbnail: response.data.product.thumbnail,
          // Set more fields if needed
        });
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdateLoader(true);

      const updateProduct = await makeApi(
        `/api/update-product/${productId}`,
        "PUT",
        formData
      );
      console.log("Product updated successfully!", updateProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setUpdateLoader(false);
      navigate("/admin/allproducts");
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: prevFormData.image.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleAddMoreImages = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: [...prevFormData.image, ""],
    }));
  };
  const handleImageUpload = async (event, index) => {
    // const files = Array.from(e.target.files);
    // const imageUrls = files.map((file) => URL.createObjectURL(file));
    // console.log("imageUrlsimageUrlsimageUrls",imageUrls)
    // setFormData((prevFormData) => {
    //   const updatedImages = [...prevFormData.image];
    //   updatedImages[index] = imageUrls[0];
    //   return {
    //     ...prevFormData,
    //     image: updatedImages,
    //   };
    // });

    try {
      const file = event.target.files[0];

      // if (file.type.startsWith("image/")) {
      if (file) {
       

        const compressedFile = await file;

        const data = new FormData();
        data.append("file", compressedFile);
        data.append("upload_preset", "ou1fk438");

        await axios
          .post(
            `https://api.cloudinary.com/v1_1/dyl3gzm7d/image/upload`,

            data
          )
          .then((response) => {
            if (response.status === 200) {
              const imageUrls = response.data.url;
              // setFormData({ ...formData, screenshot: imageURL });
              // handleImageChange(index, imageURL);

              // const files = Array.from(e.target.files);
              // const imageUrls = files.map((file) => URL.createObjectURL(file));
              console.log("imageUrlsimageUrlsimageUrls", imageUrls);
              setFormData((prevFormData) => {
                const updatedImages = [...prevFormData.image];
                updatedImages[index] = imageUrls;
                return {
                  ...prevFormData,
                  image: updatedImages,
                };
              });
            }
          });
      }
    } catch (error) {
      console.log("image upload error", error);
    }
  };
  const handleThumbnailUpload = async (event) => {
    try {
      const file = event.target.files[0];

      // if (file.type.startsWith("image/")) {
      if (file) {
        console.log(file);

        const compressedFile = await file;

        const data = new FormData();
        data.append("file", compressedFile);
        data.append("upload_preset", "ou1fk438");

        await axios
          .post(
            `https://api.cloudinary.com/v1_1/dyl3gzm7d/image/upload`,

            data
          )
          .then((response) => {
            if (response.status === 200) {
              const imageUrls = response.data.url;
              // setFormData({ ...formData, screenshot: imageURL });
              // handleImageChange(index, imageURL);

              // const files = Array.from(e.target.files);
              // const imageUrls = files.map((file) => URL.createObjectURL(file));
              console.log("imageUrlsimageUrlsimageUrls", imageUrls);
              setFormData((prevFormData) => {
                //   const updatedImages = [...prevFormData.image];
                //   updatedImages[index] = imageUrls;
                return {
                  ...prevFormData,
                  thumbnail: imageUrls,
                };
              });
            }
          });
      }
    } catch (error) {
      console.log("image upload error", error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main_update_product_page">
          <div>
            <Link to={"/admin/allproducts"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="36"
                fill="currentColor"
                className="bi bi-arrow-left back_arrow_icon"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </Link>
          </div>

          <div className="update-product-container">
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData?.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={formData?.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData?.quantity}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData?.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Brand:</label>
                <input
                  type="text"
                  name="brand"
                  value={formData?.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="update_product_Image_section">
                <label>Images:</label>
                {formData?.image.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="image_wrapper d-flex justify-content-around align-items-center"
                  >
                    {/* <input
                      type="file"
                      className="add_product_input_filed add_product_input_filed_image"
                      accept="image/*"
                      onChange={(event) => handleImageUpload(event, index)}
                      //   required
                    /> */}
                    <div>
                      <form className="file-upload-form file_upload_form_upload_image">
                        <label for="file" className="file-upload-label">
                          <div className="file-upload-design">
                            <svg viewBox="0 0 640 512" height="1em">
                              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                            </svg>
                            <p>Drag and Drop</p>
                            <p>or</p>
                            <span className="browse-button">Browse file</span>
                          </div>
                          <input
                            id="file"
                            type="file"
                            accept="image/*"
                            onChange={(event) =>
                              handleImageUpload(event, index)
                            }
                            required
                          />
                        </label>
                      </form>
                    </div>
                    <div>
                      <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="update_product_image"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="remove_image_button btn btn-danger p-3"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    onClick={handleAddMoreImages}
                    className="add_more_images_button btn btn-success p-3"
                  >
                    Add More Images
                  </button>
                </div>
              </div>
              <label>Thumbnail:</label>
              <div className="d-flex justify-content-evenly">
                {/* <input
					type="file"
					className="add_product_input_filed add_product_input_filed_image"
					accept="image/*"
					onChange={handleThumbnailUpload}
					//   required
				  /> */}
                <div>
                  <form className="file-upload-form file_upload_form_upload_image">
                    <label for="file" className="file-upload-label">
                      <div className="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em">
                          <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                        </svg>
                        <p>Drag and Drop</p>
                        <p>or</p>
                        <span className="browse-button">Browse file</span>
                      </div>
                      <input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailUpload}
                        required
                      />
                    </label>
                  </form>
                </div>
                <div>
                  {formData?.thumbnail && (
                    <img
                      src={formData?.thumbnail}
                      alt="Thumbnail"
                      className="update_product_image_thumbnail"
                    />
                  )}
                </div>
              </div>
              <button type="submit" className="update_product_button">
                {Updateloader ? <Loader /> : <div>Update Product</div>}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProduct;
