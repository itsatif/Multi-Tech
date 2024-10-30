import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import { FaTools } from "react-icons/fa";
import "../../css/ourproduct.css";
// import { TbToolsKitchen } from 'react-icons/tb'
// import { GoTools } from 'react-icons/go'
import ImgSlider from "../SubPages/ImgSlider";
import { Helmet } from "react-helmet";
import Nav from "../pages/Nav.js";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsappIcon from "../SubPages/WhatsapIcon.js";

const Ourproduct = () => {
  //for nav catagory
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <Helmet>
        <h1>Manufacturing best hand tools & garden tools</h1>
        <meta
          name="description"
          content="Multitectools is a manufacturing tools industry in Gurgaon, India.our best product is garden
      tools(pruning shears,garden trowel, trowel,digging fork, lopper etc).hand tools(pliers & nose pliers
      screwdrivers ,tools kits etc).
      "
        />
        <title>Mutitec Tools</title>
        {/* Add any other meta tags or links you need */}
        <link rel="canonical " href="https://multitectools.com/" />
        <meta name="title" content="Multitec Tools" />
        <meta
          name="description"
          content="Wire Strippers, Screw Drivers
& Micro Shear Manufacturer offered by Multitec Industries from
Gurgaon, Haryana, India."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://multitectools.com/" />
        <meta property="og:title" content="Multitec Tools" />
        <meta
          property="og:description"
          content="Wire Strippers, Screw
Drivers & Micro Shear Manufacturer offered by Multitec
Industries from Gurgaon, Haryana, India."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://multitectools.com/" />
        <meta property="twitter:title" content="Multitec Tools" />
        <meta
          property="twitter:description"
          content="Wire Strippers,
Screw Drivers & Micro Shear Manufacturer offered by Multitec
Industries from Gurgaon, Haryana, India."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Helmet>
      <div
        style={{ backgroundColor: "whitesmoke" }}
        className="sm:py-16  py-16   "
      >
        <div className="felx ">
          <ImgSlider />

          {/* productlist start */}
          {/* <div className="scrolling-text-container flex justify-center mt-8">
            <div className="scrolling-text text-2xl text-center gap-x-5 text-red-600 font-semibold">
              We Also Sell Our Products on Amazon{" "}
              <Link to={"https://www.amazon.in/multitec/s?k=multitec"}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                  Visit Now
                </button>
              </Link>
            </div>
          </div> */}
          <div className="text-center ">
            <div className=" sm:mx-12">
              <h1 className="text-4xl  font-bold mb-5">
                <i className="font-kepler"> Product Catalogue</i>
              </h1>
            </div>
          </div>

          <div>
            <img
              src="https://www.stafor.com/wp-content/themes/betheme/images/fancy_heading_hr.png"
              alt=""
            />
          </div>
          <div className="flex md:justify-evenly justify-center flex-wrap  py-12 space-y-1  md:mx-20 mx-0 mt-5">
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item "
                data-aos="fade-up"
              >
                <NavLink to="/wirestripper">
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/1.webp"
                    alt="wirestriper"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Wire Striper
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/screwdrivers">
                  {" "}
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/2.webp"
                    alt="Scredriver"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Screw Driver
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/hexkeys">
                  {" "}
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/3.webp"
                    alt="HexKeys"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Hex Keys
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/gardentools">
                  {" "}
                  <img
                    className="h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/4.webp"
                    alt="Garden Tools"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Garden and Agro Tools
                </h1>
              </div>
            </div>

            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/stainlesssteeltools">
                  {" "}
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/5.webp"
                    alt="Stainless Tools"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Stainless Steel Tools
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/nipper">
                  {" "}
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/6.webp"
                    alt="Nipper And FLash Cutter"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Nipper and Flash Cutters
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/pilers">
                  {" "}
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/7.webp"
                    alt="Pilers"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Pliers and Nose Pliers
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/cablecutters">
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/8.webp"
                    alt="Cable Cutters"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Cable Cutters
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/PowerBits">
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/9.webp"
                    alt="Power Bits"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Power Bits
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/miscellaneous-tools">
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/HomeImages/10.webp"
                    alt="Miscellaneous"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Miscellaneous Tools
                </h1>
              </div>
            </div>
            <div className="block">
              <div
                className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item"
                data-aos="fade-up"
              >
                <NavLink to="/quickfix-multitools">
                  <img
                    className=" h-[180px] object-contain block productimg hover:opacity-75"
                    src="image/quickfix-multitools.jpeg"
                    alt="Quick-fix Multi-tool"
                  />
                </NavLink>
              </div>
              <div className="text-center mt-2">
                <h1 className="text-xl font-kepler font-bold text-[#292635]">
                  Quick-fix Multi-tool
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsappIcon />
    </>
  );
};
export default Ourproduct;
