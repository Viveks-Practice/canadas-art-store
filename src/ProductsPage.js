import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import "./ProductsPage.css";
import { initialProducts } from "./ProductsData";

// Sample product data (you will fill this with your own product data)

function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddProductModal(false);
  };

  return (
    <div>
      {/* <button
        className="add-product-btn"
        onClick={() => setShowAddProductModal(true)}
      >
        + Add Product
      </button> */}
      <div className="product-grid">
        {products.map((product) => (
          // Wrap the entire card content in a Link component
          <Link to={`/products/${product.id}`} className="product-item-link">
            <div key={product.id} className="product-item">
              <h3 className="product-title">{product.title}</h3>
              <img
                src={product.imgUrl}
                alt={product.title}
                className="product-image"
              />
              <p className="product-price">{product.price}</p>
              {/* Remove the "More Details" button as it's no longer necessary */}
            </div>
          </Link>
        ))}
      </div>
      {showAddProductModal && (
        <AddProductModal
          onSubmit={handleAddProduct}
          onClose={() => setShowAddProductModal(false)}
        />
      )}
    </div>
  );
}

export default ProductsPage;
