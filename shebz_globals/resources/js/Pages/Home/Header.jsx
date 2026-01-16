import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { assets } from "../../assets/assets.js";
import AppLayout from "../Layout/AppLayout";

export default function Header() {

    const { services } = usePage().props;
    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${assets.constructor1})`,
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-12 md:ml-8 lg:ml-12">
                    <div className="max-w-2xl text-white text-left">

                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
                            Global Digital Safety Consulting
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 text-white/90">
                            At SHEBZ Global Safety Solutions, we help companies across the world
                            strengthen workplace safety through innovation, technology, and expertise.
                            With over 21 years of global industrial safety experience, we provide
                            digital-first, remote, and research-driven safety services.
                        </p>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-white/90">
                            Our mission is simple — to save lives at workplaces by empowering
                            industries with advanced tools, training, and consulting.
                        </p>

                        <Link
                            href="/learn-more"
                            className="
                                inline-block px-6 py-3
                                text-sm sm:text-base
                                font-medium
                                bg-[#ff7a00]
                                text-white
                                rounded-md
                                hover:bg-[#e56d00]
                                transition
                            "
                        >
                            Learn More
                        </Link>

                    </div>
                </div>
            </section>


            {/* ================= BANNER ================= */}
            <section className="w-full bg-[#fddb2e] py-5">
                <p className="text-center text-sm sm:text-base md:text-lg font-semibold tracking-wide text-gray-900">
                    Saving Lives. Strengthening Safety.
                </p>
            </section>

                {/* ================= SERVICES GRID ================= */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">

                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-xl transition"
                        >
                            <Link href={`/service/${service.id}`}>
                                <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl">
                                    <img
                                        src={`/storage/${service.icon}`}
                                        alt="Service Icon"
                                        className="max-h-full object-contain group-hover:scale-110 transition"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </section>

            {/* ================= MISSION ================= */}
            <section className="bg-gradient-to-r from-white to-[#0025cc] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* TEXT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
                            Our Mission
                        </h2>

                        <p className="text-black leading-relaxed text-base md:text-lg">
                            Saving lives at workplaces. Every service, every strategy, and every
                            digital solution we deliver supports one goal — safer workplaces
                            through modern safety innovation.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md">
                            <img
                                src={assets.mission}
                                alt="Our Mission"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= VISION ================= */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#fddb2e] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md">
                            <img
                                src={assets.vision}
                                alt="Our Vision"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-black leading-relaxed text-base md:text-lg">
                            To be the world's most trusted digital and remote safety solutions
                            company, setting new standards in industrial safety innovation.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FOUNDER MESSAGE ================= */}
            <section className="pb-16 md:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-2xl
                        shadow-sm
                        hover:shadow-md
                        transition
                        p-6 sm:p-8 md:p-12
                    ">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
                            Founder's Message
                        </h1>

                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                                “I've dedicated my career to occupational safety since 2004, and I've seen
                                firsthand how lives can change with the right safety system in place.
                                We combine real-world experience with digital innovation.”
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

Header.layout = page => <AppLayout>{page}</AppLayout>;
