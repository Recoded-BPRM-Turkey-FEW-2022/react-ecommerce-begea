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
    <div class="flex-row flex-wrap justify-start rounded-lg ">
      {/* sayfadüzeni yan yana olmalı*/}
      <div style={{ width: "auto" }}>
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
            {/* <p>{productDetail.count}</p> bunu nasıl göstericez */}
            {/* <p>{productDetail.rate}</p> bunu nasıl göstericez */}
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
