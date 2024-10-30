import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'image/06.webp',
        price: 10.99,
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'image/Dsp1.webp',
        price: 12.99,
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'image/HS Ash10.webp',
        price: 15.99,
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'image/150b.webp',
        price: 9.99,
    },
    {
        id: 5,
        name: 'Product 5',
        image: 'image/Anvil Pruning Shears PSA01.webp',
        price: 9.99,
    },
    {
        id: 6,
        name: 'Product 6',
        image: 'image/HS Whs10.webp'
    },
    {
        id: 7,
        name: 'Product 8',
        image: 'image/Heavy Duty Bypass Pruning Shear withAlloy Steel Blade and lasticHandles.webp'
    },
    {
        id: 8,
        name: 'Product 9',
        image: 'image/HS psh10t.webp'
    },
];
const ProductGallary = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='mt-24 text-center mx-12'>
            <h1 className='my-8 text-3xl font-serif font-medium'>Product Gallary</h1>
            <Carousel className='p-12 text-center '
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
            >
                {products.map((product) => (
                    <div className='inline-block' key={product.id}>
                        <div style={{ backgroundImage: `url('/image/settingicon.webp')`, backgroundSize: "256px 256px", objectFit: "cover", backgroundRepeat: "no-repeat" }} className='rounded-full animate-spin hover:animate-none duration-300 transition ease-in-out '  >
                            <div style={{ padding: "70px" }} className='justify-center text-center items-center w-64 h-64 rounded-full object-contain product-img-container '>
                                <img className=' transition ease-in-out  text-center delay-150 hover:-translate-y-1 hover:scale-150 duration-200  ' src={product.image} alt="" />
                            </div>
                        </div>
                        <div className='justify-center items-center text-center mt-5 products-name'>
                            <span className='text-center'>
                               {product.name}
                            </span>
                        </div>
                    </div>
               
                ))}
            </Carousel>
            <div className='mt-12 pb-12 justify-center text-center'>
                <Link to={"/product"}> <button className='px-4 py-2 rounded bg-[#d1001c] text-lg font-serif text-white hover:text-black hover:bg-red-600 
                     shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] t ease-out hover:translate-y-1 transition-all rounded' >View all</button></Link>
            </div>

        </div>
    );
};

export default ProductGallary;
