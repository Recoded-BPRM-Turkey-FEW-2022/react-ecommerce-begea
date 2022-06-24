// this will be a navbar that contain, logo, search, categories, all products,
// login, signup and cart
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { RiUser3Line } from "react-icons/ri";
import { FiUserPlus } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import useProduct from "../../api/useProduct";

export default function Navbar({ setFoundProduct }) {
  const [searchInput, setSearchInput] = useState("");
  const product = useProduct();

  useEffect(() => {
    const findSearchedProduct = (search) => {
      const fixSearch = search.charAt(0).toUpperCase() + search.slice(1);
      let filteredProducts = product.filter((item) =>
        item.title.includes(fixSearch)
      );
      setFoundProduct(filteredProducts);
    };
    findSearchedProduct(searchInput.toLowerCase());
  }, [searchInput]);

  return (
    <div className=" bg-navbar drop-shadow-[0_8px_24px_rgba(149,157,165,0.2)] mb-[5rem]">
      <nav className="flex justify-between items-center h-[7.5vh] max-w-7xl m-auto">
        <div className="logo text-2xl pl-5">
          <h1 className="font-bold ">
            <Link to="/">Shopmop</Link>
          </h1>
        </div>
        <div className="nav-links pr-5">
          <ul className="flex items-center gap-10 text-lg">
            <li className="hover:underline flex justify-center items-center gap-2">
              <input
                type="text"
                placeholder="Search for product"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-transparent border-y border-x p-1 pl-2"
              />
              <Link to="/search-result">
                <BsSearch />
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                to="/cart"
                className="flex justify-center items-center gap-2"
              >
                {" "}
                <GrCart /> Cart
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/allproducts">All Products</Link>
            </li>
            <li className="hover:underline">
              <a href="#" className="flex justify-center items-center gap-2">
                {" "}
                <RiUser3Line /> Login
              </a>
            </li>
            <li className="hover:underline">
              <a href="#" className="flex justify-center items-center gap-2">
                {" "}
                <FiUserPlus /> Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
