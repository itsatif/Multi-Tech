import React from "react";
import Nav from "../pages/Nav.js";
import { useEffect } from "react";
const QualityAssurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Nav/>
      <div>
        <div className="pt-12 mb-10">
          <img className="w-full" src="images/ACQ banner.jpg" alt="template" />
        </div>
        <div className="text-center items-center justify-center flex">
          <h1 className="text-2xl font-semibold font-sans border-b-2  border-black p-2 w-64">
            Infrastructure
          </h1>
        </div>
        <div className="m-10 px-10 py-5 text-center">
          <p className=" font-serif font-medium text-lg">
            Our production unit is outfitted with latest technology, machinery
            and excellent manpower to provide world class cutting tools. Borne
            out of single minded dedication, hard work, excellent planning, and
            supported by skilled manpower, Multitec tools are a perfect solution
            for all your requirement in hand tools from India. Our spacious
            warehouse and wide distribution network facilitates smooth
            trafficking of goods.
          </p>
        </div>
        <div className="text-center items-center justify-center flex">
          <h1 className="text-2xl font-semibold font-sans border-b-2  border-black p-2 w-64">
            Quality Assurance
          </h1>
        </div>
        <div className="m-10 px-10 py-5 text-center">
          <p className=" font-serif font-medium text-lg">
            Supreme quality is the trademark of Multitec. Our corporation
            follows total quality management right from the sourcing of raw
            material till the final dispatch of orders. Each product underwent
            through a series of quality checks to ensure that they are capable
            of meeting market demands. Our client centric approaches and ethical
            trade practices help us to won the hearts of the customers and
            become their preferred choice.
          </p>
        </div>
        <div className="text-center items-center justify-center flex">
          <h1 className="text-2xl font-semibold font-sans border-b-2  border-black p-2 w-64">
            Clientele
          </h1>
        </div>
        <div className="m-10 px-10 py-5 text-center">
          <p className=" font-serif font-medium text-lg">
            The group diversified its business of Pliers, Crimpers, Pocket
            Tester, Screwdrivers, Wire Strippers, Cutters, Nippers and other
            Cable Accessories in the year 1997 by manufacturing high quality
            Pneumatic Bits, Allen Keys and Nut Setters for the major OEM
            customers like:-
          </p>
        </div>
        <div className=" ml-28  text-center items-center justify-center">
          <div className=" w-64 text-left">
            <li className="list-disc">Maruti</li>
            <li className="list-disc">Hero Honda</li>
            <li className="list-disc">Bajaj</li>
            <li className="list-disc">Videocon</li>
            <li className="list-disc">L.G.</li>
            <li className="list-disc">Whirlpool, etc.</li>
          </div>
        </div>
        <div className="text-center text-2xl text-red-500 ">
          <h1 className="font-serif font-semibold">
            We are dealing in bulk quantity.
          </h1>
        </div>
      </div>
    </>
  );
};

export default QualityAssurance;
