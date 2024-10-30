import React, { useEffect, useState } from "react";
import { Products } from "../Products";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../css/ourproduct.css";
import ImgSlider from "../SubPages/ImgSlider";
import Nav from "../pages/Nav.js";

const QuickFixMultiTool = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filter products based on category
  const quickFixMultiToolProducts = Products.filter(
    (product) => product.category === "Quick-fix Multi-tool",
  );

  // Calculate the index of the last product to display
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Create a new array of products to display based on the calculated first and last product index
  const productsToDisplay = quickFixMultiToolProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    quickFixMultiToolProducts.length / productsPerPage,
  );

  // Handlers for page navigation
  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePageNumber = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Quick-fix Multi-tool</title>
        <link
          rel="canonical"
          href="https://multitectools.com/quickfix-multitools"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://multitectools.com/" />
        <meta
          property="og:title"
          content="Multitec Tools - Quick-fix Multi-tools"
        />
        <meta
          property="og:description"
          content="Explore our Quick-fix Multi-tools offered by Multitec Industries."
        />
        <meta
          property="og:image"
          content="https://multitectools.com/images/quickfix-multitools.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://multitectools.com/" />
        <meta
          property="twitter:title"
          content="Multitec Tools - Quick-fix Multi-tools"
        />
        <meta
          property="twitter:description"
          content="Explore our range of Quick-fix Multi-tools, expertly crafted by Multitec Industries."
        />
        <meta
          property="twitter:image"
          content="https://multitectools.com/images/quickfix-multitools.png"
        />
      </Helmet>
      <Nav />
      <div style={{ backgroundColor: "whitesmoke" }} className="sm:py-12 py-32">
        <div className="flex" style={{ flexDirection: "column" }}>
          <ImgSlider />
          <div
            style={{ backgroundColor: "white" }}
            className="flex flex-wrap justify-center items-center text-center mt-5 rounded mb-10 md:mx-20 mx-10"
          >
            <div>
              <div className="text-center text-black pb-10 mb-5 pt-5 text-3xl font-medium">
                <h1 className="font-kepler italic">Quick-fix Multi-tool</h1>
              </div>
              <div className="flex flex-wrap w-auto justify-center items-center">
                {productsToDisplay.map((product) => (
                  <div
                    className="justify-center px-5 flex text-center items-center border-b-2"
                    key={product.id}
                  >
                    <div className="mb-5 mt-5">
                      <div className="glassBox">
                        <div className="glassBox__imgBox">
                          <Link
                            to={`/quickfix-multitool-productdetail/${product.URLname}`}
                          >
                            <img
                              loading="lazy"
                              className="productcardimg"
                              src={`/image/${product.img}`}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="flex text-center justify-center">
                        <h2 className="truncate hover:text-clip w-60 text-sm mt-2">
                          {product.modelno} {product.name}
                        </h2>
                      </div>
                      <div className="flex text-center justify-center">
                        <Link
                          to={`/quickfix-multitool-productdetail/${product.URLname}`}
                        >
                          <button className="px-4 py-2 mt-5 rounded text-white text-lg font-sans bg-red-700 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all rounded">
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
          <div className="flex items-center text-center justify-evenly mt-10">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <div>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    style={{ width: "20px" }}
                    key={pageNumber}
                    onClick={() => handlePageNumber(pageNumber)}
                    className={`mx-1 ${
                      pageNumber === currentPage
                        ? "bg-blue-500 text-white"
                        : "text-black"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ),
              )}
            </div>
            <button
              onClick={handleNextPage}
              disabled={indexOfLastProduct >= Products.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickFixMultiTool;
