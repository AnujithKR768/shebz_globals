import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="navbar-logo" />
            <h1 className="navbar-title">Shebz Globals Safety Solutions</h1>
            <ul className="navabar-menu">
                <li onClick = {()=> setMenu("About")}
                className={menu === "About" ? "active" : ""}>About</li>

                <li onClick = {()=> setMenu("Services")}
                className={menu === "Services" ? "active" : ""}>Services</li>

                <li onClick = {()=> setMenu("Case studies")}
                className={menu === "Case studies" ? "active" : ""}>Case studies</li>
                
                <li onClick = {()=> setMenu("Contact")}
                className={menu === "Contact" ? "active" : ""}>Contact</li>
            </ul>
            
            <button className="navbar-button">Get a quote</button>
        </div>

    )
}
export default Navbar;