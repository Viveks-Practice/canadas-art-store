// ProductDetails.js

import React, { useState } from "react";
import { useParams } from "react-router-dom"; // To obtain the productId URL parameter
import "./ProductDetails.css"; // CSS file for styling
import { initialProducts } from "./ProductsData";
import { useScrollToTop } from "./useScrollToTop";

const ProductDetails = () => {
  useScrollToTop();
  // Function to change the main image when a thumbnail is clicked
  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const { productId } = useParams();
  // Find the product that matches the productId
  const product = initialProducts.find(
    (product) => product.id === Number(productId)
  );

  // State to hold the current displayed image
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) {
    // If no product was found, you can render a message or redirect to another page
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details-container">
      <div className="image-gallery">
        <img src={mainImage} alt={product.title} className="main-image" />
        <div className="thumbnail-list">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="thumbnail-image"
              onClick={() => handleThumbnailClick(image)} // Set click handler here
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1 className="product-info-title">{product.title}</h1>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>

        {/* New Blurb */}
        <p className="description">
          Available in 3 sizes!
          <br />
          $30 - 10 x 10 inches
          <br />
          $60 - 30 x 30 inches
          <br />
          $100 - 40 x 40 inches
          <br />
        </p>

        <h4 className="ingredient-title">How to Order</h4>
        {/* <p className="details">{product.details}</p> */}
        <p className="details">
          Please contact Vivek: <br />
          Instagram: https://www.instagram.com/canadasartstore/ <br />
          Text: 778 855 4395 <br />
          Email: candasartstore@gmail.com <br />
          Please reference the title of the art piece in the text or email!
        </p>
        {/* <div className="reviews-section">
    <h2>User Reviews</h2>
    {product.reviews.map((review, index) => (
      <div key={index} className="review">
        <p>
          <strong>{review.reviewer}</strong>
        </p>
        <p>{review.comment}</p>
        <p>Rating: {review.rating} / 5</p>
      </div>
    ))}
  </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
