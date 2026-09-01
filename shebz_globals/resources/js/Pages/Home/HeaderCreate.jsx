import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function HeaderCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        background_image: null, // hero background image
        hero_title: "",
        hero_paragraph1: "",
        hero_paragraph2: "",
        button_text: "Learn More",
        button_link: "/learn-more",

        banner_text: "Saving Lives. Strengthening Safety.", // Yellow Banner

        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("homeheader.store"), {
            forceFormData: true, // zequired for file upload
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add Header">
            <Head title="Add Header" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Header Content
                </h1>

                <form onSubmit={submit} className="space-y-5">

                    {/* HERO BACKGROUND IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Hero Background Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("background_image", e.target.files[0])}
                            className="w-full border rounded-md px-4 py-2"
                        />

                        {errors.background_image && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.background_image}
                            </p>
                        )}
                    </div>

                    {/* HERO TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Hero Title
                        </label>
                        <input
                            type="text"
                            value={data.hero_title}
                            onChange={(e) => setData("hero_title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Global Digital Safety Consulting"
                        />
                        {errors.hero_title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.hero_title}
                            </p>
                        )}
                    </div>

                    {/* PARAGRAPH 1 */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Paragraph 1
                        </label>
                        <textarea
                            rows="4"
                            value={data.hero_paragraph1}
                            onChange={(e) => setData("hero_paragraph1", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="At SHEBZ Global Safety Solutions, we help companies across the world..."
                        />
                    </div>

                    {/* PARAGRAPH 2 */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Paragraph 2
                        </label>
                        <textarea
                            rows="4"
                            value={data.hero_paragraph2}
                            onChange={(e) => setData("hero_paragraph2", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Our mission is simple — to save lives at workplaces..."
                        />
                    </div>

                    {/* BUTTON TEXT & LINK */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Button Text
                            </label>
                            <input
                                type="text"
                                value={data.button_text}
                                onChange={(e) => setData("button_text", e.target.value)}
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Learn More"
                            />
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">
                                Button Link
                            </label>
                            <input
                                type="text"
                                value={data.button_link}
                                onChange={(e) => setData("button_link", e.target.value)}
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="/learn-more"
                            />
                        </div>
                    </div>

                    {/* YELLOW BANNER TEXT */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Yellow Banner Text
                        </label>
                        <input
                            type="text"
                            value={data.banner_text}
                            onChange={(e) => setData("banner_text", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Saving Lives. Strengthening Safety."
                        />

                        {errors.banner_text && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.banner_text}
                            </p>
                        )}
                    </div>

                    {/* ACTIVE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            value={data.is_active ? 1 : 0}
                            onChange={(e) => setData("is_active", e.target.value == "1")}
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    {/* SEO Meta */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            SEO
                        </label>
                        <input
                            type="text"
                            value={data.meta_title}
                            onChange={(e) => setData("meta_title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Meta Title"
                        />
                    </div>

                    <div>
                        <textarea
                            rows="3"
                            value={data.meta_description}
                            onChange={(e) => setData("meta_description", e.target.value)}
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Meta Description"
                        />
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href={route("home.header")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md hover:opacity-90 disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save Header"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
