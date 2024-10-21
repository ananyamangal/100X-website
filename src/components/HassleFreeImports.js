import React from 'react';
import './HassleFreeImports.css';  // Assuming you have a separate CSS file for styling
import topbanner from '../images/top-banner.png'
import man from '../images/man.png'
const HassleFreeImports = () => {
  return (
    <div className="hassle-free-container">
     
      <div className="top-banner">
        <img src= {topbanner} alt="Top Banner" className="banner-image" />
      </div>


      {/* Hassle Free Imports Section */}
      <div className="hassle-free-section">
        <div className="hassle-free-left">
          <img src={man} alt="Man holding money" className="man-image" />
        </div>
        <div className="hassle-free-right">
          <h1>Hassle free imports</h1>
          <ul>
            <li><strong>Licenses</strong> 
            No need to obtain and maintain Licenses, Certificates like DGFT, IEC, EPR - Plastic Waste, ISO etc.</li>
            <li><strong>Foreign Exchange</strong> 
            No need to pay for foreign exchange etc. Pay in local Currency. Get volume pricing.</li>
            <li><strong>Logistics</strong>
            No need to appoint clearing agents, handle logistics and risks.</li>
            <li><strong>Insurance</strong> 
            No need to buy expensive insurance.</li>
            <li><strong>Travel Cost</strong>
            Save expensive travel cost and time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HassleFreeImports;
