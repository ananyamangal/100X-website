import React from 'react';
import './Productpage.css';
import brochure from '../images/brochure.png';
import comp from '../images/comp.png';
import Slideshow from '../components/productslideshow';
const ProductPage = () => {
  return (
    <div>
    <div className="product-page">
        <div className='photos'>
      <div className="product-info">
      <div className="slide">
        <Slideshow />
      </div>
        <h2>Rs 17000</h2>
      </div>
      <div className="brands-logos">
      <img src={comp} alt="competitors" />

        </div>
        </div>

      <div className="booking-info">
        <h2>Booking Offer Ends</h2>
        <p className="timer">12 hrs 21 Min 35 Sec</p>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="progress-info">
            <span>Booked 62 Pcs</span>
            <span>Goal 280</span>
          </div>
        </div>

        <div className="terms">
          <h3>Terms:</h3>
          <ol>
            <li>GST extra @ 12%</li>
            <li>Prices are F.O.R Gurugram Haryana. Freight extra as actual to your location.</li>
            <li>Delivery: 45-60 Days (Standard Import Duration).</li>
            <li>Non-refundable once booked.</li>
            <li>No warranty of product, however we do strict quality checks. Spares available.</li>
            <li>Returns: within 3 days in case of manufacturing defect or broken.</li>
            <li>Balance payment on dispatch.</li>
          </ol>
        </div>

        <div className="payment-buttons">
          <button className="btn-pay-now">Pay Rs 1700 Now Price (Rs 17000)</button>
          <div className='bookbutton'>
          <button className="btn-booknow">Book Live Demo</button>
          </div>
          
       
        </div>
      </div>
     

    </div>
     <div className="product-info">
     <img src={brochure} alt="brochure" className="brochure" />
     </div>
     </div>
  );
};

export default ProductPage;
