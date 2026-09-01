import React from "react";
import AppLayout from "../Layout/AppLayout";
import { Head } from "@inertiajs/react";

export default function ServiceDetails({ service }) {
    if (!service) {
        return (
            <>

                <div className="max-w-5xl mx-auto px-6 mt-24 text-center">
                    <p className="text-gray-500 text-lg">
                        Service not found.
                    </p>
                </div>

            </>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Head>
                <title>{service?.meta_title || "Service Details"}</title>
            </Head>
            <meta name="description" content={service?.meta_description || "Service details page"} />

            {/* ================= SERVICE DETAILS ================= */}
            <section className="max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-10 mt-24 mb-16">

                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">

                    {/* IMAGE */}
                    <div className="flex justify-center mb-10">
                        {service.icon ? (
                            <img
                                src={`/storage/${service.icon}`}
                                alt={service.title || "Service image"}
                                className="
                                    w-full
                                    max-w-md sm:max-w-lg md:max-w-2xl
                                    h-auto
                                    object-contain
                                "
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg text-gray-400">
                                No Image
                            </div>
                        )}
                    </div>

                    {/* TITLE */}
                    <h1
                        className="
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                            font-extrabold
                            text-center
                            text-gray-900
                            mb-6
                            break-words
                        "
                    >
                        {service.title || "Untitled Service"}
                    </h1>

                    {/* DESCRIPTION */}
                    <div className="max-w-3xl mx-auto">
                        <p
                            className="
                                text-gray-700
                                text-sm sm:text-base md:text-lg lg:text-xl
                                leading-relaxed md:leading-loose
                                text-justify
                                break-words
                                whitespace-pre-line
                            "
                        >
                            {service.description || "No description available."}
                        </p>
                    </div>

                </div>
            </section>


        </div>
    );
}
ServiceDetails.layout = (page) => <AppLayout>{page}</AppLayout>;
