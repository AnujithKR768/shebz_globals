import React from "react";
import './Header.css';
import { assets } from "../../assets/assets";

const Header = () => {

    return (
        <div className="header">
            <div className="header-left">
                <div className="header-contents">
                    <h1>SHEBZ GLOBAL SAFETY SOLUTIONS</h1>
                    <p>Shebz Global Saafety Solutions(SGSS) is a leading
                    provider of consulting services for HSE product providers.</p>
                </div>
            <button className="button">Learn More</button>
            </div>
            <img src={assets.constructor1} alt="" className="constructor1"/>
        </div>
    )
}
export default Header;