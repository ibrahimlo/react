import React from 'react'
import Logo from '../assets/logo_dark.svg'
import MainImage from '../assets/header_main.svg'
import ShadowImage1 from '../assets/header_sub_1.svg'
import {AiOutlineSearch} from "react-icons/ai";
import SearchImage from '../assets/search_icon.svg'
import Group1 from '../assets/group1.svg'

const header = () => {
    return (
        <div className="top">
            <header>
                <img src={Logo} alt="main_logo" className="logo"/>
                {/* <nav>
                    <ul className="nav__links">
                    <li><input type="search" placeholder="Search Here"/></li>
                    <li><a className="login" href="#"></a>login</li>
                    </ul>
                </nav> */}
                <span>
                    <input type="search" placeholder="Search drops..." className="search"/>
                </span>
                <a className="login" href="#">Login</a>
                <button className="join-btn">Join</button>
                {/* <a className="cta" href=""><button>Join</button></a> */}
            </header>
            <div className="container">
                <div className="first-col">
                   <img src={Group1} alt="main_img" className="header-main"/>
                </div>
                <div className="second-col">
                    <h1 className="bold-text">India's most trusted <br/> NFT Marketplace🤘⚡️</h1>
                </div>
            </div> 
        </div>
    )
}

export default header
