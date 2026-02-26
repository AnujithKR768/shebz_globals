import React from "react";
import { assets } from "../assets/assets.js";

export default function Header() {
    return (
        <section className="bg-white">
            <div className="max-w-[1400px] mx-auto px-12 py-20">

                <div className="flex flex-col md:flex-row justify-between items-start">

                    {/* TEXT CONTENT */}
                    <div className="md:w-[55%] max-w-[650px] pr-24">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-12">
                            Global Digital Safety Consulting
                        </h1>

                        <p className="text-lg leading-relaxed mb-6 text-justify">
                            At SHEBZ Global Safety Solutions, we help companies across the world
                            strengthen workplace safety through innovation, technology, and expertise.
                            With over 21 years of global industrial safety experience, we provide
                            digital-first, remote, and research-driven safety services that make
                            workplaces safer, smarter, and more efficient.
                        </p>

                        <p className="text-lg leading-relaxed mb-10 text-justify">
                            Our mission is simple — to save lives at workplaces by empowering
                            industries and safety manufacturers with advanced tools, training,
                            and consulting.
                        </p>

                        <button className="bg-white border border-gray-300 px-6 py-3 rounded shadow hover:bg-yellow-300 transition">
                            Learn More
                        </button>
                    </div>

                    {/* IMAGE */}
                    <div className="md:w-[45%] flex justify-end mt-16 md:mt-0">
                        <img
                            src={assets.constructor1}
                            alt="Constructor"
                            className="w-full max-w-[420px] object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
