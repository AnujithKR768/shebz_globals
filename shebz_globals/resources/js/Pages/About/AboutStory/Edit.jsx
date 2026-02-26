import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT",
        heading: item?.heading || "About Us",
        title: item?.title || "Our Story",
        paragraph1: item?.paragraph1 || "",
        paragraph2: item?.paragraph2 || "",
        image: null,
        is_active: item?.is_active ? true : false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("aboutstory.admin.update", item.id), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit About Story">
            <Head title="Edit About Story" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">

                {/* CURRENT IMAGE */}
                {item?.image && (
                    <img
                        src={`/storage/${item.image}?v=${Date.now()}`}
                        alt="current"
                        className="h-28 w-full object-cover rounded-md border"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                )}

                <form onSubmit={submit} className="space-y-6 mt-6">

                    {/* HEADING */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Heading
                        </label>
                        <input
                            value={data.heading}
                            onChange={(e) => setData("heading", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.heading && (
                            <p className="text-red-600 text-sm">{errors.heading}</p>
                        )}
                    </div>

                    {/* TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.title && (
                            <p className="text-red-600 text-sm">{errors.title}</p>
                        )}
                    </div>

                    {/* PARAGRAPH 1 */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Paragraph 1
                        </label>
                        <textarea
                            rows="4"
                            value={data.paragraph1}
                            onChange={(e) => setData("paragraph1", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* PARAGRAPH 2 */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Paragraph 2
                        </label>
                        <textarea
                            rows="4"
                            value={data.paragraph2}
                            onChange={(e) => setData("paragraph2", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* CHANGE IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Change Image
                        </label>
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
                        {errors.image && (
                            <p className="text-red-600 text-sm">{errors.image}</p>
                        )}
                    </div>

                    {/* STATUS */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            value={data.is_active ? "1" : "0"}
                            onChange={(e) =>
                                setData("is_active", e.target.value === "1")
                            }
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-between pt-4">
                        <Link
                            href={route("aboutstory.admin.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
