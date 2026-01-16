import React from "react";
import { assets } from "@/assets/assets";
import AppLayout from "@/Pages/Layout/AppLayout";

export default function About() {
    return (
        <div className="bg-gray-100">

            {/* ================= HERO / STORY ================= */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

                    {/* LEFT CONTENT */}
                    <div
                        className="
                            px-6 lg:px-12
                            py-8 md:py-16 lg:py-20
                            flex flex-col justify-center
                        "
                    >
                        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-5">
                            About Us
                        </h1>

                        <h2 className="text-xl font-semibold text-blue-800 mb-3">
                            Our Story
                        </h2>

                        <p className="text-black leading-relaxed mb-3 md:mb-5 text-justify">
                            Founded by{" "}
                            <span className="font-semibold text-yellow-600">
                                Shebin Abraham
                            </span>
                            , a global occupational health and safety professional with over
                            21 years of experience, SHEBZ Global Safety Solutions was born
                            from a vision — to bridge the gap between traditional safety
                            practices and the power of digital transformation.
                        </p>

                        <p className="text-black leading-relaxed text-justify">
                            From manufacturing sites to global safety exhibitions, Shebin
                            witnessed the evolution of industrial safety firsthand. Today,
                            SHEBZ Global helps manufacturers, startups, and corporations
                            embrace innovation and digital strategies to create a safer
                            industrial world.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className="
                            flex items-end justify-center
                            py-4 md:py-10
                        "
                    >
                        <img
                            src={assets.about}
                            alt="Shebin Abraham"
                            className="
                                w-full
                                max-w-2xl
                                lg:max-w-3xl
                                xl:max-w-4xl
                                object-contain
                                drop-shadow-2xl
                            "
                        />
                    </div>

                </div>
            </section>

            {/* ================= MISSION ================= */}
            <section className="bg-gradient-to-r from-yellow-400 to-yellow-200 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* TEXT */}
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-justify">
                            Our Mission
                        </h2>

                        <p className="text-black leading-relaxed text-lg text-justify">
                            Saving lives at workplaces. Every service, every strategy, and
                            every digital solution we deliver supports one goal — to make
                            workplaces around the world safer through modern safety
                            innovation.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md">
                            <img
                                src={assets.mission}
                                alt="Our Mission"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= VISION ================= */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-white to-[#0025cc]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md">
                            <img
                                src={assets.vision}
                                alt="Our Vision"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-justify">
                            Our Vision
                        </h2>
                        <p className="text-black leading-relaxed text-lg text-justify">
                            To be the world's most trusted digital and remote safety
                            solutions company, setting new standards in industrial safety
                            innovation and global collaboration.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= CORE VALUES ================= */}
            <section className="bg-white py-20 md:py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-semibold text-blue-900 mb-10">
                        Core Values
                    </h2>

                    <ul className="space-y-6 text-gray-800 text-lg text-left inline-block text-left">
                        {[
                            "Integrity: Doing what's right — every time.",
                            "Innovation: Leveraging technology to improve safety outcomes.",
                            "Excellence: Striving for world-class safety performance.",
                            "Collaboration: Working together with clients and partners globally.",
                            "Sustainability: Promoting safe and responsible operations.",
                        ].map((item, index) => (
                            <li key={index} className="flex gap-4">
                                <span className="text-yellow-500 font-bold text-xl">
                                    ●
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </section>

            {/* ================= FOUNDER MESSAGE ================= */}
            <section className="pb-20 md:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-2xl
                        shadow-sm
                        hover:shadow-md
                        transition
                        p-8 md:p-12
                    ">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                            Founder's Message
                        </h1>

                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                                “I've dedicated my career to occupational safety since 2004, and I've seen firsthand
                                how lives can change with the right safety system in place. At SHEBZ Global, we
                                combine real-world experience with digital innovation to help organizations
                                transform safety into a culture — not just a compliance goal.”
                            </p>

                            <p className="text-gray-900 font-semibold">
                                — Shebin Abraham
                            </p>

                            <p className="text-sm text-gray-600">
                                Founder & Global Safety Solution Consultant
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

About.layout = page => <AppLayout>{page}</AppLayout>;
