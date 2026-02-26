import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, hubList = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        knowledge_hub_id: hubList?.length ? hubList[0].id : "",
        text: "",
        position: 1,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("knowledgehubitem.admin.store"), {
            preserveScroll: true,
        });
    };

    const hasHubs = hubList && hubList.length > 0;

    return (
        <AuthenticatedLayout user={auth.user} header="Add Knowledge Hub Item">
            <Head title="Add Knowledge Hub Item" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">

                {/* TITLE */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Knowledge Hub Item
                </h1>

                {!hasHubs && (
                    <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
                        ⚠️ Please create a Knowledge Hub first.
                    </div>
                )}

                <form onSubmit={submit} className="space-y-5">

                    {/* HUB SELECT */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Select Knowledge Hub
                        </label>

                        <select
                            value={data.knowledge_hub_id}
                            onChange={(e) =>
                                setData("knowledge_hub_id", e.target.value)
                            }
                            disabled={!hasHubs}
                            className="w-full border rounded-md px-4 py-2 disabled:bg-gray-100"
                        >
                            {hasHubs ? (
                                hubList.map((hub) => (
                                    <option key={hub.id} value={hub.id}>
                                        {hub.title}
                                    </option>
                                ))
                            ) : (
                                <option value="">No hubs available</option>
                            )}
                        </select>

                        {errors.knowledge_hub_id && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.knowledge_hub_id}
                            </p>
                        )}
                    </div>

                    {/* TEXT */}
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Text
                        </label>

                        <input
                            type="text"
                            value={data.text}
                            onChange={(e) =>
                                setData("text", e.target.value)
                            }
                            className="w-full border rounded-md px-4 py-2"
                            placeholder="Enter item text..."
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
                            href={route("knowledgehubitem.admin.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            type="submit"
                            disabled={processing || !hasHubs}
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
