import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const { url, props } = usePage();

    // =========================================================
    // AUTHENTICATED USER
    // =========================================================
    // User is shared globally from HandleInertiaRequests.php
    const user = props.auth?.user;

    // Permissions
    const permissions = user?.permissions || [];

    // Admin check
    const isAdmin = user?.role === "admin";

    // =========================================================
    // PAGE PERMISSIONS
    // =========================================================
    const canHome =
        isAdmin || permissions.includes("home");

    const canAbout =
        isAdmin || permissions.includes("about");

    const canServices =
        isAdmin || permissions.includes("services");

    const canSolutions =
        isAdmin || permissions.includes("solutions");

    const canContact =
        isAdmin || permissions.includes("contact");

    const canBlog =
        isAdmin || permissions.includes("blog");

    const canVision =
        isAdmin || permissions.includes("vision_mission");

    const canTestimonials =
        isAdmin || permissions.includes("testimonials");

    // =========================================================
    // REQUEST PERMISSIONS
    // =========================================================
    const canContactList =
        isAdmin || permissions.includes("contact_list");

    const canQuoteRequests =
        isAdmin || permissions.includes("quote_requests");

    // =========================================================
    // USERS PERMISSION
    // =========================================================
    const canManageUsers =
        isAdmin || permissions.includes("users");

    // =========================================================
    // DROPDOWN STATES
    // =========================================================
    const [openHome, setOpenHome] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [openVM, setOpenVM] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);

    // =========================================================
    // AUTO OPEN MENU BASED ON CURRENT URL
    // =========================================================
    useEffect(() => {
        if (
            url.startsWith("/home-header") ||
            url.startsWith("/learnmore-list")
        ) {
            setOpenHome(true);
        }

        if (
            url.startsWith("/about-story") ||
            url.startsWith("/core-values")
        ) {
            setOpenAbout(true);
        }

        if (
            url.startsWith("/mission-vision") ||
            url.startsWith("/founder-message")
        ) {
            setOpenVM(true);
        }

        if (
            url.startsWith("/solutions-admin") ||
            url.startsWith("/case-studies") ||
            url.startsWith("/knowledge-hub") ||
            url.startsWith("/knowledge-hub-items") ||
            url.startsWith("/coaching-mentorship") ||
            url.startsWith("/coaching-programs")
        ) {
            setOpenSolutions(true);
        }
    }, [url]);

    // =========================================================
    // ACTIVE / NORMAL CLASSES
    // =========================================================
    const activeClass =
        "bg-[#0025cc] text-white";

    const normalClass =
        "text-gray-700 hover:bg-[#0025cc] hover:text-white";

    // =========================================================
    // LAYOUT
    // =========================================================
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* =================================================
                SIDEBAR
            ================================================= */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">

                {/* =================================================
                    LOGO
                ================================================= */}
                <div className="h-16 flex items-center px-6 border-b">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/favicon.png"
                            alt="Shebz Globals"
                            className="h-8 w-8"
                        />

                        <span className="text-lg font-semibold text-gray-800">
                            Shebz Globals
                        </span>
                    </Link>
                </div>

                {/* =================================================
                    NAVIGATION
                ================================================= */}
                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">

                    {/* =================================================
                        DASHBOARD
                    ================================================= */}
                    <Link
                        href="/dashboard"
                        className={`block px-3 py-2 rounded-md font-medium
                            ${
                                url === "/dashboard"
                                    ? activeClass
                                    : normalClass
                            }`}
                    >
                        Dashboard
                    </Link>

                    {/* =================================================
                        QUOTE REQUESTS
                    ================================================= */}
                    {canQuoteRequests && (
                        <Link
                            href="/quote-requests"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url === "/quote-requests"
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Quote Request
                        </Link>
                    )}

                    {/* =================================================
                        CONTACT LIST
                    ================================================= */}
                    {canContactList && (
                        <Link
                            href="/contact-list"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url === "/contact-list"
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Contact List
                        </Link>
                    )}

                    {/* =================================================
                        TESTIMONIALS
                    ================================================= */}
                    {canTestimonials && (
                        <Link
                            href="/testimonials-list"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url === "/testimonials-list"
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Testimonials List
                        </Link>
                    )}

                    {/* =================================================
                        USERS
                    ================================================= */}
                    {canManageUsers && (
                        <Link
                            href="/users"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url.startsWith("/users")
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Users
                        </Link>
                    )}

                    {/* =================================================
                        HOME
                    ================================================= */}
                    {canHome && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenHome(!openHome)
                                }
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/home-header") ||
                                        url.startsWith("/learnmore-list")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>Home</span>

                                <span className="text-sm">
                                    {openHome ? "▾" : "▸"}
                                </span>
                            </button>

                            {openHome && (
                                <div className="ml-4 mt-1 space-y-1">

                                    {/* Home Header */}
                                    <Link
                                        href="/home-header"
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url === "/home-header"
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Header
                                    </Link>

                                    {/* Learn More */}
                                    <Link
                                        href="/learnmore-list"
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url === "/learnmore-list"
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* =================================================
                        ABOUT US
                    ================================================= */}
                    {canAbout && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenAbout(!openAbout)
                                }
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/about-story") ||
                                        url.startsWith("/core-values")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>About Us</span>

                                <span className="text-sm">
                                    {openAbout ? "▾" : "▸"}
                                </span>
                            </button>

                            {openAbout && (
                                <div className="ml-4 mt-1 space-y-1">

                                    {/* About Story */}
                                    <Link
                                        href={route(
                                            "aboutstory.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "aboutstory.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        About Story
                                    </Link>

                                    {/* Core Values */}
                                    <Link
                                        href={route(
                                            "corevalue.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "corevalue.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Core Values
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* =================================================
                        SERVICES
                    ================================================= */}
                    {canServices && (
                        <Link
                            href="/service"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url.startsWith("/service")
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Services
                        </Link>
                    )}

                    {/* =================================================
                        SOLUTIONS
                    ================================================= */}
                    {canSolutions && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenSolutions(!openSolutions)
                                }
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/solutions-admin") ||
                                        url.startsWith("/case-studies") ||
                                        url.startsWith("/knowledge-hub") ||
                                        url.startsWith("/knowledge-hub-items") ||
                                        url.startsWith("/coaching-mentorship") ||
                                        url.startsWith("/coaching-programs")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>Solutions</span>

                                <span className="text-sm">
                                    {openSolutions ? "▾" : "▸"}
                                </span>
                            </button>

                            {openSolutions && (
                                <div className="ml-4 mt-1 space-y-1">

                                    {/* Our Solutions */}
                                    <Link
                                        href={route(
                                            "solutions.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "solutions.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Our Solutions
                                    </Link>

                                    {/* Case Studies */}
                                    <Link
                                        href={route(
                                            "casestudy.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "casestudy.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Case Studies
                                    </Link>

                                    {/* Knowledge Hub */}
                                    <Link
                                        href={route(
                                            "knowledgehub.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "knowledgehub.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Knowledge Hub
                                    </Link>

                                    {/* Knowledge Hub Items */}
                                    <Link
                                        href={route(
                                            "knowledgehubitem.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "knowledgehubitem.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Knowledge Hub Items
                                    </Link>

                                    {/* Coaching & Mentorship */}
                                    <Link
                                        href={route(
                                            "coaching.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "coaching.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Coaching & Mentorship
                                    </Link>

                                    {/* Coaching Programs */}
                                    <Link
                                        href={route(
                                            "coachingprogram.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current(
                                                    "coachingprogram.admin.*"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Coaching Programs
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* =================================================
                        CONTACT US
                    ================================================= */}
                    {canContact && (
                        <Link
                            href={route("contact-content.index")}
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url.startsWith("/contact-content")
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Contact Us
                        </Link>
                    )}

                    {/* =================================================
                        VISION / MISSION / FOUNDER MESSAGE
                    ================================================= */}
                    {canVision && (
                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenVM(!openVM)
                                }
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/mission-vision") ||
                                        url.startsWith("/founder-message")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>
                                    Vision / Mission / Message
                                </span>

                                <span className="text-sm">
                                    {openVM ? "▾" : "▸"}
                                </span>
                            </button>

                            {openVM && (
                                <div className="ml-4 mt-1 space-y-1">

                                    {/* Mission & Vision */}
                                    <Link
                                        href={route(
                                            "missionvision.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url.startsWith(
                                                    "/mission-vision"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Mission & Vision
                                    </Link>

                                    {/* Founder Message */}
                                    <Link
                                        href={route(
                                            "founder.admin.index"
                                        )}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url.startsWith(
                                                    "/founder-message"
                                                )
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Founder Message
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* =================================================
                        BLOG
                    ================================================= */}
                    {canBlog && (
                        <Link
                            href={route("blog.index")}
                            className={`block px-3 py-2 rounded-md font-medium
                                ${
                                    url.startsWith("/blog")
                                        ? activeClass
                                        : normalClass
                                }`}
                        >
                            Blog
                        </Link>
                    )}
                </nav>
            </aside>

            {/* =================================================
                MAIN AREA
            ================================================= */}
            <div className="flex-1 flex flex-col">

                {/* =================================================
                    TOP BAR
                ================================================= */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">

                    <h2 className="text-xl font-semibold text-gray-800">
                        {header}
                    </h2>

                    <div className="flex items-center gap-4">

                        {/* User Name */}
                        <span className="text-sm text-gray-700">
                            {user?.name}
                        </span>

                        {/* Logout */}
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="text-sm text-red-600 hover:underline"
                        >
                            Logout
                        </Link>
                    </div>
                </header>

                {/* =================================================
                    PAGE CONTENT
                ================================================= */}
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
