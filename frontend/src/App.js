import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Products from './component/Products';
import CheckOut from './component/CheckOut';
import ProductsDetail from './component/ProductsDetail';
import Signup from './component/Signup';
import AddToCart from './component/AddToCart';
import CustomerSignup from './component/CustomerSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productsPage" element={<Products />} />
        <Route exact path="/productDetailPage" element={<ProductsDetail />} />
        <Route exact path="/checkOutPage" element={<CheckOut />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/addToCart" element={<AddToCart/>} />
        <Route exact path="/customerSignup" element={<CustomerSignup/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;