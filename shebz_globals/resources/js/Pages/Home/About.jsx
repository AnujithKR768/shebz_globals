import React from "react";
import { assets } from "@/assets/assets";
import AppLayout from "@/Pages/Layout/AppLayout";


export default function About() {
    return (

        <div className="bg-white">

            {/* PAGE TITLE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-8">
                <h1 className="text-3xl md:text-5xl font-semibold text-center tracking-tight">
                    About Us
                </h1>
            </section>

            {/* OUR STORY */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">

                {/* Image */}
                <div className="flex justify-center mb-10">
                    <img
                        src={assets.about}
                        alt="Our Story"
                        className="w-full max-w-[650px] md:max-w-[820px] lg:max-w-[900px] object-contain"
                    />
                </div>


                {/* Text */}
                <div className="max-w-4xl mx-auto text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Our Story
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                        Founded by Shebin Abraham, a global occupational health and safety
                        professional with over 21 years of experience, SHEBZ Global Safety
                        Solutions was born from a vision — to bridge the gap between traditional
                        safety practices and the power of digital transformation.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-justify">
                        From manufacturing sites to global safety exhibitions, Shebin witnessed
                        the evolution of industrial safety firsthand. Today, SHEBZ Global helps
                        safety manufacturers, startups, and corporations embrace innovation,
                        remote consulting, and digital strategies to create a safer industrial world.
                    </p>
                </div>
            </section>

            {/* OUR MISSION */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div
                            className="
                                grid grid-cols-1 md:grid-cols-2 gap-10 items-center
                                border border-gray-200 rounded-xl
                                shadow-sm
                                hover:shadow-xl
                                hover:-translate-y-1
                                transition-all duration-300
                                p-6 md:p-10
                                bg-white
                            "
                        >
                            {/* IMAGE */}
                            <div className="flex justify-center">
                                <img
                                    src={assets.mission}
                                    alt="Our Mission"
                                    className="w-full max-w-lg object-contain"
                                />
                            </div>

                            {/* TEXT */}
                            <div>
                                <h2 className="text-3xl font-semibold mb-4">
                                    Our Mission
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-justify">
                                    Every service, every strategy, and every digital solution we deliver
                                    supports one goal — to make workplaces around the world safer through
                                    modern safety innovation. We empower industries with advanced tools,
                                    expert guidance, and scalable digital solutions.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>


            {/* OUR VISION */}
                <section className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div
                            className="
                                grid grid-cols-1 md:grid-cols-2 gap-10 items-center
                                border border-gray-200 rounded-xl
                                shadow-sm
                                hover:shadow-xl
                                hover:-translate-y-1
                                transition-all duration-300
                                p-6 md:p-10
                                bg-white
                            "
                        >
                            {/* TEXT */}
                            <div>
                                <h2 className="text-3xl font-semibold mb-4">
                                    Our Vision
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-justify">
                                    To become the world's most trusted digital and remote safety solutions
                                    company, setting new benchmarks in industrial safety innovation,
                                    global collaboration, and sustainable workplace protection.
                                </p>
                            </div>

                            {/* IMAGE */}
                            <div className="flex justify-center">
                                <img
                                    src={assets.vision}
                                    alt="Our Vision"
                                    className="w-full max-w-lg object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                                 Our Core Values
                            </h2>

                            <ul className="space-y-4 text-lg text-gray-800">
                                <li className="flex items-start gap-3">
                                    <span className="text-xl">•</span>
                                    <span>Integrity: Doing what's right — every time.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-xl">•</span>
                                    <span>Innovation: Leveraging technology to improve safety outcomes.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-xl">•</span>
                                    <span>Excellence: Striving for world-class safety performance.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-xl">•</span>
                                    <span>Collaboration: Working together with clients and partners globally.</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="text-xl">•</span>
                                    <span>Sustainability: Promoting safe and responsible operations.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
                <div className="
                    border border-gray-200
                    rounded-xl
                    shadow-sm
                    hover:shadow-md
                    transition
                    p-6 md:p-10
                    bg-white
                ">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                        Founder's Message
                    </h1>

                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
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

        </div>
    );
}
About.layout = page => <AppLayout>{page}</AppLayout>;

