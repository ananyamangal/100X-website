import React from 'react';
import './Homepage.css';  // Assume you have CSS styling for this page
import manHoldingMoney from '../images/man-holding-money.png';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="content-section">
        <h1>Buy Small quantity at bulk rates!</h1>
        
        <div className="info-section">
          <h3 className="info-title">Imports</h3>
          <p>Import in group and take advantage of bulk price from manufacturer.</p>

          <h3 className="info-title">Brands</h3>
          <p>Create your own brand at our own price.</p>

          <h3 className="info-title">Price</h3>
          <p>Get access to best price deals.</p>

          <button className="join-button">Join Free</button>
        </div>
      </div>

      <div className="image-section">
        <img src = {manHoldingMoney} alt="Man holding money" className="homepage-image" />
      </div>
    </div>
  );
};

export default Homepage;
