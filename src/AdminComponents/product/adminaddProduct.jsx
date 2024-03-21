import React, { useState } from 'react';
import "../../adminCss/product/adminaddProduct.css";
import { makeApi } from '../../api/callApi';

function AdminaddProduct() {
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

  return (
    <div>
      <div className="add-product-container">
        <div className='add_product_text'>Add Product</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className='add_product_input_filed'
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Discount Percentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
          <input
            type="number"
            className='add_product_input_filed'
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          {images.map((image, index) => (
            <input
              key={index}
              type="text"
              className="add_product_input_filed"
              placeholder={`Image URL ${index + 1}`}
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              required
            />
          ))}
          <div className='add_product_page_add_more_div' >

          <button type="button" className='admin_add_product_button add_product_page_button' onClick={handleAddMoreImages}>Add More</button>
          </div>
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            className='add_product_input_filed'
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <div className='add_product_page_button_div' >
          <button type="submit" className='admin_add_product_button add_product_page_button'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminaddProduct;
