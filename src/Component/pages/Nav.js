import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaAmazon } from "react-icons/fa";

const Nav = () => {
  const [navbarColor, setNavbarColor] = useState("whitesmoke");
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);

      if (currentScrollPos > 50) {
        setNavbarColor("whitesmoke");
      } else {
        setNavbarColor("white");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);
  //for nav catagory
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: navbarColor }}
        className="md:flex flex flex-wrap md:justify-betweern items-center text-ceter  bg-red-400 p-5 w-full fixed justify-between shadow-lg  z-50"
      >
        <div className="left">
          <Link to={"/"}>
            <img className="w-40 " src="\MULTITEC LOGO.png" alt="" />
          </Link>
        </div>
        <div className="">
          <ul className="md:flex flex-wrap gape-5">
            {/* <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150  md:block hidden text-black">
              <NavLink className="font-kepler" to={"/home"}>
                Home
              </NavLink>
            </li> */}
            <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150  md:block hidden text-black">
              <NavLink className="font-kepler" to={"/About"}>
                About Us
              </NavLink>
            </li>
            <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150 text-black md:block hidden relative group">
              <NavLink className="font-kepler" to={"/"}>
                Products
              </NavLink>
              <div
                style={{ backgroundColor: navbarColor }}
                className="hidden absolute top-full left-0 bg-white w-48 py-2 shadow-lg  z-10 group-hover:block"
              >
                <NavLink
                  to={"/wirestripper"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 mt-[18px]  hover:bg-gray-200 border-b-2"
                >
                  Wire Striper
                </NavLink>
                <NavLink
                  to={"/screwdrivers"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Screw Driver
                </NavLink>
                <NavLink
                  to={"/hexkeys"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Hex keys
                </NavLink>
                <NavLink
                  to={"/gardentools"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Garden & Agro Tools
                </NavLink>
                <NavLink
                  to={"/quickfix-multitools"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Quick-fix Multi-tool
                </NavLink>
                <NavLink
                  to={"/stainlesssteeltools"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Stainless Steel Tools
                </NavLink>
                <NavLink
                  to={"/nipper-micro&shears"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Nippers & Micro- Shears
                </NavLink>
                <NavLink
                  to={"/pilers-nose-pilers"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Pliers and Nose Pliers
                </NavLink>
                <NavLink
                  to={"/cablecutters"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Cable Cutters
                </NavLink>
                <NavLink
                  to={"/PowerBits"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Power Bits
                </NavLink>
                <NavLink
                  to={"/miscellaneous-tools"}
                  className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                >
                  Miscellaneous Tools
                </NavLink>
              </div>
            </li>
            {/* <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150  md:block hidden text-black">
              <NavLink className="font-kepler" to={"/news"}>
                News
              </NavLink>
            </li> */}
            <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150  md:block hidden text-black">
              <NavLink className="font-kepler" to={"/contactus"}>
                Contact
              </NavLink>
            </li>
            <li className="text-medium px-5 font-kepler hover:border-b-2 delay-150  md:block hidden text-black">
              <NavLink className="font-kepler" to={"/Blogs"}>
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden items-center justify-left p-1 shadow-inner">
          <h2 className="p-1 overflow-hidden hover:p-0 cursor-pointer rounded-full ease-in-out duration-200">
            <Link
              to={"https://www.instagram.com/multitectools_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram className="text-xl rounded-full hover:text-2xl overflow-hidden text-pink-500 ease-in-out duration-200 text-black" />
            </Link>
          </h2>
          <h2 className="p-1 overflow-hidden hover:p-0 cursor-pointer rounded-full ease-in-out duration-200">
            <Link
              to={"https://www.facebook.com/multitectools"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook className=" text-xl rounded-full hover:text-2xl overflow-hidden text-blue-500 ease-in-out duration-200 text-black" />
            </Link>
          </h2>
          <h2 className="cursor-pointer rounded-full transition-all duration-200">
            <a
              href="https://x.com/Multitec_Tools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-brands fa-x text-xl hover:text-2xl text-black hover:text-blue-500 transition-all duration-200"></span>
            </a>
          </h2>
          <h2 className="p-1 overflow-hidden hover:p-0 cursor-pointer rounded-full ease-in-out duration-200">
            <Link
              to={"https://www.youtube.com/@MultitecGardenTools"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineYoutube className="  text-xl rounded-full hover:text-2xl overflow-hidden text-red-700  ease-in-out duration-200 text-black" />
            </Link>
          </h2>
          <h2 className="p-1 overflow-hidden hover:p-0 cursor-pointer rounded-full ease-in-out duration-200">
            <a
              href="https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#232f3e" }}
              className="flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow-lg"
            >
              <FaAmazon className="mr-2" />
              Shop on Amazon
            </a>
          </h2>
        </div>
        <div className="md:hidden block">
          <div className="md:hidden block">
            {!isOpen && (
              <GiHamburgerMenu
                className={`text-black text-3xl ml-5 transition ease-in-out delay-150 transform duration-800 cursor-pointer ${
                  isOpen ? "rotate-360" : ""
                }`}
                onClick={handleToggle}
              />
            )}
            {isOpen && (
              <RxCross2
                className={`text-black text-3xl ml-5 transition ease-in-out delay-150 transform duration-800 cursor-pointer ${
                  isOpen ? "rotate-360" : ""
                }`}
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
        {isOpen && (
          <nav
            style={{
              backgroundColor: navbarColor,
              top: "70px",
              height: "50vh",
            }}
            className="z-40  w-64  absolute left-0  h-auto pb-5 md:hidden "
          >
            <ul className="flex flex-col justify-center  z-50 text-center">
              {/* <li className="text-medium px-5 py-3 font-sans text-black">
                {" "}
                <NavLink className="font-kepler" to={"/home"}>
                  Home
                </NavLink>
              </li> */}
              <li className="text-medium px-5 py-3 font-sans  text-black ">
                <NavLink className="font-kepler" to={"/About"}>
                  About
                </NavLink>
              </li>
              <li className="text-medium px-5 font-sans hover:border-b-2 delay-150 text-black  relative group">
                <NavLink className="font-kepler" to={"/"}>
                  Products
                </NavLink>
                <div
                  style={{ backgroundColor: navbarColor }}
                  className="hidden absolute top-full left-16 bg-white w-48 py-2 shadow-lg  z-10 group-hover:block"
                >
                  <NavLink
                    to={"/wirestripper"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 mt-[5px]  hover:bg-gray-200 border-b-2"
                  >
                    Wire Striper
                  </NavLink>
                  <NavLink
                    to={"/screwdrivers"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Screw Driver
                  </NavLink>
                  <NavLink
                    to={"/hexkeys"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Hex keys
                  </NavLink>
                  <NavLink
                    to={"/gardentools"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Garden And Agro Tools
                  </NavLink>
                  <NavLink
                    to={"/stainlesssteeltools"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Stainless Steel Tools
                  </NavLink>
                  <NavLink
                    to={"/nipper-micro&shears"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Nippers & Micro-Shears
                  </NavLink>
                  <NavLink
                    to={"/pilers-nose-pilers"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Pliers and Nose Pliers
                  </NavLink>
                  <NavLink
                    to={"/cablecutters"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Cable Cutters
                  </NavLink>
                  <NavLink
                    to={"/PowerBits"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Power Bits
                  </NavLink>
                  <NavLink
                    to={"/MISCELLANEOUSTOOLS"}
                    className="block px-4 py-4 bg-[whitesmoke] text-sm font-kepler text-gray-600 hover:bg-gray-200 border-b-2"
                  >
                    Miscellaneous Tools
                  </NavLink>
                </div>
              </li>
              {/* <li className="text-medium px-5 py-3 font-sans  text-black ">
                <NavLink className="font-kepler" to={"/news"}>
                  News
                </NavLink>
              </li> */}
              <li className="text-medium px-5 py-3 font-sans  text-black ">
                <NavLink className="font-kepler" to={"/contactus"}>
                  Contact
                </NavLink>
              </li>
              <li className="text-medium px-5 py-3 font-sans  text-black ">
                <NavLink className="font-kepler" to={"/blogs"}>
                  Blogs
                </NavLink>
              </li>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="text-center justify-center mt-5 mb-5 bottom-0"
              >
                <h2 className="px-1 cursor-pointer">
                  <Link
                    to={"https://www.instagram.com/multitec_tools/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineInstagram className="text-xl   text-black" />
                  </Link>
                </h2>
                <h2 className="px-1 cursor-pointer">
                  <Link
                    to={
                      "https://www.facebook.com/profile.php?id=100092582431921"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineFacebook className=" text-xl   text-black" />
                  </Link>
                </h2>
                <h2 className="px-1 cursor-pointer">
                  <Link
                    to={"https://twitter.com/Multitecl"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter className="  text-xl   text-black" />
                  </Link>
                </h2>
                <h2 className="px-1 cursor-pointer">
                  <Link
                    to={"https://www.youtube.com/@multitecindustries"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineYoutube className="  text-xl   text-black" />{" "}
                  </Link>
                </h2>
                <h2 className="px-1 cursor-pointer">
                  <Link
                    to={
                      "https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaAmazon className="  text-xl   text-black" />{" "}
                  </Link>
                </h2>
              </div>
            </ul>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Nav;
