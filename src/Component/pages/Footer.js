import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaAmazon } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { ImPointRight } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <footer className="px-5 py-auto px-auto md:flex justify-around mt-5 text-white bg-[#292b35] w-full ">
        <div className="flex-col my-5 py-2">
          <h1 className="p-2 border-b-2 border-yellow-500 hover:border-dashed text-xl font-sans cursor-pointer mb-8">
            Menu
          </h1>
          <div className="flex flex-col">
            <span className="p-1 text-sm font-serif cursor-pointer my-1">
              <NavLink to={"/"}>Home</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1">
              <NavLink to={"/About"}>About</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1">
              <NavLink to={"/"}>Products</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1">
              <NavLink to={"/news"}>News</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1">
              <NavLink to={"/contactus"}>Contact</NavLink>
            </span>
          </div>
        </div>
        <div className="flex-col my-5 py-2">
          <h1 className="p-2 border-b-2 border-yellow-500 hover:border-dashed text-xl font-sans cursor-pointer mb-8">
            Multitec Industries LTD.
          </h1>
          <div className="flex flex-col">
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <HiOutlineLocationMarker className=" text-2xl mr-2 text-white " />{" "}
              <NavLink to={"/"}>Phone : 08037402470</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <IoIosContact className=" text-2xl mr-2 text-white " />{" "}
              <NavLink to={"/"}>Mobile : 08037402470</NavLink>
            </span>
          </div>
        </div>
        <div className="flex-col my-5 py-2">
          <NavLink to={"/product"}>
            <h1 className="p-2 border-b-2 border-yellow-500 hover:border-dashed text-xl font-sans cursor-pointer mb-8">
              Products
            </h1>
          </NavLink>
          <div className="flex flex-col">
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />{" "}
              <NavLink to={"/wirestripper"}>Wire Striper</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />{" "}
              <NavLink to={"/screwdrivers"}>Screw Driver</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />{" "}
              <NavLink to={"/hexkeys"}>Hex Keys</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />{" "}
              <NavLink to={"/gardentools"}>Garden & Agro Tools</NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />
              <NavLink to={"/stainlesssteeltools"}>
                Stainless Steel Tools
              </NavLink>
            </span>
            <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
              <ImPointRight className="text-yellow-500 mr-2 text-lg" />{" "}
              <NavLink to={"/nipper-micro&shears"}>
                Nipper & Flash Cutters
              </NavLink>
            </span>
          </div>
        </div>
        <div className="flex flex-col my-5 py-5">
          <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
            <ImPointRight className="text-yellow-500 mr-2 text-lg" />
            <NavLink to={"/pilers-nose-pilers"}>Pliers & Nose Pliers</NavLink>
          </span>
          <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
            <ImPointRight className="text-yellow-500 mr-2 text-lg" />
            <NavLink to={"/cablecutters"}>Cable Cutters </NavLink>
          </span>
          <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
            <ImPointRight className="text-yellow-500 mr-2 text-lg" />
            <NavLink to={"/PowerBits"}>Power Bits</NavLink>
          </span>
          <span className="p-1 text-sm font-serif cursor-pointer my-1 flex items-center">
            <ImPointRight className="text-yellow-500 mr-2 text-lg" />
            <NavLink to={"/miscellaneous-tools"}>Miscellaneous Tools</NavLink>
          </span>
        </div>
      </footer>
      <footer>
        <div
          className="py-2 text-center items-center justify-center font-lg bg-slate-200"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to={"https://www.instagram.com/multitec_tools/"}>
              {" "}
              <h2 className="px-1 cursor-pointer">
                <AiOutlineInstagram className="text-3xl text-black" />
              </h2>
            </Link>
            <Link
              to={"https://www.facebook.com/profile.php?id=100092582431921"}
            >
              {" "}
              <h2 className="px-1 cursor-pointer">
                <AiOutlineFacebook className="text-3xl  text-black" />
              </h2>
            </Link>
            <Link to={""}>
              {" "}
              <h2 className="px-1 cursor-pointer">
                <AiOutlineLinkedin className="text-3xl  text-black" />
              </h2>
            </Link>
            <Link to={"https://twitter.com/Multitecl"}>
              {" "}
              <h2 className="px-1 cursor-pointer">
                <AiOutlineTwitter className="text-3xl   text-black" />
              </h2>
            </Link>
            <Link to={"https://www.youtube.com/@multitecindustries"}>
              {" "}
              <h2 className="px-1 cursor-pointer">
                <AiOutlineYoutube className="text-3xl   text-black" />
              </h2>
            </Link>
            <Link
              to={
                "https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"
              }
            >
              {" "}
              <h2 className="px-1 cursor-pointer">
                <FaAmazon className="text-3xl   text-black" />
              </h2>
            </Link>
          </div>
          <h2 className="py-2 font-bold font-serif">
            © <strong className="text-orange-600 text-xl">Brandhype.</strong>{" "}
            All Rights Reserved. Designed by{" "}
            <strong className="text-orange-600">
              <a
                href="https://brandhype.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                brandhype.in
              </a>
            </strong>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
