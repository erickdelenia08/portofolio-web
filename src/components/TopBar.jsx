import { FaSearch } from "react-icons/fa";
import { useState } from 'react'
import Hamburger from 'hamburger-react'



function TopBar({ handlePortoClick }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="bg-main-col bg-opacity-95 py-5 flex sticky top-0 items-center justify-end sm:justify-center select-none z-40 gap-x-5 shadow-2xl backdrop-blur-2xl sm:shadow-none">
            <div className="text-3xl font-montserrat font-bold cursor-pointer hidden sm:flex">
                <span className='text-white-col'>About</span>
                <span className='text-gold-col'>Me.</span>
            </div>
            <ul className='font-montserrat text-2xl gap-x-5 font-bold text-white cursor-pointer hidden lg:flex'>
                <li>About</li>
                <li onClick={handlePortoClick} className='text-gray-col'>Portofolio</li>
                <li className='text-gray-col'>Contact</li>
            </ul>
            <div className="lg:hidden rounded-md mx-2">
                <Hamburger toggled={isOpen} toggle={setOpen} color="#FFCD6D" />
            </div>
        </div>
    )
}

export default TopBar