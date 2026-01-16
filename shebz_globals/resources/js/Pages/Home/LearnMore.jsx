import React from "react";
import FooterView from "../Footer/FooterView";
import NavBarView from "../Navbar/NavBarView";
import { assets } from "@/assets/assets";

export default function LearnMore() {
    return (
        <div className="w-full">
            <NavBarView />
            {/* IMAGE */}
                    <div className="flex justify-center md:justify-center">
                        <img
                            src={assets.home}
                            alt="Safety Consulting"
                            className="w-full max-w-[1080px] object-contain"
                        />
                    </div>

          {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
                <div className="flex justify-center">
                    <div className="max-w-3xl text-center">

                        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                            Global Digital Safety Consulting You Can Trust
                        </h1>

                        <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700 text-justify">
                            At SHEBZ Global Safety Solutions, we help companies across the world
                            strengthen workplace safety through innovation, technology, and expertise.
                            With over 21 years of global industrial safety experience, we provide
                            digital-first, remote, and research-driven safety services that make
                            workplaces safer, smarter, and more efficient.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                            Our mission is simple — to save lives at workplaces by empowering
                            industries and safety manufacturers with advanced tools, training,
                            and consulting.
                        </p>

                    </div>
                </div>
            </section>

            {/* EXPERTISE LIST */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 ml-14 md:ml-56">
                    Our Expertise
                </h2>

                {/* CENTERED CONTENT WRAPPER */}
                <div className="max-w-3xl mx-auto">
                    <ul className="space-y-4 text-base md:text-lg text-gray-800">
                        <li className="flex gap-3">
                            <span className="text-xl">🌐</span>
                            <span>Global Safety Product & Solution Audits</span>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-xl">💻</span>
                            <span>Website & Application Development for Safety Companies</span>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-xl">📊</span>
                            <span>EHS Dashboards and Safety Data Analytics</span>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-xl">🎯</span>
                            <span>Digital Marketing & Branding for Safety Businesses</span>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-xl">🧠</span>
                            <span>Industrial Safety Research & Product Design</span>
                        </li>

                        <li className="flex gap-3">
                            <span className="text-xl">👨‍🏫</span>
                            <span>Remote Training & Coaching for Safety Professionals</span>
                        </li>
                    </ul>
                </div>
            </section>


            {/* WHY CHOOSE */}
           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
                        Why Choose SHEBZ Global?
                    </h2>

                    <div className="flex flex-col gap-10">

                        <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">
                            SHEBZ Global stands out with over 21 years of international occupational safety experience, trusted by
                            global safety product manufacturers for its expertise and reliability. We deliver remote and digital safety
                            services that are accessible anywhere in the world, making professional safety support more efficient and
                            scalable. By blending advanced technologies such as AI, VR, and AR with strong safety knowledge, we help
                            organizations innovate while maintaining the highest safety standards. Our mission is deeply purpose-driven
                            — to save lives by promoting safer workplaces through intelligent, forward-thinking solutions.
                        </p>

                    </div>
                </div>
            </section>

            <FooterView />
        </div>
    );
}
