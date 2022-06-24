import { CategoriesContext } from "../../api/CategoriesContext";
import ProductCategories from "../../api/ProductCategories";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { Link } from "react-router-dom";
export default function Footer() {
  const categories = ProductCategories();

  return (
    <CategoriesContext.Provider value={categories}>
      <div className="footer bg-black text-white h-[600px]  md:h-80 md:flex md:flex-row md:justify-around pt-8 pb-8">
        <div className=" m-5">
          <div className="logo text-2xl">
            <h1 className="md:font-bold mb-3 md:mb-5 ">
              <Link to="/">Shopmop</Link>
            </h1>
            <div className="flex flex-row items-center">
              <a href="#" className=" md:m-1">
                <AiOutlineInstagram size={35} />
              </a>
              <a href="#" className=" md:m-1">
                <AiOutlineFacebook size={35} />
              </a>
              <a href="#" className=" md:m-1">
                <AiOutlineTwitter size={35} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-extralight ml-5 mb-3 md:mb-5">
          <a href="#" className="font-bold mb-3 md:mb-5">
            About Us
          </a>
          <p>Address: 123 St.</p>
          <p>Phone: +1-888-1234</p>
          <a href="#" className="">
            E-Mail Us!
          </a>
        </div>
        <div className="flex flex-col font-extralight ml-5 md:mb-5">
          <p className="font-bold mb-3 md:mb-5">Categories</p>
          <ul>
            {categories.map((category) => {
              return (
                <a href="#">
                  <li className=" flex flex-col hover:underline">
                    {category.name}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col font-extralight ml-5">
          <p className="font-bold mb-3 md:mb-5">Let Us Help You!</p>
          <ul className="font-extralight">
            <li className=" flex flex-col justify-around hover:underline">
              {" "}
              <a href="#">Track Your Order</a>
            </li>
            <li className=" flex flex-col justify-around hover:underline">
              {" "}
              <a href="#">Delivery Fee and Policies</a>
            </li>
            <li className=" flex flex-col justify-around hover:underline">
              {" "}
              <a href="#">Return Policy</a>
            </li>
            <li className=" flex flex-col justify-around hover:underline">
              {" "}
              <a href="#">Customer Services</a>
            </li>
          </ul>
        </div>
      </div>
    </CategoriesContext.Provider>
  );
}
