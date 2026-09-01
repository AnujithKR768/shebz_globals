import React from "react";
import { assets } from "../../assets/assets.js";
import { FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function FooterView() {
    return (
        <footer className="bg-[#0025cc] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

                    {/* LEFT */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left md:justify-self-start">
                        <img
                            src={assets.logo}
                            alt="Shebz Global Safety Solutions"
                            className="h-10 w-auto"
                        />

                        <div className="max-w-sm">
                            <h3 className="text-sm sm:text-base font-semibold leading-tight">
                                Shebz Global Safety Solutions
                            </h3>
                            <p className="text-xs sm:text-sm opacity-90 leading-snug mt-1">
                                Empowering safer workplaces through innovation, expertise, and global compliance.
                            </p>
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="text-center text-xs sm:text-sm space-y-2 md:justify-self-center">
                        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                            <a
                                href="/Terms"
                                className="hover:text-[#fdda2d] transition-colors"
                            >
                                Terms & Conditions
                            </a>

                            <a
                                href="/PrivacyPolicy"
                                className="hover:text-[#fdda2d] transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>

                        <p className="opacity-90 leading-snug">
                            © {new Date().getFullYear()} Shebz Global Safety Solutions. All Rights Reserved.
                        </p>
                    </div>

                    {/* RIGHT (Icons moved little left) */}
                    <div className="flex justify-center md:justify-self-end md:-translate-x-10 gap-5 text-xl">
                        <a
                            href="https://www.linkedin.com/company/shebz-global-safety-solutions/"
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                            className="hover:text-[#fdda2d] transition-colors"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:service@shebzglobalsafety.com"
                            title="Email"
                            className="hover:text-[#fdda2d] transition-colors"
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href="https://www.youtube.com/channel/UC-B6B4spttbkM3USxoxbtzQ"
                            target="_blank"
                            rel="noreferrer"
                            title="YouTube"
                            className="hover:text-[#fdda2d] transition-colors"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
