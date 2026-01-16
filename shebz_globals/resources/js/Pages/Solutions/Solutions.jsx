import React from "react";
import AppLayout from "../Layout/AppLayout";
import { assets } from "../../assets/assets.js";

export default function Solutions() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

            {/* ================= SOLUTIONS ================= */}
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Our Solutions
                </h1>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Safety Manufacturers */}
                    <div
                        className="
                            bg-white border rounded-xl p-6
                            shadow-sm
                            transition-all duration-300 ease-out
                            hover:shadow-2xl
                            hover:-translate-y-2
                            hover:scale-[1.03]
                            hover:ring-2 hover:ring-[#0025cc]/30
                        "
                    >
                        <img src={assets.manufacturers} alt="Manufacturers" className="mb-4 rounded-lg"/>
                        <h2 className="text-xl font-semibold mb-3 text-[#0025cc]">
                            For Safety Manufacturers
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            We help safety equipment makers improve product design,
                            marketing impact, and global acceptance through expert
                            audits, user feedback, and strategic branding.
                        </p>
                    </div>

                    {/* Industrial Companies */}
                    <div
                        className="
                            bg-white border rounded-xl p-6
                            shadow-sm
                            transition-all duration-300 ease-out
                            hover:shadow-2xl
                            hover:-translate-y-2
                            hover:scale-[1.03]
                            hover:ring-2 hover:ring-[#0025cc]/30
                        "
                    >
                        <img src={assets.companies} alt="Companies" className="mb-4 rounded-lg"/>
                        <h2 className="text-xl font-semibold mb-3 text-[#0025cc]">
                            For Industrial Companies
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Our remote digital audits, EHS dashboards, and customized
                            training programs strengthen safety culture and regulatory
                            compliance across global operations.
                        </p>
                    </div>

                    {/* Safety Startups */}
                    <div
                        className="
                            bg-white border rounded-xl p-6
                            shadow-sm
                            transition-all duration-300 ease-out
                            hover:shadow-2xl
                            hover:-translate-y-2
                            hover:scale-[1.03]
                            hover:ring-2 hover:ring-[#0025cc]/30
                        "
                    >
                        <img src={assets.startups} alt="Startups" className="mb-4 rounded-lg"/>
                        <h2 className="text-xl font-semibold mb-3 text-[#0025cc]">
                            For Safety Startups
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            From idea validation to global launch, we support startups
                            in designing, testing, and scaling innovative safety
                            solutions efficiently.
                        </p>
                    </div>

                </div>
            </section>


            {/* ================= CASE STUDIES ================= */}
            <section className="bg-gray-50 border rounded-xl p-6 md:p-10 max-w-3xl mx-auto">

                {/* HEADING */}
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 text-center">
                    Case Studies & Highlights
                </h2>

                {/* LIST */}
                <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                    <li className="flex gap-3 items-start justify-center md:justify-start">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>
                            Improved safety product visibility by <strong>250%</strong> for an Indian PPE brand.
                        </span>
                    </li>
                    <li className="flex gap-3 items-start justify-center md:justify-start">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>
                            Digitized EHS audits across <strong>5 countries</strong> for a global industrial firm.
                        </span>
                    </li>
                </ul>

            </section>


            {/* ================= KNOWLEDGE HUB ================= */}
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Knowledge Hub
                </h1>
                <p className="text-gray-600 mb-8">
                    A growing digital library for safety professionals worldwide.
                </p>

                <div className="bg-white border rounded-xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* LEFT: TEXT */}
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-semibold mb-5 text-[#0025cc]">
                                What You'll Find
                            </h3>

                            <ul className="space-y-3 text-gray-700">
                                <li className="flex gap-2">
                                    <span className="text-blue-600">•</span>
                                    Articles on digital transformation in industrial safety
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-600">•</span>
                                    Practical guides on AI & VR applications in occupational safety
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-600">•</span>
                                    Free downloads: safety checklists, SOP templates, dashboards
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-600">•</span>
                                    Expert videos & podcasts featuring Shebin Abraham
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT: IMAGE */}
                        <div className="md:w-2/5 flex justify-center items-center">
                            <img
                                src={assets.knowledgehub}
                                alt="Knowledge Hub"
                                className="w-full h-full max-h-[300px] object-contain rounded-xl"
                            />
                        </div>
                    </div>
                </div>

            </section>
            {/* ================= COACHING & MENTORSHIP ================= */}
                <div className="
                    bg-white border rounded-xl shadow-sm
                    p-6 sm:p-8 md:p-10
                    max-w-4xl mx-auto
                    text-center
                ">

                    {/* IMAGE */}
                    <div className="flex justify-center mb-6 md:mb-8">
                        <img
                            src={assets.coaching}
                            alt="Coaching & Mentorship"
                            className="
                                w-full
                                max-w-xl sm:max-w-2xl md:max-w-3xl
                                h-auto
                                max-h-[260px] sm:max-h-[340px] md:max-h-[420px]
                                object-contain
                                rounded-xl
                            "
                        />
                    </div>

                    {/* HEADING */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                        COACHING & MENTORSHIP
                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
                        Helping safety professionals grow, influence, and lead.
                    </p>

                    {/* PROGRAMS */}
                    <div className="max-w-2xl mx-auto text-left">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-5 md:mb-6 text-[#0025cc] text-center">
                            Programs Include
                        </h2>

                        <ul className="
                            space-y-3 sm:space-y-4
                            text-gray-700
                            text-base sm:text-lg
                            pl-4 sm:pl-8 md:pl-12
                        ">
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 mt-1">•</span>
                                One-on-one coaching for career growth and leadership skills.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 mt-1">•</span>
                                LinkedIn branding and visibility strategy.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 mt-1">•</span>
                                Resume and interview guidance for global safety roles.
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-600 mt-1">•</span>
                                1-on-1 mentorship with Shebin Abraham.
                            </li>
                        </ul>
                    </div>

                </div>
        </div>
    );
}

Solutions.layout = page => <AppLayout>{page}</AppLayout>;
