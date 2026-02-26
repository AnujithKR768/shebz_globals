import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function AuthenticatedLayout({ user, header, children }) {
    const { url } = usePage();

    // Permissions array
    const permissions = user?.permissions || [];
    const isAdmin = user?.role === "admin";

    // Page permissions
    const canHome = isAdmin || permissions.includes("home");
    const canAbout = isAdmin || permissions.includes("about");
    const canServices = isAdmin || permissions.includes("services");
    const canSolutions = isAdmin || permissions.includes("solutions");
    const canContact = isAdmin || permissions.includes("contact");
    const canVision = isAdmin || permissions.includes("vision_mission");
    const canTestimonials = isAdmin || permissions.includes("testimonials");


    // Request permissions
    const canContactList = isAdmin || permissions.includes("contact_list");
    const canQuoteRequests = isAdmin || permissions.includes("quote_requests");

    // Users permission
    const canManageUsers = isAdmin || permissions.includes("users");

    // dropdown states
    const [openHome, setOpenHome] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const [openVM, setOpenVM] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [openSolutions, setOpenSolutions] = useState(false);

    // auto open correct menu based on URL
    useEffect(() => {
        if (url.startsWith("/home-header") || url.startsWith("/learnmore-list")) {
            setOpenHome(true);
        }

        if (url.startsWith("/about-story") || url.startsWith("/core-values")) {
            setOpenAbout(true);
        }

        if (url.startsWith("/service") || url.startsWith("/services")) {
            setOpenServices(true);
        }

        if (url.startsWith("/mission-vision") || url.startsWith("/founder-message")) {
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

    const activeClass = "bg-[#0025cc] text-white";
    const normalClass = "text-gray-700 hover:bg-[#0025cc] hover:text-white";

    return (

        <div className="min-h-screen flex bg-gray-100">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                {/* LOGO */}
                <div className="h-16 flex items-center px-6 border-b">
                    <Link href="/dashboard" className="flex items-center gap-2">
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

                {/* NAVIGATION */}
                <nav className="flex-1 px-4 py-6 space-y-1">
                    {/* Dashboard (always visible) */}
                    <Link
                        href="/dashboard"
                        className={`block px-3 py-2 rounded-md font-medium
                            ${url === "/dashboard" ? activeClass : normalClass}`}
                    >
                        Dashboard
                    </Link>

                    {/* Quote Requests */}
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

                    {/* Contact List */}
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

                    {/* Testimolials */}
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


                    {/* Users */}
                    {canManageUsers && (
                        <Link
                            href="/users"
                            className={`block px-3 py-2 rounded-md font-medium
                                ${url.startsWith("/users") ? activeClass : normalClass}`}
                        >
                            Users
                        </Link>
                    )}

                    {/* ================= HOME MENU ================= */}
                    {canHome && (
                        <>
                            <button
                                onClick={() => setOpenHome(!openHome)}
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/home-header") ||
                                        url.startsWith("/learnmore-list")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>Home</span>
                                <span className="text-sm">{openHome ? "▾" : "▸"}</span>
                            </button>

                            {openHome && (
                                <div className="ml-4 mt-1 space-y-1">
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

                    {/* ================= ABOUT US MENU ================= */}
                    {canAbout && (
                        <>
                            <button
                                onClick={() => setOpenAbout(!openAbout)}
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/about-story") ||
                                        url.startsWith("/core-values")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>About Us</span>
                                <span className="text-sm">{openAbout ? "▾" : "▸"}</span>
                            </button>

                            {openAbout && (
                                <div className="ml-4 mt-1 space-y-1">
                                    <Link
                                        href={route("aboutstory.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("aboutstory.admin.*")
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        About Story
                                    </Link>

                                    <Link
                                        href={route("corevalue.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("corevalue.admin.*")
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

                    {/* ================= SERVICES MENU ================= */}
                    {canServices && (
                        <>
                            <button
                                onClick={() => setOpenServices(!openServices)}
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/service") || url.startsWith("/services")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>Services</span>
                                <span className="text-sm">{openServices ? "▾" : "▸"}</span>
                            </button>

                            {openServices && (
                                <div className="ml-4 mt-1 space-y-1">
                                    <Link
                                        href="/services/create"
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url === "/services/create"
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Add Service
                                    </Link>

                                    <Link
                                        href="/service"
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url === "/service"
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Service List
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* ================= SOLUTIONS MENU ================= */}
                    {canSolutions && (
                        <>
                            <button
                                onClick={() => setOpenSolutions(!openSolutions)}
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
                                <span className="text-sm">{openSolutions ? "▾" : "▸"}</span>
                            </button>

                            {openSolutions && (
                                <div className="ml-4 mt-1 space-y-1">
                                    <Link
                                        href={route("solutions.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("solutions.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Our Solutions
                                    </Link>

                                    <Link
                                        href={route("casestudy.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("casestudy.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Case Studies
                                    </Link>

                                    <Link
                                        href={route("knowledgehub.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("knowledgehub.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Knowledge Hub
                                    </Link>

                                    <Link
                                        href={route("knowledgehubitem.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("knowledgehubitem.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Knowledge Hub Items
                                    </Link>

                                    <Link
                                        href={route("coaching.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("coaching.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Coaching & Mentorship
                                    </Link>

                                    <Link
                                        href={route("coachingprogram.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                route().current("coachingprogram.admin.*")
                                                    ? "bg-[#0025cc] text-white"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Coaching Programs
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {/* ================= CONTACT US ================= */}
                    {canContact && (
                        <Link
                            href={route("contact-content.index")}
                            className={`block px-3 py-2 rounded-md font-medium
                                ${url.startsWith("/contact-content") ? activeClass : normalClass}`}
                        >
                            Contact Us
                        </Link>
                    )}

                    {/* ================= VISION / MISSION / MESSAGE ================= */}
                    {canVision && (
                        <>
                            <button
                                onClick={() => setOpenVM(!openVM)}
                                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium
                                    ${
                                        url.startsWith("/mission-vision") ||
                                        url.startsWith("/founder-message")
                                            ? activeClass
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <span>Vision / Mission / Message</span>
                                <span className="text-sm">{openVM ? "▾" : "▸"}</span>
                            </button>

                            {openVM && (
                                <div className="ml-4 mt-1 space-y-1">
                                    <Link
                                        href={route("missionvision.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url.startsWith("/mission-vision")
                                                    ? activeClass
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Mission & Vision
                                    </Link>

                                    <Link
                                        href={route("founder.admin.index")}
                                        className={`block px-3 py-2 rounded-md text-sm
                                            ${
                                                url.startsWith("/founder-message")
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
                </nav>
            </aside>

            {/* ================= MAIN AREA ================= */}
            <div className="flex-1 flex flex-col">
                {/* TOP BAR */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h2 className="text-xl font-semibold text-gray-800">{header}</h2>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-700">{user?.name}</span>

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

                {/* PAGE CONTENT */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>

    );
}
