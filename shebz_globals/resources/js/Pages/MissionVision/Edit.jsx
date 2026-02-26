import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT",
        type: item.type || "mission",
        title: item.title || "",
        description: item.description || "",
        image: null,
        is_active: item.is_active ? true : false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("missionvision.update", item.id), {
            forceFormData: true, // REQUIRED
            preserveScroll: true,
        });
    };

    // Safe image handler + preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setData("image", file || null);

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Mission/Vision">
            <Head title="Edit Mission/Vision" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Mission / Vision
                </h1>

                <form onSubmit={submit} className="space-y-5">

                    {/* TYPE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Type
                        </label>
                        <select
                            value={data.type}
                            onChange={(e) => setData("type", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="mission">Mission</option>
                            <option value="vision">Vision</option>
                        </select>
                    </div>

                    {/* CURRENT IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-2">
                            Current Image
                        </label>

                        {item.image ? (
                            <img
                                src={`/storage/${item.image}`}
                                className="h-28 w-full object-cover rounded-md border"
                                alt="current"
                            />
                        ) : (
                            <p className="text-gray-400">No image</p>
                        )}
                    </div>

                    {/* NEW IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Change Image
                        </label>

                        <input
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

                        {/* Preview */}
                        {preview && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-24 w-32 object-cover rounded-md border shadow"
                                />
                            </div>
                        )}
                    </div>

                    {/* TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* STATUS */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            value={data.is_active ? 1 : 0}
                            onChange={(e) =>
                                setData("is_active", e.target.value === "1")
                            }
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href={route("missionvision.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md hover:opacity-90 disabled:opacity-50"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
