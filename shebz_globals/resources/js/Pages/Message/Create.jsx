import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "Founder's Message",
        message: "",
        founder_name: "Shebin Abraham",
        founder_role: "Founder & Global Safety Solution Consultant",
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("founder.admin.store"));
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Add Founder Message">
            <Head title="Add Founder Message" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Add Founder Message
                </h1>

                <form onSubmit={submit} className="space-y-5">
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Founder Name
                        </label>
                        <input
                            value={data.founder_name}
                            onChange={(e) => setData("founder_name", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                        {errors.founder_name && (
                            <p className="text-red-600 text-sm">{errors.founder_name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Founder Role
                        </label>
                        <input
                            value={data.founder_role}
                            onChange={(e) => setData("founder_role", e.target.value)}
                            className="w-full border rounded-md px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            value={data.is_active ? 1 : 0}
                            onChange={(e) => setData("is_active", e.target.value == "1")}
                            className="w-full border rounded-md px-4 py-2"
                        >
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Link
                            href={route("founder.admin.index")}
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
