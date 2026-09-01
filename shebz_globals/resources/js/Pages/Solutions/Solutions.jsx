import React from "react";
import AppLayout from "../Layout/AppLayout";
import { assets } from "../../assets/assets.js";
import { usePage, Head } from "@inertiajs/react";

export default function Solutions() {
    const page = usePage().props || {};

    const solutions = page.solutions || [];
    const caseStudies = page.caseStudies || [];
    const knowledgeHub = page.knowledgeHub || null;
    const knowledgeHubItems = page.knowledgeHubItems || [];
    const coaching = page.coaching || null;
    const coachingPrograms = page.coachingPrograms || [];


    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

            <Head>
                <title>{page?.meta_title || "Solutions"}</title>
                <meta
                    name="description"
                    content={page?.meta_description || ""}
                />
            </Head>

            {/* ================= SOLUTIONS ================= */}
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0025cc] text-center mb-10">
                    Our Solutions
                </h1>

                {solutions.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {solutions.map((item) => (
                            <div
                                key={item?.id}
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
                                <img
                                    src={
                                        item?.image
                                            ? `/storage/${item.image}`
                                            : assets?.manufacturers
                                    }
                                    alt={item?.title || "solution"}
                                    className="mb-4 rounded-lg w-full max-h-[220px] object-cover"
                                    loading="lazy"
                                />

                                <h2 className="text-xl font-semibold mb-3 text-[#0025cc]">
                                    {item?.title || "-"}
                                </h2>

                                <p className="text-gray-700 leading-relaxed text-justify">
                                    {item?.description || "-"}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No solutions found.</p>
                )}
            </section>

            {/* ================= CASE STUDIES ================= */}
            <section className="bg-gray-50 border rounded-xl p-6 md:p-10 max-w-3xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 text-center">
                    Case Studies & Highlights
                </h2>

                {caseStudies.length > 0 ? (
                    <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                        {caseStudies.map((item) => (
                            <li
                                key={item?.id}
                                className="flex gap-3 items-start justify-center md:justify-start"
                            >
                                <span className="text-green-600 font-bold mt-1">✓</span>
                                <span>{item?.text}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center">
                        No Case Studies Found
                    </p>
                )}
            </section>

            {/* ================= KNOWLEDGE HUB ================= */}
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {knowledgeHub?.title || "Knowledge Hub"}
                </h1>

                <p className="text-gray-600 mb-8">
                    {knowledgeHub?.subtitle ||
                        "A growing digital library for safety professionals worldwide."}
                </p>

                <div className="bg-white border rounded-xl p-6 md:p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* LEFT TEXT */}
                        <div className="md:w-2/3 w-full">
                            <h3 className="text-xl font-semibold mb-5 text-[#0025cc]">
                                {knowledgeHub?.heading || "What You'll Find"}
                            </h3>

                            {knowledgeHubItems.length > 0 ? (
                                <ul className="space-y-3 text-gray-700">
                                    {knowledgeHubItems.map((item) => (
                                        <li key={item?.id} className="flex gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>{item?.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">
                                    No knowledge hub items found.
                                </p>
                            )}
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="md:w-2/5 w-full flex justify-center">
                            <img
                                src={
                                    knowledgeHub?.image
                                        ? `/storage/${knowledgeHub.image}`
                                        : assets?.knowledgehub
                                }
                                alt="Knowledge Hub"
                                className="w-full max-h-[300px] object-contain rounded-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COACHING & MENTORSHIP ================= */}
            <section
                className="
                    bg-white border rounded-xl shadow-sm
                    p-6 sm:p-8 md:p-10
                    max-w-4xl mx-auto
                    text-center
                "
            >
                {/* IMAGE */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <img
                        src={
                            coaching?.image
                                ? `/storage/${coaching.image}`
                                : assets?.coaching
                        }
                        alt="Coaching & Mentorship"
                        className="
                            w-full
                            max-w-xl sm:max-w-2xl md:max-w-3xl
                            h-auto
                            max-h-[260px] sm:max-h-[340px] md:max-h-[420px]
                            object-contain
                            rounded-xl
                        "
                        loading="lazy"
                    />
                </div>

                {/* HEADING */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                    {coaching?.title || "COACHING & MENTORSHIP"}
                </h1>

                {/* SUBTITLE */}
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10">
                    {coaching?.subtitle ||
                        "Helping safety professionals grow, influence, and lead."}
                </p>

                {/* PROGRAMS */}
                <div className="max-w-2xl mx-auto text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-5 md:mb-6 text-[#0025cc] text-center">
                        {coaching?.heading || "Programs Include"}
                    </h2>

                    {coachingPrograms.length > 0 ? (
                        <ul
                            className="
                                space-y-3 sm:space-y-4
                                text-gray-700
                                text-base sm:text-lg
                                pl-4 sm:pl-8 md:pl-12
                            "
                        >
                            {coachingPrograms.map((item) => (
                                <li key={item?.id} className="flex gap-3 items-start">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>{item?.text}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-center">
                            No coaching programs found.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}

Solutions.layout = (page) => <AppLayout>{page}</AppLayout>;
