import React from 'react';
import './ProductList.css'; // Import CSS for styling
import tractor from '../images/tractor1.png'; // Import the image
import machine from '../images/imageeee.png'; // Import the image
import bla from '../images/imageee.png'; // Import the image
import blu from '../images/imagee.png';

const products = [
  { id: 1, image: tractor, name: 'Tractor A' },
  { id: 2, image: machine, name: 'Tractor B' },
  { id: 3, image: bla, name: 'Tractor A' },
  { id: 4, image: blu, name: 'Tractor B' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <button className="buy-now-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
