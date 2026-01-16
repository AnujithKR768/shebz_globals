import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { assets } from "../../assets/assets.js";

export default function NavBarView() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav className="bg-[#0025cc] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative flex items-center h-20">

                        {/* LOGO */}
                        <Link href="/" className="flex items-center gap-3 z-10 hover:text-yellow-300">
                            <img src={assets.logo} className="h-12" alt="Shebz Global" />
                            <h1 className="text-lg md:text-xl font-semibold">
                                Shebz Global Safety Solutions
                            </h1>
                        </Link>

                        {/* DESKTOP MENU */}
                        <ul className="hidden md:flex gap-8 text-lg absolute left-1/2 -translate-x-[20%]">
                            <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-yellow-300">About Us</Link></li>
                            <li><Link href="/Service" className="hover:text-yellow-300">Services</Link></li>
                            <li><Link href="/Solutions" className="hover:text-yellow-300">Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
                        </ul>

                        {/* DESKTOP QUOTE BUTTON */}
                        <div className="hidden md:block ml-auto">
                            <Link
                                href={route("quote.form")}
                                className="bg-yellow-400 text-[#0025cc] px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
                            >
                                Request a Quote
                            </Link>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden ml-auto text-2xl"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden bg-[#0025cc] px-4 pb-6">
                        <ul className="flex flex-col gap-4 text-lg">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/Service">Services</Link></li>
                            <li><Link href="/Solutions">Solutions</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>

                            {/* MOBILE QUOTE BUTTON */}
                            <li className="pt-4">
                                <Link
                                    href={route("quote.form")}
                                    className="block text-center bg-yellow-400 text-[#0025cc] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
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
