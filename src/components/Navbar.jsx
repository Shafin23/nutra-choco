import React, { useState } from "react";
import NutrachocoIcon from "../assets/icons/nutrachoco.png";
import whishlistIcon from "../assets/icons/whishlist.svg";
import cartIcon from "../assets/icons/cart.svg";
import loginIcon from "../assets/icons/login.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="font-display text-[20px] text-[#553311] w-screen h-28 flex justify-around items-center z-100">
      <NavLink to="/">
        <img src={NutrachocoIcon} alt="" />
      </NavLink>
      <div className="flex">
        <NavLink to="/our-range" className="px-6 hover:font-medium">
          Our Range
        </NavLink>
        <NavLink to="/about-us" className="px-6 hover:font-medium">
          About Us
        </NavLink>
        <NavLink to="/shop-all" className="px-6 hover:font-medium">
          Shop All
        </NavLink>
        <div
          className="px-8  mx-2 relative hover:bg-white"
          onMouseEnter={() => setShowDropdown(true)}
        >
          Shop By Concern
          {showDropdown && (
            <div
              className="absolute bg-white font-display mt-2 py-2 px-1 left-6 right-4 text-[14px] font-semibold border-t-4 border-t-[#A6896C] z-50"
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a href="#" className="block px-4 py-3 text-[#9b7045] ">
                Sexual desire
              </a>
              <a href="#" className="block px-4 py-3 text-[#9b7045] ">
                Sound Sleep
              </a>
              <a href="#" className="block px-4 py-3 text-[#9b7045] ">
                Women Health
              </a>
              <a href="#" className="block px-4 py-3 text-[#9b7045] ">
                Skin & Hair nutrition
              </a>
            </div>
          )}
        </div>
        <div className="px-6 hover:font-medium">Value Packs</div>
        <div className="px-6 hover:font-medium">Contact Us</div>
      </div>
      <div className="flex items-center">
        <NavLink to="/wishlist">
          <img className="px-4" src={whishlistIcon} alt="" />
        </NavLink>
        <NavLink to="/#">
          <img className="px-4" src={cartIcon} alt="" />
        </NavLink>
        <NavLink to="/#">
          <img className="px-4" src={loginIcon} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
