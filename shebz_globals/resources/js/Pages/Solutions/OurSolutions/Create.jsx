import React, { useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const fileInput = useRef(null);
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        image: null,
        position: 1,
        is_active: true,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        // preview
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("solutions.admin.store"), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setPreview(null);

                if (fileInput.current) {
                    fileInput.current.value = "";
                }
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add Solution Card">
            <Head title="Add Solution" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Solution
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                            placeholder="Enter title"
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
                            placeholder="Enter description"
                        />
                        {errors.description && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    {/* IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Image
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

                        {/* PREVIEW */}
                        {preview && (
                            <div className="mt-4">
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="h-32 object-cover rounded border"
                                />
                            </div>
                        )}
                    </div>

                    {/* POSITION */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Position
                        </label>
                        <input
                            type="number"
                            value={data.position}
                            onChange={(e) =>
                                setData("position", e.target.value)
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
                            {processing ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
