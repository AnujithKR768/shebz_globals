import React from "react";
import AppLayout from "../Layout/AppLayout";

export default function Terms() {
    return (
        <div className="bg-gray-50">
            <div
                className="
                    max-w-5xl mx-auto
                    px-4 sm:px-6 lg:px-10
                    py-12 sm:py-16
                    text-gray-800
                "
            >
                {/* PAGE TITLE */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
                    Terms & Conditions
                </h1>

                {/* CONTENT CARD */}
                <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8 space-y-10">

                    {/* INTRO */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold">
                            SHEBZ Global Safety Solutions
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to SHEBZ Global Safety Solutions. By accessing or using our
                            website, services, digital platforms, or consulting offerings, you
                            agree to comply with and be bound by the following Terms & Conditions.
                            Please read them carefully.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            1. About Us
                        </h2>
                        <p className="text-gray-700">
                            SHEBZ Global Safety Solutions is a global provider of industrial
                            safety consulting, digital safety transformation, EHS training,
                            safety product research, and remote occupational safety services,
                            serving clients across the UAE and international markets.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            2. Use of Website & Services
                        </h2>
                        <p className="text-gray-700">
                            You agree to use our website and services only for lawful purposes.
                            You must not:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Misuse or interfere with the website’s functionality</li>
                            <li>Attempt unauthorized access to systems or data</li>
                            <li>Use content for illegal, misleading, or harmful activities</li>
                        </ul>

                        <p className="text-gray-700">
                            We reserve the right to restrict access if misuse is detected.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            3. Intellectual Property
                        </h2>
                        <p className="text-gray-700">
                            All content on this website — including text, graphics, logos,
                            images, videos, training materials, dashboards, and digital
                            resources — is the intellectual property of SHEBZ Global Safety
                            Solutions unless otherwise stated.
                        </p>
                        <p className="text-gray-700">
                            You may not reproduce, distribute, or commercially exploit any
                            content without written permission.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            4. Professional Disclaimer
                        </h2>
                        <p className="text-gray-700">
                            Our services are designed to support safety improvement, compliance
                            guidance, and innovation. While we provide expert insights based on
                            global standards, we do not guarantee regulatory approval,
                            certifications, or legal outcomes.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            5. Third-Party Links
                        </h2>
                        <p className="text-gray-700">
                            Our website may contain links to third-party platforms (such as
                            LinkedIn, WhatsApp, or external tools). We are not responsible for
                            the content, policies, or practices of external websites.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            6. Limitation of Liability
                        </h2>
                        <p className="text-gray-700">
                            SHEBZ Global Safety Solutions shall not be liable for:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Any indirect, incidental, or consequential damages</li>
                            <li>Business losses, data loss, or system interruptions</li>
                            <li>Decisions made based on information provided through our website</li>
                        </ul>

                        <p className="text-gray-700">
                            Use of our services is at your own discretion and risk.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            7. Service Modifications
                        </h2>
                        <p className="text-gray-700">
                            We reserve the right to modify, suspend, or discontinue any part
                            of our services or website without prior notice.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            8. Governing Law
                        </h2>
                        <p className="text-gray-700">
                            These Terms & Conditions shall be governed and interpreted in
                            accordance with the laws applicable in the United Arab Emirates,
                            without regard to conflict-of-law principles.
                        </p>
                    </section>

                    {/* CONTACT */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold">
                            9. Contact Information
                        </h2>
                        <p className="text-gray-700">
                            For questions regarding these Terms & Conditions, contact us at:
                        </p>

                        <ul className="space-y-2 text-gray-700">
                            <li>
                                📧{" "}
                                <a
                                    href="mailto:service@shebzglobalsafety.com"
                                    className="text-[#0025cc] hover:underline font-medium"
                                >
                                    service@shebzglobalsafety.com
                                </a>
                            </li>
                            <li>
                                🌐{" "}
                                <span className="font-medium">
                                    <a href="https://www.shebzglobalsafety.com" className="text-[#0025cc] hover:underline">
                                        www.shebzglobalsafety.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}

Terms.layout = page => <AppLayout>{page}</AppLayout>;
