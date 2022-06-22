import React from "react";
//import { ThemeProduct } from "../../../App";
//import { useContext } from "react";

const ProductDetail = () => {

  return (
    <div className="flex flex-wrap flex-row justify-center m-auto w-3/4 h-4/5 mt-8 mb-8 rounded-xl space-x-40  shadow-md ">
     <div className=" ">
        <a href="#">
          <img className="h-full  md-flex"src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product image" />
        </a>
     </div>

      <div className="flex-col flex-wrap mt-8 p-10  justify-center">

          <div className="flex flex-wrap flex-col  text-center">
            {/* detayların düzeni yukarıdan aşağı olmalı*/}
            <p className="text-black font-bold text-3xl hover:underline">
            TİTLE
            </p>
            <br></br>
            <p>DescriptionDescriptionDescriptionDescription</p>
            <br></br>
            <br></br>
            <span className="text-5xl font-bold text-gray-900 dark:text-red-600 divide-red-600 divide-y">
              9.99$
            </span>
          </div>

          <br></br><br></br>

          <div className="text-center">
             <p>Count:?</p>
             <br></br>
            <p>Rate:?</p>

          <button className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 hover:w-10/12 hover:h-16 focus:outline-none focus:ring-orange-300 font-medium text-2xl rounded-lg  px-5 py-2.5 w-60 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-20">
            Add to Cart
          </button>
          </div>

        </div>
      </div>
  );
};


export default ProductDetail;

