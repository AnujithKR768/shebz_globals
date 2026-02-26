import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, coachingList }) {
    const { data, setData, post, processing, errors } = useForm({
        coaching_mentorship_id: coachingList?.[0]?.id || "",
        text: "",
        position: 1,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("coachingprogram.admin.store"));
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add Coaching Program">
            <Head title="Add Coaching Program" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Program Include Item
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Select Coaching Section
                        </label>
                        <select
                            value={data.coaching_mentorship_id}
                            onChange={(e) => setData("coaching_mentorship_id", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        >
                            {coachingList.map((coach) => (
                                <option key={coach.id} value={coach.id}>
                                    {coach.title}
                                </option>
                            ))}
                        </select>
                        {errors.coaching_mentorship_id && (
                            <p className="text-red-600 text-sm">{errors.coaching_mentorship_id}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Program Text
                        </label>
                        <input
                            value={data.text}
                            onChange={(e) => setData("text", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.text && <p className="text-red-600 text-sm">{errors.text}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Position
                        </label>
                        <input
                            type="number"
                            value={data.position}
                            onChange={(e) => setData("position", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            value={data.is_active ? 1 : 0}
                            onChange={(e) => setData("is_active", e.target.value === "1")}
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href={route("coachingprogram.admin.index")}
                            className="text-gray-700 hover:underline"
                        >
                            ← Back
                        </Link>

                        <button
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
