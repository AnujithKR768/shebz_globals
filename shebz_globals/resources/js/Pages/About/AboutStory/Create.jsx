import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        heading: "About Us",
        title: "Our Story",
        paragraph1: "",
        paragraph2: "",
        image: null,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("aboutstory.admin.store"), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add About Story">
            <Head title="Add About Story" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add About Story
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* Heading */}
                    <input
                        value={data.heading}
                        onChange={(e) => setData("heading", e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Heading"
                    />
                    {errors.heading && <p className="text-red-600 text-sm">{errors.heading}</p>}

                    {/* Title */}
                    <input
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Title"
                    />
                    {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}

                    {/* Paragraphs */}
                    <textarea
                        rows="4"
                        value={data.paragraph1}
                        onChange={(e) => setData("paragraph1", e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Paragraph 1"
                    />

                    <textarea
                        rows="4"
                        value={data.paragraph2}
                        onChange={(e) => setData("paragraph2", e.target.value)}
                        className="w-full border rounded-md px-4 py-2"
                        placeholder="Paragraph 2"
                    />

                    {/* Image */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files.length > 0) {
                                setData("image", e.target.files[0]);
                            }
                        }}
                        className="w-full border rounded-md px-4 py-2"
                    />
                    {errors.image && <p className="text-red-600 text-sm">{errors.image}</p>}

                    {/* Status */}
                    <select
                        value={data.is_active ? 1 : 0}
                        onChange={(e) => setData("is_active", e.target.value === "1")}
                        className="w-full border rounded-md px-4 py-2"
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>

                    <div className="flex justify-between pt-4">
                        <Link href={route("aboutstory.admin.index")}>← Back</Link>

                        <button
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md"
                        >
                            {processing ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
