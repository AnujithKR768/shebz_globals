import React, { useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const fileInput = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        title: item?.title || "",
        description: item?.description || "",
        image: null,
        is_active: item?.is_active ? true : false,
        meta_title: item?.meta_title || "",
        meta_description: item?.meta_description || "",
        _method: "put",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("solutions.admin.update", item.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                if (fileInput.current) {
                    fileInput.current.value = "";
                }
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Solution">
            <Head title="Edit Solution" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Solution
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* CURRENT IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-2">
                            Current Image
                        </label>

                        {item?.image ? (
                            <img
                                src={`/storage/${item.image}`}
                                alt="current"
                                className="h-32 object-cover rounded border"
                            />
                        ) : (
                            <p className="text-gray-400">No image</p>
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
                        {errors.description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Change Image (optional)
                        </label>
                        <input
                            ref={fileInput}
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

                        {/* NEW PREVIEW */}
                        {preview && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-500 mb-1">
                                    New Image Preview
                                </p>
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-32 object-cover rounded border"
                                />
                            </div>
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

                    {/* META */}

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            SEO
                        </label>
                        <input
                            value={data.meta_title}
                            onChange={(e) =>
                                setData("meta_title", e.target.value)
                            }
                            placeholder="Meta Title"
                            className="w-full border rounded-md px-4 py-2 mb-2"
                        />
                    </div>
                    <div>
                        <textarea
                            rows="3"
                            value={data.meta_description}
                            onChange={(e) =>
                                setData("meta_description", e.target.value)
                            }
                            placeholder="Meta Description"
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4">
                        <Link
                            href={route("solutions.admin.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
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
