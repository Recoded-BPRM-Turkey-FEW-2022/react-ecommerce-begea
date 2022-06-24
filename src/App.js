import React from 'react';
import { ProductsContext } from './api/ProductsContext';
import useProduct from './api/useProduct';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  const products = useProduct();

  return (
    <ProductsContext.Provider value={products}>
      <div className='bg-avokado font-opensans pb-5'>
        <Navbar />
        <Main />
      </div>
      <Footer />
    </ProductsContext.Provider>
  );
}
