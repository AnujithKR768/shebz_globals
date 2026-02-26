import React, { useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const fileInput = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        subtitle: "",
        box_title: "",
        image: null,
        is_active: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("knowledgehub.admin.store"), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
                if (fileInput.current) fileInput.current.value = "";
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add Knowledge Hub">
            <Head title="Add Knowledge Hub" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Knowledge Hub
                </h1>

                <form onSubmit={submit} className="space-y-5">
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
                            placeholder="Enter title"
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
                            placeholder="Enter subtitle"
                        />
                    </div>

                    {/* BOX TITLE */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Box Title (What You'll Find)
                        </label>
                        <input
                            value={data.box_title}
                            onChange={(e) =>
                                setData("box_title", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc]"
                            placeholder="What You'll Find"
                        />
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

                        {/* IMAGE PREVIEW */}
                        {data.image && (
                            <img
                                src={URL.createObjectURL(data.image)}
                                alt="preview"
                                className="mt-3 h-32 rounded border object-cover"
                            />
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
                            {processing ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
