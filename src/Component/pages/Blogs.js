import React from "react";
import Nav from "../pages/Nav.js";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          The Perfect Hand Tools and Garden Tools to Upgrade Your Garden
        </title>
        {/* Add any other meta tags or links you need */}
        <link rel="canonical " href="https://multitectools.com/Blogs" />
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
      <main>
        {/* banner  */}
        <section className="font-kepler">
          <div className="pt-12 mb-10">
            <img
              loading="lazy"
              className="w-full"
              src="image/aboutBanner.webp"
              alt="template"
            />
          </div>
          <div className="pb-12">
            <h2 className="text-center font-sans text-5xl text-red-600 py-8 font-semibold leading-snug tracking-normal  antialiased">
              Trending Blogs
            </h2>
          </div>
          <div className="flex justify-evenly">
            <div className="relative flex w-80 flex-col rounded-xl bg-black bg-clip-border text-gray-700 shadow-md ">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-gray-300 to-gray-300 p-2 ">
                <img
                  loading="lazy"
                  className="h-40 object-contain block "
                  src="\image\BPL-37XG.webp"
                  alt="BPL-37XG"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased text-white line-clamp-1">
                  The Perfect Hand Tools and Garden Tools to Upgrade Your Garden
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-white antialiased line-clamp-2">
                  Whether you're a home gardener looking to prune your trees or
                  a landscaping professional undertaking major garden
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link to={"/blog1"}>
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex w-80 flex-col rounded-xl bg-black bg-clip-border text-gray-700 shadow-md ">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-gray-300 to-gray-300 p-2 ">
                <img
                  loading="lazy"
                  className="h-40 object-contain block "
                  src="\image\BPL-22G.webp"
                  alt="BPL-37XG"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased text-white line-clamp-1">
                  Prune Like a Pro with the Best Loppers in Market from Multitec
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-white antialiased line-clamp-2">
                  Attention, gardening warriors! We've got some serious heavy
                  hitters joining the ranks of your plant-taming arsenal....
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link to={"/blog2"}>
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative flex w-80 flex-col rounded-xl bg-black bg-clip-border text-gray-700 shadow-md ">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-gray-300 to-gray-300 p-2 ">
                <img
                  loading="lazy"
                  className="h-40 object-contain block "
                  src="\image\PHS-10W.webp"
                  alt="PHS-10W"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased text-white line-clamp-1">
                  Prune Like a Pro with the Best Loppers in Market from Multitec
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-white antialiased line-clamp-2">
                  Attention, gardening warriors! We've got some serious heavy
                  hitters joining the ranks of your plant-taming arsenal....
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link to={"/Best-hedge-shear"}>
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
