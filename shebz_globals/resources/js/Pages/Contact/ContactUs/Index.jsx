import React from "react";
import { Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ contents,auth }) {
    const deleteRow = (id) => {
        if (confirm("Delete this record?")) {
            router.delete(route("contact-content.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Contact Us">
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Contact Page Content</h1>

                    <Link
                        href={route("contact-content.create")}
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                        + Create
                    </Link>
                </div>

                <div className="bg-white border rounded-xl shadow overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#0025cc] text-white">
                            <tr>
                                <th className="p-3">S.No</th>
                                <th className="p-3">Page Title</th>
                                <th className="p-3">Right Title</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Website</th>
                                <th className="p-3">WhatsApp</th>
                                <th className="p-3">LinkedIn</th>
                                <th className="p-3">Active</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contents.map((row, index) => (
                                <tr key={row.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-semibold">{index + 1}</td>

                                    <td className="p-3">
                                        <div className="font-semibold text-gray-900">
                                            {row.page_title}
                                        </div>
                                        <div className="text-xs text-gray-500 line-clamp-2">
                                            {row.page_description}
                                        </div>
                                    </td>

                                    <td className="p-3">
                                        <div className="font-semibold text-gray-900">
                                            {row.right_title}
                                        </div>
                                        <div className="text-xs text-gray-500 line-clamp-2">
                                            {row.right_description}
                                        </div>
                                    </td>

                                    <td className="p-3 text-gray-700">{row.email}</td>
                                    <td className="p-3 text-gray-700">{row.website}</td>

                                    <td className="p-3 text-gray-700">
                                        <div className="font-semibold">
                                            {row.whatsapp_number}
                                        </div>
                                        <div className="text-xs text-gray-500 line-clamp-1">
                                            {row.whatsapp_text}
                                        </div>
                                    </td>

                                    <td className="p-3">
                                        {row.linkedin_url ? (
                                            <a
                                                href={row.linkedin_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-700 underline"
                                            >
                                                Open
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">-</span>
                                        )}
                                    </td>

                                    <td className="p-3">
                                        {row.is_active ? (
                                            <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 font-semibold">
                                                ACTIVE
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-700 font-semibold">
                                                INACTIVE
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-3 flex gap-3">
                                        <Link
                                            href={route("contact-content.edit", row.id)}
                                            className="text-blue-700 font-semibold"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => deleteRow(row.id)}
                                            className="text-red-600 font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {contents.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="9"
                                        className="p-4 text-center text-gray-500"
                                    >
                                        No data found.
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
