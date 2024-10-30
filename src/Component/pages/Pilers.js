import React from "react";
import { Products } from "../Products";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ImgSlider from "../SubPages/ImgSlider";
import { useEffect } from "react";
import Nav from "../pages/Nav.js";
const Pilers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filter products based on category
  const pruningShearsProducts = Products.filter(
    (product) => product.category === "Pilers"
  );

  // Calculate the index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Create a new array of products to display based on the calculated first and last product index
  const productsToDisplay = pruningShearsProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(pruningShearsProducts.length / productsPerPage);

  // Handler for previous page button click
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Handler for next page button click
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Handler for page number button click
  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Pilers</title>
        {/* Add any other meta tags or links you need */}
        <link
          rel="canonical "
          href="https://multitectools.com/pilers-nose-pilers"
        />
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
      <div
        style={{ backgroundColor: "whitesmoke" }}
        className="sm:py-12  py-32 "
      >
        <div className="felx ">
          <ImgSlider />
          {/* productlist start */}
          <div
            style={{ backgroundColor: "white" }}
            className="felx flex-wrap justify-center items-center text-center mt-5 rounded   mb-10 md:mx-20 mx-10 "
          >
            <div>
              <div className="text-center text-black  pb-10 mb-5  pt-5  text-3xl font-medium">
                <h1 className="font-kepler italic">Pilers</h1>
              </div>
              <div>
                <div className="flex flex-wrap w-auto justify-center text-center items-center">
                  {productsToDisplay.map((product) => (
                    <div
                      className="justify-center items-center px-5 flex text-center items-center border-b-2"
                      key={product.id}
                    >
                      <div className="mb-5 mt-5">
                        <div class="glassBox">
                          <div class="glassBox__imgBox ">
                            <Link
                              to={`/piler-nose-piler-productdetail/${product.URLname}`}
                            >
                              {" "}
                              <img
                                className="productcardimg "
                                src={`/image/${product.img}`}
                                loading="lazy"
                                alt=""
                              />
                              {/* <img className='w-60 h-56 rounded-md hover:scale-110 ease-in-out duration-300 my-2 hover:border-rounded-md hover:border-2 hover:border-black' src={`/images${product.img}`} alt={product.name}  /> */}
                            </Link>
                          </div>
                        </div>
                        <div className="flex text-center justify-center">
                          <h2 className="truncate hover:text-clip w-60 text-sm mt-2">
                            {product.modelno}
                          </h2>
                        </div>
                        <div className="flex text-center justify-center">
                          <Link
                            to={`/piler-nose-piler-productdetail/${product.URLname}`}
                          >
                            <button
                              className="px-4 py-2 mt-5 rounded text-white text-lg font-sans bg-red-700
                                                    shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] t ease-out hover:translate-y-1 transition-all rounded"
                            >
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* productlist end */}
          <div>
            <div className="flex items-center text-center justify-evenly mt-10">
              <div>
                {/* Previous page button */}
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
              </div>
              {/* Page numbers */}
              <div>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      style={{ width: "20px" }}
                      key={pageNumber}
                      onClick={() => handlePageNumber(pageNumber)}
                      className={`mx-1 ${
                        pageNumber === currentPage
                          ? "bg-blue-500 text-white "
                          : " text-black"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}
              </div>
              {/* Next page button */}
              <div>
                <button
                  onClick={handleNextPage}
                  disabled={indexOfLastProduct >= Products.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pilers;
// import React from 'react'
// import Nav from './Nav'
// import ImgSlider from '../SubPages/ImgSlider'

// export default function Pilers() {
//   return (
//     <div>
//       <Nav/>
//       <ImgSlider/>
//     </div>
//   )
// }

