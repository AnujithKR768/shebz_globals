import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, item }) {
    const { data, setData, put, processing, errors } = useForm({
        title: item.title || "",
        message: item.message || "",
        founder_name: item.founder_name || "",
        founder_role: item.founder_role || "",
        is_active: item.is_active ? true : false,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("founder.admin.update", item.id));
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Edit Founder Message">
            <Head title="Edit Founder Message" />

            <div className="max-w-4xl mx-auto bg-white shadow rounded-md border p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Edit Founder Message
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
                        {errors.title && (
                            <p className="text-red-600 text-sm">{errors.title}</p>
                        )}
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
                            type="submit"
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-6 py-2 rounded-md disabled:opacity-50"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
