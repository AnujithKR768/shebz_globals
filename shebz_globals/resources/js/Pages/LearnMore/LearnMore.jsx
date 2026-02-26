import React from "react";
import AppLayout from "../Layout/AppLayout";

export default function LearnMore({ content }) {
    if (!content) {
        return (
            <div className="py-20 text-center text-gray-500">
                No content available.
            </div>
        );
    }

    return (
        <div className="w-full">

            {/* IMAGE */}
            {content?.top_image && (
                <div className="flex justify-center md:justify-center">
                    <img
                        src={`/storage/${content.top_image}?v=${Date.now()}`}
                        alt="Safety Consulting"
                        className="w-full max-w-[1080px] object-cover object-top"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>
            )}

            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
                <div className="flex justify-center">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                            {content?.hero_title || ""}
                        </h1>

                        <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700 text-justify">
                            {content?.hero_paragraph1 || ""}
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                            {content?.hero_paragraph2 || ""}
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPERTISE LIST */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 ml-14 md:ml-56">
                    {content?.expertise_title || "Our Expertise"}
                </h2>

                <div className="max-w-3xl mx-auto">
                    <ul className="space-y-4 text-base md:text-lg text-gray-800">
                        {(content?.expertise_items || []).map((item, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="text-xl">✅</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
                        {content?.why_title || ""}
                    </h2>

                    <div className="flex flex-col gap-10">
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify">
                            {content?.why_description || ""}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

LearnMore.layout = page => <AppLayout>{page}</AppLayout>;
