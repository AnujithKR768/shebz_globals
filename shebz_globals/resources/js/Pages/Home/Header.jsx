import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";
import AppLayout from "../Layout/AppLayout";

export default function Header() {
    const {
        services = [],
        header,
        blogs = [],
        mission,
        vision,
        founderMessage,
        testimonials = [],
    } = usePage().props;

    return (
        <div className="w-full overflow-hidden">
            <Head>
                <title>{header?.meta_title || "Shebz Global"}</title>
                <meta name="description" content={header?.meta_description || "Shebz Global"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

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
                <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] mb-10 text-center">
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

            { /* ================= Articles ================= */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* SECTION HEADER */}
                    <div className="relative mb-10">

                        {/* CENTERED HEADING */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] text-center">
                            Latest Articles
                        </h2>

                        {/* RIGHT SIDE LINK */}
                        <Link
                            href="/Blog"
                            className="
                                absolute
                                right-0
                                top-1/2
                                -translate-y-1/2
                                text-[#0070ff]
                                font-semibold
                                text-sm md:text-base
                                hover:underline
                                flex items-center gap-1
                            "
                        >
                            View All Articles
                            <span className="text-lg">→</span>
                        </Link>

                    </div>

                    {/* ARTICLES */}
                    {blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {blogs.slice(0, 3).map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/blog/details/${blog.id}`}
                                    className="
                                        group
                                        bg-white
                                        rounded-2xl
                                        overflow-hidden
                                        shadow-sm
                                        hover:shadow-xl
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* IMAGE */}
                                    <div className="h-52 overflow-hidden">
                                        {blog.image ? (
                                            <img
                                                src={`/storage/${blog.image}`}
                                                alt={blog.title || "Blog"}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    transition-transform
                                                    duration-500
                                                    group-hover:scale-105
                                                "
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-gray-400">
                                                    No Image
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-6">

                                        {/* CATEGORY */}
                                        <div className="mb-4">
                                            <span
                                                className="
                                                    inline-block
                                                    px-3 py-1
                                                    rounded-full
                                                    bg-blue-50
                                                    text-[#0070ff]
                                                    text-xs
                                                    font-semibold
                                                "
                                            >
                                                {blog.category || "Industry Insight"}
                                            </span>
                                        </div>

                                        {/* TITLE */}
                                        <h3
                                            className="
                                                text-lg
                                                md:text-xl
                                                font-bold
                                                text-gray-900
                                                leading-snug
                                                group-hover:text-[#0025cc]
                                                transition
                                            "
                                        >
                                            {blog.title}
                                        </h3>

                                    </div>
                                </Link>
                            ))}

                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-10">
                            No articles available.
                        </p>
                    )}

                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">

                    {/* SECTION HEADER */}
                    <div className="mb-10">

                        {/* CENTERED TITLE */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0025cc] text-center">
                            Testimonials
                        </h2>

                        {/* FEEDBACK BUTTON - LEFT */}
                        <div className="mt-5 text-left">
                            <Link
                                href={route("testimonials.create")}
                                className="
                                    inline-block
                                    bg-[#fddb2e]
                                    text-[#0025cc]
                                    px-5
                                    py-2.5
                                    rounded-lg
                                    font-semibold
                                    text-sm
                                    hover:bg-yellow-300
                                    transition
                                "
                            >
                                Feedback
                            </Link>
                        </div>

                    </div>


                    {/* TESTIMONIALS */}
                    {testimonials.length > 0 ? (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="
                                        bg-white
                                        p-8
                                        rounded-2xl
                                        shadow-sm
                                        hover:shadow-lg
                                        transition
                                    "
                                >

                                    {item?.image && (
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="
                                                w-16
                                                h-16
                                                rounded-full
                                                mb-4
                                                object-cover
                                            "
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
                            ))}

                        </div>

                    ) : (

                        /* EMPTY STATE - CENTER */
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-base">
                                No testimonials available.
                            </p>
                        </div>

                    )}

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
