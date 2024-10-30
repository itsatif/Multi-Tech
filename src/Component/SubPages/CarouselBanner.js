/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const CarouselBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,// in milliseconds,
        fade: true,

    };
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div style={{ padding: " 8rem  1rem  0 1rem" }} className='mx-5'>
            <div>
                <div className="relative items-center justify-center text-center bg-black h-[auto]" data-aos="fade-zoom-in">
                    <Slider className='' {...settings}>
                        <div className="items-center justify-center ">
                            <img className="w-full md:h-[700px] h-[auto] " src={("mainbanner/06.jpeg")} alt="Image 1" />
                        </div>
                        <div className="items-center justify-center ">
                            <img className="w-full md:h-[700px] h-[auto] " src={("mainbanner/06.jpeg")} alt="Image 1" />
                        </div>
                        <div className="items-center justify-center ">
                            <img className="w-full md:h-[700px] h-[auto] " src={("mainbanner/06.jpeg")} alt="Image 1" />
                        </div>
                        <div className="items-center justify-center ">
                            <img className="w-full md:h-[700px] h-[auto] " src={("mainbanner/06.jpeg")} alt="Image 1" />
                        </div>
                        <div className="items-center justify-center ">
                            <img className="w-full md:h-[700px] h-[auto] " src={("mainbanner/06.jpeg")} alt="Image 1" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CarouselBanner;
