import React from "react";
import { Link, Head } from "@inertiajs/react";
import AppLayout from "../Layout/AppLayout";

export default function ServiceView({
    services = [],
    category = null,
}) {
    // Support both array and paginated data
    const serviceList = services?.data ?? services ?? [];

    const pageTitle = category
        ? `${category} Services`
        : "Our Services";

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>

            {/* ================= SERVICES ================= */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">

                {/* PAGE TITLE */}
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[#0025cc] text-center">
                    {pageTitle}
                </h1>

                {/* CATEGORY DESCRIPTION */}
                {category && (
                    <p className="text-gray-600 mb-10">
                        Explore our {category.toLowerCase()} services.
                    </p>
                )}

                {/* EMPTY STATE */}
                {serviceList.length === 0 && (
                    <div className="text-center text-gray-500 py-16">
                        No services available
                        {category ? ` in ${category}.` : "."}
                    </div>
                )}

                {/* SERVICES GRID */}
                {serviceList.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        {serviceList.map((service) => (
                            <div
                                key={service.id}
                                className="
                                    group
                                    bg-white
                                    border border-gray-200
                                    rounded-xl
                                    p-6
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:shadow-xl
                                    hover:-translate-y-2
                                    hover:scale-[1.02]
                                    hover:ring-2
                                    hover:ring-[#0025cc]/30
                                "
                            >

                                {/* ICON */}
                                <div
                                    className="
                                        flex items-center justify-center
                                        w-full
                                        h-56 md:h-64 lg:h-72
                                        mb-6
                                        bg-gray-50
                                        rounded-xl
                                        overflow-hidden
                                    "
                                >
                                    {service?.icon ? (
                                        <img
                                            src={`/storage/${service.icon}`}
                                            alt={
                                                service?.title ||
                                                "Service"
                                            }
                                            loading="lazy"
                                            className="
                                                max-w-full
                                                max-h-full
                                                object-contain
                                                transition-transform
                                                duration-300
                                                group-hover:scale-105
                                            "
                                        />
                                    ) : (
                                        <span className="text-gray-400 text-sm">
                                            No Image
                                        </span>
                                    )}
                                </div>

                                {/* CATEGORY */}
                                <div className="text-center mb-2">
                                    <span
                                        className="
                                            inline-block
                                            px-3
                                            py-1
                                            rounded-full
                                            bg-blue-100
                                            text-[#0025cc]
                                            text-xs
                                            font-semibold
                                        "
                                    >
                                        {service.category}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h2
                                    className="
                                        text-base
                                        md:text-lg
                                        font-semibold
                                        text-center
                                        mb-3
                                    "
                                >
                                    {service?.title ||
                                        "Untitled Service"}
                                </h2>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                                        text-gray-600
                                        text-sm
                                        text-center
                                        mb-5
                                        line-clamp-3
                                    "
                                >
                                    {service?.description
                                        ? service.description.length > 120
                                            ? service.description.slice(
                                                  0,
                                                  120
                                              ) + "..."
                                            : service.description
                                        : "No description available."}
                                </p>

                                {/* LEARN MORE */}
                                <div className="text-center">
                                    <Link
                                        href={`/service/${service.id}`}
                                        className="
                                            inline-block
                                            px-5
                                            py-2
                                            text-sm
                                            font-medium
                                            text-[#0025cc]
                                            border
                                            border-[#0025cc]
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
                )}
            </section>


            {/* ================= UNIQUE ADVANTAGES ================= */}
            <section className="mt-16 bg-gray-50 rounded-xl p-6 md:p-10 flex justify-center">
                <div className="max-w-3xl w-full text-center">

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] mb-6">
                        Unique Advantages of SHEBZ Global Safety Solutions
                    </h2>

                    <div className="space-y-4 text-gray-700">

                        <p>
                            <strong>21+ years</strong> of global OHS
                            experience across industries.
                        </p>

                        <p>
                            Expert insight bridging{" "}
                            <strong>technical safety</strong> and{" "}
                            <strong>digital innovation</strong>.
                        </p>

                        <p>
                            Access to international safety technology
                            networks and partners.
                        </p>

                        <p>
                            <strong>
                                Remote-first, digitally powered consultancy
                            </strong>{" "}
                            reducing cost and time.
                        </p>

                        <p>
                            Collaboration-friendly model with
                            manufacturers, developers, and trainers
                            worldwide.
                        </p>

                    </div>

                    <div className="mt-10 border-t pt-6">

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            SHEBZ GLOBAL SAFETY SOLUTIONS
                        </h3>

                        <p className="mt-2 text-lg italic text-gray-700">
                            Innovative Industrial Safety Solutions for a
                            Safer Tomorrow
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

ServiceView.layout = (page) => <AppLayout>{page}</AppLayout>;
