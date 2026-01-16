import React from "react";
import { Link } from "@inertiajs/react";
import AppLayout from "../Layout/AppLayout";

export default function ServiceView({ services = [] }) {
    return (
        <div>

            {/* ================= SERVICES GRID ================= */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">

                <h1 className="text-2xl md:text-3xl font-bold mb-10">
                    Our Services
                </h1>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="
                                group
                                bg-white border border-gray-200 rounded-xl p-6
                                shadow-sm transition-all duration-300
                                hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
                                hover:ring-2 hover:ring-[#0025cc]/30
                            "
                        >
                            {/* ICON CONTAINER */}
                            <div
                                className="
                                    flex items-center justify-center
                                    w-full
                                    h-56 md:h-64 lg:h-72
                                    mb-6
                                    bg-gray-50
                                    rounded-xl
                                "
                            >
                                <img
                                    src={`/storage/${service.icon}`}
                                    alt={service.title}
                                    className="
                                        max-w-full
                                        max-h-full
                                        object-contain
                                        transition-transform duration-300
                                        group-hover:scale-110
                                    "
                                />
                            </div>

                            {/* TITLE */}
                            <h2 className="text-base md:text-lg font-semibold text-center mb-3">
                                {service.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-sm text-center mb-4">
                                {service.description.slice(0, 120)}...
                            </p>

                            {/* CTA */}
                            <div className="text-center">
                                <Link
                                    href={`/service/${service.id}`}
                                    className="
                                        inline-block px-5 py-2
                                        text-sm font-medium
                                        text-[#0025cc]
                                        border border-[#0025cc]
                                        rounded-lg
                                        hover:bg-[#0025cc]
                                        hover:text-white
                                        transition
                                    "
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= UNIQUE ADVANTAGES ================= */}
            <section className="mt-16 bg-gray-50 rounded-xl p-6 md:p-10 flex justify-center">

                <div className="max-w-3xl w-full text-center">

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] mb-6">
                         Unique Advantages of SHEBZ Global Safety Solutions
                    </h2>

                    <div className="space-y-4 text-gray-700 text-center">
                        <p><strong>21+ years</strong> of global OHS experience across industries.</p>
                        <p>
                            Expert insight bridging <strong>technical safety</strong> and
                            <strong> digital innovation</strong>.
                        </p>
                        <p>Access to international safety technology networks and partners.</p>
                        <p>
                            <strong>Remote-first, digitally powered consultancy</strong>
                            reducing cost and time.
                        </p>
                        <p>
                            Collaboration-friendly model with manufacturers, developers,
                            and trainers worldwide.
                        </p>
                    </div>

                    <div className="mt-10 border-t pt-6 text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            SHEBZ GLOBAL SAFETY SOLUTIONS
                        </h3>

                        <p className="mt-2 text-lg italic text-gray-700">
                            Innovative Industrial Safety Solutions for a Safer Tomorrow
                        </p>

                        <p className="mt-3 text-base font-semibold text-gray-800">
                            Mission:{" "}
                            <span className="font-normal">
                                Saving Lives at Workplaces.
                            </span>
                        </p>
                    </div>

                </div>

            </section>

        </div>
    );
}

ServiceView.layout = page => <AppLayout>{page}</AppLayout>;
