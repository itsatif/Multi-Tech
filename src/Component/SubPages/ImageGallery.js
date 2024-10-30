import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className="flex-wrap justify-center py-28">
      <div>
        <h1 className='text-center font-kepler italic text-[32px] font-semibold text-red-700'>News</h1>
      </div>
      <div>
        <h2 className='font-kepler sm:text-2xl sm:pb-8 italic text-center '>
          15th edition of the premier agri & food technology fair sector 17, chandigarh 4 & 7 November 2022
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Add image here */}
        <img
          src={"/image/newsimgs/ch1.jpeg"}
          alt="Img1"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch1.jpeg")}
        />
        <img
          src={"/image/newsimgs/ch2.jpeg"}
          alt="Img 2"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch2.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch3.jpeg")}
          alt="Img 3"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch3.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch4.jpeg")}
          alt="Img 4"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch4.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch5.jpeg")}
          alt="Img 5"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch5.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch6.jpeg")}
          alt="Img 6"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch6.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch7.jpeg")}
          alt="Img 7"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch7.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch8.jpeg")}
          alt="Img 8"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch8.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch9.jpeg")}
          alt="Img 9"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch9.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch10.jpeg")}
          alt="Img 10"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch10.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch11.jpeg")}
          alt="Img 11"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch11.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch12.jpeg")}
          alt="Img 12"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch12.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch13.jpeg")}
          alt="Img 13"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch13.jpeg")}
        />
        <img
          src={("/image/newsimgs/ch14.jpeg")}
          alt="Img 14"
          className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          onClick={() => openModal("/image/newsimgs/ch14.jpeg")}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute top-20 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 sm:p-64 object-contain "
        overlayClassName="fixed inset-0"
      >
        {/* Add modal content here */}
        {selectedImage && (
          <img src={selectedImage} alt="Selected Imag" className="object-contain w-[60%]" />
        )}
        <button
          className="absolute top-8 right-2 text-white text-xl"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ImageGallery;
