import { FaSearch } from "react-icons/fa";
import React from 'react'

function TopBar() {
    return (
        <div className="py-10 flex items-center justify-between mx-40 select-none">
            <div className="text-3xl font-montserrat font-bold cursor-pointer">
                <span className='text-white-col'>About</span>
                <span className='text-gold-col'>Me.</span>
            </div>
            <ul className='font-montserrat text-2xl flex gap-x-5 font-bold text-white cursor-pointer'>
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