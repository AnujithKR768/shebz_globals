import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ user }) {

    const { data, setData, put, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "user",
        permissions: user.permissions || [],
    });

    const pages = [
        { key: "home", label: "Home" },
        { key: "about", label: "About Us" },
        { key: "services", label: "Services" },
        { key: "solutions", label: "Solutions" },
        { key: "contact", label: "Contact Us" },
        { key: "vision_mission", label: "Vision / Mission / Message" },
        { key: "users", label: "Users Management" },
        { key: "testimonials", label: "Testimonials" },
    ];

    const requests = [
        { key: "contact_list", label: "Contact List" },
        { key: "quote_requests", label: "Quote Requests" },
    ];

    const togglePermission = (key) => {
        if (data.permissions.includes(key)) {
            setData("permissions", data.permissions.filter(p => p !== key));
        } else {
            setData("permissions", [...data.permissions, key]);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("user.update", user.id));
    };

    return (
        <AuthenticatedLayout header="Edit User">
            <Head title="Edit User" />

            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border">
                <form onSubmit={submit} className="space-y-4">

                    <input
                        className="w-full border p-2 rounded"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <input
                        type="email"
                        className="w-full border p-2 rounded"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <select
                        className="w-full border p-2 rounded"
                        value={data.role}
                        onChange={(e) => {
                            const role = e.target.value;
                            setData("role", role);
                            if (role === "admin") {
                                setData("permissions", []);
                            }
                        }}
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>

                    {data.role === "user" && (
                        <div className="border rounded-lg p-4 bg-gray-50">
                            <h3 className="font-semibold mb-3">User Access Control</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {pages.map(item => (
                                    <label key={item.key} className="flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={data.permissions.includes(item.key)}
                                            onChange={() => togglePermission(item.key)}
                                        />
                                        {item.label}
                                    </label>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {requests.map(item => (
                                    <label key={item.key} className="flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={data.permissions.includes(item.key)}
                                            onChange={() => togglePermission(item.key)}
                                        />
                                        {item.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-3">
                        <button
                            disabled={processing}
                            className="bg-[#0025cc] text-white px-4 py-2 rounded-lg"
                        >
                            {processing ? "Updating..." : "Update"}
                        </button>

                        <Link
                            href={route("user.user")}
                            className="px-4 py-2 bg-gray-300 rounded-lg"
                        >
                            Cancel
                        </Link>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
