import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, items }) {
    const del = (id) => {
        if (confirm("Delete this Founder Message?")) {
            router.delete(route("founder.admin.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Founder Message">
            <Head title="Founder Message" />

            <div className="max-w-7xl mx-auto bg-white shadow rounded-md overflow-hidden border">
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Founder Message List
                    </h1>

                    <Link
                        href={route("founder.admin.create")}
                        className="bg-[#0025cc] text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                        + Add Founder Message
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#0025cc] text-white text-sm">
                                <th className="p-3 text-left">S.No</th>
                                <th className="p-3 text-left">Title</th>
                                <th className="p-3 text-left">Founder</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-center">Edit</th>
                                <th className="p-3 text-center">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.data.map((item, index) => (
                                <tr key={item.id} className="border-b hover:bg-gray-50 text-sm">
                                    <td className="p-3">
                                        {(items.current_page - 1) * items.per_page + index + 1}
                                    </td>

                                    <td className="p-3 font-semibold text-gray-800">
                                        {item.title}
                                    </td>

                                    <td className="p-3 text-gray-700">
                                        {item.founder_name}
                                    </td>

                                    <td className="p-3 text-gray-600">
                                        {item.founder_role || "-"}
                                    </td>

                                    <td className="p-3">
                                        {item.is_active ? (
                                            <span className="text-green-700 font-semibold">Active</span>
                                        ) : (
                                            <span className="text-gray-500">Inactive</span>
                                        )}
                                    </td>

                                    <td className="p-3 text-center">
                                        <Link
                                            href={route("founder.admin.edit", item.id)}
                                            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                        >
                                            Edit
                                        </Link>
                                    </td>

                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => del(item.id)}
                                            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {items.data.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="p-4 text-center text-gray-500">
                                        No Data Found
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
