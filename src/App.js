import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsContext } from './api/ProductsContext';
import useProduct from './api/useProduct';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import ListProducts from './components/Navbar/ListProducts/ListProducts';
import Footer from './components/Footer/Footer';
import Search from './components/Navbar/Search/Search';

export default function App() {
  const [foundProduct, setFoundProduct] = useState([]);
  const products = useProduct();

  return (
    <ProductsContext.Provider value={products}>
      <div className='bg-avokado font-opensans pb-5'>
        <Navbar setFoundProduct={setFoundProduct} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/allproducts' element={<ListProducts />} />
          <Route
            path='/search-result'
            element={<Search foundProduct={foundProduct} />}
          />

          {/* <Route path='/:product' element={<ProductDetail />} /> */}
        </Routes>
      </div>
      <Footer />
    </ProductsContext.Provider>
  );
}
