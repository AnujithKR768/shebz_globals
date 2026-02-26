import React from "react";
import { useForm } from "@inertiajs/react";
import AppLayout from "../Layout/AppLayout";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact({ content }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.send"), {
            onSuccess: () => reset(),
        });
    };

    const pageTitle = content?.page_title ?? "Contact Us";
    const pageDescription = content?.page_description ?? "";

    const mapEmbed = content?.map_embed_url ?? "https://www.google.com/maps?q=Dubai,UAE&output=embed";

    const rightTitle = content?.right_title ?? "Let's Build a Safer Tomorrow — Together";
    const rightDescription = content?.right_description ?? "";

    const email = content?.email ?? "service@shebzglobalsafety.com";
    const website = content?.website ?? "www.shebzglobalsafety.com";
    const headOffice = content?.head_office ?? "Dubai, UAE — Serving Clients Worldwide";

    const whatsappNumber = content?.whatsapp_number ?? "+971504633498";
    const whatsappText = content?.whatsapp_text ?? "Hello, I would like to know more about your services";

    const linkedinUrl =
        content?.linkedin_url ?? "https://www.linkedin.com/company/shebz-global-safety-solutions/";

    const whyTitle =
        content?.why_title ?? "Why Reach Out to SHEBZ Global Safety Solutions?";
    const whyDescription = content?.why_description ?? "";

    const whyPoints = content?.why_points ?? [];

    return (
        <div className="bg-white">

            {/* PAGE HEADER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-10 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4">
                    {pageTitle}
                </h1>

                <p
                    className="
                        text-gray-700
                        text-sm sm:text-base md:text-lg
                        leading-relaxed md:leading-loose
                        text-justify
                        break-words
                        hyphens-auto
                        max-w-3xl
                        mx-auto md:mx-0
                    "
                >
                    {pageDescription}
                </p>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="space-y-8">

                        {/* MAP */}
                        <div className="rounded-xl overflow-hidden shadow border">
                            <iframe
                                title="Location"
                                className="w-full h-[220px] sm:h-[280px] md:h-[300px]"
                                src={mapEmbed}
                                loading="lazy"
                            />
                        </div>

                        {/* FORM */}
                        <div className="border rounded-xl p-5 sm:p-6 shadow-sm bg-white">
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
                                Send Us a Message
                            </h3>

                            <form onSubmit={submit} className="space-y-4">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && (
                                    <p className="text-red-600 text-sm">{errors.name}</p>
                                )}

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm">{errors.email}</p>
                                )}

                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={data.message}
                                    onChange={(e) => setData("message", e.target.value)}
                                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.message && (
                                    <p className="text-red-600 text-sm">{errors.message}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#0025cc] text-white py-2 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                                >
                                    {processing ? "Sending..." : "Submit"}
                                </button>
                            </form>
                        </div>

                        {/* ICON CONTACTS */}
                        <div className="flex justify-center gap-8 text-2xl text-[#0025cc] pt-4">
                            <a href={`mailto:${email}`} title="Email">
                                <FaEnvelope className="hover:text-red-600 transition" />
                            </a>

                            <a
                                href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
                                    whatsappText
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                            >
                                <FaWhatsapp className="hover:text-green-600 transition" />
                            </a>

                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="hover:text-blue-700 transition" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-10">

                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-semibold">
                                {rightTitle}
                            </h2>

                            <p
                                className="
                                    text-gray-700
                                    text-sm sm:text-base md:text-lg
                                    leading-relaxed md:leading-loose
                                    text-justify
                                    break-words
                                    hyphens-auto
                                "
                            >
                                {rightDescription}
                            </p>

                            <div className="space-y-2 text-gray-700">
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Website:</strong> {website}</p>
                                <p><strong>Head Office:</strong> {headOffice}</p>
                            </div>
                        </div>

                        {/* WHY CONTACT US */}
                        <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {whyTitle}
                            </h3>

                            <p
                                className="
                                    text-slate-600
                                    text-sm sm:text-base md:text-lg
                                    leading-relaxed md:leading-loose
                                    text-justify
                                    break-words
                                    hyphens-auto
                                    mb-6
                                "
                            >
                                {whyDescription}
                            </p>

                            <ul className="space-y-3 text-slate-800">
                                {whyPoints.length > 0 ? (
                                    whyPoints.map((point, i) => (
                                        <li key={i} className="flex gap-3">
                                            {point}
                                        </li>
                                    ))
                                ) : (
                                    <>
                                        <li className="flex gap-3">✅ Industry-Experienced Safety Professionals</li>
                                        <li className="flex gap-3">🌍 Serving Clients Worldwide</li>
                                        <li className="flex gap-3">⚙️ Digital-First & Remote Support</li>
                                        <li className="flex gap-3">📊 Compliance-Focused, Results-Driven</li>
                                    </>
                                )}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

Contact.layout = (page) => <AppLayout>{page}</AppLayout>;
