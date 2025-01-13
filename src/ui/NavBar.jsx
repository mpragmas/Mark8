import { useState } from "react";
import { NavLink } from "react-router-dom";

import Cart from "../components/Cart/Cart";
import Logo from "../assets/logo.png";
import SearchPopup from "./SearchPopup";
import { CgHomeAlt } from "react-icons/cg";
import { RiStoreLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import ProfileNav from "./ProfileNav";

function NavBar() {
  const [showProfileNav, setShowProfileNav] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  function handleShowProfileNav() {
    setShowProfileNav((show) => !show);
  }
  function handleShowCartPopup() {
    setShowCartPopup((show) => !show);
  }
  function handleShowSearchPopup() {
    setShowSearchPopup((show) => !show);
  }

  return (
    <div className="fixed top-0 z-30 flex w-full items-center justify-between gap-5 border-b border-light bg-white px-4 py-1 sm:px-8 sm:py-2 lg:px-16 lg:py-2">
      <div className="flex items-center gap-2 lg:gap-5">
        <NavLink
          to="home"
          className="flex h-[40px] items-center gap-1 lg:gap-3"
        >
          <img src={Logo} alt="" className="h-[40px] w-[40px]" />
          <div className="p hidden h-[29px] sm:flex sm:flex-col sm:justify-center">
            <h1 className="text-sm font-bold">Mark8</h1>
            <p className="text-xs tracking-wide text-gray-700">
              By Awesomity Lab
            </p>
          </div>
        </NavLink>

        <div className="lg-[gap-15px] flex gap-[10px]">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hidden gap-1 sm:flex sm:items-center sm:justify-center ${
                isActive ? "font-bold text-accent" : "text-dark"
              }`
            }
          >
            <CgHomeAlt />
            <span className="text-sm text-lightDark">HOME</span>
          </NavLink>

          <NavLink
            to="/store"
            className={({ isActive }) =>
              `flex items-center justify-center gap-1 ${
                isActive ? "font-bold text-accent" : "text-lightDark"
              }`
            }
          >
            <RiStoreLine />
            <span className="text-sm text-lightDark">Store</span>
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <CiSearch
          onClick={() => setShowSearchPopup(true)}
          className="mr-2 cursor-pointer"
        />

        <p
          onClick={() => setShowCartPopup(true)}
          className="hidden cursor-pointer gap-[3px] sm:flex sm:items-center md:gap-1"
        >
          <AiOutlineShoppingCart />
          <span>My Cart</span>
          <LuDot className="text-red-600" />
        </p>
        <NavLink
          to="products/saved"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive ? "font-bold text-accent" : "text-lightDark"
            }`
          }
        >
          <CiHeart className="h-7 w-5 font-bold" />
          <span className="text-lightDark">Saved</span>
        </NavLink>

        <div className="relative flex h-[48px] items-center gap-[5px]">
          <a
            href=""
            className="hidden gap-2 rounded-md border border-solid border-light px-3 py-2 md:flex md:items-center"
          >
            <span>open store</span>
            <RiStoreLine className="text-accent" />
          </a>
          <a
            onClick={handleShowProfileNav}
            href="#"
            className="flex items-center gap-2 rounded-md border border-solid border-light px-3 py-3"
          >
            <VscAccount />
            <MdKeyboardArrowDown className="w-[32px]" />
          </a>

          {showProfileNav && (
            <ProfileNav handleShowProfileNav={handleShowProfileNav} />
          )}
        </div>
      </div>
      {showSearchPopup && (
        <SearchPopup handleShowSearchPopup={handleShowSearchPopup} />
      )}
      {showCartPopup && <Cart handleShowCartPopup={handleShowCartPopup} />}
    </div>
  );
}

export default NavBar;
