/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Products";
import { useEffect } from "react";
import Nav from "../pages/Nav.js";
const Screwdriverproductdetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { URLname } = useParams();
  const product = Products.find((product) => product.URLname == URLname);

  if (!product) {
    return <div>Product not found</div>;
  }
  // console.log(product)

  return (
    <>
    <Nav/>
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
                {product.Series}
              </div>

              <span className="block mt-2 font-kepler text-xl   leading-tight font-semibold text-black hover:underline mb-1">
                {product.name}
              </span>

              <p className="mt-4 font-kepler font-semibold  text-xl">
                Features
              </p>
              <div className="my-[4px]">
                <span className="font-kepler ">
                  {" "}
                  <span className="font-kepler text-[16px] font-semibold ">
                    {product.sizetitle}
                  </span>{" "}
                  {product.size}
                </span>
              </div>
              <div className="my-[4px]">
                <span className="font-kepler ">
                  {" "}
                  <span className="font-kepler text-[16px] font-semibold ">
                    {product.OVERALLLENGTHTitle}
                  </span>{" "}
                  {product.OVERALLLENGTHT}
                </span>
              </div>
              <div className="my-[1px]">
                <div className="mb-0 sm:flex justify-between items-center sm:w-100 w-auto block"></div>
                <div className="mb-1">
                  {" "}
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler  text-[16px] font font-semibold ">
                      {product.CapacityTitle}
                    </span>{" "}
                    {product.capacity}
                  </span>
                </div>
                <div className="my-[1px]">
                  {" "}
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold ">
                      {product.Crimpingtitle}
                    </span>{" "}
                    {product.Crimping}
                  </span>
                </div>
                <div className="my-[1px]">
                  {" "}
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold ">
                      {product.Strippingtitle}
                    </span>{" "}
                    {product.Stripping}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <h1 className="text-center bg-gray-200  w-full font-kepler font-semibold text-xl">
                  {product.detailstitle}
                </h1>
                <table className="w-[100%] py-4 bg">
                  <tr>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.modelnoTitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] sm:pl-0 pl-2 bg-gray-300">
                      {product.tipsizetitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.shanksizetitle}
                    </th>
                    <th className="text-center font-kepler sm:text-[18px] bg-gray-300">
                      {product.shanklengthTitle}
                    </th>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss1}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl1}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss2}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl2}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss3}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl3}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss4}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl4}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn5}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s5}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss5}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl5}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn6}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s6}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss6}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl6}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn7}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s7}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss7}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl7}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn8}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s8}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss8}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl8}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn9}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s9}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss9}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl9}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn10}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s10}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss10}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl10}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn11}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s11}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss11}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl11}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn12}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s12}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss12}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl12}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.mn13}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.s13}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.ss12}
                    </td>
                    <td className="text-center font-kepler bg-gray-100 ">
                      {product.sl13}
                    </td>
                  </tr>
                </table>
              </div>
              <div>
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
                    </span>
                    {product.Applicaton}
                  </span>
                </div>
                <div className="my-[1px]">
                  <span className="font-kepler ">
                    {" "}
                    <span className="font-kepler text-[16px] font-semibold">
                      {product.finishTitle}
                    </span>
                    {product.finish}
                  </span>
                </div>

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
                <p className="mt-1  font-kepler normal-case ">
                  {product.features7}
                </p>
              </div>
              <div>
                <p className="font-kepler ">{product.note}</p>
                {/* <details className="mt-5" open> */}
                <span className="font-kepler mt-5 font-semibold  text-[16px]">
                  {product.cautionTitle}
                </span>
                <p className="font-kepler ">{product.caution}</p>
                <p className="font-kepler ">{product.caution1}</p>
                <p className="font-kepler ">{product.caution2}</p>
                {/* </details> */}
                {/* <details className="mt-5"> */}
                <span className="font-kepler mt-5 font-semibold  text-[16px]">
                  {product.maintenanceTitle}
                </span>
                <p className="font-kepler">{product.maintenance}</p>
                <p className="font-kepler">{product.maintenance1}</p>
                <p className="font-kepler">{product.maintenance2}</p>
                {/* </details> */}
              </div>
            </div>
            {/* <div className="h-auto w-[2px] bg-gray-300 mt-8 sm:flex hidden" >
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Screwdriverproductdetail;
