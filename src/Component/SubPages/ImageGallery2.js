import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';

const ImageGallery2 = () => {
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
                <h2 className='font-kepler text-2xl sm:pb-8 italic text-center'>
                    Kisan Agri show,pune  14th 18th December 2022
                </h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {/* Add image here */}
                <img
                    src={"/image/newsimgs/ka1.jpeg"}
                    alt="Img1"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka1.jpeg")}
                />
                <img
                    src={"/image/newsimgs/ka2.jpeg"}
                    alt="Img 2"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka2.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka3.jpeg")}
                    alt="Img 3"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka3.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka4.jpeg")}
                    alt="Img 4"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka4.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka5.jpeg")}
                    alt="Img 5"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka5.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka6.jpeg")}
                    alt="Img 6"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka6.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka7.jpeg")}
                    alt="Img 7"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka7.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka8.jpeg")}
                    alt="Img 8"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka8.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka9.jpeg")}
                    alt="Img 9"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka9.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka10.jpeg")}
                    alt="Img 10"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka10.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka11.jpeg")}
                    alt="Img 11"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka11.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka12.jpeg")}
                    alt="Img 12"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka12.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka13.jpeg")}
                    alt="Img 13"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka13.jpeg")}
                />
                <img
                    src={("/image/newsimgs/ka14.jpeg")}
                    alt="Img 14"
                    className="w-40 h-30 object-cover m-2 cursor-pointer rounded hover:scale-110 transition ease-in-out duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    onClick={() => openModal("/image/newsimgs/ka14.jpeg")}
                />
            </div>
            <div className='flex justify-center mt-5'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IdZVjubIizQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default ImageGallery2;
