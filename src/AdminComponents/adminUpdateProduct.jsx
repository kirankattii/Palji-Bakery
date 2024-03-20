import "../adminCss/adminUpdateProduct.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { makeApi } from "../api/callApi";
import Loader from "../components/loader/loader";

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
    if (e.target.name === "image") {
      // Handle image upload
      const files = Array.from(e.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setFormData({
        ...formData,
        image: imageUrls,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main_update_product_page" >
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
                  fill-rule="evenodd"
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
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                />
                <div className="update_product_image_container">
                  {formData?.image.map((imageUrl, index) => (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className="update_product_image"
                    />
                  ))}
                </div>
              </div>
              <div className="update_product_Image_section">
                <div>
                  <label>Thumbnail:</label>
                </div>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleChange}
                />
                <div>
                  {formData?.thumbnail && (
                    <img
                      src={formData?.thumbnail}
                      alt="Thumbnail"
                      className="update_product_image"
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
