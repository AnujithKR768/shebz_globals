import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function QuoteRequest({ isOpen = true, onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route("quote.request"), form, {
            onSuccess: () => {
                alert("Quote request submitted successfully!");
                setForm({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    service: "",
                    message: "",
                });

                onClose ? onClose() : router.visit("/");
            },
            onError: (errors) => {
                console.error(errors);
                alert("Please fix the errors and try again.");
            }
        });
    };

    // Hide only when explicitly closed (modal mode)
    if (isOpen === false) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* BACKDROP */}
            {onClose && (
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                />
            )}

            {/* CONTAINER */}
            <div className="relative bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl p-6 md:p-10">

                {/* CLOSE ICON */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                    >
                        ❌
                    </button>
                )}

                <h2 className="text-3xl font-semibold text-blue-900 mb-4 text-center">
                    Request a Quote
                </h2>

                <p className="text-gray-600 mb-8 text-center">
                    Tell us about your requirement and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400" />

                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email Address"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400" />

                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company Name"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400" />

                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400" />

                    <select name="service" value={form.service} onChange={handleChange} required
                        className="w-full border rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-yellow-400">
                        <option value="">Select a service</option>
                        <option>Safety Consulting</option>
                        <option>Digital Safety Solutions</option>
                        <option>Training & Audits</option>
                        <option>Website / App Development</option>
                        <option>Custom Requirement</option>
                    </select>

                    <textarea name="message" value={form.message} onChange={handleChange} rows="3"
                        placeholder="Message"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400" />

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => onClose ? onClose() : router.visit("/")}
                            className="w-1/2 border py-3 rounded-lg hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex-1 bg-yellow-400 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-300"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
