import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Nav from "../pages/Nav.js";
import { NavLink } from "react-router-dom";
// import ImageGallery from '../SubPages/ImageGallery';
// import ImageGallery2 from '../SubPages/ImageGallery2';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>News And Update related to Multitect Tools</title>
        {/* Add any other meta tags or links you need */}
        <link rel="canonical " href="https://multitectools.com/news" />
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
      <Nav />
      <div>
        <div className="sm:pt-20 pt-20 object-contain w-full">
          <img
            className="w-full object-cover h-80"
            src="image/productps2.webp"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-center font-kepler italic text-[32px] font-semibold text-red-700">
            News
          </h1>
        </div>
        <div className="m-5 sm:px-28 sm:py-8">
          <div className="flex justify-start p-5 items-center gap-9 flex-wrap">
            <img
              className="w-40  h-30 object-cover rounded-lg hover:scale-110 transition-all ease-in-out duration-300"
              src="image/newsimgs/ch3.jpeg"
              alt=""
            />
            <p className="font-kepler text-slate-600">
              <span className="font-kepler text-xl">November 2022 4 & 7 </span>
              <br />
              15th edition of the premier agri & food technology fair sector 17,
              chandigarh.
            </p>
            <br />{" "}
            <NavLink to="/chandigarevent">
              <span className="font-kepler text-lg cursor-pointer hover:underline transition-all ease-in duration-300">
                ..More
              </span>
            </NavLink>
          </div>
        </div>
        <div className="m-5 sm:px-28 sm:py-8">
          <div className="flex justify-start p-5 items-center gap-9 flex-wrap">
            <img
              className="w-40  h-30 object-cover rounded-lg hover:scale-110 transition-all ease-in-out duration-300"
              src="image/newsimgs/ka5.jpeg"
              alt=""
            />
            <p className="font-kepler text-slate-600">
              <span className="font-kepler text-xl">
                December 2022 14th 18th{" "}
              </span>
              <br /> Kisan Agri show,pune.
            </p>
            <br />{" "}
            <NavLink to="/kisanagrievent">
              <span className="font-kepler text-lg cursor-pointer hover:underline transition-all ease-in duration-300">
                ..More
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
