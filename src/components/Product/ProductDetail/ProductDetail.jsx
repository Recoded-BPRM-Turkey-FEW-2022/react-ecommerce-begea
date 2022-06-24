//import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, useParams,} from "react-router-dom";

const ProductDetail = ({ clickedProduct }) => {
  // const [productDetail, setproductDetail] = React.useState([]);
  /*
     let { id } = useParams();


     const fetchData = async () => {
       const res = await db.collection("products").doc(id).get();
       const data = res.data();
      return setproductDetail(data)
     };

     useEffect(() => {
       fetchData();
     }, []);

     const addToCart = () => {
      console.log("hello");
  }*/

  return (
    <div className="flex flex-wrap flex-row align-middle m-auto w-3/4 h-4/5 mt-8 mb-8 shadow-md justify-around ">

        <a href="#">
          <img src={clickedProduct.image} alt="fgd" />
        </a>
        <div className="flex-col justify-center">
          {/* detayların düzeni yukarıdan aşağı olmalı*/}
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {clickedProduct.title}
          </h1>
          <p>{clickedProduct.description}</p>
          <div className="">
            <span className="text-3xl font-bold text-gray-900 dark:text-red-600">
              {clickedProduct.price}
            </span>
          </div>

          <br></br>

          <div className="text-center">
          <button className="text-white  hover:bg-red-800 focus:ring-4 hover:shadow-lg focus:outline-none focus:ring-red-300 font-medium text-2xl rounded-sm  px-5 py-2.5 w-60 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-20">
            Add to Cart
          </button>
        </div>
      </div>
      </div>
  );


export default ProductDetail;
