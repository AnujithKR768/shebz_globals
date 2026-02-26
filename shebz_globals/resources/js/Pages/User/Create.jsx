import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        role: "user",
        permissions: [],
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
        post(route("user.store"));
    };

    return (
        <AuthenticatedLayout header="Add User">
            <Head title="Add User" />

            <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border">
                <form onSubmit={submit} className="space-y-4">

                    {/* Name */}
                    <input
                        required
                        placeholder="Name"
                        className="w-full border p-2 rounded"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

                    {/* Email */}
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                    {/* Password */}
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

                    {/* Role */}
                    <select
                        className="w-full border p-2 rounded"
                        value={data.role}
                        onChange={(e) => {
                            const role = e.target.value;
                            setData("role", role);
                            setData("permissions", []); // Clear permissions
                        }}
                    >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>

                    {/* Permissions */}
                    {data.role === "user" && (
                        <div className="border rounded-lg p-4 bg-gray-50">
                            <h3 className="font-semibold mb-3">User Access Control</h3>

                            <p className="font-semibold text-sm mb-2">Pages Access</p>
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

                            <p className="font-semibold text-sm mb-2">Requests Access</p>
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
                            {processing ? "Saving..." : "Save"}
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
