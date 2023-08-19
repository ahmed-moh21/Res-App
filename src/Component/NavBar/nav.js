import React from "react";
import "./nav.css";
import Logo from "./navLogo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {


    return (
        <div id="navPlay" className="nav-sec">
            <div className="logo">
                <button
                    onClick={() => {
                        const navPlay = document.getElementById("navPlay");
                        navPlay.classList.toggle("nav-sec-play");
                    }}
                    className="nav-bu"> <GiHamburgerMenu /> </button>
                <div className="logo-con">
                    <img src={Logo} alt="project logo" />
                </div>
            </div>

            <div className="nav-item-con">
                <div className="nav-item">
                    <ul>
                        <li>
                            <span className="contant-active"></span>
                            <span> <a href="/"> HOME </a> </span>
                        </li>
                        <li>
                            <span className="contant"></span>
                            <span> <a href="/about" > ABOUT US </a> </span>
                        </li>
                        <li>
                            <span className="contant"></span>
                            <span> <a href="/contact" > CONTACT US </a> </span>
                        </li>
                    </ul>

                    <div className="item-download">
                        <span>DOWNLOAD APP</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;