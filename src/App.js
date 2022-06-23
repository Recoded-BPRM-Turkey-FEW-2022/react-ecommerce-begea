<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import CardView from "./components/Product/CardView/CardView";
import AllProducts from "./components/Navbar/AllProducts/AllProducts";

export const ThemeProduct = React.createContext();


export default function App() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts((prev) => (prev[0] = data)));
  }, []);

  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <>
      <div className="max-w-full border-b-2">
        <nav className="flex justify-between align-middle max-w-7xl mx-auto ">
          <div className="logo text-2xl">Logo</div>
          <div className="nav-links flex items-center ">
            <ul className="flex items-center">
              <li className="h-12 px-5 border-l-2 flex items-center">
                <a href="#">Cart</a>
              </li>
              <li className="h-12 px-5 border-l-2 flex items-center">
                <a href="#">Categories</a>
              </li>
              <li className="h-12 px-5 border-l-2 flex items-center">
                <a href="#">All Products</a>
              </li>
              <li className="h-12 px-5 border-l-2 flex items-center">
                <a href="#">Login</a>
              </li>
              <li className="h-12 px-5 border-l-2 border-r-2 flex items-center">
                <a href="#">Sign up</a>

              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ThemeProduct.Provider value={products}>
        <AllProducts />
        {/* {products.map((product, index) => {
        return (
          <CardView
            key={index}
            title={product.title}

            categories={product.category}
            price={product.price}
            image={product.image}
          />
        );
      })} */}
      </ThemeProduct.Provider>
    </>

=======
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
>>>>>>> Ahmet
  );
}
