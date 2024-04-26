
import React from 'react'
import { NavLink } from 'react-router-dom';
import nutrachoco from "../assets/icons/nutrachoco.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center font-display h-[#550px]">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-7 items-start mt-9 mb-24 w-full max-w-[1147px] max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={nutrachoco}
              className="shrink-0 self-start max-w-full aspect-[0.88] w-[140px]"
            />
            <div className="flex justify-center">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className="flex-auto self-end mt-12 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-black capitalize max-md:mt-10">
                  <div className="text-3xl font-bold text-[#A6896C]">
                    Explore
                  </div>
                  <div className="mt-3">All Products</div>
                  <div className="mt-3">Our Story</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xl text-black capitalize max-md:mt-10">
                  <div className="text-3xl font-bold text-[#A6896C]">
                    Quick Links
                  </div>
                  <div className="mt-3">My Account</div>
                  <div className="mt-3">My Orders</div>
                  <div className="mt-3">FAQs</div>
                  <div className="mt-3">Contact Us</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xl text-black capitalize max-md:mt-10">
                  <div className="text-3xl font-bold text-[#A6896C]">Legal</div>
                  {/* <NavLink to='/refund-policy' className="mt-3">Refund Policy</NavLink>
                  <NavLink to='/terms-of-services' className="mt-3">Terms of Services</NavLink>
                  <NavLink to='/privacy-policy' className="mt-3">Privacy Policy</NavLink>
                  <NavLink to='/shipping-policy' className="mt-3">Shipping Policy</NavLink> */}
                  <div className="mt-3">Refund Policy</div>
                  <div className="mt-3">Terms of Services</div>
                  <div className="mt-3">Privacy Policy</div>
                  <div className="mt-3">Shipping Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
