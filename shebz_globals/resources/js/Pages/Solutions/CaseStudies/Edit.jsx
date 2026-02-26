import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const { data, setData, post, processing, errors } = useForm({
        text: item.text || "",
        position: item.position ?? 1,
        is_active: item.is_active ? true : false,
        _method: "put", // ✅ required for Laravel
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("casestudy.admin.update", item.id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Case Study">
            <Head title="Edit Case Study" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Case Study
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    {/* TEXT */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Text
                        </label>

                        <textarea
                            rows="4"
                            value={data.text}
                            onChange={(e) =>
                                setData("text", e.target.value)
                            }
                            placeholder="Enter case study text..."
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc] outline-none"
                        />

                        {errors.text && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.text}
                            </p>
                        )}
                    </div>

                    {/* POSITION */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Position
                        </label>

                        <input
                            type="number"
                            min="1"
                            value={data.position}
                            onChange={(e) =>
                                setData(
                                    "position",
                                    e.target.value === ""
                                        ? ""
                                        : Number(e.target.value)
                                )
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc] outline-none"
                        />

                        {errors.position && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.position}
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
                                setData("is_active", e.target.value === "1")
                            }
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#0025cc] outline-none"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href={route("casestudy.admin.index")}
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
