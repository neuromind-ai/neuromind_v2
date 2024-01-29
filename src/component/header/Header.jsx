import React from 'react'
import Lazyloader from '../lazyloader/Lazyloader'
import './header.css'
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom'



const Header = () => {
    return (


        <div className='header_container'>
           
                <div className="sub_header_container">

                    <div className="logo">
                        {/* <Lazyloader src="/saurav" alt="logo-image" /> */}
                        <p>Neuromind</p>
                       <div className="hambergermenu"> <CiMenuFries/></div>
                    </div>
                    <div className="header_content">
                        <ul className='header_list_container'>
                            <li><a href="">doc</a></li>
                            <li><a href="">blog</a></li>
                            {/* <li><Link to="/pricing">pricing</Link></li> */}
                            <li><Link to="/contact">contact us</Link></li>
                        </ul>

                    </div>
                </div>
          

        </div>

    )
}

export default Header
