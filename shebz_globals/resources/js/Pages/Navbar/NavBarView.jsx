import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { assets } from "../../assets/assets.js";

export default function NavBarView() {
    const [open, setOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const closeMenu = () => {
        setOpen(false);
        setServiceOpen(false);
    };

    return (
        <header>
            <nav className="bg-[#0025cc] text-white fixed top-0 left-0 w-full z-50 shadow">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative flex items-center h-20">

                        {/* ================= LOGO ================= */}
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="flex items-center gap-3 shrink-0 z-20"
                        >
                            <img
                                src={assets.logo}
                                className="h-12 w-auto"
                                alt="Shebz Global"
                            />

                            <h1 className="text-base lg:text-lg font-semibold whitespace-nowrap">
                                Shebz Global Safety Solutions
                            </h1>
                        </Link>


                        {/* ================= DESKTOP MENU ================= */}
                        {/* Moved to the right using ml-auto mr-6 lg:mr-10 */}
                        <ul
                            className="
                                hidden md:flex
                                ml-auto mr-6 lg:mr-10
                                items-center
                                gap-5 lg:gap-7
                                text-sm lg:text-base
                                whitespace-nowrap
                                h-20
                            "
                        >

                            {/* HOME */}
                            <li className="h-full flex items-center">
                                <Link
                                    href="/"
                                    className="
                                        flex items-center
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    Home
                                </Link>
                            </li>


                            {/* ABOUT */}
                            <li className="h-full flex items-center">
                                <Link
                                    href="/about"
                                    className="
                                        flex items-center
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    About Us
                                </Link>
                            </li>


                            {/* ================= SERVICES ================= */}
                            <li className="relative group h-full flex items-center">

                                <Link
                                    href="/Service"
                                    className="
                                        flex items-center
                                        gap-1
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    Services
                                    <span className="text-xs">
                                        ▼
                                    </span>
                                </Link>


                                {/* SERVICES DROPDOWN */}
                                <div
                                    className="
                                        absolute
                                        top-[80px]
                                        left-1/2
                                        -translate-x-1/2
                                        hidden
                                        group-hover:block
                                        w-52
                                        bg-white
                                        text-gray-800
                                        shadow-xl
                                        border
                                        border-gray-200
                                        rounded-md
                                        overflow-hidden
                                        z-[100]
                                    "
                                >

                                    {/* WEBSITE */}
                                    <Link
                                        href="/Service?category=Website"
                                        className="
                                            block
                                            px-5
                                            py-3
                                            hover:bg-[#0025cc]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                       Safety Website
                                    </Link>


                                    {/* SEO */}
                                    <Link
                                        href="/Service?category=SEO"
                                        className="
                                            block
                                            px-5
                                            py-3
                                            hover:bg-[#0025cc]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                       Safety SEO
                                    </Link>


                                    {/* CONSULTATION */}
                                    <Link
                                        href="/Service?category=Consultation"
                                        className="
                                            block
                                            px-5
                                            py-3
                                            hover:bg-[#0025cc]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                       Safety Consultation
                                    </Link>

                                    {/* Socialmedia */}
                                    <Link
                                        href="/Service?category=Socialmedia"
                                        className="
                                            block
                                            px-5
                                            py-3
                                            hover:bg-[#0025cc]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                       Social Media Handling
                                    </Link>

                                </div>
                            </li>


                            {/* BLOG */}
                            <li className="h-full flex items-center">
                                <Link
                                    href="/Blog"
                                    className="
                                        flex items-center
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    Blog
                                </Link>
                            </li>


                            {/* SOLUTIONS */}
                            <li className="h-full flex items-center">
                                <Link
                                    href="/Solutions"
                                    className="
                                        flex items-center
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    Solutions
                                </Link>
                            </li>


                            {/* CONTACT */}
                            <li className="h-full flex items-center">
                                <Link
                                    href="/contact"
                                    className="
                                        flex items-center
                                        h-full
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    Contact Us
                                </Link>
                            </li>

                        </ul>


                        {/* ================= QUOTE BUTTON ================= */}
                        <div className="hidden md:block z-20">
                            <Link
                                href={route("quote.form")}
                                className="
                                    bg-yellow-400
                                    text-[#0025cc]
                                    px-5
                                    py-2
                                    rounded-full
                                    font-semibold
                                    text-sm
                                    lg:text-base
                                    whitespace-nowrap
                                    hover:bg-yellow-300
                                    transition
                                "
                            >
                                Request a Quote
                            </Link>
                        </div>


                        {/* ================= MOBILE BUTTON ================= */}
                        <button
                            className="
                                md:hidden
                                ml-auto
                                text-2xl
                                z-20
                            "
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>

                    </div>
                </div>


                {/* ================= MOBILE MENU ================= */}
                {open && (
                    <div className="md:hidden bg-[#0025cc] px-5 pb-6">

                        <ul className="flex flex-col gap-4 text-lg pt-4">

                            {/* HOME */}
                            <li>
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className="block hover:text-yellow-300"
                                >
                                    Home
                                </Link>
                            </li>


                            {/* ABOUT */}
                            <li>
                                <Link
                                    href="/about"
                                    onClick={closeMenu}
                                    className="block hover:text-yellow-300"
                                >
                                    About Us
                                </Link>
                            </li>


                            {/* SERVICES */}
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setServiceOpen(!serviceOpen)}
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        text-left
                                        hover:text-yellow-300
                                        transition
                                    "
                                >
                                    <span>Services</span>

                                    <span
                                        className={`text-sm transition-transform duration-200 ${
                                            serviceOpen ? "rotate-180" : ""
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {/* MOBILE SERVICES SUBMENU */}
                                {serviceOpen && (
                                    <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-yellow-400 pl-4">

                                        <Link
                                            href="/Service?category=Website"
                                            onClick={closeMenu}
                                            className="block text-base hover:text-yellow-300 transition"
                                        >
                                            Safety Website
                                        </Link>

                                        <Link
                                            href="/Service?category=SEO"
                                            onClick={closeMenu}
                                            className="block text-base hover:text-yellow-300 transition"
                                        >
                                            Safety SEO
                                        </Link>

                                        <Link
                                            href="/Service?category=Consultation"
                                            onClick={closeMenu}
                                            className="block text-base hover:text-yellow-300 transition"
                                        >
                                            Safety Consultation
                                        </Link>

                                        <Link
                                            href="/Service?category=Socialmedia"
                                            onClick={closeMenu}
                                            className="block text-base hover:text-yellow-300 transition"
                                        >
                                            Social Media Handling
                                        </Link>

                                    </div>
                                )}
                            </li>


                            {/* BLOG */}
                            <li>
                                <Link
                                    href="/Blog"
                                    onClick={closeMenu}
                                    className="block hover:text-yellow-300"
                                >
                                    Blog
                                </Link>
                            </li>


                            {/* SOLUTIONS */}
                            <li>
                                <Link
                                    href="/Solutions"
                                    onClick={closeMenu}
                                    className="block hover:text-yellow-300"
                                >
                                    Solutions
                                </Link>
                            </li>


                            {/* CONTACT */}
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={closeMenu}
                                    className="block hover:text-yellow-300"
                                >
                                    Contact Us
                                </Link>
                            </li>


                            {/* QUOTE */}
                            <li className="pt-3">
                                <Link
                                    href={route("quote.form")}
                                    onClick={closeMenu}
                                    className="
                                        block
                                        text-center
                                        bg-yellow-400
                                        text-[#0025cc]
                                        py-3
                                        rounded-lg
                                        font-semibold
                                        hover:bg-yellow-300
                                        transition
                                    "
                                >
                                    Request a Quote
                                </Link>
                            </li>

                        </ul>

                    </div>
                )}

            </nav>
        </header>
    );
}
