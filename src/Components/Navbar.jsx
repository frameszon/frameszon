import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const handleOnClick = () => {
    const ele = document.querySelector(".nav-btn label");
    if (ele) {
      ele.click();
    }
  };

  return (
    <div className="nav w-screen flex flex-row shadow-lg h-16 items-center fixed z-50 bg-white bg-opacity-60 backdrop-blur-md">
      <input type="checkbox" id="nav-check" />
      <img
        className="logo md:h-16 h-14 md:ml-10 ml-4"
        src={require("../assets/logo.png")}
        alt="logo"
      />
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links flex flex-row absolute right-40">
        <div className="items-center text-slate-700 font-serif font-medium flex flex-col text-base md:flex-row md:mt-0 mt-6 gap-y-8 md:gap-y-0 gap-x-16">
          <a href="#Header" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">HOME</div>
          </a>
          <a href="#Banner" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">OFFERS</div>
          </a>
          <a href="#Categories" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">
              CATEGORIES
            </div>
          </a>
          <a href="#AboutUs" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">ABOUT US</div>
          </a>
          <a href="#ContactUs" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">
              CONTACT US
            </div>
          </a>
        </div>
        <div className="flex flex-row md:ml-16 md:mt-0 mt-8 gap-x-8 font-medium align-middle justify-center content-center text-center items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B919560947266&text=Hello,+I%27m+interested+in+purchasing+eyeglasses.+Please+share+the+catalogue&app_absent=0"
            onClick={handleOnClick}
          >
            <button className="bg-slate-500 transition-all text-white hover:bg-white hover:text-slate-500 hover:border-slate-500 hover:border-2 w-32 h-8 px-4 rounded flex flex-row align-middle justify-center content-center text-center items-center">
              <BsWhatsapp className="mr-2" /> WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
