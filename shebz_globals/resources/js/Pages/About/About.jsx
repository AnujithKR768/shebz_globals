import React from "react";
import { assets } from "@/assets/assets";
import AppLayout from "@/Pages/Layout/AppLayout";
import { usePage, Head } from "@inertiajs/react";

export default function About() {
    const { story, mission, vision, coreValues, founderMessage } = usePage().props;

    return (
        <div className="bg-gray-100">

            <Head>
                <title>About Us</title>
            </Head>

            {/* ================= HERO / STORY ================= */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

                    {/* LEFT CONTENT */}
                    <div className="px-6 lg:px-12 py-8 md:py-16 lg:py-20 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-5">
                            About Us
                        </h1>

                        <h2 className="text-xl font-semibold text-blue-800 mb-3">
                            {story?.title || "Our Story"}
                        </h2>

                        <p className="text-black leading-relaxed mb-3 md:mb-5 text-justify">
                            {story?.paragraph1 || ""}
                        </p>

                        <p className="text-black leading-relaxed text-justify">
                            {story?.paragraph2 || ""}
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex items-end justify-center py-4 md:py-10">
                        <img
                            src={story?.image ? `/storage/${story.image}` : assets.about}
                            alt="About"
                            className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl object-contain drop-shadow-2xl"
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
                            {mission?.title || "Our Mission"}
                        </h2>

                        <p className="text-black leading-relaxed text-lg text-justify">
                            {mission?.description || ""}
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md">
                            <img
                                src={mission?.image ? `/storage/${mission.image}` : assets.mission}
                                alt="Mission"
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
                                src={vision?.image ? `/storage/${vision.image}` : assets.vision}
                                alt="Vision"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-justify">
                            {vision?.title || "Our Vision"}
                        </h2>

                        <p className="text-black leading-relaxed text-lg text-justify">
                            {vision?.description || ""}
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= CORE VALUES ================= */}
            <section className="bg-white py-20 md:py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-semibold text-blue-900 mb-10">
                        Core Values
                    </h2>

                    <ul className="space-y-5 text-gray-800 text-lg inline-block text-left">
                        {(coreValues || []).length > 0 ? (
                            coreValues.map((item) => (
                                <li key={item.id} className="flex items-start gap-3">
                                    {/* yellow bullet */}
                                    <span className="text-yellow-500 text-xl leading-none mt-1">
                                        •
                                    </span>

                                    {/* same line Title : Description */}
                                    <p className="leading-relaxed">
                                        <span className="font-semibold text-gray-900">
                                            {item.value_title}:
                                        </span>{" "}
                                        <span className="text-gray-700">
                                            {item.value_description}
                                        </span>
                                    </p>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500 text-center">
                                No Core Values Found
                            </li>
                        )}
                    </ul>

                </div>
            </section>


            {/* ================= FOUNDER MESSAGE ================= */}
            <section className="pb-20 md:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 md:p-12">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                            {founderMessage?.title || "Founder Message"}
                        </h1>

                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                                {founderMessage?.message || ""}
                            </p>

                            <p className="text-gray-900 font-semibold">
                                — {founderMessage?.founder_name || ""}
                            </p>

                            <p className="text-sm text-gray-600">
                                {founderMessage?.founder_role || ""}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

About.layout = (page) => <AppLayout>{page}</AppLayout>;
