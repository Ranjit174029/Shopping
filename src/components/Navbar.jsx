import React, { useContext } from "react";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { products_categories } from "../data/products";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { invoice } = useContext(ProductContext);

  const isActive = (element) => {
    return element?.isActive ? "text-red-600" : "";
  };

  return (
    <div className="w-full h-20 border shadow-lg flex justify-between px-8 items-center bg-white">
      <NavLink className="flex flex-col items-center" to={"/"}>
        <FaYoutube className="text-4xl text-red-500" />
        <span>@CodeorCode</span>
      </NavLink>

      <ul className="flex items-center gap-10">
        {products_categories.map((category) => {
          return (
            <li key={Math.random()}>
              <NavLink className={isActive} to={`/${category.value}`}>
                {category.label}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Link className="relative" to={'/cart'}>
        <FaShoppingCart className="text-2xl" />
        {invoice?.count > 0 && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 text-white flex items-center justify-center rounded-full">
            {invoice?.count}
          </div>
        )}
      </Link>
    </div>
  );
}
