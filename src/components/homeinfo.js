import React from 'react';
import './homeinfo.css'; 
import graphic from '../images/graphic.png'


const Homeinfo = () => {
    return (
        <div className='page'>

            <div className='content'>
                <h1>No Minimum Order Quantity </h1>
                <h2 className='id'>No MOQ</h2>
                <p>Book any small quantity now. Get bulk order price</p>
                <h2 className='id'>MOQ- Minimum Order Quality</h2>
                <p>Manufacturer do not take small orders. Gives MOQ.</p>


            </div>
            <div className='photo'>
                <img src= {graphic} alt="graphic" className="graphic" />
            </div>

        </div>

      
    );
  };
  
  export default Homeinfo;
  