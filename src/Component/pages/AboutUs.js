import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Nav from "../pages/Nav.js";
import { Link } from "react-router-dom";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us</title>

        <link rel="canonical " href="https://multitectools.com/About" />
        {/* <!-- Primary Meta Tags --> */}
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
        <div className="pt-12 mb-10">
          <img
            loading="lazy"
            className="w-full"
            src="image/aboutBanner.webp"
            alt="About Mutitect"
          />
        </div>
        {/* <div className="scrolling-text-container flex justify-center mt-8">
          <div className="scrolling-text text-2xl text-center gap-x-5 text-red-600 font-semibold">
            We Also Sell Our Products on Amazon{" "}
            <Link to={"https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                Visit Now
              </button>
            </Link>
          </div>
        </div> */}
        <div className="text-center items-center justify-center flex">
          <h1 className="text-2xl text-red-700 font-kepler italic p-2 w-64">
            <b>About Us:</b>
          </h1>
        </div>
        <div className=" sm:px-10 py-4  mt-5 mb-10  border-b-2 border-black mx-4">
          <p className=" font-kepler font-medium text-[17px]">
            <div className="px-10 ">
              <p className=" font-kepler font-medium text-[17px]">
                <span className="text-5xl font-kepler  text-red-700">M</span>
                ultitec Industries Limited is incorporated as a 40 year old
                enterprise, engaged so long in the manufacturing of High
                Technology Hand & Fastening Tools - Wire Strippers, Pliers,
                Nippers, Cable Cutters, Screw Drivers, Hex key and host of other
                engineering devices.
              </p>
              <br />
              <p className=" font-kepler font-medium text-[17px]">
                The company recently diversified into the field of Horticulture
                & Agricultural tools and introduced International Quality range
                of Garden & Agro tools in the year 2021 which have been crafted
                to perfection, right from the design to the final packaging
                stage keeping in mind their usage by various farmers, gardeners,
                horticulturists and hobbyists
              </p>
              <br></br>
              <p className=" font-kepler font-medium text-[17px]">
                The Company aims to introduce the complete range of Garden &
                Agro tools, maintain the quality andcontinually improve the
                tools with new features. The Company has well evolved with
                stringent Quality Control policy that guides the entire
                manufacturing process supervised by qualified and experienced
                Engineers. The best quality raw materials are procured and
                combined with state of art technology the tools are manufactured
                in our most modern factory at Roorkee, Uttarakhand. The Company
                has sound infrastructure encompassing manufacturing, customer
                support and distribution.
              </p>
              <p className=" font-kepler font-medium text-[17px] pt-5">
                In the Export market our customers are around the globe. In the
                Domestic market we have footprints across the length and breadth
                of the country The strength of the company lies in its mission
                to continually innovate and improve the Products andits
                packaging and introduce new Products with advanced features.
              </p>
            </div>
          </p>
          <div className=" px-10 py-4  mt-5 text-center items-center justify-center ">
            <Link to={"https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"}>
              <div className="flex justify-center ">
                <img
                  className=" h-[70px] object-contain block productimg transition-all ease-in-out duration-200 hover:scale-75 rounded-lg"
                  src="image/Amazone.jpg"
                  alt="wirestriper"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center items-center justify-center flex mt-12 mx-5">
        <img
          className="w-full rounded-[17px]"
          src="mainbanner/All Tool Images Collase.png"
          alt=""
        />
      </div>
    </>
  );
};

export default AboutUs;
