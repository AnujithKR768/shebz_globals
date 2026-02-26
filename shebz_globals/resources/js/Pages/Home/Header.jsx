import React from "react";
import { Link, usePage } from "@inertiajs/react";
import AppLayout from "../Layout/AppLayout";

export default function Header() {
    const {
        services = [],
        header,
        mission,
        vision,
        founderMessage,
        testimonials = [],
    } = usePage().props;

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: header?.background_image
                            ? `url(/storage/${header.background_image})`
                            : "none",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-12 md:ml-8 lg:ml-12">
                    <div className="max-w-2xl text-white text-left">

                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
                            {header?.hero_title || "Global Digital Safety Consulting"}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 text-white/90">
                            {header?.hero_paragraph1 || ""}
                        </p>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 text-white/90">
                            {header?.hero_paragraph2 || ""}
                        </p>

                        <Link
                            href={header?.button_link || "/learn-more"}
                            className="inline-block px-6 py-3 text-sm sm:text-base font-medium bg-[#ff7a00] text-white rounded-md hover:bg-[#e56d00] transition"
                        >
                            {header?.button_text || "Learn More"}
                        </Link>

                    </div>
                </div>
            </section>

            {/* ================= BANNER ================= */}
            <section className="w-full bg-[#fddb2e] py-5">
                <p className="text-center text-sm sm:text-base md:text-lg font-semibold tracking-wide text-gray-900">
                    {header?.banner_text || "Saving Lives. Strengthening Safety."}
                </p>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] mb-10">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group bg-white border rounded-xl p-6 shadow-sm hover:shadow-xl transition"
                        >
                            <Link href={`/service/${service.id}`}>
                                <div className="flex items-center justify-center h-48 bg-gray-50 rounded-xl mb-4">
                                    {service?.icon && (
                                        <img
                                            src={`/storage/${service.icon}`}
                                            alt={service.title}
                                            className="max-h-full object-contain"
                                        />
                                    )}
                                </div>

                                <h3 className="text-lg font-semibold text-center mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-600 text-center">
                                    {service.description?.slice(0, 90)}...
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-[#0025cc]">
                            Our Testimonials
                        </h2>
                    </div>

                    <Link
                        href={route("testimonials.create")}
                        className="bg-[#fddb2e] text-[#0025cc] px-4 py-2 rounded"
                    >
                        Feedback
                    </Link>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.length > 0 ? (
                            testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
                                >
                                    {item?.image && (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full mb-4 object-cover"
                                        />
                                    )}

                                    <p className="text-gray-600 italic mb-4">
                                        “{item.message}”
                                    </p>

                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {item.designation}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No testimonials available.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* ================= MISSION ================= */}
            <section className="bg-gradient-to-r from-white to-[#0025cc] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
                            {mission?.title || "Our Mission"}
                        </h2>

                        <p className="text-black leading-relaxed text-base md:text-lg">
                            {mission?.description || ""}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md">
                            {mission?.image ? (
                                <img
                                    src={`/storage/${mission.image}`}
                                    alt="Our Mission"
                                    className="w-full h-auto object-contain"
                                />
                            ) : (
                                <span className="text-gray-400">No Image</span>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= VISION ================= */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#fddb2e] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md">
                            {vision?.image ? (
                                <img
                                    src={`/storage/${vision.image}`}
                                    alt="Our Vision"
                                    className="w-full h-auto object-contain"
                                />
                            ) : (
                                <span className="text-gray-400">No Image</span>
                            )}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
                            {vision?.title || "Our Vision"}
                        </h2>

                        <p className="text-black leading-relaxed text-base md:text-lg">
                            {vision?.description || ""}
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= FOUNDER MESSAGE ================= */}
            <section className="pb-16 md:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 md:p-12">

                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
                            {founderMessage?.title || "Founder Message"}
                        </h1>

                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
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

Header.layout = (page) => <AppLayout>{page}</AppLayout>;
