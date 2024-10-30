import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselBanner from "../SubPages/CarouselBanner";
import "../../App.css";
import "../../index.css";
import "../../css/Home.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import WhatsappIcon from "../SubPages/WhatsapIcon";
import Nav from "../pages/Nav.js";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div>
        <CarouselBanner />
      </div>
      {/* wellcome header image gallary  start*/}
      {/* <div style={{ backgroundColor: "whitesmoke" }} className='justify-center flex-wrap items-center text-center p-2 pb-5 m-5 mt-32' >
                <div className='flex justify-center text-left my-8'>
                    <h1 className=" hover:text-yellow-500 transition duration-500 transform font-medium"><span style={{ fontSize: "20px" }} className='font-serif'>WELCOME TO</span>
                        <br /><span className='text-red-500 text-3xl font-serif '>
                            MULTITEC INDUSTRIES LTD</span>
                        <br />
                        <span className='text-2xl font-serif '>
                            We have requisite resources to deal in bulk quantity orders</span></h1>
                </div>
                <div>
                    <div className='flex mt-5  items-center md:justify-around justify-center  text-center flex-wrap'>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="https://cpimg.tistatic.com//1751/9/template_photo_10.jpg" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="images/photoshoottools7.jpg" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="images/photoshoottools8.jpg" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                    </div>
                    <div className='flex mt-5  items-center md:justify-around justify-center text-center flex-wrap'>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="images/photoshoottools4.png" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="images/photoshoottools5.png" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                        <div className="w-100 h-64 shadow-lg shadow-black overflow-hidden hover:scale-90 transition duration-500 ease-in-out" data-aos="zoom-in">
                            <img src="images/photoshoottools6.png" alt="" className="w-full h-full object-cover grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:saturate-200" />
                        </div>
                    </div>

                </div>
            </div> */}

      {/* wellcome header image gallary  end*/}

      {/* <div
                style={{ backgroundImage: `url('/images/hometem2.jpg')`, padding: "2rem" }}
                className='justify-center my-32 mx-8 '
            > */}
      <WhatsappIcon />
      {/* Product Catalogue start */}
      <section className="mt-32">
        <div className="text-center ">
          <div className=" mx-12">
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
        <div className="flex md:justify-evenly justify-center flex-wrap  py-12 space-y-1 space-x-6 md:mx-20 mt-5 bg-[whitesmoke]">
          <div className="block">
            <div
              className="w-[300px] h-[200px]  rounded-lg p-8 flex justify-center items-center text-center overflow-hidden hover:opacity-75 product-item "
              data-aos="fade-up"
            >
              <NavLink to="/wirestripper">
                <img
                  className=" h-[180px] object-contain block productimg hover:opacity-75"
                  src="images/02dx.png"
                  alt=""
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
                  src="images/R 6100.png"
                  alt=""
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
                  src="images/THK-100 SAE.png"
                  alt=""
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
                  src="images/PSA01.png"
                  alt=""
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
                  src="images/150b (2).png"
                  alt=""
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
                  src="images/07ss.png"
                  alt=""
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
                  src="images/mt555.png"
                  alt=""
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
                  src="images/CC-200.png"
                  alt=""
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
              <NavLink to="/quickfix-multitools">
                <img
                  className=" h-[180px] object-contain block productimg hover:opacity-75"
                  src="images/quickfix-multitools.jpeg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="text-center mt-2">
              <h1 className="text-xl font-kepler font-bold text-[#292635]">
                Quick-fix Multi-tool
              </h1>
            </div>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-xl font-kepler font-bold text-[#292635]">
              Pliers and Nose Pliers
            </h1>
          </div>
        </div>
      </section>
      {/* Product Catalogue end */}
      {/* cards start*/}
      <div
        style={{ backgroundColor: "" }}
        className="justify-around items-center  rounded   text-center py-20 "
      >
        <div>
          <h1 className="text-3xl pb-8 font-semibold text-black font-kepler italic">
            Why Choose Us ?
          </h1>
        </div>
        <div className="justify-around flex items-center  text-center flex-wrap ">
          <div className="shadow-inner card-body ">
            <div className="container">
              <div className="card">
                <div className="image" data-aos="zoom-in">
                  <img
                    className="h-52 w-72 rounded"
                    src={`images/productrange.jpg`}
                    alt="product range"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-2 font-kepler italic font-bold text-red-600">
                    Product Range
                  </h3>
                  <p className="font-kepler text-sm">
                    Multitec Industries offer a wide range of high-quality
                    precision hand tools and are a reliable and trusted
                    manufacturer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-inner  card-body ">
            <div className="container">
              <div className=" card">
                <div className="image" data-aos="zoom-in">
                  <img
                    className="h-52 w-72 rounded"
                    src={`images/Clientele.jpg`}
                    alt="clientele"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-2 font-kepler italic font-bold text-red-600">
                    Clientele
                  </h3>
                  <p className="font-kepler text-sm">
                    In 1997, we expanded our business operations by
                    manufacturing various products such as Screwdrivers, Wire
                    Strippers, Cutters, Nippers, Pliers, Crimpers, Pocket
                    Testers, and other Cable Accessories.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-inner  card-body ">
            <div className="container">
              <div className="card">
                <div className="image" data-aos="zoom-in">
                  <img
                    className="h-52 w-72 rounded"
                    src={`images/Infrastructure.jpg`}
                    alt="industry"
                  />
                </div>
                <div className="content">
                  <h3 className="mb-2 font-kepler italic font-bold text-red-600">
                    Infrastructure
                  </h3>
                  <p className="font-kepler text-sm">
                    With cutting-edge machinery, advanced equipment, and a team
                    of highly skilled experts, our manufacturing unit is
                    committed to producing excellent cutting tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards ended*/}
    </>
  );
};

export default Home;
