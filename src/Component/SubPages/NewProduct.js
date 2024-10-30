import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const NewProduct = () => {
    return (
        <>
            <div className='block justify-center bg-[#292b35] mx-12 py-12 text-white rounded-lg'>
                <div className=''>
                    <h1 className='text-center text-3xl font-serif font-medium m-5 '>
                        New Tools
                    </h1>
                </div>
                <nav className='flex text-center items-center justify-center gap-2 mb-5'>
                    <NavLink to={""}><li className='list-none text-xl font-serif font-medium underline hover:opacity-75'>Hand Tools</li></NavLink>
                    /
                    <NavLink to={""}><li className='list-none text-xl font-serif font-medium underline hover:opacity-75'>garden Tools</li></NavLink>
                </nav>
                <div class="group relative">
                    <img class="w-full h-80 object-cover opacity-75 group-hover:opacity-100" src="images/productitem1.jpg" alt="" />
                    <p class="absolute top-32 left-0 w-full flex items-center justify-center  text-3xl text-white font-serif opacity-0 group-hover:opacity-100">Name</p>
                </div>
                <div className='flex justify-between px-5 mt-12 '>
                    <div>
                        <img className='w-36 rounded-lg hover:scale-110 ease-linear' src="images/productitem1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-36 rounded-lg hover:scale-110 ease-linear' src="images/productitem1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-36 rounded-lg hover:scale-110 ease-linear' src="images/productitem1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-36 rounded-lg hover:scale-110 ease-linear' src="images/productitem1.jpg" alt="" />
                    </div>
                    <div className='mt-5 justify-center text-center'>
                        <Link to={"/product"}> <button className='px-4 py-2 rounded bg-[#d1001c] text-lg font-serif text-white hover:text-black hover:bg-white 
                     shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] t ease-out hover:translate-y-1 transition-all rounded' >View all</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct
