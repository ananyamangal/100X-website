import React from 'react';
import Homepage from '../components/Homepage'; // Adjust the path if needed
import HassleFreeImports from '../components/HassleFreeImports';
import ProductList from '../components/ProductList';
import Homeinfo from '../components/homeinfo';
import ReelComponent from '../components/reels'
const App = () => {
  return (
    <div>
      
      <Homepage />
      <HassleFreeImports/>
      <Homeinfo/>
      <ProductList/>
      <ReelComponent/>
    </div>
  );
};

export default App;
