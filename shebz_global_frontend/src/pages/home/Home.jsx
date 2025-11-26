import React from "react";
import './Home.css';
import Header from "../../components/header/Header.jsx";
import { assets } from "../../assets/assets.js";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <h1 className="service">Our Services</h1>
            <div className="services-container">
                <div className="consultation">
                    <img src={assets.HSE_Product_Consultation} alt="" className="consultation-img" />
                    <h2>HSE Product Consultation</h2>
                    <p>Guiding your product towards compliance</p>
                </div>
                <div className="product-audit">
                    <img src={assets.HSE_Product_Audit} alt="" className="product-audit-img" />
                    <h2>HSE Product Audit</h2>
                    <p>Ensuring your HSE products work as intended</p>
                </div>
                <div className="digital-markating">
                    <img src={assets.HSE_Digital_Markating} alt="" className="digital-markating-img" />
                    <h2>HSE Digital Marketing</h2>
                    <p>Promoting your HSE products effectively</p>
                </div>
                <div className="solution">
                    <img src={assets.HSE_Solutions} alt="" className="solutions-img" />
                    <h2>HSE Solutions</h2>
                    <p>Providing guidance for HSE solution providers</p>
                </div>

            </div>
        </div>
    )
}
export default Home;