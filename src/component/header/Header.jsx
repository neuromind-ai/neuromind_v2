import React from 'react'
import Lazyloader from '../lazyloader/Lazyloader'
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='border-b-3 border-black h-16 fixed z-1000 bg-header-background-color md:px-36 text-lg   w-full'>
            <div className="flex items-center px-6 md:px-9 h-full">
                <div className="flex w-full justify-between  items-center">
                    {/* <Lazyloader src="/saurav" alt="logo-image" /> */}
                    <p className="text-white text-3xl ">Neuromind</p>
                    <div className="md:hidden ml-4"><CiMenuFries/></div>
                </div>
                <div className="hidden md:block">
                    <ul className='flex gap-6'>
                        <li><a href="#neuromind-team" className="text-white uppercase whitespace-nowrap">About us</a></li>
                        <li><a href="" className="text-white uppercase">doc</a></li>
                        <li><a href="" className="text-white uppercase">blog</a></li>
                        {/* <li><Link to="/pricing" className="text-white uppercase">pricing</Link></li> */}
                        <li><a href="#contact" className="text-white uppercase whitespace-nowrap">contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
