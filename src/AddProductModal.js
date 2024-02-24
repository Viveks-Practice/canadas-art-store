import React, { useState } from "react";

function AddProductModal({ onSubmit, onClose }) {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    details: "",
    imgUrl: "",
  });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    // Here, you'll handle image upload, but for now, we're just using a placeholder
    setNewProduct({
      ...newProduct,
      imgUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newProduct);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "5px",
        }}
      >
        <h2>Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            onChange={handleInputChange}
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
          <button type="submit">Add Product</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
