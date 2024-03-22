import React, { useState, useEffect } from "react";
import "../../adminCss/product/adminaddProduct.css";
import { makeApi } from "../../api/callApi";
import axios from "axios";

function AdminaddProduct() {
  const [categories, setCategories] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([{}]);
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeApi("/api/create-product", "POST", {
        name,
        description,
        price,
        discountPercentage,
        quantity,
        image: images,
        thumbnail,
        category,
        brand,
        size,
      });
      setName("");
      setDescription("");
      setPrice("");
      setDiscountPercentage("");
      setQuantity("");
      setImages([""]);
      setThumbnail("");
      setCategory("");
      setBrand("");
      setSize("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handleAddMoreImages = () => {
    setImages([...images, ""]);
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const response = await makeApi("/api/get-all-categories", "GET");
        if (response.status === 200) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const handleImageUpload = async (event, index) => {
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
              const imageURL = response.data.url;
              // setFormData({ ...formData, screenshot: imageURL });
              handleImageChange(index, imageURL);
            }
          });
      }
    } catch (error) {
      console.log("image upload error", error);
    }
  };
  const handleThumbnailUpload = async (event, index) => {
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
              const imageURL = response.data.url;
              // setFormData({ ...formData, screenshot: imageURL });
              setThumbnail(imageURL);
            }
          });
      }
    } catch (error) {
      console.log("image upload error", error);
    }
  };

  return (
    <div>
      <div className="add-product-container">
        <div className="add_product_text">Add Product</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="add_product_input_filed"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="add_product_input_filed"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="add_product_input_filed"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            className="add_product_input_filed"
            placeholder="Discount Percentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
          <input
            type="number"
            className="add_product_input_filed"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          {/* {images.map((image, index) => (
            <input
              key={index}
              type="text"
              className="add_product_input_filed"
              placeholder={`Image URL ${index + 1}`}
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              required
            />
          ))} */}
          {images.map((image, index) => (
            <input
              key={index}
              type="file"
              className="add_product_input_filed add_product_input_filed_image"
              // placeholder={`Image URL ${index + 1}`}
              // value={image}
              // onChange={(e) => handleImageChange(index, e.target.value)}
              onChange={(event) => {
                handleImageUpload(event, index);
              }}
              required
            />
          ))}
          <div className="add_product_page_add_more_div">
            <button
              type="button"
              className="admin_add_product_button add_product_page_button"
              onClick={handleAddMoreImages}
            >
              Add More
            </button>
          </div>
          {/* <input
            type="text"
            className="add_product_input_filed"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          /> */}
          <input
            type="file"
            className="add_product_input_filed add_product_input_filed_image"
            placeholder="Thumbnail URL"
            // value={thumbnail}
            onChange={(e) => handleThumbnailUpload(e)}
            required
          />

          <select
            className="add_product_input_filed add_product_dropdown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="add_product_input_filed"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            className="add_product_input_filed"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <div className="add_product_page_button_div">
            <button
              type="submit"
              className="admin_add_product_button add_product_page_button"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminaddProduct;
