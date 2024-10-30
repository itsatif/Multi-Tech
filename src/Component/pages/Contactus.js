/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useEffect } from "react";
import Nav from "../pages/Nav.js";
import { Helmet } from "react-helmet";
import "../../css/contactus.css";
export default function Contactus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact US</title>
        {/* Add any other meta tags or links you need */}
        <link rel="canonical " href="https://multitectools.com/contactus" />
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
      <div className="pt-20">
        <div className="object-contain w-full bg-center">
          <img
            className="w-full h-full object-cover object-center  "
            src="image/productps2.webp"
            alt="Contact Banner"
          />
        </div>

        <div className="m-5 items-center mx-10 md:px-10 px-0 ">
          <div className="text-center mb-4">
            <h1 className="font-kepler text-3xl mb-3 font-medium italic text-red-500">
              Let's Talk Business
            </h1>
            <div lassName="text-center mt-2 ">
              <p className="font-kepler text-lg italic">
                Please take a moment to complete this form and a business
                representative will get back to you .
              </p>
            </div>
          </div>
          <div className="mb-5">
            <img
              src="https://www.stafor.com/wp-content/themes/betheme/images/fancy_heading_hr.png"
              alt=""
            />
          </div>
          <form
            style={{ backgroundColor: "#ffff" }}
            className=" md:p-10 p-2 rounded-lg shadow-inner sm:mx-20"
          >
            <div class="mb-6">
              <label
                for="text"
                className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white"
              >
                Name and surname*
              </label>
              <input
                type="text"
                id="name"
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="text"
                className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white"
              >
                Business name *
              </label>
              <input
                type="text"
                id="name"
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="number"
                className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white"
              >
                Telephone
              </label>
              <input
                type="number"
                id="number"
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5568123648"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@Raisezonic.com"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="text"
                className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white"
              >
                Query Related to *
              </label>
              <input
                type="text"
                id="name"
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-6">
              <label className="block mb-2 text-[15px] font-kepler font-bold text-[#5e5e5e] dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={"10"}
                className="shadow-inner border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center text-center ">
              <button className="contactbutton">
                <span className="button_top font-kepler"> Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
