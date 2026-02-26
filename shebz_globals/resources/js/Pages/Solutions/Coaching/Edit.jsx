import React, { useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const fileRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        title: item.title || "",
        subtitle: item.subtitle || "",
        image: null,
        is_active: item.is_active ? true : false,
        _method: "put",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("coaching.admin.update", item.id), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Coaching Section">
            <Head title="Edit Coaching" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Coaching & Mentorship
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* CURRENT IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-2">
                            Current Image
                        </label>

                        {item.image ? (
                            <img
                                src={`/storage/${item.image}`}
                                className="h-32 w-full object-cover rounded border"
                                alt="current"
                            />
                        ) : (
                            <p className="text-gray-400">No Image</p>
                        )}
                    </div>

                    {/* NEW IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Change Image
                        </label>

                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border rounded-md px-4 py-2"
                        />

                        {errors.image && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                        {/* PREVIEW */}
                        {preview && (
                            <div className="mt-3">
                                <p className="text-sm text-gray-500 mb-1">
                                    New Preview:
                                </p>
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-32 rounded-md border object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc]"
                        />

                        {errors.title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* SUBTITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Subtitle
                        </label>

                        <input
                            type="text"
                            value={data.subtitle}
                            onChange={(e) =>
                                setData("subtitle", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc]"
                        />

                        {errors.subtitle && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.subtitle}
                            </p>
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
                                setData(
                                    "is_active",
                                    e.target.value === "1"
                                )
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc]"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>

                        {errors.is_active && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.is_active}
                            </p>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3 items-center pt-4">
                        <Link
                            href={route("coaching.admin.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md hover:opacity-90 disabled:opacity-50 w-full sm:w-auto"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
