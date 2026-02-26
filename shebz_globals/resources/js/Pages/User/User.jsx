import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";

export default function User({ users }) {

    const { auth } = usePage().props;
    const currentUser = auth?.user;

    const permissions = currentUser?.permissions || [];
    const role = currentUser?.role || "user";

    //Admin always has full access
    const canManageUsers =
        role === "admin" || permissions.includes("users");

    const deleteUser = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.delete", id));
        }
    };

    return (
        <AuthenticatedLayout header="User Management">
            <Head title="Users" />

            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow border">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Users List
                    </h2>

                    {canManageUsers && (
                        <Link
                            href={route("user.create")}
                            className="px-4 py-2 bg-[#0025cc] text-white rounded-lg hover:opacity-90"
                        >
                            + Add User
                        </Link>
                    )}
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">

                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-3 text-left">S.No</th>
                                <th className="border p-3 text-left">Name</th>
                                <th className="border p-3 text-left">Email</th>
                                <th className="border p-3 text-left">Role</th>
                                <th className="border p-3 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user.id} className="hover:bg-gray-50">

                                        <td className="border p-3">
                                            {index + 1}
                                        </td>

                                        <td className="border p-3">
                                            {user.name}
                                        </td>

                                        <td className="border p-3">
                                            {user.email}
                                        </td>

                                        <td className="border p-3 capitalize">
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-semibold
                                                    ${
                                                        user.role === "admin"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>
                                        </td>

                                        <td className="border p-3 space-x-4">

                                            {canManageUsers ? (
                                                <>
                                                    <Link
                                                        href={route("user.edit", user.id)}
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        onClick={() => deleteUser(user.id)}
                                                        className="text-red-600 hover:underline"
                                                    >
                                                        Delete
                                                    </button>
                                                </>
                                            ) : (
                                                <span className="text-gray-400 text-sm">
                                                    No Access
                                                </span>
                                            )}

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="border p-6 text-center text-gray-500"
                                    >
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
