import React, { useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const fileInput = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: item.title || "",
        subtitle: item.subtitle || "",
        box_title: item.box_title || "",
        image: null,
        is_active: item.is_active ? true : false,
        _method: "put",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("knowledgehub.admin.update", item.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                setData("image", null);
                if (fileInput.current) fileInput.current.value = "";
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Knowledge Hub">
            <Head title="Edit Knowledge Hub" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Knowledge Hub
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

                    {/* CHANGE IMAGE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Change Image
                        </label>
                        <input
                            ref={fileInput}
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.image && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                        {/* NEW IMAGE PREVIEW */}
                        {data.image && (
                            <img
                                src={URL.createObjectURL(data.image)}
                                alt="preview"
                                className="mt-3 h-32 rounded border object-cover"
                            />
                        )}
                    </div>

                    {/* TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title
                        </label>
                        <input
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

                    {/* BOX TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Box Title
                        </label>
                        <input
                            value={data.box_title}
                            onChange={(e) =>
                                setData("box_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc]"
                        />
                        {errors.box_title && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.box_title}
                            </p>
                        )}
                    </div>

                    {/* STATUS */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Active
                        </label>
                        <select
                            value={data.is_active ? "1" : "0"}
                            onChange={(e) =>
                                setData(
                                    "is_active",
                                    e.target.value === "1"
                                )
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
                            href={route("knowledgehub.admin.index")}
                            className="text-gray-700 hover:underline w-full sm:w-auto text-center"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md disabled:opacity-50 w-full sm:w-auto"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
