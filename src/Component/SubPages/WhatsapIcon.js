// import React from "react";
// import { BsWhatsapp } from "react-icons/bs";
// import { BiPhoneCall, BiMessageAltDetail } from "react-icons/bi";
// const WhatsappIcon = () => {
//   // Function to handle the click event on the WhatsApp icon
//   const handleClick = () => {
//     // Replace the URL with the appropriate WhatsApp link for your website
//     window.open("https://wa.me/1234567890", "_blank");
//   };
//   // Function to handle click event on the Message icon
//   const handleMessageClick = () => {
//     // Replace the URL with the appropriate messaging link for your website
//     window.open("sms: 08037402470", "_blank");
//   };

//   // Function to handle click event on the Call icon
//   const handleCallClick = () => {
//     // Replace the URL with the appropriate call link for your website
//     window.open("tel: 08037402470", "_blank");
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-end",
//         position: "fixed",
//         right: "0",
//         bottom: "40%",
//         transform: "translateY(50%)",
//         zIndex: "9999",
//       }}
//     >
//       {/* Replace the src attribute with the URL of your WhatsApp icon */}
//       <BsWhatsapp
//         className="text-3xl text-green-600  hover:text-white hover:bg-green-600 md:mr-1 mb-2 hover:pl-2  hover:text-5xl hover:pr-10 hover:w-auto transition-w-150 transform duration-500 ease-in-out delay-150 "
//         style={{ cursor: "pointer" }}
//         onClick={handleClick}
//       />
//       {/* Message Icon */}
//       <BiMessageAltDetail
//         className="text-4xl text-red-600 hover:text-white hover:bg-red-600 md:mr-1 hover:pl-2  hover:text-5xl hover:pr-10 hover:w-auto transition-w-150 transform duration-500 ease-in-out delay-150 "
//         alt="Message"
//         style={{ cursor: "pointer", marginBottom: "8px" }}
//         onClick={handleMessageClick}
//       />
//       {/* Call Icon */}
//       <BiPhoneCall
//         className="text-4xl text-black hover:text-white hover:bg-black md:mr-1 hover:pl-2  hover:text-5xl hover:pr-10 hover:w-auto transition-w-150 transform duration-500 ease-in-out delay-150 "
//         alt="Call"
//         style={{ cursor: "pointer" }}
//         onClick={handleCallClick}
//       />
//     </div>
//   );
// };

// export default WhatsappIcon;

import React from "react";
import { Link } from "react-router-dom";
export default function WhatsapIcon() {
  return (
    <div className="whats-app">
      <Link to={"https://www.amazon.in/s?me=AWPMSA9DQ9C2J&ref=sf_seller_app_share_new"}>
        <div className="flex justify-center overflow-hidden ">
          <img
            className=" object-contain block productimg transition-all ease-in-out duration-200 hover:scale-75 rounded-lg"
            src="image/Amazone.jpg"
            alt="wirestriper"
          />
        </div>
      </Link>
    </div>
  );
}
