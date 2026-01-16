import React from "react";
import AppLayout from "../Layout/AppLayout";

export default function Privacy() {
    return (
        <div className="bg-gray-50">
            <div className="
                max-w-5xl mx-auto
                px-4 sm:px-6 lg:px-10
                py-12 sm:py-16
                text-gray-800
            ">

                {/* PAGE TITLE */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">
                    Privacy Policy
                </h1>

                {/* CONTENT CARD */}
                <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8 space-y-10">

                    {/* INTRO */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold">
                            SHEBZ Global Safety Solutions
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            SHEBZ Global Safety Solutions respects your privacy and is committed
                            to protecting your personal data. This Privacy Policy explains how we
                            collect, use, and safeguard your information.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-700">
                            We may collect the following information:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Name, email address, phone number</li>
                            <li>Company name and professional role</li>
                            <li>Inquiry details submitted via contact forms</li>
                            <li>Website usage data (analytics, cookies, IP address)</li>
                        </ul>

                        <p className="text-gray-700">
                            We only collect data that is necessary to provide safety consulting
                            services, digital solutions, and professional communication.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            2. How We Use Your Information
                        </h2>

                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Respond to inquiries and consultation requests</li>
                            <li>Provide safety consulting, EHS training, and digital services</li>
                            <li>Improve website performance and user experience</li>
                            <li>Share relevant updates or safety resources (only if opted in)</li>
                        </ul>

                        <p className="text-gray-700 font-medium">
                            We do not sell or rent your personal data.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            3. Data Protection & Security
                        </h2>
                        <p className="text-gray-700">
                            We implement appropriate technical and organizational measures to
                            protect your information against unauthorized access, loss, or misuse.
                        </p>
                        <p className="text-gray-700">
                            While we strive to use commercially acceptable means to protect your
                            data, no digital platform can guarantee absolute security.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            4. Third-Party Services
                        </h2>
                        <p className="text-gray-700">
                            We may use trusted third-party platforms (email services, analytics
                            tools, hosting providers) strictly for operational purposes. These
                            providers are required to protect your data and comply with privacy
                            regulations.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            5. Your Rights
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Request access to your personal data</li>
                            <li>Request correction or deletion of your information</li>
                            <li>Withdraw consent for communications</li>
                        </ul>
                        <p className="text-gray-700">
                            Requests can be made via email.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            6. International Users
                        </h2>
                        <p className="text-gray-700">
                            As a global occupational safety consulting firm, your data may be
                            processed in different jurisdictions while maintaining appropriate
                            data protection standards.
                        </p>
                    </section>

                    {/* SECTION */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            7. Policy Updates
                        </h2>
                        <p className="text-gray-700">
                            We may update this Privacy Policy periodically. Changes will be posted
                            on this page with an updated revision date.
                        </p>
                    </section>

                    {/* CONTACT */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold">
                            8. Contact Us
                        </h2>
                        <p className="text-gray-700">
                            For privacy-related concerns, contact:
                        </p>
                        <a
                            href="mailto:service@shebzglobalsafety.com"
                            className="text-[#0025cc] font-medium hover:underline"
                        >
                            📧 service@shebzglobalsafety.com
                        </a>
                    </section>

                    {/* META */}
                    <section className="pt-6 border-t space-y-3">
                        <h2 className="text-lg font-semibold">
                            Meta Description
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Read the privacy policy and terms of service for SHEBZ Global Safety
                            Solutions — a trusted global provider of digital safety consulting,
                            industrial safety innovation, and occupational safety services.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

Privacy.layout = page => <AppLayout>{page}</AppLayout>;
