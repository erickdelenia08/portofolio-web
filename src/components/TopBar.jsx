import { FaSearch } from "react-icons/fa";
import React from 'react'

function TopBar() {
    return (
        <div className="py-10 flex items-center justify-end sm:justify-between mx-5 sm:mx-40 select-none z-40">
            <div className="text-3xl font-montserrat font-bold cursor-pointer hidden sm:flex">
                <span className='text-white-col'>About</span>
                <span className='text-gold-col'>Me.</span>
            </div>
            <ul className='font-montserrat text-2xl gap-x-5 font-bold text-white cursor-pointer hidden sm:flex'>
                <li>About</li>
                <li className='text-gray-col'>Portofolio</li>
                <li className='text-gray-col'>Contact</li>
            </ul>
            <div className="bg-scnd-col h-10 rounded-md flex items-center gap-5 px-4">
                <input type="text" placeholder='Search' className='w-40 text-xl font-montserrat font-bold ring-0 outline-none bg-scnd-col text-gray-col placeholder:text-xl' />
                <FaSearch className='text-gray-col text-xl' />
            </div>
        </div>
    )
}

export default TopBar