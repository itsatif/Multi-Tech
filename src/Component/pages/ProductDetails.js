/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Products} from "../Products";
import Nav from "../pages/Nav.js";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { URLname } = useParams();
  const product = Products.find((product) => product.URLname == URLname);
  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }
  // console.log(product)

  return (
    <>
      <Nav />
      <div className="pt-24">
        <div className="object-contain w-full">
          <img
            className="w-full object-contain"
            src={`/image/${product.URL}`}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full mt-12 ">
          <div className="md:flex">
            <div className="md:shrink-0 mb-3 p-5 overflow-hidden">
              {/* <img src={`/images/${product.img}`} alt={product.name} /> */}
              <img
                className="h-96 w-full object-contain md:h-[500px] md:w-[500px] shadow-l-lg hover:scale-110 transition ease-in-out delay-150 hover:translate-y-1 duration-300 hover:saturate-100"
                src={`/image/${product.img}`}
                loading="lazy"
                alt={product.name}
              />
            </div>
            <div className="p-8 ">
              <div className=" font-kepler tracking-wide text-xl font-semibold mt-12">
                <span className="pr-3 ">{product.headname}</span>
                {product.modelno}
              </div>

              <span className="block mt-2 font-kepler text-xl font-semibold leading-tight  text-black hover:underline mb-1">
                {product.name}
              </span>

              <p className="mt-4 font-kepler font-semibold  text-xl">
                Features
              </p>
              <div className="my-[1px]">
                <div className="my-[1px]">
                  {" "}
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold ">
                      {product.OVERALLLENGTHTitle}
                    </span>{" "}
                    {product.OVERALLLENGTHT}
                  </span>{" "}
                </div>
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold">
                      {product.sizetitle}
                    </span>{" "}
                    {product.size}
                  </span>
                </div>
                <div className="my-[1px]">
                  {" "}
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler  text-[16px] font font-semibold ">
                      {product.CapacityTitle}
                    </span>{" "}
                    {product.capacity}
                  </span>
                </div>
                {/* <div className="my-[1px]"> <span className="font-kepler "> <span className="font-kepler text-[16px] font-semibold " >{product.Crimpingtitle}</span> {product.Crimping}</span></div>
                <div className="my-[1px]"> <span className="font-kepler "> <span className="font-kepler text-[16px] font-semibold " >{product.Strippingtitle}</span> {product.Stripping}</span></div> */}
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold">
                      Material:
                    </span>{" "}
                    {product.material}
                  </span>
                </div>
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold">
                      {product.handeltitle}
                    </span>{" "}
                    {product.handel}
                  </span>
                </div>
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold">
                      {product.ApplicatonTitle}
                      {product.finishTitle}
                    </span>
                    {product.finish} {product.Applicaton}
                  </span>
                </div>
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold"></span>{" "}
                    {product.Applicaton1}
                  </span>
                </div>
              </div>
              <div className="mb-2 mt-2">
                <h1 className="text-center bg-gray-200  w-[90%] font-kepler font-semibold sm:pl-12 text-xl">
                  {product.LooseSize}
                </h1>
                <table className="w-[90%] py-4 bg items-center text-center">
                  <tr>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.modelnoTitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.LooseSizetitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.Diametertitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.Hexdimensions}
                    </th>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.d1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.h1}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.d2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.h2}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.d3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.h3}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.d4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.h4}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn5}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s5}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn6}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s6}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn7}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s7}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn8}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s8}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.mn9}
                    </td>
                    <td className="text-center font-kepler bg-gray-100">
                      {product.s9}
                    </td>
                  </tr>
                </table>
              </div>
              <div>
                <span className="font-kepler  cursor-pointer mb-2 py-8 text-[16px] font-semibold">
                  {" "}
                  Additional Info :
                </span>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features1}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features2}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features3}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features4}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features5}
                </p>
                <p className="mt-1  font-kepler normal-case ">
                  {product.features6}
                </p>
              </div>
            </div>
            {/* <div className="h-auto w-[2px] bg-gray-300 mt-8 sm:flex hidden" >
            </div> */}
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center">
            <div className="flex justify-center  mb-4 pb-2  px-4 py-4">
              <img
                className="w-[250px] object-contain"
                src={`/images/${product.img2}`}
                loading="lazy"
                alt=""
              />
            </div>
            <div className="flex justify-center  mb-4 pb-2  px-4 py-4">
              <img
                className="w-[250px] object-contain"
                src={`/images/${product.img3}`}
                loading="lazy"
                alt=""
              />
            </div>
            <div className="flex justify-center  mb-4 pb-2  px-4 py-4">
              <img
                className="w-[250px] object-contain"
                src={`/images/${product.img4}`}
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
