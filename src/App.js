import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsContext } from "./api/ProductsContext";
import useProduct from "./api/useProduct";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ListProducts from "./components/Navbar/ListProducts/ListProducts";
import Footer from "./components/Footer/Footer";
import Search from "./components/Navbar/Search/Search";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import Cart from "./components/Navbar/Cart/Cart";

export default function App() {
  const [foundProduct, setFoundProduct] = useState([]);
  const [clickedProduct, setClickedProduct] = useState({});
  const products = useProduct();

  return (
    <ProductsContext.Provider value={products}>
      <div className="bg-avokado font-opensans pb-5">
        <Navbar setFoundProduct={setFoundProduct} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/allproducts"
            element={<ListProducts setClickedProduct={setClickedProduct} />}
          />
          <Route
            path="/search-result"
            element={<Search foundProduct={foundProduct} />}
          />
          <Route
            path="/product/:product"
            element={<ProductDetail clickedProduct={clickedProduct} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </ProductsContext.Provider>
  );
}
