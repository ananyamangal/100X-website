import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path if needed
import Homepage from './components/Homepage'; // Adjust the path if needed
import './App.css'; // Optional: if you have global styles
import HassleFreeImports from './components/HassleFreeImports';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/Productpage';
import HomePage from './pages/HomePage';
import SignUpForm from './pages/SignUpForm';

const App = () => {
  return (
   
    
    <Router>
    <div>
    <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<SignUpForm/>} />
      <Route path="/product" element={<ProductPage/>} />
     
    </Routes>

    </div>
    </Router>
   
  );
};

export default App;
